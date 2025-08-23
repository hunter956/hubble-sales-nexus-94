import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Calendar,
  Filter,
  Download,
  Users,
  DollarSign
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Forecasting = () => {
  const navigate = useNavigate();
  const forecastData = [
    {
      period: "Q1 2024",
      target: 2500000,
      committed: 1800000,
      bestCase: 2200000,
      pipeline: 3200000,
      progress: 72
    },
    {
      period: "Q2 2024",
      target: 2800000,
      committed: 1200000,
      bestCase: 2400000,
      pipeline: 4100000,
      progress: 43
    },
    {
      period: "Q3 2024",
      target: 3000000,
      committed: 800000,
      bestCase: 2100000,
      pipeline: 3800000,
      progress: 27
    },
    {
      period: "Q4 2024",
      target: 3200000,
      committed: 400000,
      bestCase: 1800000,
      pipeline: 4500000,
      progress: 13
    }
  ];

  const salesReps = [
    {
      name: "Sarah Johnson",
      target: 800000,
      committed: 520000,
      pipeline: 980000,
      deals: 12,
      winRate: "68%"
    },
    {
      name: "Mike Davis",
      target: 750000,
      committed: 480000,
      pipeline: 850000,
      deals: 9,
      winRate: "72%"
    },
    {
      name: "Lisa Brown",
      target: 650000,
      committed: 380000,
      pipeline: 720000,
      deals: 8,
      winRate: "61%"
    },
    {
      name: "John Smith",
      target: 600000,
      committed: 420000,
      pipeline: 650000,
      deals: 10,
      winRate: "58%"
    }
  ];

  const topOpportunities = [
    {
      name: "Enterprise CRM Implementation",
      account: "TechCorp Global",
      value: 450000,
      probability: 85,
      stage: "Negotiation",
      closeDate: "2024-03-15",
      owner: "Sarah Johnson"
    },
    {
      name: "Marketing Automation Suite",
      account: "Innovate Solutions",
      value: 320000,
      probability: 70,
      stage: "Proposal",
      closeDate: "2024-03-22",
      owner: "Mike Davis"
    },
    {
      name: "Sales Analytics Platform",
      account: "Growth Dynamics",
      value: 280000,
      probability: 60,
      stage: "Demo",
      closeDate: "2024-04-10",
      owner: "Lisa Brown"
    },
    {
      name: "Customer Success Tools",
      account: "ServiceFirst Inc",
      value: 195000,
      probability: 75,
      stage: "Qualification",
      closeDate: "2024-04-05",
      owner: "John Smith"
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStageColor = (stage: string) => {
    const colors: Record<string, string> = {
      "Qualification": "bg-blue-100 text-blue-800",
      "Demo": "bg-yellow-100 text-yellow-800",
      "Proposal": "bg-orange-100 text-orange-800",
      "Negotiation": "bg-green-100 text-green-800"
    };
    return colors[stage] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Sales Forecasting</h1>
          <p className="text-muted-foreground">Track and predict your sales performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/filter')}>
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" onClick={() => navigate('/export-report')}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Forecast Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Quarter Target</p>
                <p className="text-2xl font-bold">{formatCurrency(2500000)}</p>
              </div>
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-sm text-green-600">↗ 8% vs last quarter</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Committed</p>
                <p className="text-2xl font-bold">{formatCurrency(1800000)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-sm text-green-600">72% of target</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Best Case</p>
                <p className="text-2xl font-bold">{formatCurrency(2200000)}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-sm text-orange-600">88% of target</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Pipeline</p>
                <p className="text-2xl font-bold">{formatCurrency(3200000)}</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-sm text-purple-600">128% of target</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quarterly Forecast */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Quarterly Forecast</CardTitle>
                <CardDescription>Revenue projections by quarter</CardDescription>
              </div>
              <Select defaultValue="2024">
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {forecastData.map((quarter, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold">{quarter.period}</h4>
                      <Badge variant="outline">
                        {quarter.progress}% Complete
                      </Badge>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      Target: {formatCurrency(quarter.target)}
                    </div>
                  </div>

                  <div className="grid gap-4 grid-cols-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Committed</p>
                      <p className="font-semibold text-green-600">{formatCurrency(quarter.committed)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Best Case</p>
                      <p className="font-semibold text-orange-600">{formatCurrency(quarter.bestCase)}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Pipeline</p>
                      <p className="font-semibold text-purple-600">{formatCurrency(quarter.pipeline)}</p>
                    </div>
                  </div>

                  <Progress value={quarter.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sales Rep Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Rep Performance</CardTitle>
            <CardDescription>Individual sales rep forecasts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salesReps.map((rep, index) => (
                <div key={index} className="border rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{rep.name}</h4>
                    <Badge variant="secondary">{rep.winRate}</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Target:</span>
                      <span>{formatCurrency(rep.target)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Committed:</span>
                      <span className="text-green-600">{formatCurrency(rep.committed)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Pipeline:</span>
                      <span className="text-purple-600">{formatCurrency(rep.pipeline)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Active Deals:</span>
                      <span>{rep.deals}</span>
                    </div>
                  </div>
                  <Progress 
                    value={(rep.committed / rep.target) * 100} 
                    className="h-1 mt-2" 
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle>Key Opportunities This Quarter</CardTitle>
          <CardDescription>High-value deals most likely to close</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topOpportunities.map((opp, index) => (
              <div key={index} className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium">{opp.name}</h4>
                    <Badge className={getStageColor(opp.stage)}>{opp.stage}</Badge>
                  </div>
                  <div className="grid gap-2 grid-cols-2 md:grid-cols-4 text-sm text-muted-foreground">
                    <div>Account: {opp.account}</div>
                    <div>Value: {formatCurrency(opp.value)}</div>
                    <div>Close: {opp.closeDate}</div>
                    <div>Owner: {opp.owner}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">{opp.probability}%</div>
                  <div className="text-sm text-muted-foreground">Win Probability</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Forecasting;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { 
  Trophy, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Filter,
  Download,
  Search,
  Users,
  Target,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WonDeals = () => {
  const navigate = useNavigate();
  const summaryStats = [
    {
      title: "Total Won Deals",
      value: "147",
      change: "+23.5%",
      trend: "up",
      icon: Trophy,
      description: "This year"
    },
    {
      title: "Revenue Generated",
      value: "$4.2M",
      change: "+18.7%",
      trend: "up",
      icon: DollarSign,
      description: "Total value"
    },
    {
      title: "Average Deal Size",
      value: "$28,571",
      change: "-4.2%",
      trend: "down",
      icon: Target,
      description: "Per deal"
    },
    {
      title: "Win Rate",
      value: "34.8%",
      change: "+2.1%",
      trend: "up",
      icon: Award,
      description: "Conversion rate"
    }
  ];

  const topPerformers = [
    { name: "Sarah Johnson", deals: 28, revenue: 945000, avgDeal: 33750 },
    { name: "Mike Davis", deals: 24, revenue: 856000, avgDeal: 35667 },
    { name: "Lisa Brown", deals: 22, revenue: 723000, avgDeal: 32864 },
    { name: "John Smith", deals: 19, revenue: 678000, avgDeal: 35684 },
    { name: "Emily Wilson", deals: 16, revenue: 592000, avgDeal: 37000 }
  ];

  const wonDeals = [
    {
      name: "Enterprise CRM Implementation",
      account: "TechCorp Global",
      value: 485000,
      closeDate: "2024-03-15",
      owner: "Sarah Johnson",
      duration: "4 months",
      source: "Referral",
      probability: 100
    },
    {
      name: "Marketing Automation Suite",
      account: "Innovate Solutions",
      value: 325000,
      closeDate: "2024-03-12",
      owner: "Mike Davis",
      duration: "3 months",
      source: "Website",
      probability: 100
    },
    {
      name: "Sales Analytics Platform",
      account: "Growth Dynamics",
      value: 280000,
      closeDate: "2024-03-10",
      owner: "Lisa Brown",
      duration: "5 months",
      source: "LinkedIn",
      probability: 100
    },
    {
      name: "Customer Success Tools",
      account: "ServiceFirst Inc",
      value: 195000,
      closeDate: "2024-03-08",
      owner: "John Smith",
      duration: "2 months",
      source: "Cold Call",
      probability: 100
    },
    {
      name: "Integration Platform",
      account: "ConnectAll Corp",
      value: 175000,
      closeDate: "2024-03-05",
      owner: "Emily Wilson",
      duration: "3 months",
      source: "Trade Show",
      probability: 100
    },
    {
      name: "Data Management System",
      account: "InfoTech Ltd",
      value: 145000,
      closeDate: "2024-03-03",
      owner: "Sarah Johnson",
      duration: "6 months",
      source: "Referral",
      probability: 100
    },
    {
      name: "Mobile App Solution",
      account: "AppCraft Studio",
      value: 125000,
      closeDate: "2024-03-01",
      owner: "Mike Davis",
      duration: "4 months",
      source: "Website",
      probability: 100
    },
    {
      name: "Cloud Migration Service",
      account: "CloudFirst Inc",
      value: 95000,
      closeDate: "2024-02-28",
      owner: "Lisa Brown",
      duration: "2 months",
      source: "LinkedIn",
      probability: 100
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

  const getSourceColor = (source: string) => {
    const colors: Record<string, string> = {
      "Website": "bg-blue-100 text-blue-800",
      "Referral": "bg-green-100 text-green-800",
      "LinkedIn": "bg-purple-100 text-purple-800",
      "Cold Call": "bg-orange-100 text-orange-800",
      "Trade Show": "bg-pink-100 text-pink-800"
    };
    return colors[source] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Won Deals</h1>
          <p className="text-muted-foreground">Celebrate your closed-won opportunities</p>
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

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {summaryStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-lg ${stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <stat.icon className={`h-5 w-5 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
                <span className="text-sm text-muted-foreground ml-1">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Top Performers */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Top Performers</CardTitle>
            </div>
            <CardDescription>Sales reps with most won deals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-yellow-100 text-yellow-800' :
                      index === 1 ? 'bg-gray-100 text-gray-800' :
                      index === 2 ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium">{performer.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {performer.deals} deals • {formatCurrency(performer.revenue)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{formatCurrency(performer.avgDeal)}</div>
                    <div className="text-xs text-muted-foreground">Avg deal</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Deal Filters</CardTitle>
            <CardDescription>Filter and search your won deals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium">Search Deals</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search by name, account..." className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Time Period</label>
                <Select defaultValue="this-year">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="this-quarter">This Quarter</SelectItem>
                    <SelectItem value="this-year">This Year</SelectItem>
                    <SelectItem value="last-quarter">Last Quarter</SelectItem>
                    <SelectItem value="last-year">Last Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Deal Owner</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All owners" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Owners</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="mike">Mike Davis</SelectItem>
                    <SelectItem value="lisa">Lisa Brown</SelectItem>
                    <SelectItem value="john">John Smith</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Won Deals Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Won Deals</CardTitle>
          <CardDescription>Your latest closed-won opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {wonDeals.map((deal, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-lg">{deal.name}</h4>
                    <p className="text-sm text-muted-foreground">{deal.account}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-green-600">{formatCurrency(deal.value)}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {deal.closeDate}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 grid-cols-2 md:grid-cols-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Owner:</span>
                    <div className="font-medium">{deal.owner}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Duration:</span>
                    <div className="font-medium">{deal.duration}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Source:</span>
                    <Badge className={getSourceColor(deal.source)} variant="secondary">
                      {deal.source}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-yellow-600" />
                    <span className="font-medium text-green-600">Won</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WonDeals;
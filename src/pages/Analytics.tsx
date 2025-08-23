import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Target, 
  DollarSign, 
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  PieChart,
  LineChart
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();
  const performanceMetrics = [
    {
      title: "Revenue Growth",
      value: "15.3%",
      change: "+2.4%",
      trend: "up",
      period: "vs last quarter",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Lead Conversion",
      value: "24.8%",
      change: "-1.2%",
      trend: "down", 
      period: "vs last month",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "Customer Acquisition",
      value: "47",
      change: "+12%",
      trend: "up",
      period: "new customers",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Sales Cycle",
      value: "45 days",
      change: "-3 days",
      trend: "up",
      period: "average length",
      icon: Calendar,
      color: "text-orange-600"
    }
  ];

  const salesBySource = [
    { source: "Website", value: 35, amount: "$420K", color: "bg-blue-500" },
    { source: "Referrals", value: 28, amount: "$336K", color: "bg-green-500" },
    { source: "Social Media", value: 15, amount: "$180K", color: "bg-purple-500" },
    { source: "Email", value: 12, amount: "$144K", color: "bg-yellow-500" },
    { source: "Cold Calls", value: 10, amount: "$120K", color: "bg-red-500" }
  ];

  const topPerformers = [
    { name: "Sarah Johnson", deals: 24, revenue: "$1.2M", conversion: "28%" },
    { name: "Mike Chen", deals: 18, revenue: "$890K", conversion: "25%" },
    { name: "Emily Davis", deals: 15, revenue: "$750K", conversion: "22%" },
    { name: "Robert Wilson", deals: 12, revenue: "$580K", conversion: "20%" }
  ];

  const pipelineHealth = [
    { stage: "Prospecting", count: 45, value: "$675K", health: "good" },
    { stage: "Qualification", count: 32, value: "$480K", health: "excellent" },
    { stage: "Proposal", count: 18, value: "$270K", health: "good" },
    { stage: "Negotiation", count: 8, value: "$120K", health: "attention" },
    { stage: "Closing", count: 5, value: "$75K", health: "good" }
  ];

  const getHealthColor = (health: string) => {
    switch (health) {
      case "excellent": return "bg-green-100 text-green-800";
      case "good": return "bg-blue-100 text-blue-800";
      case "attention": return "bg-yellow-100 text-yellow-800";
      case "poor": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Deep insights into your sales performance and trends</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/export-report')}>Export Report</Button>
          <Button onClick={() => navigate('/customize-view')}>Customize View</Button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        {performanceMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center text-xs">
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-success mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-destructive mr-1" />
                )}
                <span className={metric.trend === "up" ? "text-success" : "text-destructive"}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground ml-1">{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Sales by Source */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Sales by Source
            </CardTitle>
            <CardDescription>Revenue breakdown by lead source</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salesBySource.map((source, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{source.source}</span>
                    <div className="flex items-center gap-2">
                      <span>{source.value}%</span>
                      <span className="text-muted-foreground">{source.amount}</span>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${source.color}`}
                      style={{ width: `${source.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pipeline Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Pipeline Health
            </CardTitle>
            <CardDescription>Current status of your sales pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pipelineHealth.map((stage, index) => (
                <div key={index} className="flex items-center justify-between border rounded-lg p-3">
                  <div>
                    <p className="font-medium">{stage.stage}</p>
                    <p className="text-sm text-muted-foreground">{stage.count} opportunities</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{stage.value}</p>
                    <Badge className={getHealthColor(stage.health)} variant="secondary">
                      {stage.health}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Top Performers
            </CardTitle>
            <CardDescription>Your highest performing sales team members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between border rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{performer.name}</p>
                      <p className="text-sm text-muted-foreground">{performer.deals} deals closed</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{performer.revenue}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">Conversion:</span>
                      <Badge variant="outline">{performer.conversion}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="h-5 w-5" />
            Monthly Trends
          </CardTitle>
          <CardDescription>Key metrics over the past 12 months</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <LineChart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive chart visualization would appear here</p>
              <p className="text-sm text-muted-foreground">Showing revenue, leads, and conversion trends</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
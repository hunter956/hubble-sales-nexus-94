import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Calendar,
  Filter,
  Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();
  const reportCategories = [
    {
      title: "Sales Reports",
      description: "Revenue, deals, and sales performance",
      reports: [
        { name: "Monthly Sales Summary", lastRun: "Aug 15, 2024", type: "scheduled" },
        { name: "Pipeline Analysis", lastRun: "Aug 14, 2024", type: "manual" },
        { name: "Win/Loss Report", lastRun: "Aug 12, 2024", type: "scheduled" }
      ],
      icon: BarChart3,
      color: "bg-blue-500"
    },
    {
      title: "Lead Reports", 
      description: "Lead generation and conversion metrics",
      reports: [
        { name: "Lead Source Analysis", lastRun: "Aug 15, 2024", type: "scheduled" },
        { name: "Conversion Funnel", lastRun: "Aug 13, 2024", type: "manual" },
        { name: "Lead Quality Score", lastRun: "Aug 11, 2024", type: "scheduled" }
      ],
      icon: TrendingUp,
      color: "bg-green-500"
    },
    {
      title: "Activity Reports",
      description: "Team activity and performance tracking", 
      reports: [
        { name: "Call Activity Summary", lastRun: "Aug 14, 2024", type: "scheduled" },
        { name: "Email Campaign Results", lastRun: "Aug 13, 2024", type: "manual" },
        { name: "Meeting Outcomes", lastRun: "Aug 10, 2024", type: "scheduled" }
      ],
      icon: Calendar,
      color: "bg-purple-500"
    },
    {
      title: "Custom Reports",
      description: "Build your own custom reports",
      reports: [
        { name: "Q3 Executive Dashboard", lastRun: "Aug 12, 2024", type: "custom" },
        { name: "Territory Performance", lastRun: "Aug 09, 2024", type: "custom" },
        { name: "Customer Health Score", lastRun: "Aug 08, 2024", type: "custom" }
      ],
      icon: PieChart,
      color: "bg-orange-500"
    }
  ];

  const keyMetrics = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+15.3%",
      trend: "up",
      period: "This Quarter"
    },
    {
      title: "Conversion Rate",
      value: "24.8%",
      change: "-2.1%", 
      trend: "down",
      period: "This Month"
    },
    {
      title: "Average Deal Size",
      value: "$47K",
      change: "+8.7%",
      trend: "up", 
      period: "This Quarter"
    },
    {
      title: "Sales Cycle Length",
      value: "45 days",
      change: "-5.2%",
      trend: "up",
      period: "This Quarter"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "scheduled": return "bg-green-100 text-green-800";
      case "manual": return "bg-blue-100 text-blue-800";
      case "custom": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">View insights and generate reports from your CRM data</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/filter')}>
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button onClick={() => navigate('/create-report')}>
            <Plus className="h-4 w-4 mr-2" />
            Create Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Metrics</CardTitle>
          <CardDescription>Overview of your most important business metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {keyMetrics.map((metric, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-success" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive" />
                  )}
                </div>
                <div className="mt-2 space-y-1">
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <div className="flex items-center text-sm">
                    <span className={metric.trend === "up" ? "text-success" : "text-destructive"}>
                      {metric.change}
                    </span>
                    <span className="text-muted-foreground ml-1">{metric.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Report Categories */}
      <div className="grid gap-6 md:grid-cols-2">
        {reportCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${category.color}`}>
                  <category.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {category.reports.map((report, reportIndex) => (
                  <div key={reportIndex} className="flex items-center justify-between border rounded-lg p-3">
                    <div>
                      <h4 className="font-medium text-sm">{report.name}</h4>
                      <p className="text-xs text-muted-foreground">Last run: {report.lastRun}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getTypeColor(report.type)} variant="secondary">
                        {report.type}
                      </Badge>
                      <Button size="sm" variant="ghost">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t">
                <Button variant="outline" size="sm" className="w-full">
                  View All {category.title}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recently Generated Reports</CardTitle>
          <CardDescription>Your latest report exports and scheduled runs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Q3 Sales Performance", type: "Sales Report", generated: "Aug 15, 2024 10:30 AM", size: "2.4 MB", format: "PDF" },
              { name: "Lead Conversion Analysis", type: "Lead Report", generated: "Aug 14, 2024 3:15 PM", size: "1.8 MB", format: "Excel" },
              { name: "Team Activity Summary", type: "Activity Report", generated: "Aug 14, 2024 9:00 AM", size: "756 KB", format: "PDF" },
              { name: "Custom Pipeline Report", type: "Custom Report", generated: "Aug 13, 2024 4:45 PM", size: "3.1 MB", format: "Excel" }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">{report.name}</h4>
                    <p className="text-sm text-muted-foreground">{report.type} • {report.generated}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right text-sm">
                    <p className="font-medium">{report.format}</p>
                    <p className="text-muted-foreground">{report.size}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
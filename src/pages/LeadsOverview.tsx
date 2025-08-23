import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  TrendingDown, 
  Target, 
  Calendar,
  Filter,
  Download,
  Plus,
  BarChart3
} from "lucide-react";

const LeadsOverview = () => {
  const overviewStats = [
    {
      title: "Total Leads",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "All leads in system"
    },
    {
      title: "New This Month",
      value: "324",
      change: "+8.2%",
      trend: "up",
      icon: TrendingUp,
      description: "New leads added"
    },
    {
      title: "Conversion Rate",
      value: "24.8%",
      change: "-2.1%",
      trend: "down",
      icon: Target,
      description: "Lead to customer"
    },
    {
      title: "Average Value",
      value: "$4,250",
      change: "+15.3%",
      trend: "up",
      icon: BarChart3,
      description: "Per converted lead"
    }
  ];

  const leadsByStatus = [
    { status: "New", count: 156, percentage: 35, color: "bg-blue-500" },
    { status: "Contacted", count: 89, percentage: 20, color: "bg-yellow-500" },
    { status: "Qualified", count: 124, percentage: 28, color: "bg-green-500" },
    { status: "Unqualified", count: 73, percentage: 17, color: "bg-red-500" }
  ];

  const leadsBySources = [
    { source: "Website", count: 489, percentage: 45 },
    { source: "Referrals", count: 234, percentage: 22 },
    { source: "LinkedIn", count: 178, percentage: 16 },
    { source: "Cold Calls", count: 123, percentage: 11 },
    { source: "Trade Shows", count: 67, percentage: 6 }
  ];

  const topPerformers = [
    { name: "Sarah Johnson", leads: 45, converted: 12, rate: "26.7%" },
    { name: "Mike Davis", leads: 38, converted: 9, rate: "23.7%" },
    { name: "Lisa Brown", leads: 42, converted: 8, rate: "19.0%" },
    { name: "John Smith", leads: 35, converted: 6, rate: "17.1%" }
  ];

  const recentActivities = [
    { type: "New Lead", description: "Emma Wilson from TechCorp added", time: "5 min ago", status: "new" },
    { type: "Status Change", description: "David Chen moved to Qualified", time: "12 min ago", status: "qualified" },
    { type: "Call Completed", description: "Follow-up call with Maria Garcia", time: "25 min ago", status: "contacted" },
    { type: "Email Sent", description: "Welcome email sent to James Wilson", time: "1 hour ago", status: "contacted" },
    { type: "Lead Converted", description: "Alice Cooper became a customer", time: "2 hours ago", status: "converted" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Leads Overview</h1>
          <p className="text-muted-foreground">Comprehensive view of your lead management performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        {overviewStats.map((stat, index) => (
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

      <div className="grid gap-6 md:grid-cols-2">
        {/* Leads by Status */}
        <Card>
          <CardHeader>
            <CardTitle>Leads by Status</CardTitle>
            <CardDescription>Distribution of leads across different stages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leadsByStatus.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="font-medium">{item.status}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{item.count}</span>
                      <Badge variant="secondary">{item.percentage}%</Badge>
                    </div>
                  </div>
                  <Progress value={item.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Leads by Source */}
        <Card>
          <CardHeader>
            <CardTitle>Lead Sources</CardTitle>
            <CardDescription>Where your leads are coming from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leadsBySources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-sm font-medium">{source.source}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-sm text-muted-foreground">{source.count}</div>
                    <div className="w-16">
                      <Progress value={source.percentage} className="h-2" />
                    </div>
                    <Badge variant="outline" className="text-xs">{source.percentage}%</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Top Performers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
            <CardDescription>Team members with highest conversion rates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                  <div>
                    <div className="font-medium">{performer.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {performer.leads} leads • {performer.converted} converted
                    </div>
                  </div>
                  <Badge variant="secondary">{performer.rate}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest lead management activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'new' ? 'bg-blue-500' :
                    activity.status === 'qualified' ? 'bg-green-500' :
                    activity.status === 'contacted' ? 'bg-yellow-500' :
                    activity.status === 'converted' ? 'bg-purple-500' : 'bg-gray-500'
                  }`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-sm">{activity.type}</span>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common lead management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button variant="outline" className="h-20 flex-col">
              <Plus className="h-6 w-6 mb-2" />
              Add New Lead
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Download className="h-6 w-6 mb-2" />
              Import Leads
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Filter className="h-6 w-6 mb-2" />
              Create Filter
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <Calendar className="h-6 w-6 mb-2" />
              Schedule Calls
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadsOverview;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  ChevronRight,
  Phone,
  Mail
} from "lucide-react";
import dashboardImage from "@/assets/dashboard-analytics.jpg";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const quickActions = [
    { title: "Add Lead", description: "Create a new lead record", href: "/leads/add", icon: Users, color: "bg-blue-500" },
    { title: "New Opportunity", description: "Add an opportunity", href: "/opportunities/add", icon: Target, color: "bg-green-500" },
    { title: "Schedule Call", description: "Schedule a new call", href: "/activities/calls", icon: Phone, color: "bg-purple-500" },
    { title: "Send Email", description: "Compose new email", href: "/activities/emails", icon: Mail, color: "bg-orange-500" }
  ];

  const metrics = [
    {
      title: "Total Leads",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "bg-blue-600"
    },
    {
      title: "Opportunities",
      value: "567",
      change: "+8.2%", 
      trend: "up",
      icon: Target,
      color: "bg-emerald-600"
    },
    {
      title: "Revenue",
      value: "$1.2M",
      change: "+15.3%",
      trend: "up", 
      icon: DollarSign,
      color: "bg-green-600"
    },
    {
      title: "Conversion Rate",
      value: "24.8%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      color: "bg-indigo-600"
    }
  ];

  const recentLeads = [
    { name: "Sarah Johnson", company: "TechCorp Inc", value: "$45,000", status: "Hot", initials: "SJ" },
    { name: "Michael Chen", company: "StartupXYZ", value: "$23,000", status: "Warm", initials: "MC" },
    { name: "Emily Davis", company: "Global Solutions", value: "$67,000", status: "Hot", initials: "ED" },
    { name: "Robert Wilson", company: "InnovateCo", value: "$34,000", status: "Cold", initials: "RW" },
  ];

  const recentDeals = [
    { name: "Enterprise Package - ABC Corp", value: "$125,000", stage: "Negotiation", probability: 80 },
    { name: "Software License - TechStart", value: "$45,000", stage: "Proposal", probability: 60 },
    { name: "Consulting Services - MegaCorp", value: "$78,000", stage: "Demo", probability: 45 },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      Hot: "bg-red-100 text-red-700 border-red-200",
      Warm: "bg-orange-100 text-orange-700 border-orange-200", 
      Cold: "bg-blue-100 text-blue-700 border-blue-200"
    };
    return variants[status as keyof typeof variants] || variants.Cold;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, John! Here's what's happening with your business.</p>
        </div>
        <Button className="btn-primary shadow-sm" onClick={() => navigate('/quick-add')}>
          <Plus className="h-4 w-4 mr-2" />
          Quick Add
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.title} className="card-enhanced">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
              <div className={cn("p-2 rounded-lg", metric.color)}>
                <metric.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="flex items-center text-sm">
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
                )}
                <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>
                  {metric.change}
                </span>
                <span className="text-gray-500 ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {/* Analytics Chart */}
        <Card className="card-enhanced lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-gray-900">Sales Analytics</CardTitle>
            <CardDescription>Monthly performance overview and trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center overflow-hidden border border-blue-100">
              <img 
                src={dashboardImage} 
                alt="Sales Analytics Chart" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </CardContent>
        </Card>

        {/* Recent Leads */}
        <Card className="card-enhanced">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-gray-900">Recent Leads</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                View all <ChevronRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
            <CardDescription>Latest prospects added to your pipeline</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentLeads.map((lead, index) => (
                <div key={index} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white text-xs font-medium flex items-center justify-center">
                      {lead.initials}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{lead.name}</p>
                      <p className="text-xs text-gray-500">{lead.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 text-sm">{lead.value}</p>
                    <Badge className={cn("text-xs border", getStatusBadge(lead.status))}>
                      {lead.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="card-enhanced">
        <CardHeader>
          <CardTitle className="text-gray-900">Quick Actions</CardTitle>
          <CardDescription>Frequently used actions to speed up your workflow</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer group"
                onClick={() => navigate(action.href)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${action.color} group-hover:scale-105 transition-transform`}>
                    <action.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{action.title}</h4>
                    <p className="text-xs text-gray-500">{action.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Deals */}
      <Card className="card-enhanced">
        <CardHeader>
          <CardTitle className="text-gray-900">Active Opportunities</CardTitle>
          <CardDescription>Your highest priority deals in the pipeline</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentDeals.map((deal, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-gray-900">{deal.name}</h4>
                  <span className="font-bold text-lg text-gray-900">{deal.value}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                    {deal.stage}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${deal.probability}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600">{deal.probability}%</span>
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

export default Dashboard;
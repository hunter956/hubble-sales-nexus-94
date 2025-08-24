import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Users, 
  Target, 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  Phone,
  Mail,
  Calendar,
  Zap,
  BarChart3,
  Activity,
  Clock,
  Star,
  Building,
  CheckCircle2,
  AlertTriangle,
  MessageSquare,
  UserPlus,
  FileText,
  Briefcase
} from "lucide-react";
import dashboardImage from "@/assets/dashboard-analytics.jpg";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  
  const quickActions = [
    { 
      title: "Add Lead", 
      description: "Create new prospect", 
      href: "/leads/add", 
      icon: UserPlus, 
      color: "from-blue-500 to-blue-600",
      gradient: true
    },
    { 
      title: "New Opportunity", 
      description: "Track new deal", 
      href: "/opportunities/add", 
      icon: Target, 
      color: "from-emerald-500 to-emerald-600",
      gradient: true
    },
    { 
      title: "Schedule Call", 
      description: "Book a meeting", 
      href: "/activities/calls", 
      icon: Phone, 
      color: "from-purple-500 to-purple-600",
      gradient: true
    },
    { 
      title: "Send Email", 
      description: "Reach out now", 
      href: "/activities/emails", 
      icon: Mail, 
      color: "from-orange-500 to-orange-600",
      gradient: true
    },
    { 
      title: "Add Contact", 
      description: "New connection", 
      href: "/customers/contacts/add", 
      icon: Users, 
      color: "from-cyan-500 to-cyan-600",
      gradient: true
    },
    { 
      title: "Create Report", 
      description: "Generate insights", 
      href: "/create-report", 
      icon: FileText, 
      color: "from-pink-500 to-pink-600",
      gradient: true
    }
  ];

  const metrics = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+18.2%",
      trend: "up",
      icon: DollarSign,
      description: "This quarter",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      title: "Active Leads",
      value: "3,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "In pipeline",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Opportunities",
      value: "567",
      change: "+8.2%", 
      trend: "up",
      icon: Target,
      description: "Open deals",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Conversion Rate",
      value: "24.8%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      description: "Lead to customer",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  const recentActivities = [
    { 
      type: "call", 
      title: "Call with TechCorp CEO", 
      time: "2 hours ago", 
      status: "completed",
      contact: "John Smith"
    },
    { 
      type: "email", 
      title: "Proposal sent to StartupXYZ", 
      time: "4 hours ago", 
      status: "pending",
      contact: "Jane Doe"
    },
    { 
      type: "meeting", 
      title: "Demo scheduled", 
      time: "6 hours ago", 
      status: "upcoming",
      contact: "Mike Johnson"
    },
    { 
      type: "deal", 
      title: "Deal closed - $45K", 
      time: "1 day ago", 
      status: "won",
      contact: "Sarah Wilson"
    }
  ];

  const upcomingTasks = [
    { 
      title: "Follow up with Global Solutions", 
      time: "Today 2:00 PM", 
      priority: "high",
      type: "call"
    },
    { 
      title: "Send proposal to InnovateCo", 
      time: "Tomorrow 9:00 AM", 
      priority: "medium",
      type: "email"
    },
    { 
      title: "Product demo presentation", 
      time: "Tomorrow 3:00 PM", 
      priority: "high",
      type: "meeting"
    },
    { 
      title: "Weekly sales report", 
      time: "Friday 5:00 PM", 
      priority: "low",
      type: "task"
    }
  ];

  const topDeals = [
    { 
      company: "Enterprise Corp", 
      value: "$125,000", 
      stage: "Negotiation", 
      probability: 85,
      closeDate: "This week"
    },
    { 
      company: "TechStart Inc", 
      value: "$78,000", 
      stage: "Proposal", 
      probability: 65,
      closeDate: "Next week"
    },
    { 
      company: "Global Dynamics", 
      value: "$156,000", 
      stage: "Demo", 
      probability: 45,
      closeDate: "This month"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "call": return Phone;
      case "email": return Mail;
      case "meeting": return Calendar;
      case "deal": return DollarSign;
      default: return Activity;
    }
  };

  const getActivityColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600 bg-green-50";
      case "pending": return "text-yellow-600 bg-yellow-50";
      case "upcoming": return "text-blue-600 bg-blue-50";
      case "won": return "text-emerald-600 bg-emerald-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-red-200 bg-red-50";
      case "medium": return "border-yellow-200 bg-yellow-50";
      case "low": return "border-green-200 bg-green-50";
      default: return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <div className="space-y-8 p-1">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-primary/80 p-8 text-white">
        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome back, John! 👋</h1>
              <p className="text-lg text-white/90 mb-6">Here's what's happening with your business today</p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>8 deals closed this week</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  <span>Top performer this month</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Revenue up 18.2%</span>
                </div>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-lg"
              onClick={() => navigate('/quick-add')}
            >
              <Plus className="h-5 w-5 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={metric.title} className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={cn("p-3 rounded-xl", metric.bgColor)}>
                  <metric.icon className={cn("h-6 w-6", metric.iconColor)} />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {metric.description}
                </Badge>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">{metric.title}</h3>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-bold">{metric.value}</span>
                  <div className="flex items-center gap-1 text-sm">
                    {metric.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-600" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red-600" />
                    )}
                    <span className={metric.trend === "up" ? "text-green-600" : "text-red-600"}>
                      {metric.change}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Main Analytics Section */}
        <div className="lg:col-span-8 space-y-6">
          {/* Analytics Chart */}
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Revenue Analytics</CardTitle>
                  <CardDescription>Monthly performance and forecasting</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Range
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl flex items-center justify-center overflow-hidden border border-blue-100/50">
                <img 
                  src={dashboardImage} 
                  alt="Revenue Analytics Dashboard" 
                  className="w-full h-full object-cover rounded-xl opacity-90"
                />
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions Grid */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Quick Actions
              </CardTitle>
              <CardDescription>Frequently used actions to accelerate your workflow</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all cursor-pointer"
                    onClick={() => navigate(action.href)}
                  >
                    {action.gradient ? (
                      <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    ) : (
                      <div className={`absolute inset-0 ${action.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    )}
                    <div className="relative p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={cn(
                          "p-2 rounded-lg group-hover:scale-105 transition-transform",
                          action.gradient ? `bg-gradient-to-br ${action.color}` : action.color
                        )}>
                          <action.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{action.title}</h4>
                          <p className="text-xs text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Recent Activities */}
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Recent Activities
              </CardTitle>
              <CardDescription>Latest team actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const IconComponent = getActivityIcon(activity.type);
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className={cn("p-2 rounded-lg", getActivityColor(activity.status))}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.contact}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Upcoming Tasks
              </CardTitle>
              <CardDescription>What's on your agenda</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className={cn("p-3 rounded-lg border", getPriorityColor(task.priority))}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{task.title}</p>
                        <p className="text-xs text-muted-foreground">{task.time}</p>
                      </div>
                      <Badge 
                        className={cn(
                          "text-xs",
                          task.priority === "high" ? "bg-red-100 text-red-700" :
                          task.priority === "medium" ? "bg-yellow-100 text-yellow-700" :
                          "bg-green-100 text-green-700"
                        )}
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Deals */}
          <Card className="border-0 shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Priority Deals
              </CardTitle>
              <CardDescription>Deals requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topDeals.map((deal, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-medium text-sm">{deal.company}</h4>
                        <p className="text-xs text-muted-foreground">{deal.closeDate}</p>
                      </div>
                      <span className="font-bold text-lg">{deal.value}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{deal.stage}</span>
                        <span className="font-medium">{deal.probability}%</span>
                      </div>
                      <Progress value={deal.probability} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
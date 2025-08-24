import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  AlertCircle, 
  Clock, 
  CheckCircle, 
  Search, 
  Filter,
  Plus,
  ArrowLeft,
  MoreHorizontal,
  MessageSquare,
  Calendar,
  User
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const OpenTickets = () => {
  const navigate = useNavigate();
  
  const openTickets = [
    {
      id: "T-001",
      title: "Login Issues with Mobile App",
      customer: "TechCorp Inc",
      customerEmail: "support@techcorp.com",
      assignee: "Sarah Johnson",
      priority: "High",
      status: "Open",
      created: "2024-08-15 09:30",
      updated: "2024-08-15 14:22",
      category: "Technical",
      responseTime: "2h 15m",
      isOverdue: false,
      unreadMessages: 3
    },
    {
      id: "T-004",
      title: "Feature Request: Custom Reports Dashboard",
      customer: "InnovateCo",
      customerEmail: "requests@innovateco.com",
      assignee: "Robert Wilson", 
      priority: "Low",
      status: "Open",
      created: "2024-08-12 11:45",
      updated: "2024-08-13 16:30",
      category: "Feature Request",
      responseTime: "1d 4h",
      isOverdue: true,
      unreadMessages: 1
    },
    {
      id: "T-007",
      title: "API Rate Limiting Documentation",
      customer: "DevStartup LLC",
      customerEmail: "dev@devstartup.com",
      assignee: "Mike Chen",
      priority: "Medium",
      status: "Open",
      created: "2024-08-14 16:20",
      updated: "2024-08-15 10:15",
      category: "Integration",
      responseTime: "18h 55m",
      isOverdue: false,
      unreadMessages: 0
    },
    {
      id: "T-009",
      title: "Billing Discrepancy - August Invoice",
      customer: "Global Enterprises",
      customerEmail: "billing@globalent.com",
      assignee: "Emily Davis",
      priority: "High",
      status: "Open",
      created: "2024-08-15 08:15",
      updated: "2024-08-15 13:45",
      category: "Billing",
      responseTime: "5h 30m",
      isOverdue: false,
      unreadMessages: 2
    },
    {
      id: "T-012",
      title: "Integration Webhook Failures",
      customer: "AutomationHub",
      customerEmail: "tech@automationhub.com",
      assignee: "Sarah Johnson",
      priority: "High",
      status: "Open",
      created: "2024-08-13 14:30",
      updated: "2024-08-15 09:20",
      category: "Technical",
      responseTime: "1d 18h",
      isOverdue: true,
      unreadMessages: 5
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-red-100 text-red-800 border-red-200";
      case "In Progress": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Resolved": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-500";
      case "Medium": return "bg-yellow-500";
      case "Low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technical": return "bg-blue-100 text-blue-800";
      case "Billing": return "bg-purple-100 text-purple-800";
      case "Feature Request": return "bg-green-100 text-green-800";
      case "Integration": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/support')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Support
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Open Support Tickets</h1>
          <p className="text-muted-foreground">Manage active customer support requests</p>
        </div>
        <Button onClick={() => navigate('/support/create')}>
          <Plus className="h-4 w-4 mr-2" />
          Create Ticket
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Open</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Active tickets</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Past SLA</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Response</CardTitle>
            <Clock className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4h</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter & Search</CardTitle>
          <CardDescription>Find specific tickets quickly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search Tickets</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by ID, title, customer..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Priority</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All priorities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                  <SelectItem value="integration">Integration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Assignee</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All assignees" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Assignees</SelectItem>
                  <SelectItem value="sarah">Sarah Johnson</SelectItem>
                  <SelectItem value="mike">Mike Chen</SelectItem>
                  <SelectItem value="emily">Emily Davis</SelectItem>
                  <SelectItem value="robert">Robert Wilson</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Open only" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="open">Open Only</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="unread">Unread Messages</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tickets List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Open Tickets</CardTitle>
              <CardDescription>Currently active support requests</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {openTickets.map((ticket) => (
              <div 
                key={ticket.id} 
                className={`border rounded-lg p-6 hover:bg-muted/50 transition-colors ${
                  ticket.isOverdue ? 'border-red-200 bg-red-50/30' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-3">
                      <AlertCircle className={`h-5 w-5 ${ticket.isOverdue ? 'text-red-500' : 'text-orange-500'}`} />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="font-mono text-xs">
                            {ticket.id}
                          </Badge>
                          {ticket.isOverdue && (
                            <Badge className="bg-red-100 text-red-800 text-xs">
                              Overdue
                            </Badge>
                          )}
                          {ticket.unreadMessages > 0 && (
                            <Badge className="bg-blue-100 text-blue-800 text-xs">
                              {ticket.unreadMessages} new
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg">{ticket.title}</h3>
                        <p className="text-sm text-muted-foreground">{ticket.customer}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getPriorityColor(ticket.priority)}`} />
                    <Badge className={getStatusColor(ticket.status)}>
                      {ticket.status}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Add Comment</DropdownMenuItem>
                        <DropdownMenuItem>Change Priority</DropdownMenuItem>
                        <DropdownMenuItem>Reassign</DropdownMenuItem>
                        <DropdownMenuItem>Close Ticket</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-6 text-sm mb-4">
                  <div>
                    <p className="text-muted-foreground">Assignee</p>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">
                          {ticket.assignee.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{ticket.assignee}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Priority</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getPriorityColor(ticket.priority)}`} />
                      <span className="font-medium">{ticket.priority}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Category</p>
                    <Badge className={getCategoryColor(ticket.category)} variant="secondary">
                      {ticket.category}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Created</p>
                    <p className="font-medium">{ticket.created}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Update</p>
                    <p className="font-medium">{ticket.updated}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Response Time</p>
                    <p className={`font-medium ${ticket.isOverdue ? 'text-red-600' : ''}`}>
                      {ticket.responseTime}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Customer: {ticket.customerEmail}</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Reply
                    </Button>
                    <Button variant="ghost" size="sm">
                      <User className="h-4 w-4 mr-2" />
                      Assign
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule
                    </Button>
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

export default OpenTickets;
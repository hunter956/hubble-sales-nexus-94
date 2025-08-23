import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Mail, 
  MailOpen, 
  Send, 
  Reply, 
  Forward, 
  Search,
  Filter,
  Plus,
  Paperclip,
  Archive,
  Trash2,
  Star,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const Emails = () => {
  const [selectedEmail, setSelectedEmail] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const emailStats = [
    { label: "Inbox", value: "24", icon: Mail, color: "bg-blue-500" },
    { label: "Sent Today", value: "18", icon: Send, color: "bg-green-500" },
    { label: "Pending Reply", value: "7", icon: Clock, color: "bg-orange-500" },
    { label: "Opened", value: "85%", icon: MailOpen, color: "bg-purple-500" }
  ];

  const emails = [
    {
      id: 1,
      from: "sarah.johnson@techcorp.com",
      fromName: "Sarah Johnson",
      company: "TechCorp Inc",
      subject: "Re: Proposal Discussion - Next Steps",
      preview: "Thank you for the detailed proposal. I've reviewed it with our team and we have a few questions...",
      time: "2 hours ago",
      date: "Today",
      status: "unread",
      type: "inbox",
      priority: "high",
      tags: ["Hot Lead", "Proposal"],
      hasAttachment: true
    },
    {
      id: 2,
      from: "michael.chen@startupxyz.com",
      fromName: "Michael Chen",
      company: "StartupXYZ",
      subject: "Demo Request for Premium Package",
      preview: "Hi John, following our call yesterday, we'd like to schedule a demo for the premium package...",
      time: "4 hours ago",
      date: "Today",
      status: "read",
      type: "inbox",
      priority: "medium",
      tags: ["Demo Request"],
      hasAttachment: false
    },
    {
      id: 3,
      from: "emily.davis@globalsolutions.com",
      fromName: "Emily Davis",
      company: "Global Solutions",
      subject: "Contract Terms Review",
      preview: "We've reviewed the contract terms you sent. Overall looks good, but we need to discuss a few clauses...",
      time: "6 hours ago",
      date: "Today",
      status: "read",
      type: "inbox",
      priority: "high",
      tags: ["Contract", "Legal"],
      hasAttachment: true
    },
    {
      id: 4,
      from: "john.smith@company.com",
      fromName: "John Smith",
      company: "Your Company",
      subject: "Follow-up: Product Demo Scheduling",
      preview: "Hi Robert, I hope you enjoyed our initial call. As discussed, I'm sending over some materials...",
      time: "Yesterday",
      date: "Aug 22, 2024",
      status: "sent",
      type: "sent",
      priority: "medium",
      tags: ["Follow-up"],
      hasAttachment: true
    },
    {
      id: 5,
      from: "lisa.anderson@megacorp.com",
      fromName: "Lisa Anderson",
      company: "MegaCorp Ltd",
      subject: "Pricing Information Request",
      preview: "Hello, we're interested in your enterprise solution and would like to get pricing information...",
      time: "Yesterday",
      date: "Aug 22, 2024",
      status: "unread",
      type: "inbox",
      priority: "medium",
      tags: ["Pricing", "Enterprise"],
      hasAttachment: false
    }
  ];

  const templates = [
    {
      id: 1,
      name: "Welcome Email",
      subject: "Welcome to [Company Name]!",
      category: "Onboarding"
    },
    {
      id: 2,
      name: "Follow-up Call",
      subject: "Following up on our conversation",
      category: "Follow-up"
    },
    {
      id: 3,
      name: "Proposal Submission",
      subject: "Proposal for [Project Name]",
      category: "Sales"
    },
    {
      id: 4,
      name: "Meeting Confirmation",
      subject: "Meeting Confirmation - [Date & Time]",
      category: "Meetings"
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      unread: "font-semibold text-gray-900",
      read: "text-gray-600",
      sent: "text-blue-600"
    };
    return colors[status as keyof typeof colors] || "text-gray-600";
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "border-l-red-500",
      medium: "border-l-yellow-500",
      low: "border-l-green-500"
    };
    return colors[priority as keyof typeof colors] || "border-l-gray-300";
  };

  const getTagColor = (tag: string) => {
    const colors = {
      "Hot Lead": "bg-red-100 text-red-800",
      "Demo Request": "bg-blue-100 text-blue-800",
      "Contract": "bg-purple-100 text-purple-800",
      "Legal": "bg-gray-100 text-gray-800",
      "Follow-up": "bg-green-100 text-green-800",
      "Pricing": "bg-orange-100 text-orange-800",
      "Enterprise": "bg-indigo-100 text-indigo-800",
      "Proposal": "bg-pink-100 text-pink-800"
    };
    return colors[tag as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const filteredEmails = emails.filter(email => {
    const matchesStatus = filterStatus === "all" || email.type === filterStatus;
    const matchesSearch = email.fromName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         email.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Emails</h1>
          <p className="text-muted-foreground">Manage your email communications and campaigns</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Archive className="h-4 w-4 mr-2" />
            Templates
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Compose Email
          </Button>
        </div>
      </div>

      {/* Email Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {emailStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={cn("p-2 rounded-lg", stat.color)}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="inbox" className="space-y-6">
        <TabsList>
          <TabsTrigger value="inbox">Inbox</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="inbox" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Email List */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Email Inbox</CardTitle>
                    <CardDescription>Recent email communications</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search emails..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-8 w-64"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-32">
                        <Filter className="h-4 w-4 mr-2" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Emails</SelectItem>
                        <SelectItem value="inbox">Inbox</SelectItem>
                        <SelectItem value="sent">Sent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {filteredEmails.map((email) => (
                    <div
                      key={email.id}
                      className={cn(
                        "border-l-4 rounded-lg p-4 cursor-pointer transition-colors hover:bg-gray-50",
                        getPriorityColor(email.priority),
                        selectedEmail === email.id && "bg-blue-50 border-blue-500"
                      )}
                      onClick={() => setSelectedEmail(email.id)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs">
                              {email.fromName.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className={cn("text-sm", getStatusColor(email.status))}>
                              {email.fromName}
                            </h4>
                            <p className="text-xs text-muted-foreground">{email.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {email.hasAttachment && <Paperclip className="h-3 w-3 text-muted-foreground" />}
                          <span className="text-xs text-muted-foreground">{email.time}</span>
                        </div>
                      </div>

                      <h3 className={cn("font-medium text-sm mb-1", getStatusColor(email.status))}>
                        {email.subject}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {email.preview}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {email.tags.map((tag) => (
                            <Badge key={tag} className={getTagColor(tag)} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {email.status === "unread" && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Email Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Email Actions</CardTitle>
                <CardDescription>Quick actions for your emails</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">
                  <Reply className="h-4 w-4 mr-2" />
                  Reply
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Forward className="h-4 w-4 mr-2" />
                  Forward
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Star className="h-4 w-4 mr-2" />
                  Star
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Archive className="h-4 w-4 mr-2" />
                  Archive
                </Button>
                
                <Button variant="outline" className="w-full text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compose" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compose Email</CardTitle>
              <CardDescription>Create a new email message</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">To</label>
                  <Input placeholder="recipient@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">CC</label>
                  <Input placeholder="cc@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input placeholder="Email subject..." />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Type your message here..."
                  className="min-h-[200px]"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Button variant="outline">
                  <Paperclip className="h-4 w-4 mr-2" />
                  Attach Files
                </Button>
                
                <div className="flex gap-2">
                  <Button variant="outline">Save Draft</Button>
                  <Button>
                    <Send className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Templates</CardTitle>
              <CardDescription>Pre-written templates for common emails</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {templates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{template.name}</h4>
                        <p className="text-sm text-muted-foreground">{template.subject}</p>
                      </div>
                      <Badge variant="outline">{template.category}</Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1">
                        Use Template
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                <Plus className="h-4 w-4 mr-2" />
                Create New Template
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Emails;
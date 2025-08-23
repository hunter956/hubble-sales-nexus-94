import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  PhoneCall, 
  PhoneIncoming, 
  PhoneOutgoing, 
  Clock, 
  Search,
  Filter,
  Plus,
  Play,
  MoreHorizontal
} from "lucide-react";
import { cn } from "@/lib/utils";

const Calls = () => {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const callHistory = [
    {
      id: 1,
      contact: "Sarah Johnson",
      company: "TechCorp Inc",
      phone: "+1 (555) 123-4567",
      type: "outgoing",
      status: "completed",
      duration: "25 min",
      time: "2 hours ago",
      date: "Today",
      outcome: "Positive - scheduling follow-up meeting",
      tags: ["Hot Lead", "Decision Maker"]
    },
    {
      id: 2,
      contact: "Michael Chen",
      company: "StartupXYZ",
      phone: "+1 (555) 234-5678",
      type: "incoming",
      status: "completed",
      duration: "18 min",
      time: "4 hours ago",
      date: "Today",
      outcome: "Interested in premium package",
      tags: ["Warm Lead"]
    },
    {
      id: 3,
      contact: "Emily Davis",
      company: "Global Solutions",
      phone: "+1 (555) 345-6789",
      type: "outgoing",
      status: "missed",
      duration: "0 min",
      time: "6 hours ago",
      date: "Today",
      outcome: "No answer - left voicemail",
      tags: ["Follow-up Required"]
    },
    {
      id: 4,
      contact: "Robert Wilson",
      company: "InnovateCo",
      phone: "+1 (555) 456-7890",
      type: "outgoing",
      status: "completed",
      duration: "32 min",
      time: "Yesterday",
      date: "Aug 22, 2024",
      outcome: "Discussed pricing and contract terms",
      tags: ["Negotiation"]
    },
    {
      id: 5,
      contact: "Lisa Anderson",
      company: "MegaCorp Ltd",
      phone: "+1 (555) 567-8901",
      type: "incoming",
      status: "completed",
      duration: "45 min",
      time: "Yesterday",
      date: "Aug 22, 2024",
      outcome: "Product demo requested for next week",
      tags: ["Demo Scheduled"]
    }
  ];

  const upcomingCalls = [
    {
      id: 1,
      contact: "David Brown",
      company: "Enterprise Solutions",
      phone: "+1 (555) 678-9012",
      time: "10:00 AM",
      date: "Tomorrow",
      type: "scheduled",
      duration: "30 min",
      purpose: "Follow-up call to discuss proposal"
    },
    {
      id: 2,
      contact: "Amanda White",
      company: "Future Tech",
      phone: "+1 (555) 789-0123",
      time: "2:00 PM",
      date: "Tomorrow",
      type: "scheduled",
      duration: "45 min",
      purpose: "Initial discovery call"
    }
  ];

  const callStats = [
    { label: "Total Calls Today", value: "12", icon: Phone, color: "bg-blue-500" },
    { label: "Call Duration", value: "4h 32m", icon: Clock, color: "bg-green-500" },
    { label: "Answered Calls", value: "9", icon: PhoneIncoming, color: "bg-purple-500" },
    { label: "Missed Calls", value: "3", icon: PhoneOutgoing, color: "bg-orange-500" }
  ];

  const getCallIcon = (type: string, status: string) => {
    if (status === "missed") return <Phone className="h-4 w-4 text-red-500" />;
    if (type === "incoming") return <PhoneIncoming className="h-4 w-4 text-green-500" />;
    if (type === "outgoing") return <PhoneOutgoing className="h-4 w-4 text-blue-500" />;
    return <Phone className="h-4 w-4" />;
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "bg-green-100 text-green-800",
      missed: "bg-red-100 text-red-800",
      scheduled: "bg-blue-100 text-blue-800"
    };
    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800";
  };

  const getTagColor = (tag: string) => {
    const colors = {
      "Hot Lead": "bg-red-100 text-red-800",
      "Warm Lead": "bg-orange-100 text-orange-800",
      "Decision Maker": "bg-purple-100 text-purple-800",
      "Follow-up Required": "bg-yellow-100 text-yellow-800",
      "Negotiation": "bg-blue-100 text-blue-800",
      "Demo Scheduled": "bg-green-100 text-green-800"
    };
    return colors[tag as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const filteredCalls = callHistory.filter(call => {
    const matchesStatus = filterStatus === "all" || call.status === filterStatus;
    const matchesSearch = call.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         call.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Calls</h1>
          <p className="text-muted-foreground">Manage your call history and schedule new calls</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <PhoneCall className="h-4 w-4 mr-2" />
            Call Queue
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Schedule Call
          </Button>
        </div>
      </div>

      {/* Call Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {callStats.map((stat) => {
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

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Call History */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Call History</CardTitle>
                <CardDescription>Recent call activities and outcomes</CardDescription>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search calls..."
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
                    <SelectItem value="all">All Calls</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="missed">Missed</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredCalls.map((call) => (
                <div key={call.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>
                          {call.contact.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{call.contact}</h4>
                        <p className="text-sm text-muted-foreground">{call.company}</p>
                        <p className="text-xs text-muted-foreground">{call.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getCallIcon(call.type, call.status)}
                      <Badge className={getStatusBadge(call.status)} variant="secondary">
                        {call.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>{call.time}</span>
                      <span>{call.duration}</span>
                    </div>
                    <span>{call.date}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm bg-muted rounded p-2">
                      <strong>Outcome:</strong> {call.outcome}
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {call.tags.map((tag) => (
                        <Badge key={tag} className={getTagColor(tag)} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm">
                      <PhoneCall className="h-3 w-3 mr-1" />
                      Call Back
                    </Button>
                    <Button variant="outline" size="sm">
                      <Play className="h-3 w-3 mr-1" />
                      Play Recording
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Calls */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Calls</CardTitle>
            <CardDescription>Your scheduled calls for today and tomorrow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingCalls.map((call) => (
                <div key={call.id} className="border rounded-lg p-3 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {call.contact.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-sm">{call.contact}</h4>
                        <p className="text-xs text-muted-foreground">{call.company}</p>
                      </div>
                    </div>
                    <Badge className={getStatusBadge(call.type)} variant="secondary">
                      {call.type}
                    </Badge>
                  </div>

                  <div className="text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>{call.date} at {call.time}</span>
                      <span>{call.duration}</span>
                    </div>
                  </div>

                  <div className="text-sm bg-muted rounded p-2">
                    <strong>Purpose:</strong> {call.purpose}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <PhoneCall className="h-3 w-3 mr-1" />
                      Start Call
                    </Button>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Schedule New Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calls;
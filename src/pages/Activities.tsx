import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, Phone, Mail, CheckSquare, Plus, CalendarDays } from "lucide-react";

const Activities = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Sales Call with TechCorp",
      type: "call",
      time: "10:00 AM",
      date: "Today",
      duration: "30 min",
      attendees: ["John Smith", "Sarah Johnson"],
      status: "scheduled"
    },
    {
      id: 2,
      title: "Product Demo - StartupXYZ",
      type: "meeting",
      time: "2:00 PM", 
      date: "Today",
      duration: "60 min",
      attendees: ["Mike Chen", "Emily Davis"],
      status: "confirmed"
    },
    {
      id: 3,
      title: "Follow up email to Global Solutions",
      type: "email",
      time: "4:00 PM",
      date: "Tomorrow",
      duration: "15 min",
      attendees: ["John Smith"],
      status: "pending"
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: "call",
      title: "Called InnovateCo regarding proposal",
      contact: "Robert Wilson",
      company: "InnovateCo",
      time: "2 hours ago",
      duration: "25 min",
      outcome: "Positive - scheduling follow-up"
    },
    {
      id: 2,
      type: "email",
      title: "Sent pricing proposal to MegaCorp",
      contact: "Lisa Anderson",
      company: "MegaCorp Ltd",
      time: "4 hours ago",
      outcome: "Awaiting response"
    },
    {
      id: 3,
      type: "meeting",
      title: "Product demonstration completed",
      contact: "David Brown",
      company: "Enterprise Solutions",
      time: "Yesterday",
      duration: "45 min",
      outcome: "Very interested - next steps discussed"
    }
  ];

  const tasks = [
    {
      id: 1,
      title: "Prepare quarterly sales report",
      priority: "High",
      dueDate: "Aug 20, 2024",
      status: "in-progress",
      assignee: "John Smith"
    },
    {
      id: 2,
      title: "Update CRM with new lead information",
      priority: "Medium",
      dueDate: "Aug 18, 2024", 
      status: "pending",
      assignee: "Sarah Johnson"
    },
    {
      id: 3,
      title: "Schedule follow-up calls for Q3 prospects",
      priority: "High",
      dueDate: "Aug 17, 2024",
      status: "completed",
      assignee: "Mike Chen"
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "call": return <Phone className="h-4 w-4 text-blue-500" />;
      case "email": return <Mail className="h-4 w-4 text-green-500" />;
      case "meeting": return <CalendarDays className="h-4 w-4 text-purple-500" />;
      default: return <Calendar className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "in-progress": return "bg-yellow-100 text-yellow-800";
      case "pending": return "bg-blue-100 text-blue-800";
      case "scheduled": return "bg-purple-100 text-purple-800";
      case "confirmed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "border-red-500 bg-red-50";
      case "Medium": return "border-yellow-500 bg-yellow-50";
      case "Low": return "border-green-500 bg-green-50";
      default: return "border-gray-500 bg-gray-50";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Activities</h1>
          <p className="text-muted-foreground">Manage your calendar, tasks, calls, and emails</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Calendar View
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Activity
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your scheduled activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border rounded-lg p-3 space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {getActivityIcon(event.type)}
                      <h4 className="font-medium text-sm">{event.title}</h4>
                    </div>
                    <Badge className={getStatusColor(event.status)} variant="secondary">
                      {event.status}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>{event.date} at {event.time}</span>
                      <span>{event.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {event.attendees.slice(0, 2).map((attendee, idx) => (
                      <Avatar key={idx} className="h-6 w-6">
                        <AvatarFallback className="text-xs">
                          {attendee.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                    {event.attendees.length > 2 && (
                      <span className="text-xs text-muted-foreground">
                        +{event.attendees.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Your latest interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="border rounded-lg p-3 space-y-2">
                  <div className="flex items-start gap-2">
                    {getActivityIcon(activity.type)}
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{activity.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {activity.contact} • {activity.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>{activity.time}</span>
                      {activity.duration && <span>{activity.duration}</span>}
                    </div>
                  </div>
                  <div className="text-sm bg-muted rounded p-2">
                    <strong>Outcome:</strong> {activity.outcome}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tasks */}
        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>Your to-do items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className={`border rounded-lg p-3 space-y-2 ${getPriorityColor(task.priority)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4" />
                      <h4 className="font-medium text-sm">{task.title}</h4>
                    </div>
                    <Badge className={getStatusColor(task.status)} variant="secondary">
                      {task.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Due: {task.dueDate}</span>
                    <div className="flex items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${
                        task.priority === "High" ? "bg-red-500" :
                        task.priority === "Medium" ? "bg-yellow-500" : "bg-green-500"
                      }`} />
                      <span>{task.priority}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback className="text-xs">
                        {task.assignee.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">{task.assignee}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Activity Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Summary</CardTitle>
          <CardDescription>Your activity metrics for this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold">24</div>
              <div className="text-sm text-muted-foreground">Calls Made</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold">68</div>
              <div className="text-sm text-muted-foreground">Emails Sent</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mx-auto mb-2">
                <CalendarDays className="h-6 w-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-muted-foreground">Meetings</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mx-auto mb-2">
                <CheckSquare className="h-6 w-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold">18</div>
              <div className="text-sm text-muted-foreground">Tasks Completed</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Activities;
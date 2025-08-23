import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  CalendarDays, 
  Clock, 
  Phone, 
  Mail, 
  Users, 
  Plus,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const events = [
    {
      id: 1,
      title: "Sales Call with TechCorp",
      type: "call",
      time: "10:00 AM",
      date: new Date(),
      duration: "30 min",
      attendees: ["John Smith", "Sarah Johnson"],
      status: "scheduled",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "Product Demo - StartupXYZ",
      type: "meeting",
      time: "2:00 PM", 
      date: new Date(),
      duration: "60 min",
      attendees: ["Mike Chen", "Emily Davis"],
      status: "confirmed",
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Follow up email to Global Solutions",
      type: "email",
      time: "4:00 PM",
      date: new Date(Date.now() + 86400000),
      duration: "15 min",
      attendees: ["John Smith"],
      status: "pending",
      color: "bg-green-500"
    }
  ];

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", 
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "call": return <Phone className="h-3 w-3 text-white" />;
      case "email": return <Mail className="h-3 w-3 text-white" />;
      case "meeting": return <CalendarDays className="h-3 w-3 text-white" />;
      default: return <CalendarDays className="h-3 w-3 text-white" />;
    }
  };

  const getEventsByDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Calendar View</h1>
          <p className="text-muted-foreground">Manage your scheduled activities and events</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous Week
          </Button>
          <Button variant="outline">
            Today
          </Button>
          <Button variant="outline">
            <ChevronRight className="h-4 w-4 ml-2" />
            Next Week
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Event
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Mini Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view events</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-md border"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Calls</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Meetings</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Emails</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Schedule */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>
              {selectedDate ? selectedDate.toDateString() : "Today's Schedule"}
            </CardTitle>
            <CardDescription>Your activities for the selected day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {timeSlots.map((time) => {
                const dayEvents = selectedDate ? getEventsByDate(selectedDate) : [];
                const timeEvents = dayEvents.filter(event => event.time === time);
                
                return (
                  <div key={time} className="flex items-start border-b border-gray-100 py-3">
                    <div className="w-20 text-sm text-muted-foreground font-medium">
                      {time}
                    </div>
                    <div className="flex-1 ml-4">
                      {timeEvents.length > 0 ? (
                        <div className="space-y-2">
                          {timeEvents.map((event) => (
                            <div
                              key={event.id}
                              className={`p-3 rounded-lg border-l-4 ${event.color.replace('bg-', 'border-l-')} bg-gray-50`}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2">
                                  <div className={`p-1 rounded ${event.color}`}>
                                    {getActivityIcon(event.type)}
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-sm">{event.title}</h4>
                                    <p className="text-xs text-muted-foreground">
                                      Duration: {event.duration}
                                    </p>
                                  </div>
                                </div>
                                <Badge variant="outline">{event.status}</Badge>
                              </div>
                              <div className="flex items-center gap-1 mt-2">
                                <Users className="h-3 w-3 text-muted-foreground" />
                                <div className="flex items-center gap-1">
                                  {event.attendees.slice(0, 3).map((attendee, idx) => (
                                    <Avatar key={idx} className="h-5 w-5">
                                      <AvatarFallback className="text-xs">
                                        {attendee.split(' ').map(n => n[0]).join('')}
                                      </AvatarFallback>
                                    </Avatar>
                                  ))}
                                  {event.attendees.length > 3 && (
                                    <span className="text-xs text-muted-foreground ml-1">
                                      +{event.attendees.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-muted-foreground text-sm py-2">
                          No events scheduled
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events This Week</CardTitle>
          <CardDescription>All your scheduled activities for the week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded ${event.color}`}>
                      {getActivityIcon(event.type)}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{event.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {event.date.toDateString()}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {event.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{event.time}</span>
                  </div>
                  <span>{event.duration}</span>
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
    </div>
  );
};

export default CalendarView;
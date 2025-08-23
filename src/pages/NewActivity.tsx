import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  CalendarDays, 
  Clock, 
  Phone, 
  Mail, 
  Users, 
  Save,
  X,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const NewActivity = () => {
  const [activityType, setActivityType] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  const activityTypes = [
    { value: "call", label: "Phone Call", icon: Phone, color: "bg-blue-500" },
    { value: "email", label: "Email", icon: Mail, color: "bg-green-500" },
    { value: "meeting", label: "Meeting", icon: CalendarDays, color: "bg-purple-500" },
    { value: "task", label: "Task", icon: Clock, color: "bg-orange-500" }
  ];

  const contacts = [
    { id: "1", name: "Sarah Johnson", company: "TechCorp Inc", email: "sarah@techcorp.com" },
    { id: "2", name: "Michael Chen", company: "StartupXYZ", email: "michael@startupxyz.com" },
    { id: "3", name: "Emily Davis", company: "Global Solutions", email: "emily@globalsolutions.com" },
    { id: "4", name: "Robert Wilson", company: "InnovateCo", email: "robert@innovateco.com" },
  ];

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", 
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", 
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  const priorities = [
    { value: "low", label: "Low", color: "bg-green-100 text-green-800" },
    { value: "medium", label: "Medium", color: "bg-yellow-100 text-yellow-800" },
    { value: "high", label: "High", color: "bg-red-100 text-red-800" }
  ];

  const handleContactToggle = (contactId: string) => {
    setSelectedContacts(prev => 
      prev.includes(contactId) 
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    );
  };

  const getActivityIcon = (type: string) => {
    const activity = activityTypes.find(a => a.value === type);
    if (!activity) return CalendarDays;
    return activity.icon;
  };

  const getActivityColor = (type: string) => {
    const activity = activityTypes.find(a => a.value === type);
    return activity?.color || "bg-gray-500";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">New Activity</h1>
          <p className="text-muted-foreground">Create a new activity, call, email, or meeting</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Activity
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Activity Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Activity Details</CardTitle>
            <CardDescription>Fill in the information for your new activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Activity Type */}
            <div className="space-y-2">
              <Label>Activity Type</Label>
              <div className="grid grid-cols-2 gap-2">
                {activityTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <Button
                      key={type.value}
                      variant={activityType === type.value ? "default" : "outline"}
                      className={cn(
                        "justify-start h-auto p-4",
                        activityType === type.value && getActivityColor(type.value)
                      )}
                      onClick={() => setActivityType(type.value)}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {type.label}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="Enter activity title..."
                className="w-full"
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Add notes or agenda items..."
                className="min-h-[100px]"
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label>Time</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Duration and Priority */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input
                  id="duration"
                  type="number"
                  placeholder="30"
                  min="5"
                  max="480"
                />
              </div>

              <div className="space-y-2">
                <Label>Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    {priorities.map((priority) => (
                      <SelectItem key={priority.value} value={priority.value}>
                        <Badge className={priority.color} variant="secondary">
                          {priority.label}
                        </Badge>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Location (for meetings) */}
            {activityType === "meeting" && (
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  placeholder="Enter meeting location or video call link..."
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contacts and Summary */}
        <div className="space-y-6">
          {/* Contact Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Participants
              </CardTitle>
              <CardDescription>Select contacts to include in this activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors",
                      selectedContacts.includes(contact.id)
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                    onClick={() => handleContactToggle(contact.id)}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{contact.name}</p>
                      <p className="text-xs text-muted-foreground">{contact.company}</p>
                    </div>
                    {selectedContacts.includes(contact.id) && (
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4">
                <Plus className="h-4 w-4 mr-2" />
                Add New Contact
              </Button>
            </CardContent>
          </Card>

          {/* Activity Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Activity Summary</CardTitle>
              <CardDescription>Review your activity details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activityType && (
                <div className="flex items-center gap-2">
                  <div className={cn("p-2 rounded", getActivityColor(activityType))}>
                    {getActivityIcon(activityType) && 
                      React.createElement(getActivityIcon(activityType), { 
                        className: "h-3 w-3 text-white" 
                      })
                    }
                  </div>
                  <span className="font-medium">
                    {activityTypes.find(t => t.value === activityType)?.label}
                  </span>
                </div>
              )}

              {selectedDate && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-3 w-3" />
                  <span>{format(selectedDate, "PPP")}</span>
                </div>
              )}

              {selectedContacts.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-2">Participants:</p>
                  <div className="flex flex-wrap gap-1">
                    {selectedContacts.map((contactId) => {
                      const contact = contacts.find(c => c.id === contactId);
                      return contact ? (
                        <Badge key={contactId} variant="secondary" className="text-xs">
                          {contact.name}
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewActivity;
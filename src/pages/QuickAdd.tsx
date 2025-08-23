import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, User, Building, Ticket, Calendar } from "lucide-react";

const QuickAdd = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Quick Add</h1>
        <p className="text-muted-foreground">Quickly add new records to your CRM</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <CardTitle>Add Lead</CardTitle>
            </div>
            <CardDescription>Create a new lead record</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="lead-name">Full Name</Label>
              <Input id="lead-name" placeholder="Enter lead name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lead-email">Email</Label>
              <Input id="lead-email" type="email" placeholder="Enter email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lead-company">Company</Label>
              <Input id="lead-company" placeholder="Enter company" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lead-source">Source</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select source" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="cold-call">Cold Call</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Lead
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <CardTitle>Add Opportunity</CardTitle>
            </div>
            <CardDescription>Create a new sales opportunity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="opp-name">Opportunity Name</Label>
              <Input id="opp-name" placeholder="Enter opportunity name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="opp-value">Value</Label>
              <Input id="opp-value" type="number" placeholder="Enter value" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="opp-stage">Stage</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="prospecting">Prospecting</SelectItem>
                  <SelectItem value="qualification">Qualification</SelectItem>
                  <SelectItem value="proposal">Proposal</SelectItem>
                  <SelectItem value="negotiation">Negotiation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="opp-close-date">Close Date</Label>
              <Input id="opp-close-date" type="date" />
            </div>
            <Button className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Opportunity
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Ticket className="h-5 w-5 text-primary" />
              <CardTitle>Create Ticket</CardTitle>
            </div>
            <CardDescription>Create a new support ticket</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="ticket-subject">Subject</Label>
              <Input id="ticket-subject" placeholder="Enter ticket subject" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ticket-priority">Priority</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ticket-description">Description</Label>
              <Textarea id="ticket-description" placeholder="Describe the issue" />
            </div>
            <Button className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Create Ticket
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <CardTitle>New Activity</CardTitle>
            </div>
            <CardDescription>Schedule a new activity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="activity-title">Title</Label>
              <Input id="activity-title" placeholder="Enter activity title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="activity-type">Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="call">Call</SelectItem>
                  <SelectItem value="meeting">Meeting</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="task">Task</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="activity-date">Date & Time</Label>
              <Input id="activity-date" type="datetime-local" />
            </div>
            <Button className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Schedule Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuickAdd;
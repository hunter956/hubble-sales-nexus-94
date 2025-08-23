import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plus, Save, X, DollarSign, Calendar, User } from "lucide-react";

const AddOpportunity = () => {
  const opportunityStages = [
    "Prospecting", "Qualification", "Needs Analysis", "Value Proposition", 
    "Id. Decision Makers", "Perception Analysis", "Proposal/Price Quote", "Negotiation/Review", "Closed Won", "Closed Lost"
  ];

  const probabilityByStage: Record<string, number> = {
    "Prospecting": 10,
    "Qualification": 20,
    "Needs Analysis": 25,
    "Value Proposition": 50,
    "Id. Decision Makers": 60,
    "Perception Analysis": 70,
    "Proposal/Price Quote": 75,
    "Negotiation/Review": 90,
    "Closed Won": 100,
    "Closed Lost": 0
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Add New Opportunity</h1>
          <p className="text-muted-foreground">Create a new sales opportunity</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Save Opportunity
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <CardTitle>Opportunity Details</CardTitle>
            </div>
            <CardDescription>Basic information about the opportunity</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Opportunity Name *</Label>
              <Input id="name" placeholder="e.g., TechCorp CRM Implementation" />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="value">Expected Value *</Label>
                <Input id="value" type="number" placeholder="50000" />
              </div>
              <div className="space-y-2">
                <Label>Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Stage *</Label>
              <Select defaultValue="qualification">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {opportunityStages.map((stage) => (
                    <SelectItem key={stage} value={stage.toLowerCase().replace(/\s+/g, '-')}>
                      <div className="flex items-center justify-between w-full">
                        <span>{stage}</span>
                        <Badge variant="secondary" className="ml-2">
                          {probabilityByStage[stage]}%
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="closeDate">Expected Close Date</Label>
                <Input id="closeDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="probability">Win Probability</Label>
                <Input id="probability" type="number" placeholder="75" min="0" max="100" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe the opportunity, key requirements, and potential challenges..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <CardTitle>Contact & Account</CardTitle>
            </div>
            <CardDescription>Associate with existing contacts and accounts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Account *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select or create account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="techcorp">TechCorp Solutions</SelectItem>
                  <SelectItem value="innovate">Innovate Ltd</SelectItem>
                  <SelectItem value="global">Global Enterprises</SelectItem>
                  <SelectItem value="startup">StartupXYZ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Primary Contact</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select contact" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john-doe">John Doe - CEO</SelectItem>
                  <SelectItem value="jane-smith">Jane Smith - CTO</SelectItem>
                  <SelectItem value="mike-johnson">Mike Johnson - VP Sales</SelectItem>
                  <SelectItem value="sarah-wilson">Sarah Wilson - Procurement</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Opportunity Owner</Label>
              <Select defaultValue="current-user">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current-user">You</SelectItem>
                  <SelectItem value="sarah-j">Sarah Johnson</SelectItem>
                  <SelectItem value="mike-d">Mike Davis</SelectItem>
                  <SelectItem value="lisa-b">Lisa Brown</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Lead Source</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="How did this opportunity originate?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="cold-call">Cold Call</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="trade-show">Trade Show</SelectItem>
                  <SelectItem value="existing-customer">Existing Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-2 p-2 border rounded-lg min-h-[2.5rem]">
                <Badge variant="secondary">High Priority</Badge>
                <Badge variant="secondary">Enterprise</Badge>
                <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="competitors">Known Competitors</Label>
              <Textarea 
                id="competitors" 
                placeholder="List any known competing vendors or solutions..."
                rows={2}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <CardTitle>Next Steps & Activities</CardTitle>
          </div>
          <CardDescription>Plan follow-up activities and track progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="nextStep">Next Step</Label>
              <Input id="nextStep" placeholder="e.g., Schedule demo call" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nextStepDate">Due Date</Label>
              <Input id="nextStepDate" type="date" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Internal Notes</Label>
            <Textarea 
              id="notes" 
              placeholder="Add any internal notes about this opportunity..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddOpportunity;
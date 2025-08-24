import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, User, Building, Save, ArrowLeft, Upload, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/support')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Support
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Create Support Ticket</h1>
          <p className="text-muted-foreground">Create a new customer support request</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {/* Ticket Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Ticket Information
              </CardTitle>
              <CardDescription>Describe the issue or request</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Ticket Title *</Label>
                <Input 
                  id="title" 
                  placeholder="Brief description of the issue" 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Provide a detailed description of the issue, including steps to reproduce, expected behavior, and any error messages..."
                  className="min-h-[150px]"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technical">Technical Issue</SelectItem>
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="integration">Integration Support</SelectItem>
                      <SelectItem value="training">Training & Onboarding</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Product/Service</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crm">CRM Platform</SelectItem>
                      <SelectItem value="api">API Services</SelectItem>
                      <SelectItem value="mobile">Mobile App</SelectItem>
                      <SelectItem value="integrations">Integrations</SelectItem>
                      <SelectItem value="analytics">Analytics Dashboard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Environment/Browser Information</Label>
                <Textarea 
                  placeholder="e.g., Chrome 118.0, Windows 11, Mobile Safari iOS 17..."
                  className="min-h-[60px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Customer Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Customer Information
              </CardTitle>
              <CardDescription>Who is reporting this issue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="customerName">Customer Name *</Label>
                  <Input id="customerName" placeholder="Enter customer name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="customerEmail">Email Address *</Label>
                  <Input id="customerEmail" type="email" placeholder="customer@company.com" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="company" placeholder="Company Inc." className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Customer Type</Label>
                <RadioGroup defaultValue="existing" className="flex gap-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="existing" id="existing" />
                    <Label htmlFor="existing">Existing Customer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="prospect" id="prospect" />
                    <Label htmlFor="prospect">Prospect</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="trial" id="trial" />
                    <Label htmlFor="trial">Trial User</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* Attachments */}
          <Card>
            <CardHeader>
              <CardTitle>Attachments</CardTitle>
              <CardDescription>Upload screenshots, logs, or relevant files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-600 mb-2">Drop files here or click to upload</p>
                <p className="text-sm text-gray-500 mb-4">Supports: PNG, JPG, PDF, TXT, LOG files (Max 10MB)</p>
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Priority & Assignment */}
          <Card>
            <CardHeader>
              <CardTitle>Priority & Assignment</CardTitle>
              <CardDescription>Set urgency and routing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Priority Level</Label>
                <RadioGroup defaultValue="medium">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low" className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      Low - General inquiry
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium" className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      Medium - Standard issue
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high" className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      High - Service affected
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="urgent" id="urgent" />
                    <Label htmlFor="urgent" className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-700"></div>
                      Urgent - Service down
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Assign To</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Auto-assign" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Auto-assign</SelectItem>
                    <SelectItem value="sarah">Sarah Johnson (Level 1)</SelectItem>
                    <SelectItem value="mike">Mike Chen (Level 2)</SelectItem>
                    <SelectItem value="emily">Emily Davis (Level 2)</SelectItem>
                    <SelectItem value="robert">Robert Wilson (Level 3)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Team</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select team" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Support</SelectItem>
                    <SelectItem value="technical">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Support</SelectItem>
                    <SelectItem value="integration">Integration Team</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* SLA Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                SLA Information
              </CardTitle>
              <CardDescription>Service level expectations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">First Response:</span>
                  <span className="font-medium">4 hours</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Resolution Target:</span>
                  <span className="font-medium">2 business days</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Update Frequency:</span>
                  <span className="font-medium">Daily</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>What happens after creation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <p className="font-medium">Ticket created</p>
                  <p className="text-muted-foreground">Customer receives confirmation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <p className="font-medium">Auto-assignment</p>
                  <p className="text-muted-foreground">Routed to appropriate team</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <p className="font-medium">First response</p>
                  <p className="text-muted-foreground">Within SLA timeframe</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-4 pt-6 border-t">
        <Button variant="outline" onClick={() => navigate('/support')}>
          Cancel
        </Button>
        <Button variant="outline">
          Save as Draft
        </Button>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Create Ticket
        </Button>
      </div>
    </div>
  );
};

export default CreateTicket;
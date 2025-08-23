import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Settings, Layout, Columns, Filter } from "lucide-react";

const CustomizeView = () => {
  const availableColumns = [
    "Name", "Email", "Phone", "Company", "Status", "Source", "Value", "Created Date", "Last Activity", "Owner", "Industry", "Location"
  ];

  const viewTemplates = [
    "Default View", "Sales View", "Marketing View", "Manager View", "Minimal View"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Customize View</h1>
        <p className="text-muted-foreground">Personalize your CRM interface and data display</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Columns className="h-5 w-5 text-primary" />
              <CardTitle>Column Configuration</CardTitle>
            </div>
            <CardDescription>Choose which columns to display in your lists</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>View Template</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a template" />
                </SelectTrigger>
                <SelectContent>
                  {viewTemplates.map((template) => (
                    <SelectItem key={template} value={template.toLowerCase().replace(/\s+/g, '-')}>
                      {template}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Visible Columns</Label>
              <div className="grid gap-2 max-h-64 overflow-y-auto">
                {availableColumns.map((column) => (
                  <div key={column} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id={column} defaultChecked={["Name", "Email", "Company", "Status"].includes(column)} />
                      <label htmlFor={column} className="text-sm font-medium">
                        {column}
                      </label>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button size="sm" variant="ghost">
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">
              <Settings className="h-4 w-4 mr-2" />
              Apply Column Settings
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Layout className="h-5 w-5 text-primary" />
              <CardTitle>Display Settings</CardTitle>
            </div>
            <CardDescription>Configure how data is displayed</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dense Layout</Label>
                  <p className="text-xs text-muted-foreground">Show more rows in less space</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Row Numbers</Label>
                  <p className="text-xs text-muted-foreground">Display row numbers in tables</p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-refresh Data</Label>
                  <p className="text-xs text-muted-foreground">Automatically refresh every 5 minutes</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Tooltips</Label>
                  <p className="text-xs text-muted-foreground">Display helpful tooltips on hover</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Rows Per Page</Label>
              <Select defaultValue="25">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 rows</SelectItem>
                  <SelectItem value="25">25 rows</SelectItem>
                  <SelectItem value="50">50 rows</SelectItem>
                  <SelectItem value="100">100 rows</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Default Sort</Label>
              <Select defaultValue="name-asc">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="date-desc">Newest First</SelectItem>
                  <SelectItem value="date-asc">Oldest First</SelectItem>
                  <SelectItem value="value-desc">Highest Value</SelectItem>
                  <SelectItem value="value-asc">Lowest Value</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button className="w-full">
              <Settings className="h-4 w-4 mr-2" />
              Save Display Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <CardTitle>Saved Views</CardTitle>
          </div>
          <CardDescription>Manage your custom view configurations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "My Active Leads", description: "Leads with status 'New' or 'Qualified'", lastUsed: "Today" },
              { name: "High Value Opportunities", description: "Opportunities above $50K", lastUsed: "Yesterday" },
              { name: "Marketing Qualified Leads", description: "Leads from marketing campaigns", lastUsed: "2 days ago" },
              { name: "Urgent Support Tickets", description: "High priority tickets", lastUsed: "3 days ago" }
            ].map((view, index) => (
              <div key={index} className="flex items-center justify-between border rounded-lg p-4">
                <div>
                  <h4 className="font-medium">{view.name}</h4>
                  <p className="text-sm text-muted-foreground">{view.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">Last used: {view.lastUsed}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Edit</Button>
                  <Button size="sm" variant="outline">Apply</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomizeView;
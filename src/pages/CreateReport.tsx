import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Plus, BarChart3, PieChart, LineChart, FileText, Calendar } from "lucide-react";

const CreateReport = () => {
  const reportTypes = [
    { value: "table", label: "Data Table", icon: FileText },
    { value: "bar", label: "Bar Chart", icon: BarChart3 },
    { value: "pie", label: "Pie Chart", icon: PieChart },
    { value: "line", label: "Line Chart", icon: LineChart }
  ];

  const dataSourcesOptions = [
    "Leads", "Opportunities", "Customers", "Activities", "Support Tickets", "Calls", "Emails", "Tasks"
  ];

  const availableFields = {
    "Leads": ["Name", "Email", "Company", "Status", "Source", "Created Date", "Value", "Owner"],
    "Opportunities": ["Name", "Stage", "Value", "Close Date", "Probability", "Owner", "Account"],
    "Customers": ["Name", "Email", "Company", "Industry", "Location", "Created Date", "Last Activity"],
    "Activities": ["Type", "Subject", "Date", "Status", "Owner", "Related To", "Duration"]
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Custom Report</h1>
        <p className="text-muted-foreground">Build custom reports with your CRM data</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Report Configuration</CardTitle>
              <CardDescription>Set up your custom report parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="report-name">Report Name</Label>
                  <Input id="report-name" placeholder="Enter report name" />
                </div>
                <div className="space-y-2">
                  <Label>Report Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select report type" />
                    </SelectTrigger>
                    <SelectContent>
                      {reportTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div className="flex items-center gap-2">
                            <type.icon className="h-4 w-4" />
                            {type.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="report-description">Description</Label>
                <Textarea id="report-description" placeholder="Describe what this report shows" />
              </div>

              <div className="space-y-2">
                <Label>Data Source</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select data source" />
                  </SelectTrigger>
                  <SelectContent>
                    {dataSourcesOptions.map((source) => (
                      <SelectItem key={source} value={source.toLowerCase()}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label>Fields to Include</Label>
                <div className="grid gap-2 max-h-48 overflow-y-auto border rounded-lg p-3">
                  {availableFields["Leads"].map((field) => (
                    <div key={field} className="flex items-center space-x-2">
                      <Checkbox id={field} />
                      <label htmlFor={field} className="text-sm font-medium">
                        {field}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="yesterday">Yesterday</SelectItem>
                      <SelectItem value="last-7-days">Last 7 days</SelectItem>
                      <SelectItem value="last-30-days">Last 30 days</SelectItem>
                      <SelectItem value="this-month">This month</SelectItem>
                      <SelectItem value="last-month">Last month</SelectItem>
                      <SelectItem value="this-quarter">This quarter</SelectItem>
                      <SelectItem value="custom">Custom range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Group By</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Group data by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No grouping</SelectItem>
                      <SelectItem value="status">Status</SelectItem>
                      <SelectItem value="source">Source</SelectItem>
                      <SelectItem value="owner">Owner</SelectItem>
                      <SelectItem value="date">Date</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Filters & Conditions</CardTitle>
              <CardDescription>Add filters to refine your data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Field" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="status">Status</SelectItem>
                      <SelectItem value="source">Source</SelectItem>
                      <SelectItem value="value">Value</SelectItem>
                      <SelectItem value="created">Created Date</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="equals">Equals</SelectItem>
                      <SelectItem value="not-equals">Not equals</SelectItem>
                      <SelectItem value="contains">Contains</SelectItem>
                      <SelectItem value="greater-than">Greater than</SelectItem>
                      <SelectItem value="less-than">Less than</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input placeholder="Value" />
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Filter
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Report Preview</CardTitle>
              <CardDescription>Preview of your report configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4 bg-muted/50">
                <h4 className="font-medium mb-2">Sample Data Preview</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Total Records:</span>
                    <Badge variant="secondary">1,247</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Date Range:</span>
                    <Badge variant="secondary">Last 30 days</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Grouping:</span>
                    <Badge variant="secondary">By Status</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Sample Results</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>New Leads:</span>
                    <span>324</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Qualified:</span>
                    <span>189</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Contacted:</span>
                    <span>456</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Converted:</span>
                    <span>278</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schedule & Share</CardTitle>
              <CardDescription>Automate report generation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-generate</Label>
                  <p className="text-xs text-muted-foreground">Run this report automatically</p>
                </div>
                <Checkbox />
              </div>

              <div className="space-y-2">
                <Label>Frequency</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Share with</Label>
                <Input placeholder="Enter email addresses" />
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-2">
            <Button className="flex-1">
              <FileText className="h-4 w-4 mr-2" />
              Create Report
            </Button>
            <Button variant="outline">
              Save Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateReport;
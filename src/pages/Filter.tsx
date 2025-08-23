import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

import { Filter as FilterIcon, Plus, X, Save, RefreshCw } from "lucide-react";

const Filter = () => {
  const savedFilters = [
    { name: "Active Leads", description: "Status = New OR Qualified", count: 156 },
    { name: "High Value Opportunities", description: "Value > $50,000", count: 23 },
    { name: "This Month's Activities", description: "Date >= 2024-08-01", count: 324 },
    { name: "Unassigned Tickets", description: "Owner = Unassigned", count: 12 }
  ];

  const activeFilters = [
    { field: "Status", condition: "equals", value: "New" },
    { field: "Source", condition: "contains", value: "Website" },
    { field: "Value", condition: "greater than", value: "1000" }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Advanced Filters</h1>
        <p className="text-muted-foreground">Create and manage data filters for your CRM</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Build Filter</CardTitle>
                  <CardDescription>Create custom filters to refine your data</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Clear All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Filter Conditions</h4>
                {activeFilters.map((filter, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="grid gap-4 md:grid-cols-4">
                      <Select defaultValue={filter.field.toLowerCase()}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="name">Name</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="company">Company</SelectItem>
                          <SelectItem value="status">Status</SelectItem>
                          <SelectItem value="source">Source</SelectItem>
                          <SelectItem value="value">Value</SelectItem>
                          <SelectItem value="created">Created Date</SelectItem>
                          <SelectItem value="owner">Owner</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Select defaultValue={filter.condition.replace(' ', '-')}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="equals">Equals</SelectItem>
                          <SelectItem value="not-equals">Not equals</SelectItem>
                          <SelectItem value="contains">Contains</SelectItem>
                          <SelectItem value="not-contains">Not contains</SelectItem>
                          <SelectItem value="starts-with">Starts with</SelectItem>
                          <SelectItem value="ends-with">Ends with</SelectItem>
                          <SelectItem value="greater-than">Greater than</SelectItem>
                          <SelectItem value="less-than">Less than</SelectItem>
                          <SelectItem value="between">Between</SelectItem>
                          <SelectItem value="is-empty">Is empty</SelectItem>
                          <SelectItem value="is-not-empty">Is not empty</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Input defaultValue={filter.value} placeholder="Enter value" />
                      
                      <Button variant="ghost" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    {index < activeFilters.length - 1 && (
                      <div className="flex justify-center mt-3">
                        <Select defaultValue="and">
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="and">AND</SelectItem>
                            <SelectItem value="or">OR</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Condition
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Quick Filters</h4>
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
                        <SelectItem value="this-year">This year</SelectItem>
                        <SelectItem value="custom">Custom range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Owner</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select owner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Users</SelectItem>
                        <SelectItem value="john-smith">John Smith</SelectItem>
                        <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                        <SelectItem value="mike-davis">Mike Davis</SelectItem>
                        <SelectItem value="unassigned">Unassigned</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Custom Date From</Label>
                    <Input type="date" placeholder="Select start date" />
                  </div>
                  <div className="space-y-2">
                    <Label>Custom Date To</Label>
                    <Input type="date" placeholder="Select end date" />
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Apply Filter
                </Button>
                <Button variant="outline">
                  <Save className="h-4 w-4 mr-2" />
                  Save Filter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Saved Filters</CardTitle>
              <CardDescription>Your frequently used filter combinations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {savedFilters.map((filter, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{filter.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{filter.description}</p>
                        <Badge variant="secondary" className="mt-2 text-xs">
                          {filter.count} results
                        </Badge>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost">Apply</Button>
                        <Button size="sm" variant="ghost">
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Filter Results</CardTitle>
              <CardDescription>Current filter results summary</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center border rounded-lg p-4 bg-muted/50">
                  <div className="text-2xl font-bold">247</div>
                  <div className="text-sm text-muted-foreground">Records match current filters</div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>New:</span>
                    <Badge variant="secondary">89</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Qualified:</span>
                    <Badge variant="secondary">64</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Contacted:</span>
                    <Badge variant="secondary">52</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Converted:</span>
                    <Badge variant="secondary">42</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                Export filtered data
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Bulk update records
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Create report from filter
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Set up alert for changes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Filter;
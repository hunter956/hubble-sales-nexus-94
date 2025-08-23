import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

import { Download, FileText, FileSpreadsheet, Calendar } from "lucide-react";

const ExportReport = () => {
  const exportFormats = [
    { value: "pdf", label: "PDF", icon: FileText },
    { value: "excel", label: "Excel", icon: FileSpreadsheet },
    { value: "csv", label: "CSV", icon: FileSpreadsheet }
  ];

  const reportTypes = [
    "Sales Summary",
    "Lead Report",
    "Opportunity Pipeline",
    "Customer List",
    "Activity Report",
    "Support Tickets"
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Export Reports</h1>
        <p className="text-muted-foreground">Export your CRM data in various formats</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Export Configuration</CardTitle>
            <CardDescription>Select data and format for export</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Report Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  {reportTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Date Range</Label>
              <div className="flex gap-2">
                <Input type="date" placeholder="Start date" />
                <Input type="date" placeholder="End date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Export Format</Label>
              <div className="grid gap-2">
                {exportFormats.map((format) => (
                  <div key={format.value} className="flex items-center space-x-2">
                    <Checkbox id={format.value} />
                    <label htmlFor={format.value} className="flex items-center gap-2 text-sm font-medium">
                      <format.icon className="h-4 w-4" />
                      {format.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Include Fields</Label>
              <div className="grid gap-2">
                {["Contact Information", "Company Details", "Activity History", "Custom Fields", "Notes"].map((field) => (
                  <div key={field} className="flex items-center space-x-2">
                    <Checkbox id={field.toLowerCase().replace(/\s+/g, '-')} defaultChecked />
                    <label htmlFor={field.toLowerCase().replace(/\s+/g, '-')} className="text-sm font-medium">
                      {field}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Exports</CardTitle>
            <CardDescription>Your recently exported reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Q3 Sales Report", format: "PDF", date: "Aug 15, 2024", size: "2.4 MB" },
                { name: "Lead Analysis", format: "Excel", date: "Aug 14, 2024", size: "1.8 MB" },
                { name: "Customer List", format: "CSV", date: "Aug 13, 2024", size: "524 KB" },
                { name: "Activity Summary", format: "PDF", date: "Aug 12, 2024", size: "1.2 MB" }
              ].map((export_item, index) => (
                <div key={index} className="flex items-center justify-between border rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium text-sm">{export_item.name}</h4>
                      <p className="text-xs text-muted-foreground">{export_item.format} • {export_item.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{export_item.size}</span>
                    <Button size="sm" variant="ghost">
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExportReport;
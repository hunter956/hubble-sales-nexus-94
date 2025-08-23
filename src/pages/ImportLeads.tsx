import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Upload, 
  FileSpreadsheet, 
  Download, 
  CheckCircle, 
  AlertCircle, 
  RefreshCw,
  FileText,
  Users
} from "lucide-react";

const ImportLeads = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const fieldMappings = [
    { csvField: "Full Name", crmField: "name", required: true, mapped: true },
    { csvField: "Email Address", crmField: "email", required: true, mapped: true },
    { csvField: "Phone", crmField: "phone", required: false, mapped: true },
    { csvField: "Company", crmField: "company", required: false, mapped: true },
    { csvField: "Job Title", crmField: "title", required: false, mapped: false },
    { csvField: "Source", crmField: "source", required: false, mapped: true },
    { csvField: "Industry", crmField: "industry", required: false, mapped: false }
  ];

  const importHistory = [
    { date: "Aug 15, 2024", file: "leads_batch_1.csv", records: 245, success: 240, failed: 5, status: "completed" },
    { date: "Aug 12, 2024", file: "marketing_leads.xlsx", records: 156, success: 156, failed: 0, status: "completed" },
    { date: "Aug 10, 2024", file: "trade_show_contacts.csv", records: 89, success: 85, failed: 4, status: "completed" },
    { date: "Aug 8, 2024", file: "webinar_attendees.csv", records: 178, success: 175, failed: 3, status: "completed" }
  ];

  const handleFileUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Import Leads</h1>
        <p className="text-muted-foreground">Upload and import leads from CSV, Excel, or other data sources</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                <CardTitle>Upload Data File</CardTitle>
              </div>
              <CardDescription>Select and upload your leads data file</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <FileSpreadsheet className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-lg font-medium">Drop your file here or click to browse</p>
                    <p className="text-sm text-muted-foreground">Supports CSV, Excel (.xlsx, .xls) files up to 10MB</p>
                  </div>
                  <Input type="file" accept=".csv,.xlsx,.xls" className="max-w-xs mx-auto" />
                </div>
              </div>

              {isUploading && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Uploading...</span>
                    <span className="text-sm text-muted-foreground">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} />
                </div>
              )}

              <div className="space-y-4">
                <h4 className="font-medium">Import Settings</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Default Lead Status</Label>
                    <Select defaultValue="new">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="qualified">Qualified</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Default Lead Owner</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select owner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="john-smith">John Smith</SelectItem>
                        <SelectItem value="sarah-johnson">Sarah Johnson</SelectItem>
                        <SelectItem value="mike-davis">Mike Davis</SelectItem>
                        <SelectItem value="unassigned">Unassigned</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Import Options</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="skip-duplicates" defaultChecked />
                      <label htmlFor="skip-duplicates" className="text-sm font-medium">
                        Skip duplicate records (based on email)
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="send-welcome" />
                      <label htmlFor="send-welcome" className="text-sm font-medium">
                        Send welcome email to new leads
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="create-activities" defaultChecked />
                      <label htmlFor="create-activities" className="text-sm font-medium">
                        Create follow-up activities automatically
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Field Mapping</CardTitle>
              <CardDescription>Map CSV columns to CRM fields</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    Please map your CSV columns to the appropriate CRM fields. Required fields are marked with *.
                  </AlertDescription>
                </Alert>

                <div className="space-y-3">
                  {fieldMappings.map((field, index) => (
                    <div key={index} className="grid gap-4 md:grid-cols-3 items-center border rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{field.csvField}</span>
                        {field.required && <Badge variant="destructive" className="text-xs">Required</Badge>}
                      </div>
                      <div className="text-center text-sm text-muted-foreground">→</div>
                      <Select defaultValue={field.mapped ? field.crmField : ""}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select CRM field" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="name">Full Name</SelectItem>
                          <SelectItem value="email">Email Address</SelectItem>
                          <SelectItem value="phone">Phone Number</SelectItem>
                          <SelectItem value="company">Company</SelectItem>
                          <SelectItem value="title">Job Title</SelectItem>
                          <SelectItem value="source">Lead Source</SelectItem>
                          <SelectItem value="industry">Industry</SelectItem>
                          <SelectItem value="notes">Notes</SelectItem>
                          <SelectItem value="skip">Skip this field</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Import Preview</CardTitle>
              <CardDescription>Preview of data to be imported</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center border rounded-lg p-4 bg-muted/50">
                  <div className="text-2xl font-bold">324</div>
                  <div className="text-sm text-muted-foreground">Records ready to import</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Valid records:</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">318</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Invalid records:</span>
                    <Badge variant="secondary" className="bg-red-100 text-red-800">6</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span>Duplicates found:</span>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">12</Badge>
                  </div>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    6 records have missing required fields and will be skipped.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Validation</CardTitle>
              <CardDescription>Check data quality issues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Email format validation</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Phone number format</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Required fields check</span>
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Duplicate detection</span>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-2">
            <Button className="flex-1" onClick={handleFileUpload}>
              <Users className="h-4 w-4 mr-2" />
              Import Leads
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Import History</CardTitle>
          <CardDescription>Previous import operations and their results</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {importHistory.map((import_item, index) => (
              <div key={index} className="flex items-center justify-between border rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">{import_item.file}</h4>
                    <p className="text-sm text-muted-foreground">{import_item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right text-sm">
                    <p className="font-medium">{import_item.records} records</p>
                    <p className="text-muted-foreground">
                      {import_item.success} success, {import_item.failed} failed
                    </p>
                  </div>
                  <Badge variant={import_item.status === 'completed' ? 'secondary' : 'destructive'}>
                    {import_item.status}
                  </Badge>
                  <Button size="sm" variant="outline">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Download Template</CardTitle>
          <CardDescription>Get a sample file with the correct format for importing leads</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download CSV Template
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Excel Template
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImportLeads;
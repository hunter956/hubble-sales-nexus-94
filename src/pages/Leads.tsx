import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Filter, Download, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Leads = () => {
  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@techcorp.com",
      company: "TechCorp Inc",
      phone: "(555) 123-4567",
      source: "Website",
      status: "Hot",
      value: "$45,000",
      created: "Aug 15, 2024",
      initials: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael@startupxyz.com",
      company: "StartupXYZ",
      phone: "(555) 234-5678",
      source: "Referral",
      status: "Warm",
      value: "$23,000",
      created: "Aug 14, 2024",
      initials: "MC"
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily@globalsol.com",
      company: "Global Solutions",
      phone: "(555) 345-6789",
      source: "LinkedIn",
      status: "Hot",
      value: "$67,000",
      created: "Aug 13, 2024",
      initials: "ED"
    },
    {
      id: 4,
      name: "Robert Wilson",
      email: "robert@innovateco.com",
      company: "InnovateCo",
      phone: "(555) 456-7890",
      source: "Cold Call",
      status: "Cold",
      value: "$34,000",
      created: "Aug 12, 2024",
      initials: "RW"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      Hot: "bg-red-100 text-red-700 border-red-200",
      Warm: "bg-orange-100 text-orange-700 border-orange-200", 
      Cold: "bg-blue-100 text-blue-700 border-blue-200"
    };
    return variants[status as keyof typeof variants] || variants.Cold;
  };

  const getSourceBadge = (source: string) => {
    const variants = {
      Website: "bg-green-100 text-green-700 border-green-200",
      Referral: "bg-purple-100 text-purple-700 border-purple-200",
      LinkedIn: "bg-blue-100 text-blue-700 border-blue-200",
      "Cold Call": "bg-gray-100 text-gray-700 border-gray-200"
    };
    return variants[source as keyof typeof variants] || variants.Website;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Leads</h1>
          <p className="text-gray-600 mt-1">Manage and track your sales leads</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="btn-secondary">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="btn-primary">
            <Plus className="h-4 w-4 mr-2" />
            Add Lead
          </Button>
        </div>
      </div>

      {/* Main Card */}
      <Card className="card-enhanced">
        <CardHeader className="border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-gray-900">Leads Overview</CardTitle>
              <CardDescription>All your sales prospects in one place</CardDescription>
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search leads..." className="pl-10 w-64 border-gray-300 focus:border-primary" />
              </div>
              <Button variant="outline" size="icon" className="border-gray-300 hover:border-primary">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-100">
                  <TableHead className="font-semibold text-gray-700">Contact</TableHead>
                  <TableHead className="font-semibold text-gray-700">Company</TableHead>
                  <TableHead className="font-semibold text-gray-700">Source</TableHead>
                  <TableHead className="font-semibold text-gray-700">Status</TableHead>
                  <TableHead className="font-semibold text-gray-700">Value</TableHead>
                  <TableHead className="font-semibold text-gray-700">Created</TableHead>
                  <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leads.map((lead) => (
                  <TableRow key={lead.id} className="border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-white text-xs font-medium flex items-center justify-center">
                          {lead.initials}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{lead.name}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Mail className="h-3 w-3" />
                              {lead.email}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Phone className="h-3 w-3" />
                              {lead.phone}
                            </div>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-gray-900">{lead.company}</TableCell>
                    <TableCell>
                      <Badge className={cn("text-xs border", getSourceBadge(lead.source))}>
                        {lead.source}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={cn("text-xs border font-medium", getStatusBadge(lead.status))}>
                        {lead.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-gray-900">{lead.value}</TableCell>
                    <TableCell className="text-gray-600">{lead.created}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 hover:bg-blue-50">
                          View
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                          Edit
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leads;
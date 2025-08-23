import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Filter, Building2, Users, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Customers = () => {
  const navigate = useNavigate();
  const customers = [
    {
      id: 1,
      name: "TechCorp Inc",
      type: "Enterprise",
      contacts: 5,
      revenue: "$450,000",
      status: "Active",
      industry: "Technology",
      primaryContact: "Sarah Johnson",
      email: "contact@techcorp.com",
      phone: "(555) 123-4567",
      lastActivity: "2024-08-15"
    },
    {
      id: 2,
      name: "StartupXYZ",
      type: "SMB", 
      contacts: 2,
      revenue: "$85,000",
      status: "Active",
      industry: "Software",
      primaryContact: "Michael Chen",
      email: "hello@startupxyz.com",
      phone: "(555) 234-5678",
      lastActivity: "2024-08-14"
    },
    {
      id: 3,
      name: "Global Solutions Ltd",
      type: "Enterprise",
      contacts: 8,
      revenue: "$750,000",
      status: "Active",
      industry: "Consulting",
      primaryContact: "Emily Davis",
      email: "info@globalsol.com",
      phone: "(555) 345-6789",
      lastActivity: "2024-08-13"
    },
    {
      id: 4,
      name: "InnovateCo",
      type: "Mid-Market",
      contacts: 3,
      revenue: "$220,000",
      status: "Inactive",
      industry: "Manufacturing",
      primaryContact: "Robert Wilson",
      email: "contact@innovateco.com",
      phone: "(555) 456-7890",
      lastActivity: "2024-08-10"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      "Enterprise": "bg-purple-100 text-purple-800",
      "Mid-Market": "bg-blue-100 text-blue-800", 
      "SMB": "bg-orange-100 text-orange-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">All Customers</h1>
          <p className="text-muted-foreground">Manage your customer accounts and relationships</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/accounts')}>
            <Building2 className="h-4 w-4 mr-2" />
            Accounts
          </Button>
          <Button onClick={() => navigate('/add-customer')}>
            <Plus className="h-4 w-4 mr-2" />
            Add Customer
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+12 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Accounts</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">189</div>
            <p className="text-xs text-muted-foreground">76.5% active rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <div className="h-4 w-4 text-muted-foreground">$</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2.4M</div>
            <p className="text-xs text-muted-foreground">+18.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Deal Size</CardTitle>
            <div className="h-4 w-4 text-muted-foreground">📊</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$47K</div>
            <p className="text-xs text-muted-foreground">+5.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Customer Accounts</CardTitle>
              <CardDescription>All your customer accounts and key information</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search customers..." className="pl-10 w-64" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customers.map((customer) => (
              <div key={customer.id} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{customer.name}</h3>
                      <p className="text-sm text-muted-foreground">{customer.industry}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={getStatusColor(customer.status)}>
                      {customer.status}
                    </Badge>
                    <Badge className={getTypeColor(customer.type)}>
                      {customer.type}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Primary Contact</p>
                    <p className="font-medium">{customer.primaryContact}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Contacts</p>
                    <p className="font-medium">{customer.contacts} contacts</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Revenue</p>
                    <p className="font-medium text-green-600">{customer.revenue}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Activity</p>
                    <p className="font-medium">{customer.lastActivity}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {customer.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {customer.phone}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="ghost">View Details</Button>
                  <Button size="sm" variant="ghost">Contacts</Button>
                  <Button size="sm" variant="ghost">Opportunities</Button>
                  <Button size="sm" variant="ghost">Activity</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Customers;
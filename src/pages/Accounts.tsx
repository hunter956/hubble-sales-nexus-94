import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building, 
  Users, 
  DollarSign, 
  TrendingUp,
  Search,
  Filter,
  Download,
  Plus,
  Phone,
  Mail,
  MapPin,
  Calendar,
  MoreHorizontal
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const Accounts = () => {
  const navigate = useNavigate();
  const accountStats = [
    {
      title: "Total Accounts",
      value: "1,247",
      change: "+8.2%",
      trend: "up",
      icon: Building,
      description: "Active accounts"
    },
    {
      title: "Enterprise Accounts",
      value: "89",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "Large customers"
    },
    {
      title: "Total ARR",
      value: "$12.4M",
      change: "+15.7%",
      trend: "up",
      icon: DollarSign,
      description: "Annual recurring"
    },
    {
      title: "Avg Account Value",
      value: "$9,951",
      change: "+6.8%",
      trend: "up",
      icon: TrendingUp,
      description: "Per account"
    }
  ];

  const accounts = [
    {
      id: 1,
      name: "TechCorp Global",
      industry: "Technology",
      type: "Enterprise",
      revenue: 2500000,
      employees: "1000+",
      contacts: 12,
      opportunities: 3,
      lastActivity: "2 hours ago",
      status: "Active",
      owner: "Sarah Johnson",
      location: "San Francisco, CA",
      phone: "+1 (555) 123-4567",
      email: "contact@techcorp.com",
      website: "techcorp.com"
    },
    {
      id: 2,
      name: "Innovate Solutions",
      industry: "Healthcare",
      type: "SMB",
      revenue: 850000,
      employees: "201-500",
      contacts: 8,
      opportunities: 2,
      lastActivity: "1 day ago",
      status: "Active",
      owner: "Mike Davis",
      location: "Austin, TX",
      phone: "+1 (555) 234-5678",
      email: "info@innovatesolutions.com",
      website: "innovatesolutions.com"
    },
    {
      id: 3,
      name: "Growth Dynamics",
      industry: "Finance",
      type: "Enterprise",
      revenue: 1800000,
      employees: "501-1000",
      contacts: 15,
      opportunities: 5,
      lastActivity: "3 hours ago",
      status: "Active",
      owner: "Lisa Brown",
      location: "New York, NY",
      phone: "+1 (555) 345-6789",
      email: "contact@growthdynamics.com",
      website: "growthdynamics.com"
    },
    {
      id: 4,
      name: "ServiceFirst Inc",
      industry: "Consulting",
      type: "SMB",
      revenue: 650000,
      employees: "51-200",
      contacts: 6,
      opportunities: 1,
      lastActivity: "5 days ago",
      status: "At Risk",
      owner: "John Smith",
      location: "Chicago, IL",
      phone: "+1 (555) 456-7890",
      email: "hello@servicefirst.com",
      website: "servicefirst.com"
    },
    {
      id: 5,
      name: "CloudFirst Corp",
      industry: "Technology",
      type: "Startup",
      revenue: 320000,
      employees: "11-50",
      contacts: 4,
      opportunities: 2,
      lastActivity: "1 week ago",
      status: "Inactive",
      owner: "Emily Wilson",
      location: "Seattle, WA",
      phone: "+1 (555) 567-8901",
      email: "team@cloudfirst.com",
      website: "cloudfirst.com"
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      "Active": "bg-green-100 text-green-800",
      "At Risk": "bg-yellow-100 text-yellow-800",
      "Inactive": "bg-red-100 text-red-800",
      "Prospect": "bg-blue-100 text-blue-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      "Enterprise": "bg-purple-100 text-purple-800",
      "SMB": "bg-blue-100 text-blue-800",
      "Startup": "bg-green-100 text-green-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Accounts</h1>
          <p className="text-muted-foreground">Manage your customer accounts and relationships</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/filter')}>
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" onClick={() => navigate('/export-report')}>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => navigate('/add-customer')}>
            <Plus className="h-4 w-4 mr-2" />
            Add Account
          </Button>
        </div>
      </div>

      {/* Account Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {accountStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-lg ${stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
                  <stat.icon className={`h-5 w-5 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} />
                </div>
              </div>
              <div className="flex items-center mt-2">
                <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
                <span className="text-sm text-muted-foreground ml-1">{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Account Filters</CardTitle>
          <CardDescription>Search and filter your accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search Accounts</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name, industry..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Account Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="enterprise">Enterprise</SelectItem>
                  <SelectItem value="smb">SMB</SelectItem>
                  <SelectItem value="startup">Startup</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="at-risk">At Risk</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="prospect">Prospect</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Account Owner</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All owners" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Owners</SelectItem>
                  <SelectItem value="sarah">Sarah Johnson</SelectItem>
                  <SelectItem value="mike">Mike Davis</SelectItem>
                  <SelectItem value="lisa">Lisa Brown</SelectItem>
                  <SelectItem value="john">John Smith</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accounts List */}
      <Card>
        <CardHeader>
          <CardTitle>All Accounts</CardTitle>
          <CardDescription>Your customer account database</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {accounts.map((account) => (
              <div key={account.id} className="border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{account.name}</h3>
                        <Badge className={getStatusColor(account.status)}>
                          {account.status}
                        </Badge>
                        <Badge className={getTypeColor(account.type)} variant="outline">
                          {account.type}
                        </Badge>
                      </div>
                      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          {account.industry}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {account.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {account.employees} employees
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {account.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {account.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {account.lastActivity}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-lg font-semibold text-green-600">
                        {formatCurrency(account.revenue)}
                      </div>
                      <div className="text-sm text-muted-foreground">Annual Revenue</div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Account</DropdownMenuItem>
                        <DropdownMenuItem>Add Contact</DropdownMenuItem>
                        <DropdownMenuItem>Create Opportunity</DropdownMenuItem>
                        <DropdownMenuItem>View Activities</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Account Owner:</span>
                    <div className="font-medium">{account.owner}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Contacts:</span>
                    <div className="font-medium">{account.contacts} contacts</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Open Opportunities:</span>
                    <div className="font-medium">{account.opportunities} opportunities</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Website:</span>
                    <div className="font-medium text-blue-600">{account.website}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Accounts;
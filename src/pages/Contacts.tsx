import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  User, 
  Users, 
  Building, 
  TrendingUp,
  Search,
  Filter,
  Download,
  Plus,
  Phone,
  Mail,
  MapPin,
  Calendar,
  MoreHorizontal,
  Star,
  MessageSquare
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const contactStats = [
    {
      title: "Total Contacts",
      value: "3,847",
      change: "+12.3%",
      trend: "up",
      icon: Users,
      description: "All contacts"
    },
    {
      title: "Decision Makers",
      value: "428",
      change: "+8.7%",
      trend: "up",
      icon: Star,
      description: "Key contacts"
    },
    {
      title: "Active Contacts",
      value: "2,156",
      change: "+15.2%",
      trend: "up",
      icon: TrendingUp,
      description: "Recently engaged"
    },
    {
      title: "New This Month",
      value: "89",
      change: "+23.1%",
      trend: "up",
      icon: User,
      description: "Added contacts"
    }
  ];

  const contacts = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      title: "Chief Executive Officer",
      company: "TechCorp Global",
      email: "john.doe@techcorp.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      status: "Active",
      type: "Decision Maker",
      lastContact: "2 hours ago",
      source: "Website",
      owner: "Sarah Johnson",
      avatar: null,
      department: "Executive",
      opportunities: 3,
      activities: 15
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      title: "Chief Technology Officer",
      company: "Innovate Solutions",
      email: "jane.smith@innovate.com",
      phone: "+1 (555) 234-5678",
      location: "Austin, TX",
      status: "Active",
      type: "Influencer",
      lastContact: "1 day ago",
      source: "LinkedIn",
      owner: "Mike Davis",
      avatar: null,
      department: "Technology",
      opportunities: 2,
      activities: 8
    },
    {
      id: 3,
      firstName: "Mike",
      lastName: "Johnson",
      title: "VP of Sales",
      company: "Growth Dynamics",
      email: "mike.j@growthdynamics.com",
      phone: "+1 (555) 345-6789",
      location: "New York, NY",
      status: "Active",
      type: "Decision Maker",
      lastContact: "3 hours ago",
      source: "Referral",
      owner: "Lisa Brown",
      avatar: null,
      department: "Sales",
      opportunities: 5,
      activities: 22
    },
    {
      id: 4,
      firstName: "Sarah",
      lastName: "Wilson",
      title: "Procurement Manager",
      company: "ServiceFirst Inc",
      email: "sarah.wilson@servicefirst.com",
      phone: "+1 (555) 456-7890",
      location: "Chicago, IL",
      status: "Cold",
      type: "User",
      lastContact: "2 weeks ago",
      source: "Cold Call",
      owner: "John Smith",
      avatar: null,
      department: "Operations",
      opportunities: 1,
      activities: 3
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Chen",
      title: "Engineering Director",
      company: "CloudFirst Corp",
      email: "david.chen@cloudfirst.com",
      phone: "+1 (555) 567-8901",
      location: "Seattle, WA",
      status: "Warm",
      type: "Influencer",
      lastContact: "5 days ago",
      source: "Trade Show",
      owner: "Emily Wilson",
      avatar: null,
      department: "Engineering",
      opportunities: 2,
      activities: 12
    }
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      "Active": "bg-green-100 text-green-800",
      "Warm": "bg-yellow-100 text-yellow-800",
      "Cold": "bg-blue-100 text-blue-800",
      "Inactive": "bg-gray-100 text-gray-800"
    };
    return colors[status] || "bg-gray-100 text-gray-800";
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      "Decision Maker": "bg-purple-100 text-purple-800",
      "Influencer": "bg-orange-100 text-orange-800",
      "User": "bg-blue-100 text-blue-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const getSourceColor = (source: string) => {
    const colors: Record<string, string> = {
      "Website": "bg-blue-100 text-blue-800",
      "LinkedIn": "bg-purple-100 text-purple-800",
      "Referral": "bg-green-100 text-green-800",
      "Cold Call": "bg-orange-100 text-orange-800",
      "Trade Show": "bg-pink-100 text-pink-800"
    };
    return colors[source] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Contacts</h1>
          <p className="text-muted-foreground">Manage your business contacts and relationships</p>
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
          <Button onClick={() => navigate('/customers/contacts/add')}>
            <Plus className="h-4 w-4 mr-2" />
            Add Contact
          </Button>
        </div>
      </div>

      {/* Contact Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {contactStats.map((stat, index) => (
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
          <CardTitle>Contact Filters</CardTitle>
          <CardDescription>Search and filter your contacts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search Contacts</label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name, company..." className="pl-10" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="decision-maker">Decision Maker</SelectItem>
                  <SelectItem value="influencer">Influencer</SelectItem>
                  <SelectItem value="user">User</SelectItem>
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
                  <SelectItem value="warm">Warm</SelectItem>
                  <SelectItem value="cold">Cold</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Source</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All sources" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sources</SelectItem>
                  <SelectItem value="website">Website</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                  <SelectItem value="cold-call">Cold Call</SelectItem>
                  <SelectItem value="trade-show">Trade Show</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Owner</label>
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

      {/* Contacts List */}
      <Card>
        <CardHeader>
          <CardTitle>All Contacts</CardTitle>
          <CardDescription>Your contact database</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="border rounded-lg p-6 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={contact.avatar || undefined} />
                      <AvatarFallback>
                        {contact.firstName.charAt(0)}{contact.lastName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">
                          {contact.firstName} {contact.lastName}
                        </h3>
                        <Badge className={getStatusColor(contact.status)}>
                          {contact.status}
                        </Badge>
                        <Badge className={getTypeColor(contact.type)} variant="outline">
                          {contact.type}
                        </Badge>
                      </div>
                      <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          {contact.title} at {contact.company}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {contact.email}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {contact.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {contact.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Last contact: {contact.lastContact}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={getSourceColor(contact.source)} variant="secondary">
                            {contact.source}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Contact</DropdownMenuItem>
                        <DropdownMenuItem>Add to Campaign</DropdownMenuItem>
                        <DropdownMenuItem>Create Opportunity</DropdownMenuItem>
                        <DropdownMenuItem>Schedule Meeting</DropdownMenuItem>
                        <DropdownMenuItem>View Activities</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-5 text-sm">
                  <div>
                    <span className="text-muted-foreground">Owner:</span>
                    <div className="font-medium">{contact.owner}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Department:</span>
                    <div className="font-medium">{contact.department}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Opportunities:</span>
                    <div className="font-medium">{contact.opportunities} active</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Activities:</span>
                    <div className="font-medium">{contact.activities} total</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 p-2">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 p-2">
                      <Calendar className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 p-2">
                      <Star className="h-4 w-4" />
                    </Button>
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

export default Contacts;
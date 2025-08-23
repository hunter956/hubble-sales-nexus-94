import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  Users, 
  Phone, 
  Mail, 
  Calendar, 
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  BarChart3,
  PieChart
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LeadSources = () => {
  const navigate = useNavigate();
  const leadSources = [
    {
      id: 1,
      name: "Website",
      description: "Organic website visitors and form submissions",
      icon: Globe,
      totalLeads: 489,
      thisMonth: 67,
      conversionRate: 28.5,
      avgValue: 4200,
      color: "bg-blue-500",
      trend: "+12.3%"
    },
    {
      id: 2,
      name: "Referrals",
      description: "Customer and partner referrals",
      icon: Users,
      totalLeads: 234,
      thisMonth: 23,
      conversionRate: 45.2,
      avgValue: 6800,
      color: "bg-green-500",
      trend: "+8.7%"
    },
    {
      id: 3,
      name: "LinkedIn",
      description: "LinkedIn outreach and connections",
      icon: Mail,
      totalLeads: 178,
      thisMonth: 31,
      conversionRate: 22.1,
      avgValue: 3900,
      color: "bg-blue-600",
      trend: "+15.2%"
    },
    {
      id: 4,
      name: "Cold Calls",
      description: "Outbound calling campaigns",
      icon: Phone,
      totalLeads: 123,
      thisMonth: 18,
      conversionRate: 18.7,
      avgValue: 3200,
      color: "bg-purple-500",
      trend: "-3.4%"
    },
    {
      id: 5,
      name: "Trade Shows",
      description: "Industry events and conferences",
      icon: Calendar,
      totalLeads: 67,
      thisMonth: 0,
      conversionRate: 35.8,
      avgValue: 7500,
      color: "bg-orange-500",
      trend: "0%"
    }
  ];

  const monthlyTrends = [
    { month: "Jan", website: 45, referrals: 20, linkedin: 15, coldcalls: 12, tradeshows: 8 },
    { month: "Feb", website: 52, referrals: 18, linkedin: 22, coldcalls: 14, tradeshows: 0 },
    { month: "Mar", website: 48, referrals: 25, linkedin: 19, coldcalls: 16, tradeshows: 24 },
    { month: "Apr", website: 61, referrals: 22, linkedin: 28, coldcalls: 11, tradeshows: 0 },
    { month: "May", website: 55, referrals: 19, linkedin: 24, coldcalls: 13, tradeshows: 0 },
    { month: "Jun", website: 67, referrals: 23, linkedin: 31, coldcalls: 18, tradeshows: 0 }
  ];

  const sourcePerformance = [
    { source: "Website - Contact Form", leads: 234, conversion: 32.1 },
    { source: "Website - Free Trial", leads: 156, conversion: 41.7 },
    { source: "Website - Newsletter", leads: 99, conversion: 18.2 },
    { source: "LinkedIn - InMail", leads: 89, conversion: 28.1 },
    { source: "LinkedIn - Connection", leads: 67, conversion: 15.6 },
    { source: "Referral - Customer", leads: 145, conversion: 52.4 },
    { source: "Referral - Partner", leads: 89, conversion: 36.0 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Lead Sources</h1>
          <p className="text-muted-foreground">Analyze and manage your lead generation channels</p>
        </div>
        <Button onClick={() => navigate('/add-source')}>
          <Plus className="h-4 w-4 mr-2" />
          Add Source
        </Button>
      </div>

      {/* Source Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {leadSources.map((source) => (
          <Card key={source.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-lg ${source.color}`}>
                    <source.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{source.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{source.description}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold">{source.totalLeads}</p>
                  <p className="text-xs text-muted-foreground">Total Leads</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">{source.thisMonth}</p>
                  <p className="text-xs text-muted-foreground">This Month</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Conversion Rate</span>
                  <span className="font-medium">{source.conversionRate}%</span>
                </div>
                <Progress value={source.conversionRate} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">${source.avgValue.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">Avg. Value</p>
                </div>
                <Badge variant={source.trend.startsWith('+') ? 'secondary' : 'destructive'} className="text-xs">
                  {source.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Performance Breakdown */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <CardTitle>Source Performance</CardTitle>
            </div>
            <CardDescription>Detailed breakdown by source type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sourcePerformance.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{item.source}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{item.leads} leads</span>
                      <Badge variant="outline" className="text-xs">
                        {item.conversion}%
                      </Badge>
                    </div>
                  </div>
                  <Progress value={item.conversion} className="h-1" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <CardTitle>Monthly Trends</CardTitle>
            </div>
            <CardDescription>Lead generation trends over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyTrends.map((month, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{month.month}</span>
                    <span className="text-sm text-muted-foreground">
                      {month.website + month.referrals + month.linkedin + month.coldcalls + month.tradeshows} total
                    </span>
                  </div>
                  <div className="flex gap-1 h-2">
                    <div 
                      className="bg-blue-500 rounded-sm"
                      style={{ width: `${(month.website / 100) * 100}%` }}
                    ></div>
                    <div 
                      className="bg-green-500 rounded-sm"
                      style={{ width: `${(month.referrals / 100) * 100}%` }}
                    ></div>
                    <div 
                      className="bg-blue-600 rounded-sm"
                      style={{ width: `${(month.linkedin / 100) * 100}%` }}
                    ></div>
                    <div 
                      className="bg-purple-500 rounded-sm"
                      style={{ width: `${(month.coldcalls / 100) * 100}%` }}
                    ></div>
                    <div 
                      className="bg-orange-500 rounded-sm"
                      style={{ width: `${(month.tradeshows / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Source Management */}
      <Card>
        <CardHeader>
          <CardTitle>Manage Lead Sources</CardTitle>
          <CardDescription>Add, edit, or configure your lead sources</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="source-name">Source Name</Label>
              <Input id="source-name" placeholder="Enter source name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="source-type">Source Type</Label>
              <select className="w-full px-3 py-2 border border-input bg-background rounded-md">
                <option>Website</option>
                <option>Social Media</option>
                <option>Referral</option>
                <option>Advertisement</option>
                <option>Event</option>
                <option>Direct Mail</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="source-description">Description</Label>
              <Input id="source-description" placeholder="Brief description" />
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button>Add Source</Button>
            <Button variant="outline">Import Sources</Button>
          </div>
        </CardContent>
      </Card>

      {/* ROI Analysis */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-primary" />
            <CardTitle>ROI Analysis</CardTitle>
          </div>
          <CardDescription>Return on investment by lead source</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {leadSources.slice(0, 4).map((source, index) => (
              <div key={index} className="text-center border rounded-lg p-4">
                <div className={`w-12 h-12 rounded-full ${source.color} mx-auto mb-2 flex items-center justify-center`}>
                  <source.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-medium">{source.name}</h4>
                <p className="text-2xl font-bold text-primary">
                  ${(source.avgValue * source.conversionRate / 100).toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">Revenue per lead</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadSources;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Plus, DollarSign, TrendingUp, Calendar, Users, Target, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Opportunities = () => {
  const navigate = useNavigate();
  const pipelineStages = [
    { name: "Prospecting", count: 15, value: "$450K", color: "bg-blue-600", percentage: 12 },
    { name: "Qualification", count: 8, value: "$320K", color: "bg-indigo-600", percentage: 25 },
    { name: "Proposal", count: 5, value: "$275K", color: "bg-purple-600", percentage: 40 },
    { name: "Negotiation", count: 3, value: "$180K", color: "bg-orange-600", percentage: 75 },
    { name: "Closed Won", count: 12, value: "$890K", color: "bg-green-600", percentage: 100 }
  ];

  const opportunities = [
    {
      id: 1,
      name: "Enterprise Package - ABC Corp",
      company: "ABC Corporation",
      value: 125000,
      stage: "Negotiation",
      probability: 80,
      closeDate: "Sep 15, 2024",
      owner: "John Smith",
      initials: "AC"
    },
    {
      id: 2,
      name: "Software License - TechStart",
      company: "TechStart Inc",
      value: 45000,
      stage: "Proposal",
      probability: 60,
      closeDate: "Sep 30, 2024",
      owner: "Sarah Johnson",
      initials: "TS"
    },
    {
      id: 3,
      name: "Consulting Services - MegaCorp",
      company: "MegaCorp Ltd",
      value: 78000,
      stage: "Qualification", 
      probability: 45,
      closeDate: "Oct 15, 2024",
      owner: "Mike Chen",
      initials: "MC"
    },
    {
      id: 4,
      name: "Premium Support - GlobalTech",
      company: "GlobalTech Solutions",
      value: 92000,
      stage: "Prospecting",
      probability: 25,
      closeDate: "Nov 01, 2024",
      owner: "Emily Davis",
      initials: "GT"
    }
  ];

  const getStageColor = (stage: string) => {
    const stageColors: Record<string, string> = {
      "Prospecting": "bg-blue-100 text-blue-700 border-blue-200",
      "Qualification": "bg-indigo-100 text-indigo-700 border-indigo-200",
      "Proposal": "bg-purple-100 text-purple-700 border-purple-200",
      "Negotiation": "bg-orange-100 text-orange-700 border-orange-200",
      "Closed Won": "bg-green-100 text-green-700 border-green-200"
    };
    return stageColors[stage] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 75) return "text-green-600";
    if (probability >= 50) return "text-orange-600";
    return "text-gray-600";
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sales Pipeline</h1>
          <p className="text-gray-600 mt-1">Track and manage your sales opportunities</p>
        </div>
        <Button className="btn-primary" onClick={() => navigate('/add-opportunity')}>
          <Plus className="h-4 w-4 mr-2" />
          Add Opportunity
        </Button>
      </div>

      {/* Pipeline Overview Cards */}
      <div className="grid gap-6 md:grid-cols-5">
        {pipelineStages.map((stage) => (
          <Card key={stage.name} className="card-enhanced group hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">{stage.name}</CardTitle>
                <div className={cn("w-3 h-3 rounded-full", stage.color)} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">{stage.count}</span>
                  <span className="text-sm text-gray-500">deals</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">{stage.value}</p>
                {stage.name !== "Closed Won" && (
                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Progress</span>
                      <span>{stage.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={cn("h-1.5 rounded-full transition-all duration-500", stage.color)}
                        style={{ width: `${stage.percentage}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        <Card className="card-enhanced">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Pipeline</p>
                <p className="text-2xl font-bold text-gray-900">$2.12M</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-enhanced">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Deal Size</p>
                <p className="text-2xl font-bold text-gray-900">$67K</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-enhanced">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Win Rate</p>
                <p className="text-2xl font-bold text-gray-900">34%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-enhanced">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Sales Cycle</p>
                <p className="text-2xl font-bold text-gray-900">42 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Opportunities */}
      <Card className="card-enhanced">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-gray-900">Active Opportunities</CardTitle>
          <CardDescription>Your current sales opportunities</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {opportunities.map((opp) => (
              <div key={opp.id} className="border border-gray-100 rounded-xl p-6 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary text-white text-sm font-semibold flex items-center justify-center">
                      {opp.initials}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">{opp.name}</h3>
                      <p className="text-gray-600">{opp.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-xl text-gray-900">{formatCurrency(opp.value)}</p>
                    <Badge className={cn("text-xs border font-medium mt-1", getStageColor(opp.stage))}>
                      {opp.stage}
                    </Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Probability:</span>
                    <span className={cn("font-semibold", getProbabilityColor(opp.probability))}>{opp.probability}%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Close Date:</span>
                    <span className="font-medium text-gray-900">{opp.closeDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-600">Owner:</span>
                    <span className="font-medium text-gray-900">{opp.owner}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium text-gray-900">{opp.probability}%</span>
                  </div>
                  <Progress value={opp.probability} className="h-2" />
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80 hover:bg-blue-50">
                    View Details
                  </Button>
                  <Button size="sm" variant="ghost" className="text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Edit
                  </Button>
                  <Button size="sm" variant="ghost" className="text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Activity
                  </Button>
                  <Button size="sm" variant="ghost" className="text-gray-600 hover:text-gray-800 hover:bg-gray-50">
                    Notes
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Opportunities;
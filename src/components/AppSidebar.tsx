import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Target, 
  Building2, 
  HeadphonesIcon, 
  Calendar, 
  BarChart3, 
  Settings,
  ChevronDown,
  TrendingUp,
  Building
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    items: [
      { title: "Overview", href: "/" },
      { title: "Analytics", href: "/analytics" },
      { title: "Reports", href: "/dashboard-reports" }
    ]
  },
  {
    title: "Leads",
    icon: Users,
    items: [
      { title: "All Leads", href: "/leads" },
      { title: "Add Lead", href: "/leads/add" },
      { title: "Import Leads", href: "/leads/import" },
      { title: "Lead Sources", href: "/leads/sources" }
    ]
  },
  {
    title: "Opportunities",
    icon: Target,
    items: [
      { title: "Pipeline", href: "/opportunities" },
      { title: "Add Opportunity", href: "/opportunities/add" },
      { title: "Forecasting", href: "/opportunities/forecasting" },
      { title: "Won Deals", href: "/opportunities/won" }
    ]
  },
  {
    title: "Customers",
    icon: Building2,
    items: [
      { title: "All Customers", href: "/customers" },
      { title: "Add Customer", href: "/customers/add" },
      { title: "Accounts", href: "/customers/accounts" },
      { title: "Contacts", href: "/customers/contacts" }
    ]
  },
  {
    title: "Support",
    icon: HeadphonesIcon,
    items: [
      { title: "All Tickets", href: "/support" },
      { title: "Open Tickets", href: "/support/open" },
      { title: "Create Ticket", href: "/support/create" },
      { title: "Knowledge Base", href: "/support/knowledge" }
    ]
  },
  {
    title: "Activities",
    icon: Calendar,
    items: [
      { title: "Calendar", href: "/activities/calendar" },
      { title: "Tasks", href: "/activities/tasks" },
      { title: "Calls", href: "/activities/calls" },
      { title: "Emails", href: "/activities/emails" }
    ]
  },
  {
    title: "Reports",
    icon: BarChart3,
    items: [
      { title: "Sales Reports", href: "/reports/sales" },
      { title: "Lead Reports", href: "/reports/leads" },
      { title: "Activity Reports", href: "/reports/activities" },
      { title: "Custom Reports", href: "/reports/custom" }
    ]
  }
];

export function AppSidebar() {
  const location = useLocation();
  const { state } = useSidebar();
  const [openGroups, setOpenGroups] = useState<string[]>(["Dashboard"]);

  const isActive = (href: string) => location.pathname === href;
  
  const isInGroup = (items: { href: string }[]) => {
    return items.some(item => location.pathname === item.href);
  };

  const toggleGroup = (groupTitle: string) => {
    setOpenGroups(prev => 
      prev.includes(groupTitle) 
        ? prev.filter(title => title !== groupTitle)
        : [...prev, groupTitle]
    );
  };

  // Keep groups with active items open
  const isGroupOpen = (groupTitle: string, items: { href: string }[]) => {
    return openGroups.includes(groupTitle) || isInGroup(items);
  };

  return (
    <Sidebar className="border-r border-gray-200 bg-white shadow-sm">
      <SidebarHeader className="border-b border-gray-100 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Building className="h-5 w-5 text-white" />
          </div>
          {state !== "collapsed" && (
            <span className="text-xl font-bold text-gray-900">CRM Pro</span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((group) => (
              <SidebarMenuItem key={group.title}>
                <Collapsible
                  open={isGroupOpen(group.title, group.items)}
                  onOpenChange={() => toggleGroup(group.title)}
                >
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      className={cn(
                        "w-full justify-between nav-item rounded-lg px-3 py-2 text-sm font-medium",
                        isInGroup(group.items) && "active"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <group.icon className="h-4 w-4" />
                        {state !== "collapsed" && <span>{group.title}</span>}
                      </div>
                      {state !== "collapsed" && (
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isGroupOpen(group.title, group.items) && "rotate-180"
                        )} />
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  
                  {state !== "collapsed" && (
                    <CollapsibleContent>
                      <SidebarMenuSub className="ml-6 mt-1 space-y-1">
                        {group.items.map((item) => (
                          <SidebarMenuSubItem key={item.href}>
                            <SidebarMenuSubButton asChild>
                              <Link
                                to={item.href}
                                className={cn(
                                  "block rounded-md px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-primary transition-colors duration-200",
                                  isActive(item.href) && "bg-blue-50 text-primary font-medium border-r-2 border-primary"
                                )}
                              >
                                {item.title}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </Collapsible>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator className="my-4" />

        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link
                  to="/settings"
                  className={cn(
                    "nav-item rounded-lg px-3 py-2 text-sm font-medium",
                    location.pathname === "/settings" && "active"
                  )}
                >
                  <Settings className="h-4 w-4" />
                  {state !== "collapsed" && <span>Settings</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-100 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
            JS
          </div>
          {state !== "collapsed" && (
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900 truncate">John Smith</p>
              <p className="text-xs text-gray-500 truncate">Sales Manager</p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

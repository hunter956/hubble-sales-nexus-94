import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModernLayout } from "@/components/Layout/ModernLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Leads from "./pages/Leads";
import Opportunities from "./pages/Opportunities";
import Customers from "./pages/Customers";
import Support from "./pages/Support";
import Activities from "./pages/Activities";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import QuickAdd from "./pages/QuickAdd";
import ExportReport from "./pages/ExportReport";
import CustomizeView from "./pages/CustomizeView";
import CreateReport from "./pages/CreateReport";
import Filter from "./pages/Filter";
import AddLead from "./pages/AddLead";
import LeadsOverview from "./pages/LeadsOverview";
import ImportLeads from "./pages/ImportLeads";
import LeadSources from "./pages/LeadSources";
import AddOpportunity from "./pages/AddOpportunity";
import Forecasting from "./pages/Forecasting";
import WonDeals from "./pages/WonDeals";
import AddCustomer from "./pages/AddCustomer";
import Accounts from "./pages/Accounts";
import Contacts from "./pages/Contacts";
import CalendarView from "./pages/CalendarView";
import NewActivity from "./pages/NewActivity";
import Calls from "./pages/Calls";
import Emails from "./pages/Emails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ModernLayout><Dashboard /></ModernLayout>} />
          <Route path="/quick-add" element={<ModernLayout><QuickAdd /></ModernLayout>} />
          <Route path="/export-report" element={<ModernLayout><ExportReport /></ModernLayout>} />
          <Route path="/customize-view" element={<ModernLayout><CustomizeView /></ModernLayout>} />
          <Route path="/create-report" element={<ModernLayout><CreateReport /></ModernLayout>} />
          <Route path="/filter" element={<ModernLayout><Filter /></ModernLayout>} />
          <Route path="/analytics" element={<ModernLayout><Analytics /></ModernLayout>} />
          <Route path="/dashboard-reports" element={<ModernLayout><Reports /></ModernLayout>} />
          <Route path="/leads" element={<ModernLayout><Leads /></ModernLayout>} />
          <Route path="/leads/add" element={<ModernLayout><AddLead /></ModernLayout>} />
          <Route path="/leads/overview" element={<ModernLayout><LeadsOverview /></ModernLayout>} />
          <Route path="/leads/import" element={<ModernLayout><ImportLeads /></ModernLayout>} />
          <Route path="/leads/sources" element={<ModernLayout><LeadSources /></ModernLayout>} />
          <Route path="/opportunities" element={<ModernLayout><Opportunities /></ModernLayout>} />
          <Route path="/opportunities/add" element={<ModernLayout><AddOpportunity /></ModernLayout>} />
          <Route path="/opportunities/forecasting" element={<ModernLayout><Forecasting /></ModernLayout>} />
          <Route path="/opportunities/won" element={<ModernLayout><WonDeals /></ModernLayout>} />
          <Route path="/customers" element={<ModernLayout><Customers /></ModernLayout>} />
          <Route path="/customers/add" element={<ModernLayout><AddCustomer /></ModernLayout>} />
          <Route path="/customers/accounts" element={<ModernLayout><Accounts /></ModernLayout>} />
          <Route path="/customers/contacts" element={<ModernLayout><Contacts /></ModernLayout>} />
          <Route path="/support" element={<ModernLayout><Support /></ModernLayout>} />
          <Route path="/support/open" element={<ModernLayout><Support /></ModernLayout>} />
          <Route path="/support/create" element={<ModernLayout><Support /></ModernLayout>} />
          <Route path="/support/knowledge" element={<ModernLayout><Support /></ModernLayout>} />
          <Route path="/activities" element={<ModernLayout><Activities /></ModernLayout>} />
          <Route path="/activities/calendar" element={<ModernLayout><CalendarView /></ModernLayout>} />
          <Route path="/activities/new" element={<ModernLayout><NewActivity /></ModernLayout>} />
          <Route path="/activities/tasks" element={<ModernLayout><Activities /></ModernLayout>} />
          <Route path="/activities/calls" element={<ModernLayout><Calls /></ModernLayout>} />
          <Route path="/activities/emails" element={<ModernLayout><Emails /></ModernLayout>} />
          <Route path="/reports/sales" element={<ModernLayout><Reports /></ModernLayout>} />
          <Route path="/reports/leads" element={<ModernLayout><Reports /></ModernLayout>} />
          <Route path="/reports/activities" element={<ModernLayout><Reports /></ModernLayout>} />
          <Route path="/reports/custom" element={<ModernLayout><Reports /></ModernLayout>} />
          <Route path="/settings" element={<ModernLayout><Settings /></ModernLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

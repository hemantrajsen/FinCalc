import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoanEMI from "./pages/calculators/LoanEMI";
import Mortgage from "./pages/calculators/Mortgage";
import CreditCardPayoff from "./pages/calculators/CreditCardPayoff";
import CompoundInterest from "./pages/calculators/CompoundInterest";
import Retirement from "./pages/calculators/Retirement";
import InvestmentReturn from "./pages/calculators/InvestmentReturn";
import SalaryConverter from "./pages/calculators/SalaryConverter";
import TaxEstimator from "./pages/calculators/TaxEstimator";
import NetSalary from "./pages/calculators/NetSalary";
import TipCalculator from "./pages/calculators/TipCalculator";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculator/loan-emi" element={<LoanEMI />} />
          <Route path="/calculator/mortgage" element={<Mortgage />} />
          <Route path="/calculator/credit-card-payoff" element={<CreditCardPayoff />} />
          <Route path="/calculator/compound-interest" element={<CompoundInterest />} />
          <Route path="/calculator/retirement" element={<Retirement />} />
          <Route path="/calculator/investment-return" element={<InvestmentReturn />} />
          <Route path="/calculator/salary-converter" element={<SalaryConverter />} />
          <Route path="/calculator/tax-estimator" element={<TaxEstimator />} />
          <Route path="/calculator/net-salary" element={<NetSalary />} />
          <Route path="/calculator/tip" element={<TipCalculator />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { useState } from "react";
import { PiggyBank, DollarSign, TrendingUp, Calendar } from "lucide-react";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { InputField } from "@/components/calculator/InputField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateRetirement, formatCurrency } from "@/lib/calculators";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Retirement = () => {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("65");
  const [currentSavings, setCurrentSavings] = useState("50000");
  const [monthlyContribution, setMonthlyContribution] = useState("500");
  const [annualReturn, setAnnualReturn] = useState("7");

  const result = calculateRetirement(parseInt(currentAge) || 0, parseInt(retirementAge) || 65, parseFloat(currentSavings) || 0, parseFloat(monthlyContribution) || 0, parseFloat(annualReturn) || 0, 0);

  const yearsToRetirement = (parseInt(retirementAge) || 65) - (parseInt(currentAge) || 0);
  const chartData = Array.from({ length: yearsToRetirement + 1 }, (_, i) => {
    const yearResult = calculateRetirement(parseInt(currentAge) || 0, (parseInt(currentAge) || 0) + i, parseFloat(currentSavings) || 0, parseFloat(monthlyContribution) || 0, parseFloat(annualReturn) || 0, 0);
    return { age: (parseInt(currentAge) || 0) + i, savings: yearResult.totalAtRetirement };
  });

  return (
    <CalculatorLayout title="Retirement Planner" description="Plan for retirement and see how your savings will grow.">
      <Card>
        <CardHeader><CardTitle className="font-display">Retirement Details</CardTitle></CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <InputField label="Current Age" id="currentAge" value={currentAge} onChange={setCurrentAge} />
          <InputField label="Retirement Age" id="retirementAge" value={retirementAge} onChange={setRetirementAge} />
          <InputField label="Current Savings" id="currentSavings" value={currentSavings} onChange={setCurrentSavings} prefix="₹" />
          <InputField label="Monthly Contribution" id="monthlyContribution" value={monthlyContribution} onChange={setMonthlyContribution} prefix="₹" />
          <InputField label="Annual Return" id="annualReturn" value={annualReturn} onChange={setAnnualReturn} suffix="%" step={0.1} />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ResultCard label="At Retirement" value={formatCurrency(result.totalAtRetirement)} icon={PiggyBank} highlight />
        <ResultCard label="Monthly Income (30yr)" value={formatCurrency(result.monthlyIncome)} icon={DollarSign} />
        <ResultCard label="Total Contributions" value={formatCurrency(result.totalContributions)} icon={Calendar} />
        <ResultCard label="Investment Growth" value={formatCurrency(result.investmentGrowth)} icon={TrendingUp} />
      </div>

      <Card>
        <CardHeader><CardTitle className="font-display">Savings Growth</CardTitle></CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="age" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Area type="monotone" dataKey="savings" stroke="hsl(168, 76%, 42%)" fill="hsl(168, 76%, 42%)" fillOpacity={0.3} name="Total Savings" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
};

export default Retirement;

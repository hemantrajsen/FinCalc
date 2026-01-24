import { useState } from "react";
import { TrendingUp, DollarSign, Percent, PiggyBank } from "lucide-react";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { InputField } from "@/components/calculator/InputField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateCompoundInterest, formatCurrency } from "@/lib/calculators";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const CompoundInterest = () => {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("10");

  const result = calculateCompoundInterest(parseFloat(principal) || 0, parseFloat(rate) || 0, parseInt(years) || 1);

  const chartData = Array.from({ length: (parseInt(years) || 1) + 1 }, (_, i) => {
    const yearResult = calculateCompoundInterest(parseFloat(principal) || 0, parseFloat(rate) || 0, i);
    return { year: i, principal: parseFloat(principal) || 0, total: yearResult.amount };
  });

  return (
    <CalculatorLayout title="Compound Interest Calculator" description="See how your money grows with the power of compound interest.">
      <Card>
        <CardHeader><CardTitle className="font-display">Investment Details</CardTitle></CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-3">
          <InputField label="Principal Amount" id="principal" value={principal} onChange={setPrincipal} prefix="₹" />
          <InputField label="Annual Interest Rate" id="rate" value={rate} onChange={setRate} suffix="%" step={0.1} />
          <InputField label="Time Period (Years)" id="years" value={years} onChange={setYears} suffix="yr" />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        <ResultCard label="Final Amount" value={formatCurrency(result.amount)} icon={DollarSign} highlight />
        <ResultCard label="Total Interest Earned" value={formatCurrency(result.interest)} icon={TrendingUp} />
        <ResultCard label="Growth" value={`${((result.interest / (parseFloat(principal) || 1)) * 100).toFixed(1)}%`} icon={Percent} />
      </div>

      <Card>
        <CardHeader><CardTitle className="font-display">Growth Over Time</CardTitle></CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Area type="monotone" dataKey="principal" stackId="1" stroke="hsl(var(--muted-foreground))" fill="hsl(var(--muted))" name="Principal" />
                <Area type="monotone" dataKey="total" stackId="2" stroke="hsl(168, 76%, 42%)" fill="hsl(168, 76%, 42%)" fillOpacity={0.3} name="Total Value" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
};

export default CompoundInterest;

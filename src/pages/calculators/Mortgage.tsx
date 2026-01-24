import { useState } from "react";
import { Home, DollarSign, Percent, Calendar } from "lucide-react";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { InputField } from "@/components/calculator/InputField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateMortgage, formatCurrency } from "@/lib/calculators";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const Mortgage = () => {
  const [homePrice, setHomePrice] = useState("350000");
  const [downPayment, setDownPayment] = useState("70000");
  const [rate, setRate] = useState("6.5");
  const [term, setTerm] = useState("30");

  const result = calculateMortgage(parseFloat(homePrice) || 0, parseFloat(downPayment) || 0, parseFloat(rate) || 0, parseInt(term) || 1);

  const chartData = [
    { name: "Principal & Interest", value: result.monthlyPrincipalInterest, color: "hsl(168, 76%, 42%)" },
    { name: "Property Tax", value: result.monthlyPropertyTax, color: "hsl(38, 92%, 50%)" },
    { name: "Insurance", value: result.monthlyInsurance, color: "hsl(200, 20%, 60%)" },
  ];

  return (
    <CalculatorLayout title="Mortgage Calculator" description="Plan your home purchase with detailed monthly payment breakdown.">
      <Card>
        <CardHeader><CardTitle className="font-display">Property Details</CardTitle></CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <InputField label="Home Price" id="homePrice" value={homePrice} onChange={setHomePrice} prefix="₹" />
          <InputField label="Down Payment" id="downPayment" value={downPayment} onChange={setDownPayment} prefix="₹" />
          <InputField label="Interest Rate" id="rate" value={rate} onChange={setRate} suffix="%" step={0.1} />
          <InputField label="Loan Term (Years)" id="term" value={term} onChange={setTerm} suffix="yr" />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ResultCard label="Monthly Payment" value={formatCurrency(result.monthlyPayment)} icon={DollarSign} highlight />
        <ResultCard label="Principal & Interest" value={formatCurrency(result.monthlyPrincipalInterest)} icon={Home} />
        <ResultCard label="Property Tax" value={formatCurrency(result.monthlyPropertyTax)} icon={Percent} />
        <ResultCard label="Total Interest" value={formatCurrency(result.totalInterest)} icon={Calendar} />
      </div>

      <Card>
        <CardHeader><CardTitle className="font-display">Monthly Payment Breakdown</CardTitle></CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value">
                  {chartData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                </Pie>
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </CalculatorLayout>
  );
};

export default Mortgage;

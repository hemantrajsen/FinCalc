import { useState } from "react";
import { DollarSign, Percent, Wallet, Receipt } from "lucide-react";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { InputField } from "@/components/calculator/InputField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateNetSalary, estimateTax, formatCurrency } from "@/lib/calculators";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const NetSalary = () => {
  const [gross, setGross] = useState("75000");
  const [stateTax, setStateTax] = useState("5");
  const [retirement, setRetirement] = useState("6");
  const [healthInsurance, setHealthInsurance] = useState("200");

  const taxResult = estimateTax(parseFloat(gross) || 0, "single");
  const federalRate = (taxResult.estimatedTax / (parseFloat(gross) || 1)) * 100;
  const result = calculateNetSalary(parseFloat(gross) || 0, federalRate, parseFloat(stateTax) || 0, 6.2, 1.45, parseFloat(retirement) || 0, parseFloat(healthInsurance) || 0);

  const chartData = [
    { name: "Net Pay", value: result.netAnnual, color: "hsl(168, 76%, 42%)" },
    { name: "Federal Tax", value: result.breakdown.federalTax, color: "hsl(0, 70%, 50%)" },
    { name: "State Tax", value: result.breakdown.stateTax, color: "hsl(38, 92%, 50%)" },
    { name: "FICA", value: result.breakdown.socialSecurity + result.breakdown.medicare, color: "hsl(200, 70%, 50%)" },
    { name: "401(k)", value: result.breakdown.retirement401k, color: "hsl(280, 70%, 50%)" },
  ].filter(d => d.value > 0);

  return (
    <CalculatorLayout title="Net Salary Calculator" description="Calculate your take-home pay after taxes and deductions.">
      <Card>
        <CardHeader><CardTitle className="font-display">Salary & Deductions</CardTitle></CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <InputField label="Gross Annual Salary" id="gross" value={gross} onChange={setGross} prefix="$" />
          <InputField label="State Tax Rate" id="stateTax" value={stateTax} onChange={setStateTax} suffix="%" step={0.1} />
          <InputField label="401(k) Contribution" id="retirement" value={retirement} onChange={setRetirement} suffix="%" step={0.5} />
          <InputField label="Health Insurance (Monthly)" id="healthInsurance" value={healthInsurance} onChange={setHealthInsurance} prefix="$" />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ResultCard label="Net Annual" value={formatCurrency(result.netAnnual)} icon={Wallet} highlight />
        <ResultCard label="Net Monthly" value={formatCurrency(result.netMonthly)} icon={DollarSign} />
        <ResultCard label="Total Deductions" value={formatCurrency(result.totalDeductions)} icon={Receipt} />
        <ResultCard label="Take-Home Rate" value={`${((result.netAnnual / result.grossAnnual) * 100).toFixed(1)}%`} icon={Percent} />
      </div>

      <Card>
        <CardHeader><CardTitle className="font-display">Salary Breakdown</CardTitle></CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={3} dataKey="value">
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

export default NetSalary;

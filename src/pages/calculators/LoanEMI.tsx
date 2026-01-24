import { useState } from "react";
import { Wallet, DollarSign, Percent, Calendar } from "lucide-react";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { InputField } from "@/components/calculator/InputField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateEMI, formatCurrency } from "@/lib/calculators";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const LoanEMI = () => {
  const [principal, setPrincipal] = useState("100000");
  const [rate, setRate] = useState("8");
  const [tenure, setTenure] = useState("36");

  const result = calculateEMI(parseFloat(principal) || 0, parseFloat(rate) || 0, parseInt(tenure) || 1);

  const chartData = [
    { name: "Principal", value: parseFloat(principal) || 0, color: "hsl(168, 76%, 42%)" },
    { name: "Interest", value: result.totalInterest, color: "hsl(200, 20%, 70%)" },
  ];

  return (
    <CalculatorLayout
      title="Loan/EMI Calculator"
      description="Calculate your monthly EMI payments, total interest, and view the breakdown of your loan."
    >
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Loan Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-3">
          <InputField label="Loan Amount" id="principal" value={principal} onChange={setPrincipal} prefix="₹" />
          <InputField label="Interest Rate (Annual)" id="rate" value={rate} onChange={setRate} suffix="%" step={0.1} />
          <InputField label="Loan Tenure (Months)" id="tenure" value={tenure} onChange={setTenure} suffix="mo" />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        <ResultCard label="Monthly EMI" value={formatCurrency(result.emi)} icon={DollarSign} highlight />
        <ResultCard label="Total Interest" value={formatCurrency(result.totalInterest)} icon={Percent} />
        <ResultCard label="Total Payment" value={formatCurrency(result.totalPayment)} icon={Wallet} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-display">Payment Breakdown</CardTitle>
        </CardHeader>
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

export default LoanEMI;

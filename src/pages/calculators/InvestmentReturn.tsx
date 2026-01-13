import { useState } from "react";
import { Percent, DollarSign, TrendingUp, Calendar } from "lucide-react";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { InputField } from "@/components/calculator/InputField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateInvestmentReturn, formatCurrency, formatPercentage } from "@/lib/calculators";

const InvestmentReturn = () => {
  const [initial, setInitial] = useState("10000");
  const [final, setFinal] = useState("15000");
  const [years, setYears] = useState("5");

  const result = calculateInvestmentReturn(parseFloat(initial) || 1, parseFloat(final) || 0, parseInt(years) || 1);

  return (
    <CalculatorLayout title="Investment Return Calculator" description="Calculate your investment ROI and compound annual growth rate (CAGR).">
      <Card>
        <CardHeader><CardTitle className="font-display">Investment Details</CardTitle></CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-3">
          <InputField label="Initial Investment" id="initial" value={initial} onChange={setInitial} prefix="$" />
          <InputField label="Final Value" id="final" value={final} onChange={setFinal} prefix="$" />
          <InputField label="Time Period (Years)" id="years" value={years} onChange={setYears} suffix="yr" />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-3">
        <ResultCard label="Total Return" value={formatCurrency(result.totalReturn)} icon={DollarSign} highlight />
        <ResultCard label="Percentage Return" value={formatPercentage(result.percentageReturn)} icon={Percent} />
        <ResultCard label="CAGR" value={formatPercentage(result.cagr)} icon={TrendingUp} subtext="Compound Annual Growth Rate" />
      </div>
    </CalculatorLayout>
  );
};

export default InvestmentReturn;

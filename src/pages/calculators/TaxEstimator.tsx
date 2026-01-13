import { useState } from "react";
import { Receipt, DollarSign, Percent, Wallet } from "lucide-react";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { InputField } from "@/components/calculator/InputField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { estimateTax, formatCurrency, formatPercentage } from "@/lib/calculators";

const TaxEstimator = () => {
  const [income, setIncome] = useState("75000");
  const [filingStatus, setFilingStatus] = useState<"single" | "married">("single");

  const result = estimateTax(parseFloat(income) || 0, filingStatus);

  return (
    <CalculatorLayout title="Tax Estimator" description="Estimate your federal income tax based on your filing status (2024 brackets).">
      <Card>
        <CardHeader><CardTitle className="font-display">Income Details</CardTitle></CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-2">
          <InputField label="Annual Income" id="income" value={income} onChange={setIncome} prefix="$" />
          <div className="space-y-2">
            <Label>Filing Status</Label>
            <Select value={filingStatus} onValueChange={(v) => setFilingStatus(v as "single" | "married")}>
              <SelectTrigger className="h-12"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married Filing Jointly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ResultCard label="Estimated Tax" value={formatCurrency(result.estimatedTax)} icon={Receipt} highlight />
        <ResultCard label="After-Tax Income" value={formatCurrency(result.afterTaxIncome)} icon={DollarSign} />
        <ResultCard label="Effective Rate" value={formatPercentage(result.effectiveRate)} icon={Percent} />
        <ResultCard label="Standard Deduction" value={formatCurrency(result.standardDeduction)} icon={Wallet} />
      </div>
    </CalculatorLayout>
  );
};

export default TaxEstimator;

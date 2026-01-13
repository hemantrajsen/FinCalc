import { useState } from "react";
import { Clock, DollarSign, Calendar, Wallet } from "lucide-react";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { InputField } from "@/components/calculator/InputField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { convertSalary, formatCurrency } from "@/lib/calculators";

const SalaryConverter = () => {
  const [amount, setAmount] = useState("50000");
  const [fromType, setFromType] = useState<"hourly" | "annual">("annual");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");

  const result = convertSalary(parseFloat(amount) || 0, fromType, parseInt(hoursPerWeek) || 40);

  return (
    <CalculatorLayout title="Salary Converter" description="Convert between hourly, weekly, monthly, and annual salary.">
      <Card>
        <CardHeader><CardTitle className="font-display">Salary Details</CardTitle></CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-3">
          <InputField label="Amount" id="amount" value={amount} onChange={setAmount} prefix="$" />
          <div className="space-y-2">
            <Label>Salary Type</Label>
            <Select value={fromType} onValueChange={(v) => setFromType(v as "hourly" | "annual")}>
              <SelectTrigger className="h-12"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="annual">Annual</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <InputField label="Hours per Week" id="hoursPerWeek" value={hoursPerWeek} onChange={setHoursPerWeek} suffix="hrs" />
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <ResultCard label="Hourly" value={formatCurrency(result.hourly)} icon={Clock} highlight={fromType === "hourly"} />
        <ResultCard label="Daily" value={formatCurrency(result.daily)} icon={Calendar} />
        <ResultCard label="Weekly" value={formatCurrency(result.weekly)} icon={Wallet} />
        <ResultCard label="Monthly" value={formatCurrency(result.monthly)} icon={DollarSign} />
        <ResultCard label="Annual" value={formatCurrency(result.annual)} icon={Wallet} highlight={fromType === "annual"} />
      </div>
    </CalculatorLayout>
  );
};

export default SalaryConverter;

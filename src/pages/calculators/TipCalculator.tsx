import { useState } from "react";
import { Users, DollarSign, Percent, Receipt } from "lucide-react";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { InputField } from "@/components/calculator/InputField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { calculateTip, formatCurrency } from "@/lib/calculators";

const tipPresets = [10, 15, 18, 20, 25];

const TipCalculator = () => {
  const [bill, setBill] = useState("50");
  const [tipPercent, setTipPercent] = useState("18");
  const [people, setPeople] = useState("1");

  const result = calculateTip(parseFloat(bill) || 0, parseFloat(tipPercent) || 0, parseInt(people) || 1);

  return (
    <CalculatorLayout title="Tip Calculator" description="Calculate tips and split bills among friends easily.">
      <Card>
        <CardHeader><CardTitle className="font-display">Bill Details</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <InputField label="Bill Amount" id="bill" value={bill} onChange={setBill} prefix="$" />
            <InputField label="Tip Percentage" id="tipPercent" value={tipPercent} onChange={setTipPercent} suffix="%" />
            <InputField label="Number of People" id="people" value={people} onChange={setPeople} min={1} />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground">Quick Tip Presets</p>
            <div className="flex flex-wrap gap-2">
              {tipPresets.map((preset) => (
                <Button key={preset} variant={tipPercent === String(preset) ? "default" : "outline"} size="sm" onClick={() => setTipPercent(String(preset))}>
                  {preset}%
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ResultCard label="Tip Amount" value={formatCurrency(result.tipAmount)} icon={Percent} />
        <ResultCard label="Total Bill" value={formatCurrency(result.totalAmount)} icon={Receipt} highlight />
        <ResultCard label="Per Person (Bill)" value={formatCurrency(result.perPersonBill)} icon={Users} />
        <ResultCard label="Per Person (Tip)" value={formatCurrency(result.perPersonTip)} icon={DollarSign} />
      </div>
    </CalculatorLayout>
  );
};

export default TipCalculator;

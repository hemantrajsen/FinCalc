import { useState } from "react";
import { CreditCard, DollarSign, Calendar, Percent } from "lucide-react";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { InputField } from "@/components/calculator/InputField";
import { ResultCard } from "@/components/calculator/ResultCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { calculateCreditCardPayoff, formatCurrency } from "@/lib/calculators";

const CreditCardPayoff = () => {
  const [balance, setBalance] = useState("5000");
  const [rate, setRate] = useState("18.99");
  const [payment, setPayment] = useState("200");

  const result = calculateCreditCardPayoff(parseFloat(balance) || 0, parseFloat(rate) || 0, parseFloat(payment) || 1);
  const isInfinite = result.months === Infinity;

  return (
    <CalculatorLayout title="Credit Card Payoff Calculator" description="Calculate how long it will take to pay off your credit card balance.">
      <Card>
        <CardHeader><CardTitle className="font-display">Credit Card Details</CardTitle></CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-3">
          <InputField label="Current Balance" id="balance" value={balance} onChange={setBalance} prefix="$" />
          <InputField label="Interest Rate (APR)" id="rate" value={rate} onChange={setRate} suffix="%" step={0.01} />
          <InputField label="Monthly Payment" id="payment" value={payment} onChange={setPayment} prefix="$" />
        </CardContent>
      </Card>

      {isInfinite ? (
        <Card className="border-destructive/50 bg-destructive/5">
          <CardContent className="p-6 text-center">
            <p className="text-destructive font-medium">Payment too low! Your monthly payment must exceed the monthly interest charge.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-3">
          <ResultCard label="Months to Payoff" value={`${result.months} months`} icon={Calendar} highlight subtext={`${Math.floor(result.months / 12)} years ${result.months % 12} months`} />
          <ResultCard label="Total Interest" value={formatCurrency(result.totalInterest)} icon={Percent} />
          <ResultCard label="Total Payment" value={formatCurrency(result.totalPayment)} icon={DollarSign} />
        </div>
      )}
    </CalculatorLayout>
  );
};

export default CreditCardPayoff;

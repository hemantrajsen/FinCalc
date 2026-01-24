// Loan/EMI Calculator
export const calculateEMI = (
  principal: number,
  annualRate: number,
  tenureMonths: number
) => {
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) {
    return {
      emi: principal / tenureMonths,
      totalPayment: principal,
      totalInterest: 0,
    };
  }
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  const totalPayment = emi * tenureMonths;
  const totalInterest = totalPayment - principal;
  return { emi, totalPayment, totalInterest };
};

// Compound Interest Calculator
export const calculateCompoundInterest = (
  principal: number,
  annualRate: number,
  years: number,
  compoundingFrequency: number = 12
) => {
  const rate = annualRate / 100;
  const n = compoundingFrequency;
  const t = years;
  const amount = principal * Math.pow(1 + rate / n, n * t);
  const interest = amount - principal;
  return { amount, interest, principal };
};

// Mortgage Calculator
export const calculateMortgage = (
  homePrice: number,
  downPayment: number,
  annualRate: number,
  loanTermYears: number,
  propertyTaxRate: number = 1.1,
  insuranceAnnual: number = 1200
) => {
  const principal = homePrice - downPayment;
  const monthlyRate = annualRate / 12 / 100;
  const numPayments = loanTermYears * 12;

  let monthlyPrincipalInterest = 0;
  if (monthlyRate === 0) {
    monthlyPrincipalInterest = principal / numPayments;
  } else {
    monthlyPrincipalInterest =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const monthlyPropertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
  const monthlyInsurance = insuranceAnnual / 12;
  const totalMonthlyPayment =
    monthlyPrincipalInterest + monthlyPropertyTax + monthlyInsurance;
  const totalPayment = totalMonthlyPayment * numPayments;
  const totalInterest = monthlyPrincipalInterest * numPayments - principal;

  return {
    monthlyPayment: totalMonthlyPayment,
    monthlyPrincipalInterest,
    monthlyPropertyTax,
    monthlyInsurance,
    totalPayment,
    totalInterest,
    principal,
  };
};

// Credit Card Payoff Calculator
export const calculateCreditCardPayoff = (
  balance: number,
  annualRate: number,
  monthlyPayment: number
) => {
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyPayment <= balance * monthlyRate) {
    return { months: Infinity, totalInterest: Infinity, totalPayment: Infinity };
  }

  let remainingBalance = balance;
  let totalInterest = 0;
  let months = 0;

  while (remainingBalance > 0 && months < 600) {
    const interest = remainingBalance * monthlyRate;
    totalInterest += interest;
    remainingBalance = remainingBalance + interest - monthlyPayment;
    months++;
  }

  return {
    months,
    totalInterest,
    totalPayment: balance + totalInterest,
  };
};

// Retirement Calculator
export const calculateRetirement = (
  currentAge: number,
  retirementAge: number,
  currentSavings: number,
  monthlyContribution: number,
  annualReturn: number,
  retirementIncome: number
) => {
  const yearsToRetirement = retirementAge - currentAge;
  const monthlyRate = annualReturn / 12 / 100;
  const months = yearsToRetirement * 12;

  // Future value of current savings
  const fvCurrentSavings = currentSavings * Math.pow(1 + monthlyRate, months);

  // Future value of monthly contributions
  let fvContributions = 0;
  if (monthlyRate > 0) {
    fvContributions =
      monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
  } else {
    fvContributions = monthlyContribution * months;
  }

  const totalAtRetirement = fvCurrentSavings + fvContributions;
  const yearsInRetirement = 30;
  const monthlyIncome = totalAtRetirement / (yearsInRetirement * 12);

  return {
    totalAtRetirement,
    monthlyIncome,
    totalContributions: currentSavings + monthlyContribution * months,
    investmentGrowth:
      totalAtRetirement - (currentSavings + monthlyContribution * months),
  };
};

// Investment Return Calculator
export const calculateInvestmentReturn = (
  initialInvestment: number,
  finalValue: number,
  years: number
) => {
  const totalReturn = finalValue - initialInvestment;
  const percentageReturn = ((finalValue - initialInvestment) / initialInvestment) * 100;
  const cagr = (Math.pow(finalValue / initialInvestment, 1 / years) - 1) * 100;

  return {
    totalReturn,
    percentageReturn,
    cagr,
  };
};

// Salary Converter
export const convertSalary = (
  amount: number,
  fromType: "hourly" | "annual",
  hoursPerWeek: number = 40,
  weeksPerYear: number = 52
) => {
  const totalHoursPerYear = hoursPerWeek * weeksPerYear;

  if (fromType === "hourly") {
    return {
      hourly: amount,
      daily: amount * (hoursPerWeek / 5),
      weekly: amount * hoursPerWeek,
      monthly: (amount * totalHoursPerYear) / 12,
      annual: amount * totalHoursPerYear,
    };
  } else {
    const hourly = amount / totalHoursPerYear;
    return {
      hourly,
      daily: hourly * (hoursPerWeek / 5),
      weekly: hourly * hoursPerWeek,
      monthly: amount / 12,
      annual: amount,
    };
  }
};

// Tax Estimator (US Federal simplified)
export const estimateTax = (annualIncome: number, filingStatus: "single" | "married") => {
  const brackets =
    filingStatus === "single"
      ? [
          { min: 0, max: 11600, rate: 0.1 },
          { min: 11600, max: 47150, rate: 0.12 },
          { min: 47150, max: 100525, rate: 0.22 },
          { min: 100525, max: 191950, rate: 0.24 },
          { min: 191950, max: 243725, rate: 0.32 },
          { min: 243725, max: 609350, rate: 0.35 },
          { min: 609350, max: Infinity, rate: 0.37 },
        ]
      : [
          { min: 0, max: 23200, rate: 0.1 },
          { min: 23200, max: 94300, rate: 0.12 },
          { min: 94300, max: 201050, rate: 0.22 },
          { min: 201050, max: 383900, rate: 0.24 },
          { min: 383900, max: 487450, rate: 0.32 },
          { min: 487450, max: 731200, rate: 0.35 },
          { min: 731200, max: Infinity, rate: 0.37 },
        ];

  const standardDeduction = filingStatus === "single" ? 14600 : 29200;
  const taxableIncome = Math.max(0, annualIncome - standardDeduction);

  let tax = 0;
  let remainingIncome = taxableIncome;

  for (const bracket of brackets) {
    if (remainingIncome <= 0) break;
    const taxableInBracket = Math.min(
      remainingIncome,
      bracket.max - bracket.min
    );
    tax += taxableInBracket * bracket.rate;
    remainingIncome -= taxableInBracket;
  }

  const effectiveRate = annualIncome > 0 ? (tax / annualIncome) * 100 : 0;
  const afterTaxIncome = annualIncome - tax;

  return {
    taxableIncome,
    estimatedTax: tax,
    effectiveRate,
    afterTaxIncome,
    standardDeduction,
  };
};

// Net Salary Calculator
export const calculateNetSalary = (
  grossAnnual: number,
  federalTax: number,
  stateTax: number = 5,
  socialSecurity: number = 6.2,
  medicare: number = 1.45,
  retirement401k: number = 0,
  healthInsurance: number = 0
) => {
  const federalTaxAmount = grossAnnual * (federalTax / 100);
  const stateTaxAmount = grossAnnual * (stateTax / 100);
  const socialSecurityAmount = Math.min(grossAnnual, 168600) * (socialSecurity / 100);
  const medicareAmount = grossAnnual * (medicare / 100);
  const retirement401kAmount = grossAnnual * (retirement401k / 100);
  const healthInsuranceAnnual = healthInsurance * 12;

  const totalDeductions =
    federalTaxAmount +
    stateTaxAmount +
    socialSecurityAmount +
    medicareAmount +
    retirement401kAmount +
    healthInsuranceAnnual;

  const netAnnual = grossAnnual - totalDeductions;
  const netMonthly = netAnnual / 12;

  return {
    grossAnnual,
    netAnnual,
    netMonthly,
    totalDeductions,
    breakdown: {
      federalTax: federalTaxAmount,
      stateTax: stateTaxAmount,
      socialSecurity: socialSecurityAmount,
      medicare: medicareAmount,
      retirement401k: retirement401kAmount,
      healthInsurance: healthInsuranceAnnual,
    },
  };
};

// Tip Calculator
export const calculateTip = (
  billAmount: number,
  tipPercentage: number,
  numberOfPeople: number = 1
) => {
  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = billAmount + tipAmount;
  const perPersonBill = totalAmount / numberOfPeople;
  const perPersonTip = tipAmount / numberOfPeople;

  return {
    tipAmount,
    totalAmount,
    perPersonBill,
    perPersonTip,
  };
};

// Format currency
export const formatCurrency = (amount: number, decimals: number = 2) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
};

// Format percentage
export const formatPercentage = (value: number, decimals: number = 2) => {
  return `${value.toFixed(decimals)}%`;
};

// Format number with commas
export const formatNumber = (value: number, decimals: number = 0) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};

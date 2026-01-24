import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Calculator,
  Search,
  Wallet,
  PiggyBank,
  TrendingUp,
  Receipt,
  CreditCard,
  DollarSign,
  Home,
  Clock,
  Percent,
  Users,
  ArrowRight,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { CalculatorCard } from "@/components/CalculatorCard";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "loans",
    name: "Loans & Debt",
    icon: Wallet,
    description: "EMI, mortgage, and debt payoff calculators",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: "savings",
    name: "Savings & Investment",
    icon: PiggyBank,
    description: "Compound interest and retirement planning",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    id: "tax",
    name: "Income & Tax",
    icon: Receipt,
    description: "Tax estimation and salary calculations",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    id: "everyday",
    name: "Everyday Finance",
    icon: DollarSign,
    description: "Tips, splits, and daily calculations",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
];

const calculators = [
  {
    title: "Loan/EMI Calculator",
    description: "Calculate monthly EMI payments, total interest, and view amortization schedule",
    icon: Wallet,
    path: "/calculator/loan-emi",
    category: "loans",
    popular: true,
  },
  {
    title: "Mortgage Calculator",
    description: "Plan your home purchase with property tax and insurance estimates",
    icon: Home,
    path: "/calculator/mortgage",
    category: "loans",
    popular: true,
  },
  {
    title: "Credit Card Payoff",
    description: "Find out how long it takes to pay off your credit card balance",
    icon: CreditCard,
    path: "/calculator/credit-card-payoff",
    category: "loans",
  },
  {
    title: "Compound Interest",
    description: "See how your money grows with compound interest over time",
    icon: TrendingUp,
    path: "/calculator/compound-interest",
    category: "savings",
    popular: true,
  },
  {
    title: "Retirement Planner",
    description: "Plan for retirement and calculate how much you need to save",
    icon: PiggyBank,
    path: "/calculator/retirement",
    category: "savings",
    popular: true,
  },
  {
    title: "Investment Return",
    description: "Calculate ROI and CAGR for your investments",
    icon: Percent,
    path: "/calculator/investment-return",
    category: "savings",
  },
  {
    title: "Salary Converter",
    description: "Convert between hourly, weekly, monthly, and annual salary",
    icon: Clock,
    path: "/calculator/salary-converter",
    category: "tax",
  },
  {
    title: "Tax Estimator",
    description: "Estimate your federal income tax based on filing status",
    icon: Receipt,
    path: "/calculator/tax-estimator",
    category: "tax",
    popular: true,
  },
  {
    title: "Net Salary Calculator",
    description: "Calculate take-home pay after taxes and deductions",
    icon: DollarSign,
    path: "/calculator/net-salary",
    category: "tax",
  },
  {
    title: "Tip Calculator",
    description: "Calculate tips and split bills among friends",
    icon: Users,
    path: "/calculator/tip",
    category: "everyday",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const resultsRef = useRef<HTMLDivElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const blurTimeoutRef = useRef<number | null>(null);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearchFocus = () => {
    if (blurTimeoutRef.current) {
      window.clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = null;
    }
    setIsSearchOpen(true);
  };

  const handleSearchBlur = () => {
    blurTimeoutRef.current = window.setTimeout(() => {
      setIsSearchOpen(false);
    }, 120);
  };

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredCalculators = normalizedQuery
    ? calculators.filter(
        (calc) =>
          calc.title.toLowerCase().includes(normalizedQuery) ||
          calc.description.toLowerCase().includes(normalizedQuery)
      )
    : calculators;

  const showFallbackAll = normalizedQuery.length > 0 && filteredCalculators.length === 0;
  const resultsCalculators = showFallbackAll ? calculators : filteredCalculators;

  const popularCalculators = calculators.filter((calc) => calc.popular);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero py-20 lg:py-28">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Calculator className="h-4 w-4" />
              Free Financial Calculators
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Smart calculators for{" "}
              <span className="text-primary">smarter decisions</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Free, accurate, and easy-to-use financial calculators. From loans to
              retirement planning, make informed money decisions.
            </p>

            {/* Search Bar */}
            <form className="mt-12 mb-8 flex items-center gap-4" onSubmit={handleSearchSubmit}>
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search calculators..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className="h-14 pl-12 text-base"
                />
                {isSearchOpen && resultsCalculators.length > 0 && (
                  <div
                    className="absolute left-0 right-0 z-20 mt-2 max-h-80 overflow-auto rounded-2xl border border-border bg-card shadow-lg"
                    onMouseDown={(event) => event.preventDefault()}
                  >
                    {showFallbackAll && (
                      <div className="px-4 py-3 text-sm text-muted-foreground">
                        No exact matches — showing all calculators
                      </div>
                    )}
                    <div className="divide-y divide-border">
                      {resultsCalculators.map((calc) => {
                        const Icon = calc.icon;
                        return (
                          <Link
                            key={calc.path}
                            to={calc.path}
                            className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-muted/60"
                          >
                            <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">
                                {calc.title}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {calc.description}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <Button type="submit" size="lg" className="h-14 px-8">
                Search
              </Button>
            </form>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </section>

      {/* Header Ad */}
      <div className="container flex justify-center py-8">
        <AdPlaceholder size="banner" />
      </div>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              Browse by Category
            </h2>
            <p className="mt-2 text-muted-foreground">
              Find the right calculator for your financial needs
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/#${category.id}`}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-soft"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${category.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Calculators */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                Popular Calculators
              </h2>
              <p className="mt-2 text-muted-foreground">
                Our most used financial tools
              </p>
            </div>
            <Link
              to="/calculators"
              className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline sm:flex"
            >
              View all calculators
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularCalculators.map((calc) => (
              <CalculatorCard
                key={calc.path}
                title={calc.title}
                description={calc.description}
                icon={calc.icon}
                path={calc.path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* All Calculators */}
      <section className="py-12" ref={resultsRef} id="calculator-results">
        <div className="container">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
              {searchQuery ? "Search Results" : "All Calculators"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              {searchQuery
                ? showFallbackAll
                  ? "No exact matches — showing all calculators"
                  : `${filteredCalculators.length} calculator${
                      filteredCalculators.length !== 1 ? "s" : ""
                    } found`
                : "Complete collection of financial calculators"}
            </p>
          </div>

          {searchQuery ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {resultsCalculators.map((calc) => (
                <CalculatorCard
                  key={calc.path}
                  title={calc.title}
                  description={calc.description}
                  icon={calc.icon}
                  path={calc.path}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-16">
              {categories.map((category) => {
                const categoryCalculators = calculators.filter(
                  (calc) => calc.category === category.id
                );
                const Icon = category.icon;
                return (
                  <div
                    key={category.id}
                    id={category.id}
                    className="scroll-mt-24"
                  >
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${category.color}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {categoryCalculators.map((calc) => (
                        <CalculatorCard
                          key={calc.path}
                          title={calc.title}
                          description={calc.description}
                          icon={calc.icon}
                          path={calc.path}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Inline Ad */}
      <div className="container flex justify-center py-8">
        <AdPlaceholder size="inline" />
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Make smarter financial decisions today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Our calculators are free, accurate, and designed to help you
            understand your finances better. No sign-up required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/calculator/loan-emi">
              <Button size="lg" className="gap-2">
                <Calculator className="h-5 w-5" />
                Try Loan Calculator
              </Button>
            </Link>
            <Link to="/calculator/compound-interest">
              <Button size="lg" variant="outline" className="gap-2">
                <TrendingUp className="h-5 w-5" />
                Try Investment Calculator
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

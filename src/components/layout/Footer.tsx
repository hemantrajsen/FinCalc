import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const calculatorLinks = [
    { name: "Loan/EMI Calculator", path: "/calculator/loan-emi" },
    { name: "Mortgage Calculator", path: "/calculator/mortgage" },
    { name: "Compound Interest", path: "/calculator/compound-interest" },
    { name: "Retirement Planner", path: "/calculator/retirement" },
    { name: "Tax Estimator", path: "/calculator/tax-estimator" },
  ];

  const moreCalculators = [
    { name: "Investment Return", path: "/calculator/investment-return" },
    { name: "Credit Card Payoff", path: "/calculator/credit-card-payoff" },
    { name: "Salary Converter", path: "/calculator/salary-converter" },
    { name: "Net Salary", path: "/calculator/net-salary" },
    { name: "Tip Calculator", path: "/calculator/tip" },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden">
                <img src="/ArthaCalc.png" alt="ArthaCalc Logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-display text-xl font-bold">ArthaCalc</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Smart calculators for smarter financial decisions. Free, accurate, and easy to use.
            </p>
          </div>

          {/* Calculator Links */}
          <div>
            <h3 className="mb-4 font-display font-semibold">Popular Calculators</h3>
            <ul className="space-y-2">
              {calculatorLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Calculators */}
          <div>
            <h3 className="mb-4 font-display font-semibold">More Calculators</h3>
            <ul className="space-y-2">
              {moreCalculators.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ad Placeholder */}
          <div className="flex items-start justify-center lg:justify-end">
            <div className="flex h-[250px] w-[300px] items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/50">
              <span className="text-xs text-muted-foreground">Ad Space (300x250)</span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ArthaCalc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

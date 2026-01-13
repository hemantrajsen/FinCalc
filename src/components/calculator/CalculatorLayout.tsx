import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { AdPlaceholder } from "@/components/AdPlaceholder";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const CalculatorLayout = ({
  title,
  description,
  children,
}: CalculatorLayoutProps) => {
  return (
    <div className="container py-8">
      {/* Header Ad */}
      <div className="mb-8 flex justify-center">
        <AdPlaceholder size="banner" />
      </div>

      {/* Breadcrumb */}
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to all calculators
      </Link>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{description}</p>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-8">{children}</div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <AdPlaceholder size="sidebar" />
          </div>
        </aside>
      </div>

      {/* Inline Ad */}
      <div className="mt-12 flex justify-center">
        <AdPlaceholder size="inline" />
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color?: string;
}

export const CalculatorCard = ({
  title,
  description,
  icon: Icon,
  path,
}: CalculatorCardProps) => {
  return (
    <Link to={path} className="group block">
      <Card className="h-full transition-all duration-300 hover:shadow-soft hover:-translate-y-1 hover:border-primary/20">
        <CardContent className="flex flex-col gap-4 p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
          <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
            Calculate now
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

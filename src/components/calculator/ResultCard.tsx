import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ResultCardProps {
  label: string;
  value: string;
  icon?: LucideIcon;
  highlight?: boolean;
  subtext?: string;
}

export const ResultCard = ({
  label,
  value,
  icon: Icon,
  highlight = false,
  subtext,
}: ResultCardProps) => {
  return (
    <Card
      className={`${
        highlight
          ? "border-primary/30 bg-primary/5"
          : "border-border bg-card"
      }`}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p
              className={`font-display text-2xl font-bold ${
                highlight ? "text-primary" : "text-foreground"
              }`}
            >
              {value}
            </p>
            {subtext && (
              <p className="text-xs text-muted-foreground">{subtext}</p>
            )}
          </div>
          {Icon && (
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                highlight
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

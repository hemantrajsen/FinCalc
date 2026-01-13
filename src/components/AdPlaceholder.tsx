interface AdPlaceholderProps {
  size: "banner" | "sidebar" | "inline" | "footer";
  className?: string;
}

const sizeClasses = {
  banner: "h-[90px] w-full max-w-[728px]",
  sidebar: "h-[600px] w-[300px]",
  inline: "h-[250px] w-full max-w-[336px]",
  footer: "h-[250px] w-[300px]",
};

const sizeLabels = {
  banner: "728x90",
  sidebar: "300x600",
  inline: "336x280",
  footer: "300x250",
};

export const AdPlaceholder = ({ size, className = "" }: AdPlaceholderProps) => {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/30 ${sizeClasses[size]} ${className}`}
    >
      <span className="text-xs text-muted-foreground">
        Ad Space ({sizeLabels[size]})
      </span>
    </div>
  );
};

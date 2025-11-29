import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChecklistProps {
  items: string[];
  variant?: "success" | "error" | "neutral";
  className?: string;
}

export function Checklist({ items, variant = "success", className }: ChecklistProps) {
  const icons = {
    success: <Check className="h-5 w-5 text-brand-sand" />,
    error: <X className="h-5 w-5 text-red-400" />,
    neutral: <div className="h-2 w-2 rounded-full bg-brand-sand/50 mt-2" />,
  };

  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-brand-cream/80">
          <span className="shrink-0 mt-0.5">{icons[variant]}</span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}


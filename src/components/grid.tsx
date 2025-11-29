import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  columns?: 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

const columnStyles = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
  5: "md:grid-cols-3 lg:grid-cols-5",
  6: "md:grid-cols-3 lg:grid-cols-6",
};

const gapStyles = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
};

export function Grid({ children, columns = 3, gap = "md", className }: GridProps) {
  return (
    <div className={cn("grid grid-cols-1", columnStyles[columns], gapStyles[gap], className)}>
      {children}
    </div>
  );
}


import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
}

export function Card({ title, subtitle, icon, children, className, variant = "default" }: CardProps) {
  const variants = {
    default: "bg-brand-graphite/30 border border-white/5 hover:border-brand-sand/30",
    outline: "border border-white/10 bg-transparent hover:border-brand-sand",
    ghost: "bg-transparent border-none pl-0 hover:bg-white/5",
  };

  return (
    <div className={cn("rounded-3xl p-6 transition-all duration-300", variants[variant], className)}>
      {(icon || title || subtitle) && (
        <div className="mb-4 space-y-2">
          {icon && <div className="text-brand-sand mb-3">{icon}</div>}
          {subtitle && <p className="text-xs uppercase tracking-[0.2em] text-brand-sand">{subtitle}</p>}
          {title && <h3 className="font-serif text-xl text-brand-cream">{title}</h3>}
        </div>
      )}
      <div className="text-brand-cream/80 leading-relaxed">{children}</div>
    </div>
  );
}


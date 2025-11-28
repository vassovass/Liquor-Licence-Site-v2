import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  icon?: ReactNode;
  className?: string;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full border text-sm font-semibold tracking-wide uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantStyles: Record<NonNullable<CTAButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-sand text-brand-charcoal border-transparent shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:bg-brand-sand/90 focus-visible:outline-brand-sand",
  secondary: "bg-transparent text-brand-sand border-brand-sand hover:bg-white/5 focus-visible:outline-brand-sand",
  ghost: "bg-transparent text-brand-cream border-transparent hover:bg-white/10 focus-visible:outline-brand-cream",
};

const sizeStyles: Record<NonNullable<CTAButtonProps["size"]>, string> = {
  md: "px-6 py-3 text-xs tracking-[0.2em]",
  lg: "px-8 py-4 text-sm tracking-[0.28em]",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
}: CTAButtonProps) {
  return (
    <Link href={href} className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}>
      <span>{children}</span>
      {icon ? <span className="text-base">{icon}</span> : null}
    </Link>
  );
}


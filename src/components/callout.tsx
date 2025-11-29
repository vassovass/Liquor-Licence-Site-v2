import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import type { ReactNode } from "react";

interface CalloutProps {
  title?: string;
  children: ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  className?: string;
}

const icons = {
  info: Info,
  success: CheckCircle2,
  warning: AlertCircle,
  error: XCircle,
};

const styles = {
  info: "bg-blue-500/10 border-blue-500/20 text-blue-200",
  success: "bg-green-500/10 border-green-500/20 text-green-200",
  warning: "bg-yellow-500/10 border-yellow-500/20 text-yellow-200",
  error: "bg-red-500/10 border-red-500/20 text-red-200",
};

export function Callout({ title, children, variant = "info", className }: CalloutProps) {
  const Icon = icons[variant];

  return (
    <div className={cn("rounded-2xl border p-4 flex gap-4 items-start", styles[variant], className)}>
      <Icon className="h-5 w-5 shrink-0 mt-0.5 opacity-80" />
      <div className="space-y-1">
        {title && <h4 className="font-medium leading-none mb-2">{title}</h4>}
        <div className="text-sm opacity-90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}


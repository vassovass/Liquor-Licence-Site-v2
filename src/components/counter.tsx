import { cn } from "@/lib/utils";

interface CounterProps {
  value: string;
  label: string;
  helper?: string;
  className?: string;
}

export function Counter({ value, label, helper, className }: CounterProps) {
  return (
    <div className={cn("text-center p-6", className)}>
      <div className="font-serif text-5xl md:text-6xl text-brand-sand mb-2 leading-none">{value}</div>
      <div className="text-sm font-bold uppercase tracking-[0.2em] text-brand-cream mb-1">{label}</div>
      {helper && <div className="text-xs text-brand-cream/50">{helper}</div>}
    </div>
  );
}


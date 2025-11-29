import { cn } from "@/lib/utils";

interface TimelineItemProps {
  step: string | number;
  title: string;
  description: string;
  isLast?: boolean;
}

function TimelineItem({ step, title, description, isLast }: TimelineItemProps) {
  return (
    <div className="relative flex gap-8 group">
      {/* Line connector */}
      {!isLast && (
        <div className="absolute left-[24px] top-12 bottom-0 w-px bg-white/10 group-hover:bg-brand-sand/50 transition-colors" />
      )}
      
      {/* Number Bubble */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-brand-charcoal text-brand-sand font-serif text-lg group-hover:border-brand-sand group-hover:text-brand-cream transition-colors shadow-[0_0_0_4px_rgba(5,5,5,1)]">
        {step}
      </div>

      {/* Content */}
      <div className="pb-12 pt-2">
        <h3 className="font-serif text-xl text-brand-cream mb-2 group-hover:text-brand-sand transition-colors">{title}</h3>
        <p className="text-brand-cream/70 leading-relaxed max-w-prose">{description}</p>
      </div>
    </div>
  );
}

interface TimelineProps {
  steps: { title: string; description: string }[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {steps.map((step, index) => (
        <TimelineItem
          key={index}
          step={index + 1}
          title={step.title}
          description={step.description}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}


import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContentBoxProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  actionText?: string;
  className?: string;
  id?: string;
}

export function ContentBox({ title, children, icon, href, actionText = "Learn more", className, id }: ContentBoxProps) {
  return (
    <div id={id} className={cn("group flex flex-col h-full", className)}>
      <div className="flex-1">
        {icon && (
          <div className="mb-6 text-brand-sand transition-transform duration-300 group-hover:scale-110 origin-left">
            {icon}
          </div>
        )}
        <h3 className="font-serif text-2xl text-brand-cream mb-4 group-hover:text-brand-sand transition-colors">{title}</h3>
        <div className="text-brand-cream/70 leading-relaxed mb-6">{children}</div>
      </div>
      
      {href && (
        <a 
          href={href} 
          className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-brand-sand hover:text-brand-cream transition-colors mt-auto"
        >
          {actionText} <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      )}
    </div>
  );
}


import { cn } from "@/lib/utils";
import { ScrollText } from "lucide-react";

interface TableOfContentsProps {
  items: { id: string; label: string }[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav className={cn("bg-brand-graphite/20 border border-white/10 rounded-2xl p-6", className)}>
      <div className="flex items-center gap-2 mb-4 text-brand-sand">
        <ScrollText className="h-5 w-5" />
        <span className="text-sm font-bold uppercase tracking-widest">On This Page</span>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`} 
              className="text-sm text-brand-cream/70 hover:text-brand-sand transition-colors block py-1"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


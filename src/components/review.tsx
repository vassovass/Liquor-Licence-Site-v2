import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewProps {
  author: string;
  role?: string;
  content: string;
  rating?: number;
  avatar?: string; // Could be implemented with Image later
  className?: string;
}

export function Review({ author, role, content, rating = 5, className }: ReviewProps) {
  return (
    <div className={cn("p-8 rounded-3xl bg-brand-graphite/20 border border-white/5", className)}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={cn("h-4 w-4", i < rating ? "fill-brand-sand text-brand-sand" : "fill-white/10 text-white/10")} 
          />
        ))}
      </div>
      <blockquote className="mb-6">
        <p className="text-lg font-serif text-brand-cream italic leading-relaxed">"{content}"</p>
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-brand-sand/20 flex items-center justify-center text-brand-sand font-serif font-bold">
            {author.charAt(0)}
        </div>
        <div>
            <div className="font-medium text-brand-cream">{author}</div>
            {role && <div className="text-xs uppercase tracking-widest text-brand-cream/50">{role}</div>}
        </div>
      </div>
    </div>
  );
}


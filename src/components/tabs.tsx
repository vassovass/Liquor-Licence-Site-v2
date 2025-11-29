"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface TabsProps {
  items: { label: string; content: React.ReactNode }[];
  className?: string;
}

export function Tabs({ items, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={cn("w-full", className)}>
      {/* Tab List */}
      <div className="flex flex-wrap gap-2 border-b border-white/10 pb-1">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-6 py-3 text-sm uppercase tracking-widest transition-all duration-200 rounded-t-lg border-b-2",
              activeTab === index
                ? "border-brand-sand text-brand-sand bg-white/5"
                : "border-transparent text-brand-cream/60 hover:text-brand-cream hover:bg-white/5"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-8 animate-in fade-in duration-300 slide-in-from-bottom-2">
        {items[activeTab].content}
      </div>
    </div>
  );
}


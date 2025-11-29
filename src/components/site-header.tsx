'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { primaryNav } from "@/lib/routes";
import { cn } from "@/lib/utils";

import { BrandMark } from "./brand-mark";
import { CTAButton } from "./cta-button";

export function SiteHeader() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-charcoal/90 backdrop-blur supports-[backdrop-filter]:bg-brand-charcoal/70">
      <div className="container flex h-[70px] items-center justify-between gap-6">
        <BrandMark size="sm" />

        <nav aria-label="Primary" className="hidden gap-6 text-xs uppercase tracking-[0.2em] text-brand-cream lg:flex">
          {primaryNav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            const hasChildren = item.children && item.children.length > 0;
            const isHovered = hoveredItem === item.href;

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => hasChildren && setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-brand-sand",
                    isActive ? "text-brand-sand" : "text-brand-cream/70",
                  )}
                >
                  {item.label}
                </Link>
                {hasChildren && isHovered && (
                  <div className="absolute left-0 top-full mt-2 w-64 rounded-2xl border border-white/10 bg-brand-graphite/95 backdrop-blur-sm p-4 shadow-lg">
                    <ul className="space-y-2">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5 hover:text-brand-sand",
                                isChildActive ? "text-brand-sand" : "text-brand-cream/70",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
            <CTAButton href="/contact" variant="secondary" className="hidden lg:inline-flex">
              Book Consultation
            </CTAButton>
            <CTAButton href="/contact" className="lg:hidden">
              Contact
            </CTAButton>
        </div>
      </div>
    </header>
  );
}

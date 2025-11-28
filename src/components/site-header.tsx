'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

import { primaryNav } from "@/lib/routes";
import { cn } from "@/lib/utils";

import { BrandMark } from "./brand-mark";
import { CTAButton } from "./cta-button";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-charcoal/90 backdrop-blur supports-[backdrop-filter]:bg-brand-charcoal/70">
      <div className="container flex items-center justify-between gap-6 py-4">
        <BrandMark size="sm" />

        <nav aria-label="Primary" className="hidden gap-6 text-xs uppercase tracking-[0.2em] text-brand-cream lg:flex">
          {primaryNav.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-brand-sand",
                  isActive ? "text-brand-sand" : "text-brand-cream/70",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <CTAButton href="/contact" variant="secondary" className="hidden lg:inline-flex">
          Book Consultation
        </CTAButton>
        <CTAButton href="/contact" className="lg:hidden">
          Contact
        </CTAButton>
      </div>
    </header>
  );
}


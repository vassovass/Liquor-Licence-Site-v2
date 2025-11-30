import Link from "next/link";

import { contactPoints, footerNav } from "@/lib/routes";

import { BrandMark } from "./brand-mark";
import { CTAButton } from "./cta-button";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-brand-cream">
      <div className="container grid gap-10 border-t border-white/10 py-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="space-y-6">
          <BrandMark size="md" />
          <p className="max-w-sm text-sm text-brand-cream/70">
            20+ years navigating the South African Liquor Act with a 95% approval rate. Strategic guidance for every
            application, from new licences to relocations.
          </p>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-brand-sand">
            {contactPoints.map((point) => (
              <Link key={point.label} href={point.href} className="hover:text-brand-cream">
                {point.label}
              </Link>
            ))}
          </div>
        </div>

        {Object.entries(footerNav).map(([heading, items]) => (
          <div key={heading} className="space-y-4 text-sm">
            <p className="font-semibold uppercase tracking-[0.3em] text-brand-sand">{heading}</p>
            <ul className="space-y-2 text-brand-cream/70">
              {items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-brand-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/5">
        <div className="container flex flex-col gap-4 py-6 text-xs text-brand-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {currentYear} BAJ Liquor Licence Consultants. All rights reserved.</span>
          <CTAButton href="/contact" variant="ghost" size="md" className="px-4 py-2">
            Request Free Consultation
          </CTAButton>
        </div>
      </div>
    </footer>
  );
}


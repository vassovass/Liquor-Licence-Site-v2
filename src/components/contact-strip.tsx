import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import { contactPoints } from "@/lib/routes";

const iconMap: Record<string, ReactNode> = {
  phone: (
    <span
      aria-hidden
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm tracking-[0.3em] text-brand-sand"
    >
      ✆
    </span>
  ),
  email: (
    <span
      aria-hidden
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-base text-brand-sand"
    >
      ✉
    </span>
  ),
  whatsapp: (
    <Image src="/images/whatsapp-icon.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" aria-hidden />
  ),
};

export function ContactStrip() {
  return (
    <div className="contact-strip">
      {contactPoints.map((point) => (
        <Link key={point.label} href={point.href} className="contact-chip group min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            {point.icon ? iconMap[point.icon] : null}
            <div className="min-w-0 flex-1">
              <div className="text-xs uppercase tracking-[0.3em] text-brand-sand">{point.label}</div>
              <div className="text-base font-semibold text-brand-cream group-hover:text-white truncate">{point.value}</div>
            </div>
          </div>
          {point.helper ? <div className="mt-2 text-xs text-brand-cream/70">{point.helper}</div> : null}
        </Link>
      ))}
    </div>
  );
}


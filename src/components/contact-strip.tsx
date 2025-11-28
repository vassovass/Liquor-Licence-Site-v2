import Link from "next/link";

import { contactPoints } from "@/lib/routes";

export function ContactStrip() {
  return (
    <div className="contact-strip">
      {contactPoints.map((point) => (
        <Link key={point.label} href={point.href} className="contact-chip">
          <div className="text-xs uppercase tracking-[0.3em] text-brand-sand">{point.label}</div>
          <div className="text-lg font-semibold text-brand-cream">{point.value}</div>
          {point.helper ? <div className="text-xs text-brand-cream/70">{point.helper}</div> : null}
        </Link>
      ))}
    </div>
  );
}


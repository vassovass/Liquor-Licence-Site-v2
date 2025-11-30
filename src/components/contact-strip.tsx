"use client";

import Image from "next/image";
import Link from "next/link";

import { assetPath } from "@/lib/asset-path";
import { contactPoints } from "@/lib/routes";
import { RevealPhone } from "@/components/reveal-phone";
import { RevealEmail } from "@/components/reveal-email";

function IconPhone() {
  return (
    <span
      aria-hidden
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm tracking-[0.3em] text-brand-sand"
    >
      ✆
    </span>
  );
}

function IconEmail() {
  return (
    <span
      aria-hidden
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-base text-brand-sand"
    >
      ✉
    </span>
  );
}

function IconWhatsApp() {
  return (
    <Image
      src={assetPath("/images/whatsapp-icon.png")}
      alt=""
      width={40}
      height={40}
      className="h-10 w-10 object-contain"
      aria-hidden
    />
  );
}

const iconMap: Record<string, () => JSX.Element> = {
  phone: IconPhone,
  email: IconEmail,
  whatsapp: IconWhatsApp,
};

export function ContactStrip() {
  return (
    <div className="contact-strip">
      {contactPoints.map((point) => {
        const Icon = point.icon ? iconMap[point.icon] : null;
        const trackingLabel = `contact_strip_${point.icon || point.label.toLowerCase()}`;

        // Render phone numbers with reveal mechanism
        if (point.icon === "phone") {
          return (
            <div key={point.label} className="contact-chip group min-w-0">
              <div className="flex items-center gap-3 min-w-0">
                {Icon ? <Icon /> : null}
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-[0.3em] text-brand-sand">{point.label}</div>
                  <div className="text-base font-semibold text-brand-cream group-hover:text-white truncate">
                    <RevealPhone
                      phone={point.href.replace("tel:", "")}
                      displayPhone={point.value}
                      href={point.href}
                      className="inline"
                      trackingLabel={trackingLabel}
                    />
                  </div>
                </div>
              </div>
              {point.helper ? <div className="mt-2 text-xs text-brand-cream/70">{point.helper}</div> : null}
            </div>
          );
        }

        // Render email addresses with reveal mechanism
        if (point.icon === "email") {
          return (
            <div key={point.label} className="contact-chip group min-w-0">
              <div className="flex items-center gap-3 min-w-0">
                {Icon ? <Icon /> : null}
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-[0.3em] text-brand-sand">{point.label}</div>
                  <div className="text-base font-semibold text-brand-cream group-hover:text-white truncate">
                    <RevealEmail
                      email={point.href.replace("mailto:", "")}
                      displayEmail={point.value}
                      href={point.href}
                      className="inline"
                      trackingLabel={trackingLabel}
                    />
                  </div>
                </div>
              </div>
              {point.helper ? <div className="mt-2 text-xs text-brand-cream/70">{point.helper}</div> : null}
            </div>
          );
        }

        // Render WhatsApp and other links normally (but with tracking)
        return (
          <Link
            key={point.label}
            href={point.href}
            className="contact-chip group min-w-0"
            data-track-action="click_contact_strip"
            data-track-category="contact"
            data-track-label={trackingLabel}
          >
            <div className="flex items-center gap-3 min-w-0">
              {Icon ? <Icon /> : null}
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-[0.3em] text-brand-sand">{point.label}</div>
                <div className="text-base font-semibold text-brand-cream group-hover:text-white truncate">{point.value}</div>
              </div>
            </div>
            {point.helper ? <div className="mt-2 text-xs text-brand-cream/70">{point.helper}</div> : null}
          </Link>
        );
      })}
    </div>
  );
}


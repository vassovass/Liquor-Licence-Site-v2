"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/tracking";

type RevealPhoneProps = {
  phone: string;
  displayPhone?: string;
  href?: string;
  className?: string;
  trackingLabel?: string;
  trackingCategory?: string;
};

export function RevealPhone({
  phone,
  displayPhone,
  href,
  className = "",
  trackingLabel,
  trackingCategory = "contact",
}: RevealPhoneProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const display = displayPhone || phone;
  const telHref = href || `tel:${phone}`;

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      trackEvent({
        action: "reveal_phone",
        category: trackingCategory,
        label: trackingLabel || phone,
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isRevealed) {
      e.preventDefault();
      handleReveal();
    } else {
      trackEvent({
        action: "click_phone",
        category: trackingCategory,
        label: trackingLabel || phone,
      });
    }
  };

  return (
    <a
      href={telHref}
      onClick={handleClick}
      className={`reveal-phone ${className}`}
      data-revealed={isRevealed}
      data-phone={phone}
      {...(isRevealed
        ? {}
        : {
            "data-reveal-action": "reveal_phone",
            "data-reveal-category": trackingCategory,
            "data-reveal-label": trackingLabel || phone,
          })}
    >
      {isRevealed ? (
        <span className="revealed-content">{display}</span>
      ) : (
        <span className="reveal-trigger cursor-pointer">
          <span className="opacity-70">Click to reveal</span>
          <span className="ml-2 opacity-50 text-sm">phone number</span>
        </span>
      )}
    </a>
  );
}



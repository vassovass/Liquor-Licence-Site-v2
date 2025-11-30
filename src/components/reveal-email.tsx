"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/tracking";

type RevealEmailProps = {
  email: string;
  displayEmail?: string;
  href?: string;
  className?: string;
  trackingLabel?: string;
  trackingCategory?: string;
};

export function RevealEmail({
  email,
  displayEmail,
  href,
  className = "",
  trackingLabel,
  trackingCategory = "contact",
}: RevealEmailProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const display = displayEmail || email;
  const mailtoHref = href || `mailto:${email}`;

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      trackEvent({
        action: "reveal_email",
        category: trackingCategory,
        label: trackingLabel || email,
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isRevealed) {
      e.preventDefault();
      handleReveal();
    } else {
      trackEvent({
        action: "click_email",
        category: trackingCategory,
        label: trackingLabel || email,
      });
    }
  };

  return (
    <a
      href={mailtoHref}
      onClick={handleClick}
      className={`reveal-email ${className}`}
      data-revealed={isRevealed}
      data-email={email}
      {...(isRevealed
        ? {}
        : {
            "data-reveal-action": "reveal_email",
            "data-reveal-category": trackingCategory,
            "data-reveal-label": trackingLabel || email,
          })}
    >
      {isRevealed ? (
        <span className="revealed-content">{display}</span>
      ) : (
        <span className="reveal-trigger cursor-pointer">
          <span className="opacity-70">Click to reveal</span>
          <span className="ml-2 opacity-50 text-sm">email address</span>
        </span>
      )}
    </a>
  );
}



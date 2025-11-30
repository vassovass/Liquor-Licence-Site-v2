/**
 * Tracking utility for analytics events
 * Supports multiple analytics platforms via data attributes and custom events
 */

export type TrackingEvent = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

/**
 * Track an event - dispatches custom event and can be extended for GA4, GTM, etc.
 */
export function trackEvent(event: TrackingEvent) {
  // Dispatch custom event for any listeners
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("trackEvent", {
        detail: event,
      })
    );

    // Google Analytics 4 (gtag)
    if (typeof window.gtag !== "undefined") {
      window.gtag("event", event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }

    // Google Tag Manager (dataLayer)
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: event.action,
        eventCategory: event.category,
        eventLabel: event.label,
        value: event.value,
      });
    }

    // Console log for debugging (remove in production if needed)
    if (process.env.NODE_ENV === "development") {
      console.log("Track Event:", event);
    }
  }
}

/**
 * Generate data attributes for tracking
 */
export function getTrackingAttributes(event: TrackingEvent) {
  return {
    "data-track-action": event.action,
    "data-track-category": event.category || "",
    "data-track-label": event.label || "",
    "data-track-value": event.value?.toString() || "",
  };
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}



"use client";

import { useState } from "react";
import { Card } from "@/components/card";
import { Callout } from "@/components/callout";
import { trackEvent } from "@/lib/tracking";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);
    
    // Extract service value BEFORE FormData is consumed by fetch()
    const service = formData.get("service") as string;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(data.message || "Thank you for your enquiry. We'll be in touch soon.");
        
        // Track successful form submission
        trackEvent({
          action: "form_submit_success",
          category: "contact_form",
          label: service || "general_enquiry",
        });
        
        e.currentTarget.reset();
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data.error || "Failed to send your message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Failed to send your message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card title="Request Free Consultation" className="h-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-brand-sand block">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-brand-sand block">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none transition-colors"
              placeholder="082 123 4567"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-brand-sand block">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium text-brand-sand block">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream focus:border-brand-sand focus:outline-none transition-colors"
          >
            <option value="">Select a service...</option>
            <option value="new-licence">New Liquor Licence Application</option>
            <option value="transfer">Transfer of Liquor Licence</option>
            <option value="temporary">Temporary Licence</option>
            <option value="event">Event Licence</option>
            <option value="alter">Alter Licensed Premises</option>
            <option value="extension">Extended Trading Hours</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-brand-sand block">
            How can we help? *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your business and what you need..."
          ></textarea>
        </div>
        {submitStatus === "success" && (
          <Callout variant="info" className="mb-4">
            {submitMessage}
          </Callout>
        )}
        {submitStatus === "error" && (
          <Callout variant="error" className="mb-4">
            {submitMessage}
          </Callout>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-brand-sand px-8 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-brand-charcoal shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-colors duration-200 hover:bg-brand-sand/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sand disabled:opacity-50 disabled:cursor-not-allowed cta-button"
          data-cta-action="form_submit"
          data-cta-category="contact_form"
        >
          {isSubmitting ? "Sending..." : "Send Request"}
        </button>
        <p className="text-xs text-center text-brand-cream/50">
          We respect your privacy. Your details are kept confidential and will only be used to contact you about your
          enquiry.
        </p>
      </form>
    </Card>
  );
}


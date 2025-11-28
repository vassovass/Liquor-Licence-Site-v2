import { CTAButton } from "@/components/cta-button";
import { ContactStrip } from "@/components/contact-strip";
import { SectionShell } from "@/components/section-shell";
import { StatsBar } from "@/components/stats-bar";

const sampleStats = [
  { value: "95%", label: "Approval Rate", helper: "Across all provinces" },
  { value: "20+", label: "Years Experience" },
  { value: "10", label: "Licence Types", helper: "Full-service coverage" },
];

export default function StyleGuidePage() {
  return (
    <div className="container space-y-14 py-12">
      <SectionShell
        eyebrow="Style Guide"
        title="Foundations preview"
        description="Quick snapshot of the core UI elements before we begin page builds. Review typography, buttons, stats, and contact strip for alignment with the Canva baseline."
      />

      <div className="space-y-6 rounded-3xl border border-white/10 bg-brand-graphite/40 p-10">
        <h3 className="font-serif text-4xl">Typography Samples</h3>
        <p className="text-sm uppercase tracking-[0.35em] text-brand-sand">Eyebrow label</p>
        <p className="font-serif text-3xl">Display Headline – Liquor Licence Consultant Cape Town</p>
        <p className="text-base text-brand-cream/70">
          Body copy uses Inter with 1.6 line-height for optimal readability. Letter-spacing matches the Canva presentation,
          and we balance serif/sans for contrast.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <CTAButton href="/contact" variant="primary" size="lg">
          Book Consultation
        </CTAButton>
        <CTAButton href="/services" variant="secondary">
          View Services
        </CTAButton>
        <CTAButton href="https://wa.me/27823217722" variant="ghost">
          WhatsApp Beverly
        </CTAButton>
      </div>

      <StatsBar stats={sampleStats} />

      <ContactStrip />
    </div>
  );
}


import { ReactNode } from "react";
import { Breadcrumb } from "@/components/breadcrumb";
import { FeatureHighlight } from "@/components/feature-highlight";
import { StatsBar, type Stat } from "@/components/stats-bar";
import { CTAButton } from "@/components/cta-button";

interface HeroConfig {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
}

interface ContactConfig {
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

interface ServiceLayoutProps {
  breadcrumbLabel: string;
  hero: HeroConfig;
  stats?: Stat[];
  children: ReactNode;
  contact?: ContactConfig;
}

export function ServiceLayout({ breadcrumbLabel, hero, stats, children, contact }: ServiceLayoutProps) {
  const contactContent =
    contact ??
    ({
      title: "Ready to Get Started?",
      description:
        "Let Beverly Jeursen handle the paperwork while you focus on your venue. Book a free consultation to confirm requirements and timelines.",
      primaryCta: { label: "Book Free Consultation", href: "/contact" },
      secondaryCta: { label: "Call +27 82 321 7722", href: "tel:+27823217722" },
    } satisfies ContactConfig);

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: breadcrumbLabel },
            ]}
          />
        </div>

        <FeatureHighlight
          title={hero.title}
          description={hero.description}
          ctaText={hero.ctaText}
          ctaHref={hero.ctaHref}
          secondaryCtaText={hero.secondaryCtaText}
          secondaryCtaHref={hero.secondaryCtaHref}
          imageSrc={hero.imageSrc ?? "/images/hero-beverly.jpg"}
          className="mb-24"
        />

        {stats ? (
          <div className="mb-24">
            <StatsBar stats={stats} />
          </div>
        ) : null}

        {children}

        <div className="bg-brand-sand/10 rounded-[40px] p-12 text-center border border-brand-sand/20 mt-24">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-cream">{contactContent.title}</h2>
          <p className="text-lg text-brand-cream/70 mb-8 max-w-2xl mx-auto">{contactContent.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {contactContent.primaryCta ? (
              <CTAButton href={contactContent.primaryCta.href} variant="primary" size="lg">
                {contactContent.primaryCta.label}
              </CTAButton>
            ) : null}
            {contactContent.secondaryCta ? (
              <CTAButton href={contactContent.secondaryCta.href} variant="secondary" size="lg">
                {contactContent.secondaryCta.label}
              </CTAButton>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}


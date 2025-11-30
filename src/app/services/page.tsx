import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAButton } from "@/components/cta-button";
import { FeatureHighlight } from "@/components/feature-highlight";
import { StatsBar } from "@/components/stats-bar";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { ContentBox } from "@/components/content-box";
import { getAllSlugs, getMarkdownContent } from "@/lib/markdown";
import { FileText, Users, Calendar, Wine, Building2, Clock, Scale, Store, Home, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | BJ Liquor Licence Consultants",
  description: "Comprehensive liquor licence services for all business types in Cape Town and surrounds.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  "new-liquor-licence-application": <FileText className="h-8 w-8" />,
  "transfer-liquor-licence": <Users className="h-8 w-8" />,
  "temporary-liquor-licence": <Calendar className="h-8 w-8" />,
  "event-liquor-licence": <Wine className="h-8 w-8" />,
  "alter-licensed-premises": <Building2 className="h-8 w-8" />,
  "extension-trading-hours": <Clock className="h-8 w-8" />,
  "transfer-financial-interest": <Scale className="h-8 w-8" />,
  "store-liquor-application": <Store className="h-8 w-8" />,
  "removal-of-licence": <Home className="h-8 w-8" />,
  "consent-conduct-business": <Zap className="h-8 w-8" />,
};

export default function ServicesIndexPage() {
  const slugs = getAllSlugs("service-pages");
  const services = slugs
    .map((slug) => {
      const doc = getMarkdownContent("service-pages", slug);
      return doc;
    })
    .filter((service): service is NonNullable<typeof service> => !!service);

  // Add the special case for new-liquor-licence-application if not in markdown
  const allServices = services;
  if (!allServices.find((s) => s.slug === "new-liquor-licence-application")) {
    allServices.push({
      slug: "new-liquor-licence-application",
      title: "New Liquor Licence Application",
      metadata: {
        meta_description: "Full Section 36 applications for restaurants, pubs, hotels, and events.",
      },
      content: "",
    });
  }

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        </div>

        <FeatureHighlight
          title="Complete Liquor Licence Services in Cape Town"
          description="Every licence type under the South African Liquor Act handled with precision. From new applications to complex transfers, Beverly Jeursen provides expert guidance with one of the highest approval rates in Cape Town."
          ctaText="Get Free Consultation"
          ctaHref="/contact"
          imageSrc="/images/hero-beverly.jpg"
          className="mb-24"
        />

        <div className="mb-24">
          <StatsBar
            stats={[
              { value: "95%", label: "Approval Rate", helper: "In Cape Town" },
              { value: "20+ yrs", label: "Experience" },
              { value: "10", label: "Licence Types", helper: "Complete Liquor Act coverage" },
            ]}
          />
        </div>

        <SectionShell
          eyebrow="Services"
          title="Our Expertise"
          description="We handle all types of liquor licence applications with precision and speed. Choose the service that matches your needs."
        >
          <Grid columns={2} className="mt-12">
            {allServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <ContentBox
                  title={service.title}
                  icon={serviceIcons[service.slug] || <FileText className="h-8 w-8" />}
                  className="h-full transition-all duration-300 hover:border-brand-sand"
                >
                  <p className="text-sm text-brand-cream/70 line-clamp-3 mt-4">
                    {service.metadata.meta_description || "Expert guidance for this service type."}
                  </p>
                  <span className="mt-6 inline-block text-xs uppercase tracking-[0.35em] text-brand-sand group-hover:text-brand-cream transition-colors">
                    Learn More →
                  </span>
                </ContentBox>
              </Link>
            ))}
          </Grid>
        </SectionShell>

        <div className="mb-24 mt-16">
          <SectionShell
            eyebrow="Why Choose Us"
            title="Expert Guidance, Personal Service, Guaranteed Outcomes"
            description="We combine legal rigour with relentless follow-up so you can trade confidently."
          >
            <Grid columns={3} className="mt-12">
              <ContentBox title="Proven Track Record" icon={<FileText className="h-8 w-8" />}>
                Highest approval rate thanks to meticulous submissions and proactive follow-up.
              </ContentBox>
              <ContentBox title="Authority Recognition" icon={<Users className="h-8 w-8" />}>
                Recommended by the Liquor Licencing Authority for complex matters.
              </ContentBox>
              <ContentBox title="All Licence Types" icon={<Wine className="h-8 w-8" />}>
                From new businesses to complex relocations, every section is covered.
              </ContentBox>
              <ContentBox title="Fast Processing" icon={<Clock className="h-8 w-8" />}>
                We know every Western Cape nuance, so your file never sits idle.
              </ContentBox>
              <ContentBox title="Personal Service" icon={<Users className="h-8 w-8" />}>
                Work directly with Beverly—no call centres, no hand-offs.
              </ContentBox>
              <ContentBox title="Guaranteed Guidance" icon={<Zap className="h-8 w-8" />}>
                We fight for the desired outcome and guide you through collection.
              </ContentBox>
            </Grid>
          </SectionShell>
        </div>

        <div className="mb-24">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="/contact"
              variant="primary"
              size="lg"
              trackingAction="click_cta"
              trackingCategory="services"
              trackingLabel="get_free_consultation"
            >
              Get Free Consultation
            </CTAButton>
            <CTAButton
              href="tel:+27823217722"
              variant="secondary"
              size="lg"
              trackingAction="click_phone_cta"
              trackingCategory="services"
              trackingLabel="call_phone_services"
            >
              Call +27 82 321 7722
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}

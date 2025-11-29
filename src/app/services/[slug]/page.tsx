import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { CTAButton } from "@/components/cta-button";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getAllSlugs, getMarkdownContent } from "@/lib/markdown";
import { Breadcrumb } from "@/components/breadcrumb";
import { NewLiquorLicenceShowcase } from "@/components/pages/new-liquor-licence-showcase";
import { FeatureHighlight } from "@/components/feature-highlight";
import { StatsBar } from "@/components/stats-bar";
import { Separator } from "@/components/separator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("service-pages");
  const specialCases = ["new-liquor-licence-application"];

  // Combine markdown slugs with special case routes
  const allSlugs = [...new Set([...slugs, ...specialCases])];

  return allSlugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // Handle special case routes that may not have markdown files
  // or have custom implementations
  if (slug === "new-liquor-licence-application") {
    // Try to get metadata from markdown file if it exists
    const doc = getMarkdownContent("service-pages", slug);
    if (doc) {
      return {
        title: doc.metadata.seo_title || doc.title,
        description: doc.metadata.meta_description,
        keywords: [
          doc.metadata.focus_keyword,
          ...(doc.metadata.secondary_keywords?.split(",").map((k) => k.trim()) || []),
        ].filter(Boolean),
      };
    }
    // Fallback metadata for special case routes
    return {
      title: "New Liquor Licence Application Cape Town | Section 36 | Expert Consultant",
      description:
        "Apply for a new liquor licence in South Africa with expert help. Section 36 applications for restaurants, pubs, bottle stores. 20+ years experience. Call +27 82-321-7722",
      keywords: [
        "new liquor licence application",
        "section 36 liquor licence",
        "apply for liquor licence cape town",
        "liquor licence application south africa",
      ],
    };
  }

  const doc = getMarkdownContent("service-pages", slug);

  if (!doc) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: doc.metadata.seo_title || doc.title,
    description: doc.metadata.meta_description,
    keywords: [
      doc.metadata.focus_keyword,
      ...(doc.metadata.secondary_keywords?.split(",").map((k) => k.trim()) || []),
    ].filter(Boolean),
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  // Special Case: Replace "new-liquor-licence-application" content with the new layout
  if (slug === "new-liquor-licence-application") {
    return <NewLiquorLicenceShowcase />;
  }

  const doc = getMarkdownContent("service-pages", slug);

  if (!doc) {
    notFound();
  }

  // Extract title from first H1 or use doc title
  const pageTitle = doc.title || "Service";

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: pageTitle },
            ]}
          />
        </div>

        <FeatureHighlight
          title={pageTitle}
          description={doc.metadata.meta_description || "Expert guidance for your liquor licence needs."}
          ctaText="Get Free Consultation"
          ctaHref="#contact"
          imageSrc="/images/hero-beverly.jpg"
          className="mb-24"
        />

        <div className="mb-24">
          <StatsBar
            stats={[
              { value: "95%", label: "Approval Rate", helper: "Across all provinces" },
              { value: "20+ yrs", label: "Experience" },
              { value: "10", label: "Licence Types" },
            ]}
          />
        </div>

        <SectionShell eyebrow="Service Details" title="" description="">
          <MarkdownRenderer content={doc.content} />
        </SectionShell>

        <div className="mb-24 mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg" className="w-full sm:w-auto justify-center">
              Get Free Consultation
            </CTAButton>
            <CTAButton
              href="https://wa.me/27823217722"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto justify-center"
            >
              WhatsApp Beverly
            </CTAButton>
          </div>
        </div>

        <Separator className="my-24" />

        <div
          id="contact"
          className="bg-brand-sand/10 rounded-[40px] p-12 text-center border border-brand-sand/20 mb-24"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-cream">Ready to Proceed?</h2>
          <p className="text-lg text-brand-cream/70 mb-8 max-w-2xl mx-auto">
            Let Beverly Jeursen handle your {pageTitle.toLowerCase()} application. Book a free consultation to assess
            your eligibility and get a clear roadmap to approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Book Free Consultation
            </CTAButton>
            <CTAButton href="tel:+27823217722" variant="secondary" size="lg">
              Call +27 82 321 7722
            </CTAButton>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10">
          <h3 className="font-serif text-2xl mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/services/new-liquor-licence-application"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors"
            >
              New Liquor Licence Application
            </Link>
            <Link
              href="/services/transfer-liquor-licence"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors"
            >
              Transfer of Liquor Licence
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

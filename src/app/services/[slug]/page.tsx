import { notFound } from "next/navigation";
import { Metadata } from "next";

import { SectionShell } from "@/components/section-shell";
import { CTAButton } from "@/components/cta-button";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getAllSlugs, getMarkdownContent } from "@/lib/markdown";
import { Breadcrumb } from "@/components/breadcrumb";
import { NewLiquorLicenceShowcase } from "@/components/pages/new-liquor-licence-showcase";

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
          ...(doc.metadata.secondary_keywords?.split(",").map(k => k.trim()) || [])
        ].filter(Boolean),
      };
    }
    // Fallback metadata for special case routes
    return {
      title: "New Liquor Licence Application Cape Town | Section 36 | Expert Consultant",
      description: "Apply for a new liquor licence in South Africa with expert help. Section 36 applications for restaurants, pubs, bottle stores. 20+ years experience. Call +27 82-321-7722",
      keywords: ["new liquor licence application", "section 36 liquor licence", "apply for liquor licence cape town", "liquor licence application south africa"],
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
        ...(doc.metadata.secondary_keywords?.split(",").map(k => k.trim()) || [])
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

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="article-container">
        {/* Breadcrumb */}
        <div className="mb-8">
            <Breadcrumb 
                items={[
                    { label: "Services", href: "/services" },
                    { label: doc.title }
                ]} 
            />
        </div>

        <SectionShell
            eyebrow="Service"
            title={doc.title}
            description={doc.metadata.meta_description}
        >
            <MarkdownRenderer content={doc.content} />

            <div className="mt-16 pt-8 border-t border-white/10">
                <h3 className="font-serif text-2xl mb-6">Ready to proceed?</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                     <CTAButton href="/contact" variant="primary" className="w-full sm:w-auto justify-center">
                        Get Free Consultation
                    </CTAButton>
                    <CTAButton href="https://wa.me/27823217722" variant="secondary" className="w-full sm:w-auto justify-center">
                        WhatsApp Beverly
                    </CTAButton>
                </div>
            </div>
        </SectionShell>
      </div>
    </div>
  );
}

import { notFound } from "next/navigation";
import { Metadata } from "next";

import { SectionShell } from "@/components/section-shell";
import { CTAButton } from "@/components/cta-button";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getAllSlugs, getMarkdownContent } from "@/lib/markdown";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs("service-pages");
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
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
  const doc = getMarkdownContent("service-pages", slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="article-container">
        {/* Breadcrumb-ish or Back Link */}
        <div className="mb-8">
            <CTAButton href="/services" variant="ghost" className="pl-0 hover:pl-2 transition-all">
                ← Back to Services
            </CTAButton>
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


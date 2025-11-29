import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";

import { SectionShell } from "@/components/section-shell";
import { CTAButton } from "@/components/cta-button";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getMarkdownContent } from "@/lib/markdown";
import { assetPath } from "@/lib/asset-path";

export async function generateMetadata(): Promise<Metadata> {
  const doc = getMarkdownContent("pages", "about-beverly-jeursen");

  if (!doc) {
    return {
      title: "About Beverly Jeursen",
    };
  }

  return {
    title: doc.metadata.seo_title || doc.title,
    description: doc.metadata.meta_description,
  };
}

export default function AboutPage() {
  const doc = getMarkdownContent("pages", "about-beverly-jeursen");

  if (!doc) {
    notFound();
  }

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.5fr] lg:items-start">
          {/* Main Content */}
          <div>
             <SectionShell
                eyebrow="About"
                title={doc.title}
                description={doc.metadata.meta_description}
            >
                <MarkdownRenderer content={doc.content} />

                <div className="mt-12 flex gap-4">
                     <CTAButton href="/contact" variant="primary">
                        Work With Beverly
                    </CTAButton>
                </div>
            </SectionShell>
          </div>

          {/* Sidebar / Image */}
          <div className="space-y-8 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-graphite">
                <Image
                src={assetPath("/images/hero-beverly.jpg")}
                alt="Beverly Jeursen"
                width={600}
                height={800}
                className="h-full w-full object-cover"
                />
            </div>
            
            <div className="rounded-3xl border border-white/10 bg-brand-graphite/30 p-6 text-center">
                <Image
                src={assetPath("/images/authority-crest.png")}
                alt="Authority recognition crest"
                width={160}
                height={160}
                className="mx-auto h-32 w-32 object-contain"
                />
                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-brand-sand">Authority Recommended</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


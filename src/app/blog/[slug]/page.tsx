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
  const slugs = getAllSlugs("blog");
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getMarkdownContent("blog", slug);

  if (!doc) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: doc.metadata.seo_title || doc.title,
    description: doc.metadata.meta_description,
    keywords: [
        doc.metadata.focus_keyword, 
    ].filter(Boolean),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getMarkdownContent("blog", slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="article-container">
        <div className="mb-8">
            <CTAButton href="/blog" variant="ghost" className="pl-0 hover:pl-2 transition-all">
                ← Back to Blog
            </CTAButton>
        </div>

        <SectionShell
            eyebrow={doc.metadata.category || "Blog"}
            title={doc.title}
            description={doc.metadata.meta_description}
        >
             <div className="text-sm text-brand-cream/50 mb-8 border-b border-white/10 pb-8">
                <span>By {doc.metadata.author}</span>
                <span className="mx-2">•</span>
                <span>{doc.metadata.publication_date}</span>
            </div>

            <MarkdownRenderer content={doc.content} />

             <div className="mt-16 pt-8 border-t border-white/10">
                <h3 className="font-serif text-2xl mb-6">Need expert help?</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                     <CTAButton href="/contact" variant="primary" className="w-full sm:w-auto justify-center">
                        Get Free Consultation
                    </CTAButton>
                </div>
            </div>
        </SectionShell>
      </div>
    </div>
  );
}


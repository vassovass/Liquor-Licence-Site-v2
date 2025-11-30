import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAButton } from "@/components/cta-button";
import { FeatureHighlight } from "@/components/feature-highlight";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { ContentBox } from "@/components/content-box";
import { Card } from "@/components/card";
import { Checklist } from "@/components/checklist";
import { Timeline } from "@/components/timeline";
import { Callout } from "@/components/callout";
import { Accordion } from "@/components/accordion";
import { Separator } from "@/components/separator";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { getAllSlugs, getMarkdownContent } from "@/lib/markdown";
import { FileText, AlertTriangle, Clock, DollarSign, CheckCircle2, MapPin } from "lucide-react";

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
    keywords: [doc.metadata.focus_keyword].filter(Boolean),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getMarkdownContent("blog", slug);

  if (!doc) {
    notFound();
  }

  // Extract key information for structured components
  const hasProcessSteps = doc.content.includes("Step 1:") || doc.content.includes("## 5. The Application Process");
  const hasRequirements = doc.content.includes("Requirements") || doc.content.includes("## 4. Requirements");
  const hasFAQs = doc.content.includes("FAQ") || doc.content.includes("Frequently Asked");

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: doc.title },
            ]}
          />
        </div>

        <FeatureHighlight
          title={doc.title}
          description={doc.metadata.meta_description || "Expert insights and guidance on liquor licencing in Cape Town."}
          ctaText="Get Expert Help"
          ctaHref="#contact"
          imageSrc="/images/hero-beverly.jpg"
          className="mb-24"
        />

        <div className="mb-8 text-sm text-brand-cream/50 border-b border-white/10 pb-8">
          <span>By {doc.metadata.author || "Beverly Jeursen"}</span>
          <span className="mx-2">•</span>
          <span>{doc.metadata.publication_date || "Recently Updated"}</span>
          {doc.metadata.category && (
            <>
              <span className="mx-2">•</span>
              <span className="uppercase tracking-widest text-brand-sand">{doc.metadata.category}</span>
            </>
          )}
        </div>

        <SectionShell eyebrow="Article" title="" description="">
          <MarkdownRenderer content={doc.content} />
        </SectionShell>

        <div className="mb-24 mt-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Get Free Consultation
            </CTAButton>
            <CTAButton href="/services" variant="secondary" size="lg">
              View All Services
            </CTAButton>
          </div>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <SectionShell
            eyebrow="Need Help?"
            title="Expert Guidance Available"
            description="Don't navigate the liquor licence process alone. Get professional assistance from Cape Town's leading consultant."
          >
            <Grid columns={3} className="mt-12">
              <Card title="Free Consultation">
                Every engagement begins with a complimentary consultation where we assess your situation and explain the
                process.
              </Card>
              <Card title="20+ Years Experience">
                Benefit from decades of expertise and one of the highest approval rates in Cape Town.
              </Card>
              <Card title="Complete Service">
                From initial assessment through final approval, we handle every aspect of your application.
              </Card>
            </Grid>
          </SectionShell>
        </div>

        <div
          id="contact"
          className="bg-brand-sand/10 rounded-[40px] p-12 text-center border border-brand-sand/20 mb-24"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-cream">Ready to Get Started?</h2>
          <p className="text-lg text-brand-cream/70 mb-8 max-w-2xl mx-auto">
            Contact Beverly Jeursen today for expert guidance on your liquor licence application. Free consultation
            available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Get Free Consultation
            </CTAButton>
            <CTAButton href="tel:+27823217722" variant="secondary" size="lg">
              Call +27 82 321 7722
            </CTAButton>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10">
          <h3 className="font-serif text-2xl mb-6">Related Articles</h3>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors"
            >
              View All Blog Posts
            </Link>
            <Link
              href="/services"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors"
            >
              View All Services
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors"
            >
              About Beverly Jeursen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

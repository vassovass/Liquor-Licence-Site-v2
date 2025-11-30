import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { Card } from "@/components/card";
import { CTAButton } from "@/components/cta-button";
import { getAllSlugs, getMarkdownContent } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Blog | BJ Liquor Licence Consultants",
  description: "Latest news, guides, and updates on liquor licencing in Cape Town.",
};

export default function BlogIndexPage() {
  const slugs = getAllSlugs("blog");
  const posts = slugs
    .map((slug) => {
      const doc = getMarkdownContent("blog", slug);
      return doc;
    })
    .filter((post): post is NonNullable<typeof post> => !!post);

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
        </div>

        <SectionShell
          eyebrow="Blog"
          title="Liquor Licence Insights"
          description="Expert advice, guides, and industry news from Beverly Jeursen. Stay informed about liquor licencing in Cape Town."
        >
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-brand-cream/70 mb-6">No blog posts available yet.</p>
              <CTAButton href="/contact" variant="primary">
                Get Expert Advice
              </CTAButton>
            </div>
          ) : (
            <>
              <Grid columns={3} className="mt-12">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <Card
                      title={post.title}
                      subtitle={post.metadata.category || "Guide"}
                      className="h-full transition-all duration-300 hover:border-brand-sand"
                    >
                      <p className="text-sm text-brand-cream/70 line-clamp-3 mb-4">
                        {post.metadata.meta_description || "Read more about this topic..."}
                      </p>
                      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                        <span className="text-xs text-brand-cream/50">
                          {post.metadata.publication_date || "Recently Updated"}
                        </span>
                        <span className="text-xs uppercase tracking-[0.35em] text-brand-sand group-hover:text-brand-cream transition-colors">
                          Read More →
                        </span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </Grid>

              <div className="mt-16 text-center">
                <p className="text-brand-cream/70 mb-6">
                  Need expert guidance on your liquor licence application? Get personalized advice from Beverly Jeursen.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="/contact" variant="primary" size="lg">
                    Get Free Consultation
                  </CTAButton>
                  <CTAButton href="/services" variant="secondary">
                    View All Services
                  </CTAButton>
                </div>
              </div>
            </>
          )}
        </SectionShell>
      </div>
    </div>
  );
}

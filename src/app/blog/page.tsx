import Link from "next/link";
import { Metadata } from "next";
import { SectionShell } from "@/components/section-shell";
import { getAllSlugs, getMarkdownContent } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Blog | BJ Liquor Licence Consultants",
  description: "Latest news, guides, and updates on liquor licencing in South Africa.",
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
        <SectionShell
          eyebrow="Blog"
          title="Liquor Licence Insights"
          description="Expert advice, guides, and industry news."
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-3xl border border-white/10 bg-brand-graphite/30 p-6 transition hover:border-brand-sand"
              >
                <div className="mb-4">
                    <span className="text-xs uppercase tracking-widest text-brand-sand">
                        {post.metadata.category || "Guide"}
                    </span>
                </div>
                <h3 className="text-xl font-serif mb-3 group-hover:text-brand-sand transition-colors">
                    {post.title}
                </h3>
                <p className="text-sm text-brand-cream/70 line-clamp-3 mb-6 flex-1">
                    {post.metadata.meta_description}
                </p>
                <div className="text-xs text-brand-cream/50">
                    {post.metadata.publication_date || "Recently Updated"}
                </div>
              </Link>
            ))}
          </div>
        </SectionShell>
      </div>
    </div>
  );
}


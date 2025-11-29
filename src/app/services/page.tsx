import Link from "next/link";
import { Metadata } from "next";
import { SectionShell } from "@/components/section-shell";
import { getAllSlugs, getMarkdownContent } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Services | BJ Liquor Licence Consultants",
  description: "Comprehensive liquor licence services for all business types in South Africa.",
};

export default function ServicesIndexPage() {
  const slugs = getAllSlugs("service-pages");
  const services = slugs
    .map((slug) => {
        const doc = getMarkdownContent("service-pages", slug);
        return doc;
    })
    .filter((service): service is NonNullable<typeof service> => !!service);

  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <SectionShell
          eyebrow="Services"
          title="Our Expertise"
          description="We handle all types of liquor licence applications with precision and speed."
        >
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            {services.map((service) => (
              <Link 
                key={service.slug} 
                href={`/services/${service.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-brand-graphite/40 p-6 transition hover:border-brand-sand"
              >
                <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-brand-sand">Service</p>
                    <h3 className="mt-3 font-serif text-2xl group-hover:text-brand-sand transition-colors">
                        {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-cream/75 line-clamp-3">
                        {service.metadata.meta_description}
                    </p>
                </div>
                <span className="mt-6 text-xs uppercase tracking-[0.35em] text-brand-sand group-hover:text-brand-cream transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </SectionShell>
      </div>
    </div>
  );
}


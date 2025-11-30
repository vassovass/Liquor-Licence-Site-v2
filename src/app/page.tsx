import Image from "next/image";
import Link from "next/link";

import { assetPath } from "@/lib/asset-path";
import { CTAButton } from "@/components/cta-button";
import { ContactStrip } from "@/components/contact-strip";
import { SectionShell } from "@/components/section-shell";
import { StatsBar } from "@/components/stats-bar";

const stats = [
  { value: "95%", label: "Approval rate", helper: "In Cape Town" },
  { value: "20+ yrs", label: "Experience" },
  { value: "10", label: "Licence types", helper: "Full Liquor Act coverage" },
];

const trustBadges = ["20+ Years Industry Experience", "Highest Approval Rate", "Authority Recommended", "Expert in All Licence Types"];

const services = [
  {
    title: "New Liquor Licence",
    description: "Full Section 36 applications for restaurants, pubs, hotels, and events.",
    href: "/services/new-liquor-licence-application",
  },
  {
    title: "Transfer of Licence",
    description: "Section 65 transfers when buying or selling a licensed business.",
    href: "/services/transfer-liquor-licence",
  },
  {
    title: "Temporary Licence",
    description: "Short-term Section 48 approvals for seasonal or pop-up trading.",
    href: "/services/temporary-liquor-licence",
  },
  {
    title: "Event Licence",
    description: "Section 48(4) permits for weddings, festivals, and corporate functions.",
    href: "/services/event-liquor-licence",
  },
  {
    title: "Alter Licensed Premises",
    description: "Section 53 consent for renovations, extensions, and layout changes.",
    href: "/services/alter-licensed-premises",
  },
  {
    title: "Trading Hour Extensions",
    description: "Section 59(4) approvals to extend operating hours legally.",
    href: "/services/extension-trading-hours",
  },
  {
    title: "Transfer Financial Interest",
    description: "Section 51(2) support when partners or shareholders change.",
    href: "/services/transfer-financial-interest",
  },
  {
    title: "Store Liquor Application",
    description: "Section 57(1) permissions for off-site storage facilities.",
    href: "/services/store-liquor-application",
  },
  {
    title: "Removal of Licence",
    description: "Section 66(2) relocation applications without losing your licence.",
    href: "/services/removal-of-licence",
  },
  {
    title: "Consent to Conduct Business",
    description: "Section 65(3) approvals during transfers so you can keep trading.",
    href: "/services/consent-conduct-business",
  },
];

const benefits = [
  {
    title: "Proven Track Record",
    detail: "Highest approval rate thanks to meticulous submissions and proactive follow-up.",
  },
  {
    title: "Authority Recognition",
    detail: "Recommended by the Liquor Licencing Authority for complex matters.",
  },
  {
    title: "All Licence Types",
    detail: "From new businesses to complex relocations, every section is covered.",
  },
  {
    title: "Fast Processing",
    detail: "We know every provincial nuance, so your file never sits idle.",
  },
  {
    title: "Personal Service",
    detail: "Work directly with Beverly—no call centres, no hand-offs.",
  },
  {
    title: "Guaranteed Guidance",
    detail: "We fight for the desired outcome and guide you through collection.",
  },
];

const areaCards = [
  {
    title: "Cape Town CBD & Surrounds",
    image: assetPath("/images/areas-western-cape.jpg"),
    locations: ["City Bowl · V&A Waterfront", "Atlantic Seaboard · Sea Point", "Green Point · De Waterkant"],
  },
  {
    title: "Northern Suburbs",
    image: assetPath("/images/areas-gauteng.jpg"),
    locations: ["Blouberg · Table View · Milnerton", "Durbanville · Bellville · Tyger Valley", "Parow · Goodwood · Brackenfell"],
  },
  {
    title: "Southern Suburbs & Winelands",
    image: assetPath("/images/areas-kzn.jpg"),
    locations: ["Claremont · Newlands · Constantia", "Stellenbosch · Paarl · Franschhoek", "Somerset West · Strand · Gordon's Bay"],
  },
];

const processSteps = [
  { step: "01", title: "Free Consultation", detail: "We unpack the exact licence you need and timeline constraints." },
  { step: "02", title: "Document Preparation", detail: "Checklist, templates, and site plans handled with precision." },
  { step: "03", title: "Submission & Liaison", detail: "We lodge the application and manage all queries/objections." },
  { step: "04", title: "Follow-Up & Hearings", detail: "Ongoing representation until approval is granted." },
  { step: "05", title: "Approval & Collection", detail: "We notify you immediately and brief you on next steps." },
];

const faqs = [
  {
    question: "How long does an application take?",
    answer: "Typical timelines range from 60–120 days depending on province and licence type. We accelerate the process by filing complete, compliant packs.",
  },
  {
    question: "Can I apply on my own?",
    answer: "It's possible, but most DIY files encounter delays or rejection. A specialist ensures compliance with every section of the Liquor Act.",
  },
  {
    question: "Do you handle renewals and transfers?",
    answer: "Yes—renewals, ownership transfers, relocations, and storage consents are all included in our services.",
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "BJ Liquor Licence Consultants",
  url: "https://bjliquorlicence.co.za",
  image: "https://bjliquorlicence.co.za/images/hero-beverly.jpg",
  telephone: "+27-82-321-7722",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Blouberg",
    addressLocality: "Cape Town",
    addressRegion: "Western Cape",
    postalCode: "7441",
    addressCountry: "ZA",
  },
  sameAs: ["https://www.facebook.com/", "https://www.linkedin.com/"],
  areaServed: ["Cape Town", "Blouberg", "Table View", "Milnerton", "Durbanville", "Bellville", "Stellenbosch", "Paarl", "Somerset West"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <div className="bg-brand-charcoal text-brand-cream">
        <section className="container grid gap-10 py-16 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <p className="section-eyebrow text-brand-sand">Liquor Licence Consultant Cape Town</p>
            <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
              Turning applications into approvals—your liquor licence, guaranteed.
            </h1>
            <p className="max-w-2xl text-lg text-brand-cream/75">
              Beverly Jeursen leads every file with 20+ years of experience, navigating the Western Cape Liquor Licencing Authority. From new licences to high-stakes relocations, we remove the guesswork and keep you trading legally in Cape Town and surrounds.
            </p>
            <div className="flex flex-wrap gap-3">
              <CTAButton
                href="/contact"
                variant="primary"
                size="lg"
                trackingAction="click_cta"
                trackingCategory="hero"
                trackingLabel="get_free_consultation"
              >
                Get Free Consultation
              </CTAButton>
              <CTAButton
                href="tel:+27823217722"
                variant="secondary"
                trackingAction="click_phone_cta"
                trackingCategory="hero"
                trackingLabel="call_phone_homepage"
              >
                Call +27 82 321 7722
              </CTAButton>
            </div>
            <ul className="grid grid-cols-1 gap-3 text-sm text-brand-cream/80 sm:grid-cols-2">
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-3 rounded-2xl border border-white/10 p-3">
                  <span className="text-brand-sand">✓</span>
                  <span>{badge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -left-10 top-10 hidden h-64 w-64 opacity-60 blur-2xl lg:block">
              <Image
                src={assetPath("/images/hero-swirl.png")}
                alt=""
                width={400}
                height={400}
                className="h-full w-full object-contain"
                aria-hidden
              />
            </div>
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-brand-graphite">
              <Image
                src={assetPath("/images/hero-beverly.jpg")}
                alt="Beverly Jeursen assisting a client"
                width={960}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="mt-6">
              <StatsBar stats={stats} />
            </div>
          </div>
        </section>

        <SectionShell
          eyebrow="About Beverly"
          title="Your trusted liquor licence agent in Cape Town"
          description="Recognised by the Liquor Licencing Authority and trusted by restaurant groups, hotel brands, and entrepreneurs nationwide."
        >
          <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-brand-graphite/50 p-6 text-center">
              <Image
                src={assetPath("/images/authority-crest.png")}
                alt="Authority recognition crest"
                width={160}
                height={160}
                className="mx-auto h-32 w-32 object-contain"
              />
              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-brand-sand">Authority Recommended</p>
            </div>
            <div className="space-y-6 text-base text-brand-cream/80">
              <p>
                Beverly Jeursen has guided thousands of liquor licence applications over two decades. Her obsession with detail and
                persistence with local authorities produces one of the highest approval rates in Cape Town.
              </p>
              <p>
                Whether you are opening a new venue, relocating, or buying a licensed business, Beverly personally manages every
                milestone so you can focus on operations.
              </p>
              <div className="flex gap-4">
                <CTAButton href="/about" variant="secondary">
                  Learn More About Beverly
                </CTAButton>
                <CTAButton href="/services" variant="ghost">
                  View All Services
                </CTAButton>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Services"
          title="Complete liquor licence services in Cape Town"
          description="Every licence type under the South African Liquor Act handled with precision for Cape Town and surrounding areas."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-brand-graphite/40 p-6 transition hover:border-brand-sand"
              >
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-sand">Service</p>
                  <h3 className="mt-3 font-serif text-2xl">{service.title}</h3>
                  <p className="mt-2 text-sm text-brand-cream/75">{service.description}</p>
                </div>
                <span className="mt-6 text-xs uppercase tracking-[0.35em] text-brand-sand group-hover:text-brand-cream">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Why Choose BJ Liquor Licence"
          title="Expert guidance, personal service, guaranteed outcomes"
          description="We combine legal rigour with relentless follow-up so you can trade confidently."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-3xl border border-white/5 bg-brand-graphite/30 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-sand">Advantage</p>
                <h3 className="mt-2 font-serif text-2xl">{benefit.title}</h3>
                <p className="mt-2 text-sm text-brand-cream/75">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Areas Served"
          title="Serving greater Cape Town and the Western Cape"
          description="From the City Bowl to the Winelands, we handle liquor licence applications across the region."
        >
          <div className="grid gap-8 lg:grid-cols-3">
            {areaCards.map((card) => (
              <div key={card.title} className="space-y-4 rounded-3xl border border-white/10 bg-brand-graphite/30 p-4">
                <div className="overflow-hidden rounded-3xl">
                  <Image src={card.image} alt={card.title} width={420} height={320} className="h-48 w-full object-cover" />
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-brand-sand">{card.title}</p>
                <ul className="space-y-2 text-sm text-brand-cream/75">
                  {card.locations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Process"
          title="How the liquor licence application process works"
          description="A transparent, five-step system keeps you informed and in control."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-white/5 bg-brand-graphite/30 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-sand">{step.step}</p>
                <h3 className="mt-3 font-serif text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-cream/75">{step.detail}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="FAQ"
          title="Frequently asked questions about liquor licences"
          description="Still have questions? Book a free consultation and we'll cover your unique requirements."
        >
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-white/10 bg-brand-graphite/30 p-5">
                <summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary>
                <p className="mt-3 text-sm text-brand-cream/75">{faq.answer}</p>
              </details>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Testimonials"
          title="What our clients say"
          description="Confidentiality matters, so here are anonymised highlights from recent approvals."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Beverly took over our relocation file and cleared objections within weeks. We reopened on schedule and never stopped trading.",
                name: "Restaurant Group, Cape Town CBD",
              },
              {
                quote:
                  "Our annual festival required multiple temporary licences. Every approval arrived early thanks to her relationships with the board.",
                name: "Festival Producer, Stellenbosch",
              },
              {
                quote:
                  "Attention to detail is unmatched. She flagged compliance gaps before the board did—zero surprises on hearing day.",
                name: "Boutique Hotel, Franschhoek",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-white/10 bg-brand-graphite/30 p-6">
                <p className="text-sm text-brand-cream/85">“{testimonial.quote}”</p>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-brand-sand">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <section className="container space-y-8 py-16">
          <div className="rounded-[40px] border border-white/10 bg-brand-graphite/40 p-10 text-center">
            <p className="section-eyebrow text-brand-sand">Ready to start?</p>
            <h2 className="font-serif text-3xl">Get your liquor licence application started today</h2>
            <p className="mt-4 text-brand-cream/75">
              Avoid delays, objections, and costly re-submissions. Pair up with Beverly Jeursen for guaranteed guidance from first
              consult to approval letter.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <CTAButton href="/contact" variant="primary" size="lg">
                Request Free Consultation
              </CTAButton>
              <CTAButton href="https://wa.me/27823217722" variant="secondary">
                WhatsApp Beverly
              </CTAButton>
            </div>
          </div>
          <ContactStrip />
        </section>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

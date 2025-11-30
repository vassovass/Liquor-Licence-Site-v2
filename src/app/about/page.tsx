import { Metadata } from "next";
import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAButton } from "@/components/cta-button";
import { FeatureHighlight } from "@/components/feature-highlight";
import { StatsBar } from "@/components/stats-bar";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { ContentBox } from "@/components/content-box";
import { Timeline } from "@/components/timeline";
import { Review } from "@/components/review";
import { Card } from "@/components/card";
import { Separator } from "@/components/separator";
import { Checklist } from "@/components/checklist";
import { RevealPhone } from "@/components/reveal-phone";
import { RevealEmail } from "@/components/reveal-email";
import {
  Award,
  CheckCircle2,
  Users,
  MapPin,
  FileText,
  Clock,
  ShieldCheck,
  Star,
  Building2,
  Utensils,
  Store,
  Wine,
  Calendar,
  Scale,
  Home,
  Zap,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Beverly Jeursen | Expert Liquor Licence Consultant | 20+ Years",
    description:
      "Meet Beverly Jeursen, Cape Town's leading liquor licence consultant with 20+ years experience. Recommended by Liquor Licencing Authority. Highest approval rate.",
  };
}

export default function AboutPage() {
  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Beverly Jeursen" }]} />
        </div>

        <FeatureHighlight
          title="About Beverly Jeursen - Your Trusted Liquor Licence Expert"
          description="Beverly Jeursen is a highly experienced liquor licence consultant with more than 20 years specializing in liquor licence applications in Cape Town and surrounding areas. Her commitment to clients is simple: achieve the desired outcome. With one of the highest approval rates in the field, Beverly ensures that every application is handled with precision and persistence."
          ctaText="Work With Beverly"
          ctaHref="#contact"
          imageSrc="/images/hero-beverly.jpg"
          className="mb-24"
        />

        <div className="mb-24">
          <StatsBar
            stats={[
              { value: "20+", label: "Years Experience", helper: "Specializing in liquor licences" },
              { value: "95%", label: "Approval Rate", helper: "One of the highest in Cape Town" },
              { value: "1000+", label: "Successful Applications", helper: "In Cape Town and surrounds" },
              { value: "10", label: "Licence Types", helper: "Complete Liquor Act coverage" },
            ]}
          />
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Recognition"
            title="Recommended by Liquor Licencing Authority"
            description="Beverly has been recognised and recommended by the Liquor Licencing Authority as one of the best agents in the industry - an acknowledgment of her consistent results and trusted expertise."
          >
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="rounded-3xl border border-white/10 bg-brand-graphite/30 p-8 text-center">
                <Image
                  src={assetPath("/images/authority-crest.png")}
                  alt="Authority recognition crest"
                  width={160}
                  height={160}
                  className="mx-auto h-32 w-32 object-contain"
                />
                <p className="mt-4 text-sm uppercase tracking-[0.35em] text-brand-sand">Authority Recommended</p>
                <p className="mt-4 text-brand-cream/70">
                  This official recommendation - rarely given - acknowledges consistently high approval rates, professional
                  application preparation, ethical business practices, and deep understanding of liquor legislation.
                </p>
              </div>
            </div>
          </SectionShell>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <SectionShell
            eyebrow="Journey"
            title="20+ Years of Excellence"
            description="From early career beginnings to industry recognition, Beverly's journey reflects decades of dedication to helping businesses succeed."
          >
            <div className="mt-12">
              <Timeline
                steps={[
                  {
                    title: "Early Career (2000s)",
                    description:
                      "Began career in liquor licence consultation during a transformative period for South African liquor legislation. Starting in Cape Town's Western Cape, quickly established herself as a knowledgeable and reliable consultant, helping restaurants, pubs, and bottle stores secure their liquor licences with unprecedented success rates.",
                  },
                  {
                    title: "Building a Reputation (2010s)",
                    description:
                      "Deepened expertise in Western Cape liquor legislation, serving clients throughout Cape Town and surrounding areas. Handled increasingly complex applications including large-scale festival licences, multi-location bottle store chains, high-profile restaurant groups, hotels, and craft brewery licences.",
                  },
                  {
                    title: "Industry Recognition (2015-Present)",
                    description:
                      "Formally recognised by the Liquor Licencing Authority as one of the best agents in the industry. This recognition solidified Beverly's position as a leading liquor licence consultant in Cape Town, with thousands of successful applications across all licence types for clients throughout Cape Town and surrounding areas.",
                  },
                ]}
              />
            </div>
          </SectionShell>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Expertise"
            title="All Licence Types Mastered"
            description="Beverly is expert in all 10 types of liquor licence applications under the South African Liquor Act."
          >
            <Grid columns={3} className="mt-12">
              <ContentBox title="New Applications (Section 36)" icon={<FileText className="h-8 w-8" />}>
                Restaurants, pubs, bars, taverns, bottle stores, hotels, and all business types.
              </ContentBox>
              <ContentBox title="Licence Transfers (Section 65)" icon={<Users className="h-8 w-8" />}>
                Business sale and purchase, ownership changes, due diligence for buyers, expedited processing.
              </ContentBox>
              <ContentBox title="Temporary Licences (Section 48(1))" icon={<Calendar className="h-8 w-8" />}>
                Seasonal businesses, pop-up establishments, market traders, trial periods.
              </ContentBox>
              <ContentBox title="Event Licences (Section 48(4))" icon={<Wine className="h-8 w-8" />}>
                Weddings and receptions, music festivals, corporate events, special occasions.
              </ContentBox>
              <ContentBox title="Premises Alterations (Section 53)" icon={<Building2 className="h-8 w-8" />}>
                Renovations and extensions, layout changes, expansion projects, regularization of unauthorized changes.
              </ContentBox>
              <ContentBox title="Extended Trading Hours (Section 59)" icon={<Clock className="h-8 w-8" />}>
                Late-night trading, nightclubs and entertainment venues, weekend extensions, special trading periods.
              </ContentBox>
              <ContentBox title="Financial Interest Transfers (Section 51)" icon={<Scale className="h-8 w-8" />}>
                Partnership changes, shareholding adjustments, adding/removing partners, corporate restructuring.
              </ContentBox>
              <ContentBox title="Liquor Storage (Section 57)" icon={<Store className="h-8 w-8" />}>
                Warehouse applications, off-site storage, multiple locations, bulk storage facilities.
              </ContentBox>
              <ContentBox title="Licence Removal (Section 66)" icon={<Home className="h-8 w-8" />}>
                Business relocations, moving to new premises, maintaining licence status, strategic moves.
              </ContentBox>
              <ContentBox title="Trading Consent (Section 65(3))" icon={<Zap className="h-8 w-8" />}>
                Immediate trading during transfers, revenue protection, business continuity, fast-track processing.
              </ContentBox>
            </Grid>
          </SectionShell>
        </div>

        <div className="mb-24">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/services" variant="primary" size="lg">
              View All Services
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Get Free Consultation
            </CTAButton>
          </div>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <SectionShell
            eyebrow="Areas Served"
            title="Serving Cape Town and Surrounding Areas"
            description="With 20+ years serving Cape Town, Beverly understands the nuances of Western Cape liquor licencing requirements."
          >
            <Grid columns={4} className="mt-12">
              <ContentBox title="Cape Town CBD & Surrounds" icon={<MapPin className="h-6 w-6" />}>
                City Bowl, V&A Waterfront, Atlantic Seaboard, Sea Point, Green Point
              </ContentBox>
              <ContentBox title="Northern Suburbs" icon={<MapPin className="h-6 w-6" />}>
                Blouberg, Table View, Milnerton, Durbanville, Bellville, Tyger Valley
              </ContentBox>
              <ContentBox title="Southern Suburbs" icon={<MapPin className="h-6 w-6" />}>
                Claremont, Newlands, Constantia, Rondebosch, Observatory, Wynberg
              </ContentBox>
              <ContentBox title="Winelands & Coastal" icon={<MapPin className="h-6 w-6" />}>
                Stellenbosch, Paarl, Franschhoek, Somerset West, Strand, Gordon's Bay
              </ContentBox>
            </Grid>
          </SectionShell>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Industries"
            title="Industry Specializations"
            description="Beverly serves clients across all sectors of the hospitality and liquor retail industries."
          >
            <div className="flex flex-wrap gap-3 mt-8 justify-center">
              {[
                "Restaurants & Cafes",
                "Fine Dining",
                "Pubs, Bars & Taverns",
                "Bottle Stores",
                "Hotels & Guest Houses",
                "Event Venues",
                "Wine Farms",
                "Craft Breweries",
                "Nightclubs",
                "Supermarkets",
                "Wedding Venues",
                "Conference Centers",
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors cursor-default"
                >
                  {item}
                </div>
              ))}
            </div>
          </SectionShell>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <SectionShell
            eyebrow="Approach"
            title="The Beverly Jeursen Approach"
            description="Five core principles that guide every client engagement and ensure successful outcomes."
          >
            <Grid columns={2} className="mt-12">
              <Card title="Client-Centered Service">
                Every client receives Beverly's personal attention. No call centers, no middlemen - you work directly
                with Beverly throughout your application process.
              </Card>
              <Card title="Thorough Preparation">
                Success starts with meticulous preparation. Beverly ensures every application is complete, accurate,
                compliant, and presented to the highest professional standards.
              </Card>
              <Card title="Proactive Problem Solving">
                Challenges arise in any application process. Beverly's experience means she anticipates issues, addresses
                objections, navigates complications, and protects your interests throughout.
              </Card>
              <Card title="Strategic Timing">
                Timing matters in liquor licence applications. Beverly advises on optimal application timing, seasonal
                considerations, strategic sequencing, and deadline management.
              </Card>
              <Card title="Relationship Management" className="md:col-span-2">
                Professional relationships with Liquor Licencing Authorities ensure efficient communication, faster
                processing through established channels, respectful engagement, and a professional reputation that
                enhances your credibility.
              </Card>
            </Grid>
          </SectionShell>
        </div>

        <div className="mb-24">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Start Your Application
            </CTAButton>
            <CTAButton href="tel:+27823217722" variant="secondary" size="lg">
              Call +27 82 321 7722
            </CTAButton>
          </div>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <SectionShell
            eyebrow="Why Choose Beverly"
            title="Proven Track Record & Authority Recognition"
            description="With thousands of successful applications over 20+ years, Beverly's track record speaks for itself."
          >
            <Grid columns={2} className="mt-12">
              <Card title="Proven Track Record">
                <Checklist
                  items={[
                    "One of the highest approval rates in Cape Town",
                    "Minimal rejections due to thorough preparation",
                    "Fastest processing times through expert application",
                    "Satisfied clients across all business types",
                  ]}
                />
              </Card>
              <Card title="Authority Recognition">
                <Checklist
                  items={[
                    "Trusted expertise acknowledged by regulators",
                    "Ethical practices that protect clients",
                    "Professional standards that set industry benchmarks",
                    "Consistent quality over decades of service",
                  ]}
                />
              </Card>
              <Card title="Comprehensive Knowledge">
                <Checklist
                  items={[
                    "All 10 licence types under South African law",
                    "Western Cape specific requirements and practices",
                    "Every section of the Liquor Act",
                    "Historical context and practical experience in Cape Town",
                  ]}
                />
              </Card>
              <Card title="Personal Service">
                <Checklist
                  items={[
                    "Direct communication - always speak with Beverly",
                    "Personal attention - expert focus on your application",
                    "Flexible availability - responsive to your timeline",
                    "Long-term relationships - clients return for future needs",
                  ]}
                />
              </Card>
            </Grid>
          </SectionShell>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <SectionShell
            eyebrow="Testimonials"
            title="What Our Clients Say"
            description="Real feedback from clients who have worked with Beverly Jeursen."
          >
            <Grid columns={2} className="mt-12">
              <Review
                author="Restaurant Owner"
                role="Cape Town"
                content="Beverly handled our liquor licence application with absolute professionalism. What seemed overwhelming became straightforward with her guidance. Our licence was approved without complications, and we were trading within 90 days. Highly recommended."
              />
              <Review
                author="Bottle Store Chain"
                role="Northern Suburbs"
                content="As a multi-location operation, we needed someone who understood complex licensing across multiple premises. Beverly's expertise with our transfers and new applications was invaluable. She's our only consultant now."
              />
              <Review
                author="Wedding Venue Owner"
                role="Stellenbosch"
                content="Event licences every weekend meant we needed reliable, fast service. Beverly has processed over 50 event licences for our venue with zero issues. She's part of our success."
              />
              <Review
                author="Pub Owner"
                role="Western Cape"
                content="When we wanted extended trading hours, competitors said it wouldn't be approved in our area. Beverly prepared such a thorough application that it was approved despite local objections. Worth every cent."
              />
            </Grid>
          </SectionShell>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <SectionShell
            eyebrow="Philosophy"
            title="Professional Philosophy"
            description="The values and principles that guide Beverly's practice."
          >
            <Grid columns={3} className="mt-12">
              <Card title="Integrity First">
                Beverly operates with unwavering integrity: honest assessments, transparent pricing, ethical practices,
                and client advocacy where your interests are paramount.
              </Card>
              <Card title="Education & Empowerment">
                Beverly believes informed clients make better decisions. She provides clear explanations, realistic
                expectations, ongoing updates, and compliance guidance.
              </Card>
              <Card title="Continuous Improvement">
                Even with 20+ years experience, Beverly stays current: legislative updates tracked, Western Cape changes
                monitored, industry developments incorporated, and best practices refined continuously.
              </Card>
            </Grid>
          </SectionShell>
        </div>

        <div
          id="contact"
          className="bg-brand-sand/10 rounded-[40px] p-12 text-center border border-brand-sand/20 mb-24"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-cream">Get Started with Beverly</h2>
          <p className="text-lg text-brand-cream/70 mb-8 max-w-2xl mx-auto">
            Whether you're opening your first restaurant, buying an existing pub, planning a wedding, or expanding your
            liquor retail business, Beverly Jeursen provides the expertise you need for liquor licence success.
          </p>
          <div className="bg-brand-graphite/30 rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <span className="text-brand-sand font-medium">Phone:</span>
                <RevealPhone
                  phone="+27823217722"
                  displayPhone="+27 82-321-7722"
                  className="text-brand-cream hover:text-brand-sand transition-colors"
                  trackingLabel="about_page_contact_section"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-sand font-medium">Email:</span>
                <RevealEmail
                  email="bajeursen.liquorlicences@gmail.com"
                  className="text-brand-cream hover:text-brand-sand transition-colors"
                  trackingLabel="about_page_contact_section"
                />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-sand font-medium">WhatsApp:</span>
                <RevealPhone
                  phone="+27823217722"
                  displayPhone="+27 82-321-7722"
                  href="https://wa.me/27823217722"
                  className="text-brand-cream hover:text-brand-sand transition-colors"
                  trackingLabel="about_page_contact_section_whatsapp"
                />
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-sm text-brand-cream/60 mb-2">
                  <strong className="text-brand-sand">Office Hours:</strong>
                </p>
                <p className="text-sm text-brand-cream/60">Monday - Thursday: 09:00 - 17:00</p>
                <p className="text-sm text-brand-cream/60">Friday: 09:00 - 15:00</p>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-sm text-brand-cream/60">
                  <strong className="text-brand-sand">Location:</strong> Blouberg, Cape Town, Western Cape
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Get Free Consultation
            </CTAButton>
            <CTAButton href="https://wa.me/27823217722" variant="secondary" size="lg">
              WhatsApp Beverly
            </CTAButton>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10">
          <h3 className="font-serif text-2xl mb-6">Related Pages</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="/services"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors"
            >
              View All Services
            </a>
            <a
              href="/services/new-liquor-licence-application"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors"
            >
              New Liquor Licence Application
            </a>
            <a
              href="/services/transfer-liquor-licence"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors"
            >
              Transfer of Liquor Licence
            </a>
            <a
              href="/contact"
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

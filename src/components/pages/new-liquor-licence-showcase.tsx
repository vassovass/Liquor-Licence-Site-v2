import { Breadcrumb } from "@/components/breadcrumb";
import { CTAButton } from "@/components/cta-button";
import { FeatureHighlight } from "@/components/feature-highlight";
import { StatsBar } from "@/components/stats-bar";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { ContentBox } from "@/components/content-box";
import { Checklist } from "@/components/checklist";
import { Timeline } from "@/components/timeline";
import { Callout } from "@/components/callout";
import { Separator } from "@/components/separator";
import { Accordion } from "@/components/accordion";
import { 
  FileText,
  Store,
  Utensils,
  Wine,
  AlertTriangle,
  Clock,
  DollarSign,
  Users,
  MapPin
} from "lucide-react";

export function NewLiquorLicenceShowcase() {
  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "New Liquor Licence Application" },
            ]}
          />
        </div>

        <FeatureHighlight
          title="New Liquor Licence Application (Section 36)"
          description="Starting a new business? Whether you're opening a restaurant, pub, or bottle store, we guide you through the complex Section 36 application process with precision and expertise."
          ctaText="Start Your Application"
          ctaHref="#contact"
          imageSrc="/images/hero-beverly.jpg"
          className="mb-24"
        />

        <div className="mb-24">
          <StatsBar
            stats={[
              { value: "95%", label: "Approval Rate", helper: "Across all provinces" },
              { value: "20+ yrs", label: "Experience" },
              { value: "10", label: "Licence Types" },
            ]}
          />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Understanding Section 36</h2>
          <p className="text-lg text-brand-cream/80 leading-relaxed mb-8">
            Section 36 of the South African Liquor Act governs applications for new liquor licences. This applies when you're opening a brand new business or establishing a venue that has never been licensed before. Unlike transfers, this creates a completely new licence for your specific premises.
          </p>
          <Callout variant="warning" title="Important Warning" className="text-left max-w-2xl mx-auto">
            Don't risk rejection or costly delays. Missing or incorrect documentation is the #1 reason for application failure. Our proven process ensures 95% approval rates.
          </Callout>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Licence Types"
            title="Which Licence Do You Need?"
            description="South African liquor legislation provides for different types of licences depending on your business model."
          >
            <Grid columns={3} className="mt-12">
              <ContentBox title="On-Consumption" icon={<Utensils className="h-8 w-8" />}>
                For businesses where liquor is consumed on the premises.
                <ul className="mt-4 space-y-2 text-sm text-brand-cream/60 list-disc pl-4">
                  <li>Restaurants & Eateries</li>
                  <li>Pubs, Bars & Taverns</li>
                  <li>Hotels & Guest Houses</li>
                  <li>Clubs & Venues</li>
                </ul>
              </ContentBox>
              <ContentBox title="Off-Consumption" icon={<Store className="h-8 w-8" />}>
                For businesses where liquor is purchased and taken away.
                <ul className="mt-4 space-y-2 text-sm text-brand-cream/60 list-disc pl-4">
                  <li>Bottle Stores</li>
                  <li>Liquor Shops</li>
                  <li>Wine Boutiques</li>
                  <li>Online Retailers</li>
                </ul>
              </ContentBox>
              <ContentBox title="Special Licences" icon={<Wine className="h-8 w-8" />}>
                For specialized manufacturing or distribution operations.
                <ul className="mt-4 space-y-2 text-sm text-brand-cream/60 list-disc pl-4">
                  <li>Micro-manufacturing</li>
                  <li>Craft Breweries</li>
                  <li>Distributors</li>
                  <li>Estate Wines</li>
                </ul>
              </ContentBox>
            </Grid>
          </SectionShell>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl mb-6">Personal & Business Requirements</h2>
              <p className="text-brand-cream/70 mb-8">
                Before we apply, we must ensure the applicant and business entity meet all statutory criteria.
              </p>
              <Checklist
                items={[
                  "South African ID or Valid Work Permit",
                  "No criminal record (Liquor Act related)",
                  "Tax Clearance Certificate (Good Standing)",
                  "Proof of Residence",
                  "Registered Business Documents (CIPC)",
                  "Valid Business Bank Account",
                ]}
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl mb-6">Premises Requirements</h2>
              <p className="text-brand-cream/70 mb-8">
                Your physical location must be suitable and compliant for liquor trading.
              </p>
              <Checklist
                items={[
                  "Right to Occupy (Lease or Title Deed)",
                  "Zoning Certificate (Commercial/Business)",
                  "Building Plans (approved by municipality)",
                  "Health & Safety Compliance",
                  "Fire Safety Certificate",
                  "Suitable distance from schools/churches",
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mb-24 bg-brand-graphite/20 rounded-[40px] p-8 md:p-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl mb-12 text-center">The Application Process</h2>
            <Timeline
              steps={[
                {
                  title: "Initial Consultation",
                  description:
                    "We assess your business model, premises, and eligibility to recommend the correct licence type.",
                },
                {
                  title: "Document Preparation",
                  description:
                    "Our team compiles the comprehensive application pack, including motivations, plans, and legal documents.",
                },
                {
                  title: "Submission & Notices",
                  description:
                    "We lodge the application with the Authority and place required public notices in newspapers.",
                },
                {
                  title: "Objection Period",
                  description: "A statutory 30-day period for public comment. We monitor and respond to any objections.",
                },
                {
                  title: "Authority Review",
                  description:
                    "The Liquor Licencing Authority reviews the file. We follow up relentlessly to prevent backlog delays.",
                },
                {
                  title: "Approval & Issue",
                  description: "Once approved, we guide you through the final fee payment and licence collection.",
                },
              ]}
            />
          </div>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Expectations"
            title="Timeline & Costs"
            description="Transparency is key. Here is what you can expect in terms of time and budget."
          >
            <Grid columns={2} className="mt-12">
              <ContentBox title="Estimated Timeline" icon={<Clock className="h-8 w-8" />}>
                <ul className="space-y-4 mt-4">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Western Cape</span>
                    <span className="text-brand-sand font-bold">60-90 Days</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Gauteng</span>
                    <span className="text-brand-sand font-bold">90-120 Days</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>KZN & Others</span>
                    <span className="text-brand-sand font-bold">90-120 Days</span>
                  </li>
                </ul>
              </ContentBox>
              <ContentBox title="Cost Structure" icon={<DollarSign className="h-8 w-8" />}>
                <ul className="space-y-4 mt-4">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Government Fees</span>
                    <span className="text-brand-sand font-bold">R2,000 - R5,000</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Annual Fees</span>
                    <span className="text-brand-sand font-bold">Variable</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Consultant Fees</span>
                    <span className="text-brand-sand font-bold">Quote on Request</span>
                  </li>
                </ul>
                <p className="text-xs text-brand-cream/50 mt-4">*Fees are estimates and vary by province and licence type.</p>
              </ContentBox>
            </Grid>
          </SectionShell>
        </div>

        <div className="mb-24">
          <h2 className="font-serif text-3xl mb-12 text-center">Why Applications Get Rejected</h2>
          <Grid columns={4}>
            <ContentBox
              title="Incomplete Docs"
              icon={<FileText className="h-6 w-6" />}
              className="bg-brand-graphite/20 p-6 rounded-2xl border-none"
            >
              Missing forms, unsigned documents, or outdated certificates are instant disqualifiers.
            </ContentBox>
            <ContentBox
              title="Zoning Issues"
              icon={<AlertTriangle className="h-6 w-6" />}
              className="bg-brand-graphite/20 p-6 rounded-2xl border-none"
            >
              Premises not correctly zoned for liquor sales or business use by the municipality.
            </ContentBox>
            <ContentBox
              title="Proximity"
              icon={<Store className="h-6 w-6" />}
              className="bg-brand-graphite/20 p-6 rounded-2xl border-none"
            >
              Too close to schools, places of worship, or rehabilitation centers without proper motivation.
            </ContentBox>
            <ContentBox
              title="Objections"
              icon={<Users className="h-6 w-6" />}
              className="bg-brand-graphite/20 p-6 rounded-2xl border-none"
            >
              Failure to adequately address valid community or police objections during the notice period.
            </ContentBox>
          </Grid>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Our Clients"
            title="Industries We Serve"
            description="We provide new liquor licence application services for all business types."
          >
            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Restaurants & Cafes",
                "Pubs, Bars & Taverns",
                "Bottle Stores",
                "Hotels & Guest Houses",
                "Event Venues",
                "Clubs",
                "Wine Farms",
                "Craft Breweries",
                "Nightclubs",
                "Supermarkets",
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

        <div className="mb-24 bg-brand-graphite/30 rounded-3xl p-8 border border-white/5">
          <div className="flex items-center gap-4 mb-6">
            <MapPin className="h-8 w-8 text-brand-sand" />
            <h2 className="font-serif text-2xl">Areas Served</h2>
          </div>
          <p className="text-brand-cream/70 mb-6">
            While based in Cape Town, we provide expert liquor licence application services throughout South Africa.
          </p>
          <Grid columns={4} gap="sm">
            <div className="p-4 bg-brand-charcoal rounded-xl text-center">Western Cape</div>
            <div className="p-4 bg-brand-charcoal rounded-xl text-center">Gauteng</div>
            <div className="p-4 bg-brand-charcoal rounded-xl text-center">KwaZulu-Natal</div>
            <div className="p-4 bg-brand-charcoal rounded-xl text-center">Nationwide</div>
          </Grid>
        </div>

        <div className="max-w-3xl mx-auto mb-24" id="faq">
          <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion
            items={[
              {
                title: "Can a foreigner apply for a liquor licence?",
                content:
                  "Yes, foreign nationals can apply if they have a valid work permit and meet all other requirements. The process is more complex, which is why professional assistance is particularly valuable.",
              },
              {
                title: "How long does it take?",
                content:
                  "Timelines vary by province but typically range from 3 to 6 months. Western Cape is often 90-120 days, while other provinces may take longer. Delays usually occur due to incomplete applications or objections.",
              },
              {
                title: "How much does it cost?",
                content:
                  "Costs include government application fees (R2000-R5000), annual licence fees (variable), public notice costs, and professional consultant fees. Contact us for a detailed quote specific to your project.",
              },
              {
                title: "Can I trade while applying?",
                content:
                  "No. Trading without a valid licence is illegal. However, if you are buying an existing licensed business, you can apply for a temporary Section 65(3) consent to trade while the transfer processes.",
              },
              {
                title: "Do I need a lawyer?",
                content:
                  "Not strictly required by law, but highly recommended to have a specialist consultant. The process is legalistic and bureaucratic. We handle the legal complexity for you at a fraction of law firm rates.",
              },
              {
                title: "Do I need a licence to serve wine at my restaurant?",
                content: "Yes. Any business serving alcohol to customers, even just wine with meals, requires a liquor licence.",
              },
            ]}
          />
        </div>

        <div
          id="contact"
          className="bg-brand-sand/10 rounded-[40px] p-12 text-center border border-brand-sand/20"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-cream">Ready to Apply?</h2>
          <p className="text-lg text-brand-cream/70 mb-8 max-w-2xl mx-auto">
            Let Beverly Jeursen handle the red tape. Book a free consultation to assess your eligibility and get a
            clear roadmap to approval.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Book Free Consultation
            </CTAButton>
            <CTAButton href="tel:+27823217722" variant="secondary" size="lg">
              Call +27 82 321 7722
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}


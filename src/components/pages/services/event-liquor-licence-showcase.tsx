import Link from "next/link";
import { ServiceLayout } from "@/components/pages/service-layout";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { ContentBox } from "@/components/content-box";
import { Timeline } from "@/components/timeline";
import { Checklist } from "@/components/checklist";
import { Callout } from "@/components/callout";
import { Accordion } from "@/components/accordion";
import { Separator } from "@/components/separator";
import {
  PartyPopper,
  CalendarDays,
  ClipboardList,
  ShieldCheck,
  MapPin,
  BadgeCheck,
  DollarSign,
  Clock,
} from "lucide-react";

export function EventLiquorLicenceShowcase() {
  return (
    <ServiceLayout
      breadcrumbLabel="Event Liquor Licence"
      hero={{
        title: "Event Liquor Licence in Cape Town (Section 48(4))",
        description:
          "From luxury vineyard weddings to waterfront product launches, we obtain event liquor licences across Cape Town so alcohol service is legal, insured, and stress-free.",
        ctaText: "Apply for Your Event Licence",
        ctaHref: "#contact",
      }}
      stats={[
        { value: "1000+", label: "Cape Town Events Licensed" },
        { value: "7-21 days", label: "Average Approval Window" },
        { value: "0", label: "Events Shut Down", helper: "When we manage compliance" },
      ]}
    >
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
          Section 48(4) event licences cover single or multi-day occasions (typically 1–7 days). They apply whether alcohol
          is sold or served complimentary—if it’s poured, you need the permit. Cape Town authorities require detailed event
          plans, security measures, and proof of insurance before issuing approvals.
        </p>
        <Callout variant="warning" title="Urgent Reminder">
          Apply at least 21 days before your event. Fast-tracking is sometimes possible, but late submissions risk rejection.
        </Callout>
        <p className="text-sm text-brand-cream/60 mt-6">
          Multi-day concepts often pair an event licence with a{" "}
          <Link href="/services/temporary-liquor-licence" className="text-brand-sand underline underline-offset-4">
            Temporary Liquor Licence in Cape Town
          </Link>{" "}
          for trade rehearsals, and successful pop-ups transition into a{" "}
          <Link href="/services/new-liquor-licence-application" className="text-brand-sand underline underline-offset-4">
            New Liquor Licence Application in Cape Town
          </Link>{" "}
          once the venue becomes permanent.
        </p>
      </div>

      <SectionShell
        eyebrow="Ideal Use Cases"
        title="Cape Town Events That Require a Licence"
        description="Whether public or private, if alcohol is on the menu, compliance is non-negotiable."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Weddings & Celebrations" icon={<PartyPopper className="h-8 w-8" />}>
            Vineyards, villas, garden ceremonies, and after-parties hosted at unlicensed venues.
          </ContentBox>
          <ContentBox title="Corporate & Brand Experiences" icon={<ClipboardList className="h-8 w-8" />}>
            Product launches, trade shows, networking evenings, and incentive events.
          </ContentBox>
          <ContentBox title="Festivals & Public Gatherings" icon={<CalendarDays className="h-8 w-8" />}>
            Music festivals, food markets, cultural fairs, sporting events, and charity fundraisers.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Requirements"
        title="What the Authority Needs to See"
        description="We turn your creative brief into a compliant licence application that satisfies SAPS and the Liquor Authority."
      >
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Event Details</h3>
            <Checklist
              items={[
                "Date(s) & trading hours",
                "Venue address & site layout",
                "Expected attendance numbers",
                "Alcohol categories (beer, wine, spirits)",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Safety & Insurance</h3>
            <Checklist
              items={[
                "Public liability cover (R5m+)",
                "Security plan & service provider",
                "Crowd control & emergency routes",
                "Responsible service protocol",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Operational Checks</h3>
            <Checklist
              items={[
                "Wholesaler invoices for stock",
                "Vendor agreements (if multiple bars)",
                "Power/water/sanitation plans",
                "Waste & recycling arrangements",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <div className="my-24 bg-brand-graphite/20 rounded-[40px] p-8 md:p-14">
        <h2 className="font-serif text-3xl text-center mb-10">Application Timeline</h2>
        <Timeline
          steps={[
            { title: "Brief & Feasibility", description: "We review your event concept, venue, and timeline." },
            {
              title: "Document Compilation",
              description: "Site plans, insurance, safety plans, and motivations packaged for submission.",
            },
            {
              title: "Authority Submission",
              description: "We lodge the Section 48(4) application and coordinate SAPS sign-off.",
            },
            {
              title: "Follow-Up & Clarifications",
              description: "We resolve any Authority queries and provide additional supporting documents if needed.",
            },
            {
              title: "Licence Issued",
              description: "Permit collected, signed, and delivered ahead of your event build schedule.",
            },
          ]}
        />
      </div>

      <SectionShell eyebrow="Expectations" title="Timeline & Costs" description="Budget realistically for compliance.">
        <Grid columns={2} className="mt-12">
          <ContentBox title="Processing Rhythm" icon={<Clock className="h-8 w-8" />}>
            <ul className="space-y-3 text-sm text-brand-cream/70 mt-4">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Standard Applications</span>
                <span>21-30 days</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Fast-Track (where available)</span>
                <span>7-14 days</span>
              </li>
              <li className="flex justify-between border-white/10 pb-2">
                <span>Licence Validity</span>
                <span>Dates approved on permit</span>
              </li>
            </ul>
          </ContentBox>
          <ContentBox title="Cost Framework" icon={<DollarSign className="h-8 w-8" />}>
            <ul className="space-y-3 text-sm text-brand-cream/70 mt-4">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Govt Application Fee</span>
                <span>R300 - R1,000</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Public Notice (if required)</span>
                <span>R500 - R1,000</span>
              </li>
              <li className="flex justify-between border-white/10 pb-2">
                <span>Consultant Fee</span>
                <span>Based on scale</span>
              </li>
            </ul>
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Extended Support"
        title="Beyond Paperwork"
        description="We remain on call before, during, and after your licensed event."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Site Readiness" icon={<MapPin className="h-8 w-8" />}>
            Final walkthroughs ensure signage, licence displays, and bar layouts align with approval conditions.
          </ContentBox>
          <ContentBox title="Compliance Hotline" icon={<ShieldCheck className="h-8 w-8" />}>
            24/7 access during your event weekend for urgent compliance queries or SAPS inspections.
          </ContentBox>
          <ContentBox title="Post-Event Close-Out" icon={<BadgeCheck className="h-8 w-8" />}>
            We file closing reports, archive purchase invoices, and log learnings for your next activation.
          </ContentBox>
        </Grid>
      </SectionShell>

      <div className="max-w-3xl mx-auto mt-24" id="faq">
        <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion
          items={[
            {
              title: "Do private weddings at home need a licence?",
              content:
                "Yes—if alcohol is provided beyond household consumption, the law still requires an event licence, even for private venues.",
            },
            {
              title: "Can multiple vendors trade under one licence?",
              content:
                "Yes, if the event organiser holds the licence and vendors operate under that umbrella with written agreements.",
            },
            {
              title: "What if weather forces a date change?",
              content:
                "Inform us immediately. The Authority may amend the permit if notified before the original event date.",
            },
            {
              title: "Can we limit service to wine and beer?",
              content:
                "Absolutely. We’ll specify the categories on your application to align with your service concept and risk profile.",
            },
          ]}
        />
      </div>
    </ServiceLayout>
  );
}


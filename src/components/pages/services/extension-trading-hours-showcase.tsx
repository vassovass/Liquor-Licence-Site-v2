import Link from "next/link";
import { ServiceLayout } from "@/components/pages/service-layout";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { ContentBox } from "@/components/content-box";
import { Checklist } from "@/components/checklist";
import { Timeline } from "@/components/timeline";
import { Accordion } from "@/components/accordion";
import { Callout } from "@/components/callout";
import { Separator } from "@/components/separator";
import { Clock, Music4, Shield, Sun, Moon, DollarSign, AlertTriangle, Users } from "lucide-react";

export function ExtensionTradingHoursShowcase() {
  return (
    <ServiceLayout
      breadcrumbLabel="Extension of Trading Hours"
      hero={{
        title: "Extension of Trading Hours in Cape Town (Section 59)",
        description:
          "Nightlife districts, hotels, and entertainment venues across Cape Town rely on Section 59 approvals to trade beyond standard hours. We build the risk mitigations the Authority expects so you can operate later legally.",
        ctaText: "Extend Your Trading Hours",
        ctaHref: "#contact",
      }}
      stats={[
        { value: "80%", label: "Cape Town approvals on first submission" },
        { value: "01:00+", label: "Typical extended cut-off" },
        { value: "0", label: "Noise complaints escalated", helper: "When our plan is followed" },
      ]}
    >
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
          Section 59(4) allows licence holders to apply for hours beyond the provincial standard (usually 23:00 weekdays,
          midnight weekends). Applications succeed when neighbourhood impact, security, and transport plans prove that later
          trading won’t compromise public safety.
        </p>
        <Callout variant="warning" title="Key Consideration">
          The Authority weighs objections heavily. We engage residents, ward councillors, and SAPS proactively so your
          motivation lands with community backing.
        </Callout>
        <p className="text-sm text-brand-cream/60 mt-6">
          Many venues combine Section 59 with{" "}
          <Link href="/services/event-liquor-licence" className="text-brand-sand underline underline-offset-4">
            Event Liquor Licences in Cape Town
          </Link>{" "}
          for one-off activations, or run{" "}
          <Link href="/services/temporary-liquor-licence" className="text-brand-sand underline underline-offset-4">
            Temporary Liquor Licences in Cape Town
          </Link>{" "}
          while they prove late-night demand before applying for permanent extensions.
        </p>
      </div>

      <SectionShell
        eyebrow="Who Qualifies"
        title="Businesses Benefiting from Extended Hours"
        description="If late-night turnover underpins your revenue model, Section 59 is essential."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Nightclubs & Music Venues" icon={<Music4 className="h-8 w-8" />}>
            Venues on Long Street, Bree, Loop, and the Atlantic Seaboard that thrive after midnight.
          </ContentBox>
          <ContentBox title="Restaurants & Wine Bars" icon={<Sun className="h-8 w-8" />}>
            Fine-dining rooms and wine bars wanting later seatings, tasting flights, or dessert service.
          </ContentBox>
          <ContentBox title="Hotels & Event Spaces" icon={<Moon className="h-8 w-8" />}>
            Resorts, rooftop bars, or conference centres hosting functions that run into the early hours.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Requirements"
        title="What We Submit"
        description="A compelling motivation is equal parts operational control and community reassurance."
      >
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Operational Controls</h3>
            <Checklist
              items={[
                "Revised trading hours schedule",
                "Security deployment and CCTV coverage",
                "Noise mitigation (acoustic reports if needed)",
                "Transport/ride-share partnerships for staff & patrons",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Community Engagement</h3>
            <Checklist
              items={[
                "Neighbour consultation letters",
                "Ward councillor briefing notes",
                "Incident log summaries proving responsible trading",
                "SAPS support letter (where required)",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <div className="my-24 bg-brand-graphite/20 rounded-[40px] p-8 md:p-14">
        <h2 className="font-serif text-3xl text-center mb-10">Application Roadmap</h2>
        <Timeline
          steps={[
            { title: "Site Audit", description: "We review complaints history, noise levels, and security infrastructure." },
            {
              title: "Stakeholder Outreach",
              description: "Residents, civic associations, and SAPS are briefed before the Authority hears about it.",
            },
            {
              title: "Motivation & Filing",
              description: "We draft an evidence-based case with comparative trading data and mitigation strategies.",
            },
            {
              title: "Public Notice & Objections",
              description: "Notices are published and displayed at the venue. We respond to every objection professionally.",
            },
            {
              title: "Hearing & Approval",
              description: "If a board hearing is required, we represent you and secure written conditions for compliance.",
            },
          ]}
        />
      </div>

      <SectionShell
        eyebrow="Business Case"
        title="Why Later Hours Matter"
        description="Extended trading is about more than vanity—it keeps Cape Town’s hospitality economy alive."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Revenue Growth" icon={<DollarSign className="h-8 w-8" />}>
            Later trading often contributes 30-40% of daily turnover—especially in tourist season.
          </ContentBox>
          <ContentBox title="Job Security" icon={<Users className="h-8 w-8" />}>
            Maintaining night shifts keeps bartenders, security teams, and back-of-house staff employed year-round.
          </ContentBox>
          <ContentBox title="Tourism Appeal" icon={<Clock className="h-8 w-8" />}>
            International guests expect world-class nightlife; compliant hours keep Cape Town competitive.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="After Approval"
        title="Staying Compliant"
        description="We don’t disappear once the letter arrives—we help you keep it."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Condition Tracker" icon={<Shield className="h-8 w-8" />}>
            We document every licence condition and build an operational checklist for your managers.
          </ContentBox>
          <ContentBox title="Incident Management" icon={<AlertTriangle className="h-8 w-8" />}>
            Any complaints are logged, investigated, and reported back to the Authority before they escalate.
          </ContentBox>
          <ContentBox title="Renewals & Reviews" icon={<Music4 className="h-8 w-8" />}>
            Seasonal reviews ensure extended hours remain justified—especially for temporary approvals.
          </ContentBox>
        </Grid>
      </SectionShell>

      <div className="max-w-3xl mx-auto mt-24" id="faq">
        <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion
          items={[
            {
              title: "Can we extend only on weekends?",
              content:
                "Yes. Many clients opt for Friday/Saturday extensions only, while others request seven-day schedules. We tailor the application accordingly.",
            },
            {
              title: "What happens if complaints come in after approval?",
              content:
                "You may face a review hearing. With our monitoring plan, we resolve issues proactively so the Authority sees consistent compliance.",
            },
            {
              title: "How loud can music be?",
              content:
                "Municipal bylaws govern decibel levels. We often commission acoustic engineers to prove your venue can contain noise even with later hours.",
            },
            {
              title: "Can temporary extensions be granted for peak season?",
              content:
                "Yes. Section 59 allows date-specific extensions (e.g., December/January). We submit seasonal motivations ahead of time.",
            },
          ]}
        />
      </div>
    </ServiceLayout>
  );
}


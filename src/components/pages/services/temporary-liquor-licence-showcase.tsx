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
import { Calendar, MapPin, Clock, DollarSign, Sparkles, Building2, ShieldCheck, ThermometerSun } from "lucide-react";

export function TemporaryLiquorLicenceShowcase() {
  return (
    <ServiceLayout
      breadcrumbLabel="Temporary Liquor Licence"
      hero={{
        title: "Temporary Liquor Licence in Cape Town (Section 48(1))",
        description:
          "Operating seasonal venues, pop-up bars, or limited leases in Cape Town? Section 48(1) temporary licences provide up to 12 months of legal trading before you commit to a permanent licence.",
        ctaText: "Apply for a Temporary Licence",
        ctaHref: "#contact",
      }}
      stats={[
        { value: "30-60 days", label: "Typical Approval Window" },
        { value: "12 months", label: "Maximum validity per grant" },
        { value: "Renewable", label: "With motivation & compliance" },
      ]}
    >
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
          Section 48(1) licences suit businesses testing viability, trading on short leases, or operating only during peak
          seasons (summer beach bars, festive pop-ups, wine-tasting rooms under renovation). They carry the same compliance
          obligations as permanent licences—just with a defined end date.
        </p>
        <Callout variant="info" title="Strategy Tip">
          We often pair temporary licences with future-dated permanent applications so you can transition seamlessly once the
          concept proves itself.
        </Callout>
        <p className="text-sm text-brand-cream/60 mt-6">
          Use a temporary licence to bridge the gap between{" "}
          <Link href="/services/event-liquor-licence" className="text-brand-sand underline underline-offset-4">
            Event Liquor Licences in Cape Town
          </Link>{" "}
          and a full{" "}
          <Link href="/services/new-liquor-licence-application" className="text-brand-sand underline underline-offset-4">
            New Liquor Licence Application in Cape Town
          </Link>
          , keeping your momentum year-round.
        </p>
      </div>

      <SectionShell
        eyebrow="Ideal Use Cases"
        title="Who Should Consider Temporary Licences?"
        description="If long leases or heavy build-outs aren’t in place yet, temporary trading keeps momentum going."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Seasonal Venues" icon={<ThermometerSun className="h-8 w-8" />}>
            Beach clubs, tourist-market bars, rooftop lounges, and holiday pop-ups across Cape Town & the Winelands.
          </ContentBox>
          <ContentBox title="Construction Phases" icon={<Building2 className="h-8 w-8" />}>
            Trade from interim premises while permanent sites are built, renovated, or awaiting Section 53 approvals.
          </ContentBox>
          <ContentBox title="Concept Testing" icon={<Sparkles className="h-8 w-8" />}>
            Validate new restaurant, tasting room, or retail concepts before committing to a Section 36 licence.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Requirements"
        title="Documentation Needed"
        description="Temporary doesn’t mean relaxed—your files must still be perfect."
      >
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Applicant & Business</h3>
            <Checklist
              items={[
                "SA ID / work permit & tax clearance",
                "Business registration or partnership agreement",
                "Lease covering the trading period",
                "Motivation describing seasonal nature",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Premises Compliance</h3>
            <Checklist
              items={[
                "Zoning confirmation for the temporary use",
                "Floor plan with bar/service areas clearly marked",
                "Health, fire, and building certificates",
                "Noise & crowd management plan (if applicable)",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <div className="my-24 bg-brand-graphite/20 rounded-[40px] p-8 md:p-14">
        <h2 className="font-serif text-3xl text-center mb-10">Approval Timeline</h2>
        <Timeline
          steps={[
            { title: "Concept Review", description: "We confirm your trading dates, lease terms, and municipal readiness." },
            { title: "Document Build", description: "Licensing pack compiled with motivations, plans, and compliance proof." },
            {
              title: "Public Notice",
              description: "Required notices placed (if mandated) and posted at the site for community transparency.",
            },
            {
              title: "Authority Assessment",
              description: "Liquor Authority and SAPS evaluate impact, objections, and risk mitigations.",
            },
            {
              title: "Licence Collection",
              description: "Permit issued for specified dates. We diarise renewal or transition milestones.",
            },
          ]}
        />
      </div>

      <SectionShell
        eyebrow="Planning"
        title="How Long & How Much?"
        description="Temporary licences are quick to obtain if your planning is disciplined."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Processing Time" icon={<Clock className="h-8 w-8" />}>
            30–60 days in the Western Cape. Submit at least two months before you intend to trade.
          </ContentBox>
          <ContentBox title="Licence Duration" icon={<Calendar className="h-8 w-8" />}>
            1 to 12 months maximum. Renewals require updated motivations proving the temporary need still exists.
          </ContentBox>
          <ContentBox title="Government Fees" icon={<DollarSign className="h-8 w-8" />}>
            ±R1,000 application fee + public notice costs and consultant fees based on complexity.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Ongoing Compliance"
        title="Stay on the Right Side of Enforcement"
        description="Temporary licence holders are monitored closely. We keep you inspection-ready."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Display & Record Keeping" icon={<ShieldCheck className="h-8 w-8" />}>
            Licence must be displayed at every bar point; sales and incident logs kept on site.
          </ContentBox>
          <ContentBox title="Geographic Limits" icon={<MapPin className="h-8 w-8" />}>
            The permit only covers the listed address—no mobile bars unless specifically approved.
          </ContentBox>
          <ContentBox title="Transition Plan" icon={<Sparkles className="h-8 w-8" />}>
            Before expiry we initiate either another temporary application or your permanent Section 36 licence.
          </ContentBox>
        </Grid>
      </SectionShell>

      <div className="max-w-3xl mx-auto mt-24" id="faq">
        <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion
          items={[
            {
              title: "Can I renew a temporary licence indefinitely?",
              content:
                "Renewals are possible but require strong motivation. Authorities expect you to graduate to a permanent licence once operationally feasible.",
            },
            {
              title: "Can multiple pop-up locations share one licence?",
              content:
                "No. Each physical site requires its own temporary licence unless the locations fall within a single defined premises.",
            },
            {
              title: "Do I still need staff training?",
              content:
                "Yes. Responsible service, ID verification, and incident logging remain compulsory under temporary licences.",
            },
            {
              title: "Can I downgrade from a permanent licence to temporary?",
              content:
                "Permanent licences can be surrendered, but it’s usually better to retain them. We’ll advise on the optimal structure for your strategy.",
            },
          ]}
        />
      </div>
    </ServiceLayout>
  );
}


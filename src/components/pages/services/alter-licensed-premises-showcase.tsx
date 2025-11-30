import Link from "next/link";
import {
  DraftingCompass,
  Ruler,
  Hammer,
  Building2,
  ShieldCheck,
  ClipboardList,
  Timer,
  DollarSign,
} from "lucide-react";
import { ServiceLayout } from "@/components/pages/service-layout";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { ContentBox } from "@/components/content-box";
import { Checklist } from "@/components/checklist";
import { Callout } from "@/components/callout";
import { Timeline } from "@/components/timeline";
import { Accordion } from "@/components/accordion";
import { Separator } from "@/components/separator";

export function AlterLicensedPremisesShowcase() {
  return (
    <ServiceLayout
      breadcrumbLabel="Alter Licensed Premises"
      hero={{
        title: "Alter Licensed Premises in Cape Town (Section 53)",
        description:
          "Renovating, extending, or reconfiguring your Cape Town venue? Section 53 consent is mandatory before any structural or layout change on licensed premises. We manage the entire approval so you can upgrade without risking your licence.",
        ctaText: "Discuss Your Alterations",
        ctaHref: "#contact",
      }}
      stats={[
        { value: "200+", label: "Cape Town Alteration Consents" },
        { value: "0", label: "Licences Lost", helper: "When we manage compliance" },
        { value: "20+ yrs", label: "Construction & Licensing Insight" },
      ]}
    >
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
          Section 53 of the Western Cape Liquor Act requires prior consent for any change that impacts the licensed
          structure, layout, or trading footprint. Even “simple” refurbishments can trigger inspections or objections if
          the Authority wasn’t notified upfront.
        </p>
        <Callout variant="warning" title="Risks of Skipping Consent">
          Operating with unauthorized alterations can lead to suspension, fines up to R100,000, or total revocation of your
          liquor licence. Municipal inspectors cross-check building plans with licence diagrams—if they don’t match, your bar
          can be shut down mid-build.
        </Callout>
        <p className="text-sm text-brand-cream/60 mt-6">
          If the renovation also requires a new address or extra storage, we coordinate{" "}
          <Link href="/services/removal-of-licence" className="text-brand-sand underline underline-offset-4">
            Removal of Licence in Cape Town
          </Link>{" "}
          filings and{" "}
          <Link href="/services/store-liquor-application" className="text-brand-sand underline underline-offset-4">
            Store Liquor Applications in Cape Town
          </Link>{" "}
          so construction never jeopardizes your trading rights.
        </p>
      </div>

      <SectionShell
        eyebrow="Alteration Scope"
        title="What Needs Section 53 Approval in Cape Town?"
        description="If the change affects structure, licensed areas, access, or safety, it must be pre-approved."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Structural Changes" icon={<Hammer className="h-8 w-8" />}>
            Building extensions, demolishing walls, new mezzanines, changing façades, or relocating kitchens/bars—all need
            updated plans.
          </ContentBox>
          <ContentBox title="Layout Reconfigurations" icon={<DraftingCompass className="h-8 w-8" />}>
            Moving the service counter, adjusting seating ratios, converting storage into VIP areas, or shifting cold rooms.
          </ContentBox>
          <ContentBox title="Outdoor & Entry Points" icon={<Ruler className="h-8 w-8" />}>
            Adding decks, smoking courtyards, new entrances/exits, fire escapes, or wheelchair access ramps linked to the
            licensed area.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Requirements"
        title="What You Need Before We Apply"
        description="We coordinate architects, engineers, and municipal approvals so the Authority receives a complete submission."
      >
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Technical Documentation</h3>
            <Checklist
              items={[
                "Approved municipal building plans with proposed changes clearly marked",
                "Site diagram of licensed areas (before & after)",
                "Structural engineer sign-off (if load-bearing elements move)",
                "Health & Safety and Fire Department compliance certificates",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Business & Licence Paperwork</h3>
            <Checklist
              items={[
                "Current liquor licence in good standing",
                "Proof of annual fees paid",
                "Motivation explaining operational need for the change",
                "Neighbour/landlord consent for boundary adjustments",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <div className="my-24 bg-brand-graphite/20 rounded-[40px] p-8 md:p-14">
        <h2 className="font-serif text-3xl text-center mb-10">Cape Town Approval Timeline</h2>
        <Timeline
          steps={[
            {
              title: "Site & Plan Review",
              description:
                "We audit existing licences, building plans, and municipal status to highlight gaps before submission.",
            },
            {
              title: "Documentation Pack",
              description:
                "Architectural mark-ups, compliance certificates, and motivation letters compiled into a single dossier.",
            },
            {
              title: "Authority Submission",
              description:
                "LA8 application filed with the Liquor Licencing Authority, plus municipal notifications where required.",
            },
            {
              title: "Inspection & Clarifications",
              description: "Inspectors visit the site if needed. We respond to any queries and coordinate revised drawings.",
            },
            {
              title: "Consent Issued",
              description:
                "You receive written approval with conditions. Only then do we green-light contractors to begin work.",
            },
          ]}
        />
      </div>

      <SectionShell
        eyebrow="Budget & Timing"
        title="What to Expect"
        description="Section 53 approvals typically run parallel with municipal building processes."
      >
        <Grid columns={2} className="mt-12">
          <ContentBox title="Typical Timeline" icon={<Timer className="h-8 w-8" />}>
            <ul className="space-y-3 text-sm text-brand-cream/70 mt-4">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Document Preparation</span>
                <span>2-4 weeks</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Authority Processing</span>
                <span>30-60 days</span>
              </li>
              <li className="flex justify-between border-white/10 pb-2">
                <span>On-site Inspection</span>
                <span>As required</span>
              </li>
            </ul>
          </ContentBox>
          <ContentBox title="Cost Considerations" icon={<DollarSign className="h-8 w-8" />}>
            <ul className="space-y-3 text-sm text-brand-cream/70 mt-4">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Government Fee</span>
                <span>R1,000 - R2,500</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Professional Plans</span>
                <span>R5,000 - R20,000+</span>
              </li>
              <li className="flex justify-between border-white/10 pb-2">
                <span>Consultant Fee</span>
                <span>Project specific</span>
              </li>
            </ul>
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Compliance"
        title="Keep Your Licence Protected"
        description="We remain involved after approval to close out compliance items."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Construction Monitoring" icon={<Building2 className="h-8 w-8" />}>
            We ensure contractors follow the approved drawings and notify the Authority if any changes occur on site.
          </ContentBox>
          <ContentBox title="Safety Sign-Offs" icon={<ShieldCheck className="h-8 w-8" />}>
            Final fire, health, and structural certificates are gathered and filed with your licence record.
          </ContentBox>
          <ContentBox title="Licence Updates" icon={<ClipboardList className="h-8 w-8" />}>
            Post-construction inspections and updated licence diagrams are submitted so you’re audit-ready.
          </ContentBox>
        </Grid>
      </SectionShell>

      <div className="max-w-3xl mx-auto mt-24" id="faq">
        <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion
          items={[
            {
              title: "Can I start building before approval?",
              content:
                "No. Work should only start once Section 53 consent is granted. If inspectors find unauthorized changes, they can halt construction and your licence becomes vulnerable.",
            },
            {
              title: "Do I need new plans for minor cosmetic updates?",
              content:
                "Paint, décor, or furniture swaps that don’t change the layout generally don’t require consent. The moment you move fixed counters, alter entrances, or expand seating, consent becomes mandatory.",
            },
            {
              title: "What if plans were changed years ago without approval?",
              content:
                "We can regularize historic alterations by submitting retrospective applications with as-built drawings. It’s better to disclose and rectify than risk enforcement action.",
            },
            {
              title: "How does this affect future transfers?",
              content:
                "During a Section 65 transfer, the Authority checks that premises match approved diagrams. Having Section 53 approvals on file ensures your eventual sale proceeds smoothly.",
            },
          ]}
        />
      </div>
    </ServiceLayout>
  );
}


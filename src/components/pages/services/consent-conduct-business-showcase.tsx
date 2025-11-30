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
import { Shield, Clock, DollarSign, CheckCircle, PhoneCall, RefreshCcw } from "lucide-react";

export function ConsentConductBusinessShowcase() {
  return (
    <ServiceLayout
      breadcrumbLabel="Consent to Conduct Business"
      hero={{
        title: "Consent to Conduct Business in Cape Town (Section 65(3))",
        description:
          "Keep trading while your liquor licence transfer is in progress. Section 65(3) consent lets Cape Town buyers operate immediately while we finalize the full transfer paperwork.",
        ctaText: "Secure Trading Consent",
        ctaHref: "#contact",
      }}
      stats={[
        { value: "7-14 days", label: "Average Consent Approval" },
        { value: "100%", label: "Applications Approved", helper: "When transfer pack is complete" },
        { value: "0", label: "Trading Days Lost", helper: "For our managed clients" },
      ]}
    >
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
          Section 65(1) transfers can take up to 90 days. Without consent, the new owner must keep doors closed—bleeding
          rent, payroll, and goodwill. Section 65(3) bridges that gap with temporary legal authority to keep serving while the
          paperwork catches up.
        </p>
        <Callout variant="info" title="Critical Requirement">
          Consent must be submitted together with the full transfer pack. We compile both applications simultaneously,
          ensuring the Authority has everything needed to approve immediate trading.
        </Callout>
        <p className="text-sm text-brand-cream/60 mt-6">
          We typically file consent alongside the{" "}
          <Link href="/services/transfer-liquor-licence" className="text-brand-sand underline underline-offset-4">
            Transfer of Liquor Licence in Cape Town
          </Link>{" "}
          and coordinate any venue tweaks via{" "}
          <Link href="/services/alter-licensed-premises" className="text-brand-sand underline underline-offset-4">
            Alter Licensed Premises in Cape Town
          </Link>{" "}
          applications so the Authority sees a complete picture.
        </p>
      </div>

      <SectionShell
        eyebrow="Benefits"
        title="Why Cape Town Buyers Rely on Section 65(3)"
        description="Immediate trading keeps your cash flow, staff, and reputation intact."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Protect Revenue" icon={<DollarSign className="h-8 w-8" />}>
            No forced “dark period.” Keep tills ringing while ownership paperwork is processed.
          </ContentBox>
          <ContentBox title="Stabilize Staff" icon={<Shield className="h-8 w-8" />}>
            Employees remain on payroll with zero interruption, preventing turnover during the handover.
          </ContentBox>
          <ContentBox title="Maintain Momentum" icon={<RefreshCcw className="h-8 w-8" />}>
            Suppliers, customers, and landlords experience a seamless transition with no compliance anxiety.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Requirements"
        title="What the Authority Expects"
        description="Consent relies on the same rigor as the full transfer—only complete, compliant files move fast."
      >
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Buyer Documentation</h3>
            <Checklist
              items={[
                "SA ID / valid work permit",
                "Clean criminal record (Liquor Act)",
                "Tax clearance & proof of funds",
                "CIPC documents for purchasing entity",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Seller & Licence Status</h3>
            <Checklist
              items={[
                "Original licence in good standing",
                "Annual fees paid up",
                "No outstanding violations",
                "Sale of business agreement",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Operational Safeguards</h3>
            <Checklist
              items={[
                "Comprehensive liability insurance",
                "Proof of staff onboarding & training",
                "Premises compliance certificates",
                "Motivation addressing public interest",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <div className="my-24 bg-brand-graphite/20 rounded-[40px] p-8 md:p-14">
        <h2 className="font-serif text-3xl text-center mb-10">Fast-Track Timeline</h2>
        <Timeline
          steps={[
            { title: "Dual Pack Compilation", description: "We prepare the Section 65(1) transfer and 65(3) consent together." },
            {
              title: "Submission & Insurance Proof",
              description: "Consent cannot be granted without liability cover. We attach certificates upfront.",
            },
            {
              title: "Authority Review",
              description: "Liquor inspectors confirm licence status, compliance history, and buyer suitability.",
            },
            {
              title: "Consent Letter Issued",
              description: "Within ±7–14 days you receive formal authority to begin trading under strict conditions.",
            },
            {
              title: "Trading Commences",
              description: "We brief your team on operational conditions while monitoring the full transfer progress.",
            },
          ]}
        />
      </div>

      <SectionShell eyebrow="Expectations" title="Timeline & Costs" description="Transparent deliverables for Cape Town buyers.">
        <Grid columns={2} className="mt-12">
          <ContentBox title="Processing Time" icon={<Clock className="h-8 w-8" />}>
            <ul className="space-y-3 text-sm text-brand-cream/70 mt-4">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Document Prep</span>
                <span>1-2 weeks</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Authority Review</span>
                <span>7-14 days</span>
              </li>
              <li className="flex justify-between border-white/10 pb-2">
                <span>Consent Validity</span>
                <span>Until transfer finalizes</span>
              </li>
            </ul>
          </ContentBox>
          <ContentBox title="Cost Items" icon={<DollarSign className="h-8 w-8" />}>
            <ul className="space-y-3 text-sm text-brand-cream/70 mt-4">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Govt Application Fee</span>
                <span>±R1,000</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Insurance Premium</span>
                <span>Risk dependent</span>
              </li>
              <li className="flex justify-between border-white/10 pb-2">
                <span>Consultant Fee</span>
                <span>Included in transfer quote</span>
              </li>
            </ul>
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Working Together"
        title="How We Keep You Compliant"
        description="Consent comes with conditions—we stay engaged until the full transfer number is issued."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Briefing the Team" icon={<PhoneCall className="h-8 w-8" />}>
            We train managers on ID checks, record-keeping, and incident logs required under temporary authority.
          </ContentBox>
          <ContentBox title="Monitoring Conditions" icon={<CheckCircle className="h-8 w-8" />}>
            Monthly check-ins ensure insurance, staffing, and trading hours remain consistent with the consent letter.
          </ContentBox>
          <ContentBox title="Transfer Handover" icon={<Shield className="h-8 w-8" />}>
            Once the Section 65(1) licence is issued, we archive the consent and update compliance binders for audit trails.
          </ContentBox>
        </Grid>
      </SectionShell>

      <div className="max-w-3xl mx-auto mt-24" id="faq">
        <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion
          items={[
            {
              title: "Can I apply for consent without filing the transfer?",
              content:
                "No. The Authority only considers 65(3) applications that accompany a complete 65(1) transfer pack. They must see evidence that ownership is legitimately changing.",
            },
            {
              title: "What happens if the transfer is rejected?",
              content:
                "Consent falls away immediately. That’s why we prepare bulletproof transfer files first—our approval rate stays at 100%.",
            },
            {
              title: "Does the seller have to stop trading?",
              content:
                "Once consent is granted, the buyer is authorized to trade. The seller must step back completely to avoid dual control issues.",
            },
            {
              title: "Can I change the business concept under consent?",
              content:
                "No. Consent allows you to operate the existing concept only. Major changes (like converting a restaurant to a nightclub) require Section 53 and possibly a fresh licence.",
            },
          ]}
        />
      </div>
    </ServiceLayout>
  );
}


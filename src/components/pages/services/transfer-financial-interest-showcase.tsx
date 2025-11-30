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
import { Users, ShieldCheck, FileSignature, DollarSign, Scale, Briefcase, RefreshCcw, ClipboardList } from "lucide-react";

export function TransferFinancialInterestShowcase() {
  return (
    <ServiceLayout
      breadcrumbLabel="Transfer Financial Interest"
      hero={{
        title: "Transfer of Financial Interest in Cape Town (Section 51)",
        description:
          "Adding or removing shareholders in a licensed Cape Town business? Section 51(2) approvals keep the licence compliant while ownership shifts behind the scenes.",
        ctaText: "Update Shareholding",
        ctaHref: "#contact",
      }}
      stats={[
        { value: "3-6 weeks", label: "Average approval time" },
        { value: "0", label: "Licences suspended", helper: "for properly declared changes" },
        { value: "Full cover", label: "Coordination with transfers & consents" },
      ]}
    >
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
          Section 51 regulates changes in the financial interest of a licensed entity. If partners buy in, investors exit, or
          shareholding ratios change, you must notify and obtain approval. Failing to do so risks suspension or rejection of
          future transfer/removal applications.
        </p>
        <Callout variant="info" title="When to Use Section 51 vs Section 65">
          Section 51 = same legal entity, new shareholding. Section 65 = licence moves to a completely new entity. We help
          you choose correctly or combine both if required.
        </Callout>
        <p className="text-sm text-brand-cream/60 mt-6">
          We also prepare the follow-on{" "}
          <Link href="/services/transfer-liquor-licence" className="text-brand-sand underline underline-offset-4">
            Transfer of Liquor Licence in Cape Town
          </Link>{" "}
          or{" "}
          <Link href="/services/consent-conduct-business" className="text-brand-sand underline underline-offset-4">
            Consent to Conduct Business in Cape Town
          </Link>{" "}
          applications when ownership changes culminate in a full sale.
        </p>
      </div>

      <SectionShell
        eyebrow="Use Cases"
        title="Common Shareholding Changes"
        description="Any financial interest shift over 5% should be disclosed."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Partner Buy-Ins/Buy-Outs" icon={<Users className="h-8 w-8" />}>
            New investors joining Cape Town restaurants, bars, or distribution businesses.
          </ContentBox>
          <ContentBox title="Estate & Succession Planning" icon={<Briefcase className="h-8 w-8" />}>
            Ownership transferring to family trusts or heirs while keeping the licence alive.
          </ContentBox>
          <ContentBox title="Corporate Restructures" icon={<RefreshCcw className="h-8 w-8" />}>
            Share swaps, holding company reorganisations, or intra-group transfers within hospitality groups.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Requirements"
        title="What the Authority Reviews"
        description="They want to know who now controls the licensed entity and whether they remain fit & proper."
      >
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">New Participants</h3>
            <Checklist
              items={[
                "SA ID / work permit & fingerprints",
                "Police clearance (Liquor Act offences)",
                "Tax clearance & proof of funds",
                "Motivation for involvement in business",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Entity Paperwork</h3>
            <Checklist
              items={[
                "Updated share register & securities register",
                "CIPC documents reflecting changes",
                "Board/partner resolutions approving transfer",
                "Share purchase / sale agreements",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Licence Compliance</h3>
            <Checklist
              items={[
                "Licence certificate & annexures",
                "Proof annual fees paid",
                "No outstanding enforcement actions",
                "Confirmation operations remain unchanged",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <div className="my-24 bg-brand-graphite/20 rounded-[40px] p-8 md:p-14">
        <h2 className="font-serif text-3xl text-center mb-10">Approval Timeline</h2>
        <Timeline
          steps={[
            {
              title: "Share Audit",
              description:
                "We map the current and proposed shareholding to confirm Section 51 is the correct mechanism (or if Section 65 must accompany it).",
            },
            {
              title: "Document Compilation",
              description: "Resolutions, CIPC filings, purchase agreements, and compliance certificates assembled.",
            },
            {
              title: "Authority Submission",
              description: "Application lodged with Liquor Authority & SAPS for vetting of new financial interest holders.",
            },
            {
              title: "Queries & Clarifications",
              description: "We respond to any questions regarding funding sources, governance, or fit-and-proper concerns.",
            },
            {
              title: "Approval & Record Update",
              description: "Licence file updated with new shareholding, clearing the way for future transfers or removals.",
            },
          ]}
        />
      </div>

      <SectionShell
        eyebrow="Risk Mitigation"
        title="Why Declare Changes Promptly"
        description="Transparency keeps your Cape Town liquor licence future-proof."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Compliance Record" icon={<ShieldCheck className="h-8 w-8" />}>
            Authorities flag undisclosed ownership changes. Voluntary disclosure shows integrity and speeds future approvals.
          </ContentBox>
          <ContentBox title="Bank & Investor Confidence" icon={<DollarSign className="h-8 w-8" />}>
            Updated licence files keep lenders and franchisors satisfied that governance is tight.
          </ContentBox>
          <ContentBox title="Transfer Readiness" icon={<FileSignature className="h-8 w-8" />}>
            When you eventually sell, Section 65 applications move faster because Section 51 history is already captured.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Working With Us"
        title="How We Support Cape Town Operators"
        description="From boutique wine bars to national groups, we treat every change with board-level care."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Confidential Handling" icon={<Scale className="h-8 w-8" />}>
            Shareholder negotiations often stay private—our NDAs and data practices respect sensitive valuations.
          </ContentBox>
          <ContentBox title="Coordinated Filings" icon={<ClipboardList className="h-8 w-8" />}>
            We align CIPC, SARS, and liquor-authority submissions so information matches across regulators.
          </ContentBox>
          <ContentBox title="Integration with Transfers" icon={<Users className="h-8 w-8" />}>
            If partial ownership changes precede a full sale, we sequence Section 51 and Section 65 to avoid double work.
          </ContentBox>
        </Grid>
      </SectionShell>

      <div className="max-w-3xl mx-auto mt-24" id="faq">
        <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion
          items={[
            {
              title: "Do small share changes really need approval?",
              content:
                "Yes—any change of 5% or more must be declared. Even smaller shifts should be noted to maintain an accurate record.",
            },
            {
              title: "What if a partner leaves without paperwork?",
              content:
                "We can regularize historic changes by gathering affidavits and updated registers. The sooner it’s disclosed, the better.",
            },
            {
              title: "Is there an inspection?",
              content:
                "Not usually, but the Authority may request meetings or additional documents if they need clarity on funding sources.",
            },
            {
              title: "How does Section 51 affect tax?",
              content:
                "While we’re not tax advisors, we coordinate with your accountants to ensure capital gains and VAT considerations are addressed alongside the licence updates.",
            },
          ]}
        />
      </div>
    </ServiceLayout>
  );
}


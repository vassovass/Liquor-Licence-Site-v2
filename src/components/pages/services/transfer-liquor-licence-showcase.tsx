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
import { Users, ShieldCheck, ClipboardCheck, DollarSign, Clock, Store, Building2, PhoneCall } from "lucide-react";

export function TransferLiquorLicenceShowcase() {
  return (
    <ServiceLayout
      breadcrumbLabel="Transfer of Liquor Licence"
      hero={{
        title: "Transfer of Liquor Licence in Cape Town (Section 65)",
        description:
          "Buying or selling a licensed Cape Town business? Section 65 transfers move the liquor licence into the new owner’s name while keeping the premises intact. We manage every document, notice, and hearing so handovers stay profitable.",
        ctaText: "Start the Transfer Process",
        ctaHref: "#contact",
      }}
      stats={[
        { value: "30-60 days", label: "Western Cape approvals" },
        { value: "95%", label: "First-time success rate" },
        { value: "0", label: "Missed trading days", helper: "with our consent strategy" },
      ]}
    >
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
          Section 65(1) governs the transfer of existing liquor licences between legal entities or individuals. The licence is
          tied to the premises and the licence holder—when ownership changes, the Authority must re-issue the certificate to
          the buyer. We partner this with Section 65(3) consent so you can keep trading while waiting for final approval.
        </p>
        <Callout variant="info" title="Smart Pairing">
          We file the Section 65(1) transfer and 65(3) consent simultaneously so there’s no downtime when ownership changes
          hands.
        </Callout>
        <p className="text-sm text-brand-cream/60 mt-6">
          That means every transfer file includes {" "}
          <Link href="/services/consent-conduct-business" className="text-brand-sand underline underline-offset-4">
            Consent to Conduct Business in Cape Town
          </Link>{" "}
          plus, when only shareholding shifts, the supporting{" "}
          <Link href="/services/transfer-financial-interest" className="text-brand-sand underline underline-offset-4">
            Transfer Financial Interest in Cape Town
          </Link>{" "}
          documentation so regulators have a complete trail.
        </p>
      </div>

      <SectionShell
      eyebrow="Why Section 65"
        title="Benefits of Buying an Existing Licence"
        description="Transfers deliver speed, credibility, and continuity."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Immediate Trading" icon={<Store className="h-8 w-8" />}>
            With 65(3) consent, you can trade under the seller’s licence while paperwork finalizes.
          </ContentBox>
          <ContentBox title="Reduced Risk" icon={<ShieldCheck className="h-8 w-8" />}>
            Premises, zoning, and community acceptance have already been proven through years of trading.
          </ContentBox>
          <ContentBox title="Higher Valuations" icon={<DollarSign className="h-8 w-8" />}>
            Sellers command better prices when the licence is clean; buyers inherit goodwill alongside equipment and staff.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Requirements"
        title="Documents Needed from Both Parties"
        description="Transfers move quickly when buyer and seller deliver complete, accurate packs."
      >
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Buyer Checklist</h3>
            <Checklist
              items={[
                "SA ID / work permit & police clearance",
                "Tax clearance certificate",
                "CIPC documents + share registers",
                "Proof of funding / sale agreement",
                "Business plan & operational capability",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Seller Checklist</h3>
            <Checklist
              items={[
                "Original liquor licence certificate",
                "Proof annual fees paid",
                "No outstanding enforcement actions",
                "Lease or title deed rights for premises",
                "Full sale-of-business agreement",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <div className="my-24 bg-brand-graphite/20 rounded-[40px] p-8 md:p-14">
        <h2 className="font-serif text-3xl text-center mb-10">Cape Town Transfer Timeline</h2>
        <Timeline
          steps={[
            { title: "Due Diligence", description: "We audit the licence history, municipal records, and transaction terms." },
            {
              title: "Dual Applications",
              description: "Section 65(1) transfer + Section 65(3) consent submitted with insurance and compliance proof.",
            },
            {
              title: "Public Notices",
              description: "Newspaper ads and premises notices inform the public; we manage any objections.",
            },
            {
              title: "Authority Review",
              description: "The Liquor Board assesses the buyer’s suitability and seller’s compliance status.",
            },
            {
              title: "Licence Reissue",
              description: "Certificate updated with the buyer’s details; consent falls away and full ownership begins.",
            },
          ]}
        />
      </div>

      <SectionShell
        eyebrow="Supporting Components"
        title="Beyond the Paperwork"
        description="We treat transfers as full change-management projects."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Operational Handover" icon={<Building2 className="h-8 w-8" />}>
            Inventory counts, supplier introductions, and staff briefings scheduled around approval milestones.
          </ContentBox>
          <ContentBox title="Compliance Coaching" icon={<ClipboardCheck className="h-8 w-8" />}>
            New owners receive training packs covering trading hours, signage, intoxication policies, and reporting duties.
          </ContentBox>
          <ContentBox title="Authority Liaison" icon={<PhoneCall className="h-8 w-8" />}>
            We remain main point of contact with the Liquor Authority so you can focus on running the venue.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Financial Planning"
        title="Timeline & Costs"
        description="Know what to set aside beyond the purchase price."
      >
        <Grid columns={2} className="mt-12">
          <ContentBox title="Processing Time" icon={<Clock className="h-8 w-8" />}>
            <ul className="space-y-3 text-sm text-brand-cream/70 mt-4">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Document Preparation</span>
                <span>2-3 weeks</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Authority Review</span>
                <span>30-60 days</span>
              </li>
              <li className="flex justify-between border-white/10 pb-2">
                <span>Consent Validity</span>
                <span>Until transfer is finalised</span>
              </li>
            </ul>
          </ContentBox>
          <ContentBox title="Cost Items" icon={<DollarSign className="h-8 w-8" />}>
            <ul className="space-y-3 text-sm text-brand-cream/70 mt-4">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Government Fee</span>
                <span>R1,500 - R3,500</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Public Notice Placement</span>
                <span>R1,200 - R2,500</span>
              </li>
              <li className="flex justify-between border-white/10 pb-2">
                <span>Consultant Fee</span>
                <span>Quoted per transaction</span>
              </li>
            </ul>
          </ContentBox>
        </Grid>
      </SectionShell>

      <div className="max-w-3xl mx-auto mt-24" id="faq">
        <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion
          items={[
            {
              title: "Can I trade before the transfer is approved?",
              content:
                "Only if a Section 65(3) consent is granted. We submit it alongside the transfer so there’s no downtime.",
            },
            {
              title: "What if the buyer has a previous liquor offence?",
              content:
                "We disclose it and provide rehabilitation evidence. Severe offences can derail the transfer, so honesty and mitigation are key.",
            },
            {
              title: "Do we need new zoning approval?",
              content:
                "Not if the premises remain unchanged. However, we verify municipal compliance to ensure the Authority doesn’t flag issues.",
            },
            {
              title: "Can we change the business concept?",
              content:
                "Minor tweaks are fine. Major shifts (e.g., restaurant to nightclub) may require Section 53 approval or even a new licence application.",
            },
          ]}
        />
      </div>
    </ServiceLayout>
  );
}


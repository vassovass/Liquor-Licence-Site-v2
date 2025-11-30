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
import { Warehouse, Lock, Shield, Truck, ThermometerSun, DollarSign, ClipboardList, MapPin } from "lucide-react";

export function StoreLiquorApplicationShowcase() {
  return (
    <ServiceLayout
      breadcrumbLabel="Store Liquor Application"
      hero={{
        title: "Store Liquor at an Alternative Location in Cape Town (Section 57)",
        description:
          "Running out of space? Section 57 permits allow Cape Town licensees to store liquor stock in warehouses, cold rooms, or satellite facilities without risking confiscation.",
        ctaText: "Secure Storage Consent",
        ctaHref: "#contact",
      }}
      stats={[
        { value: "48 hrs", label: "Site inspection turnaround" },
        { value: "120+", label: "Storage permits granted" },
        { value: "0", label: "Stock seizures", helper: "for compliant clients" },
      ]}
    >
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
          Your liquor licence only covers the physical premises listed on the certificate. If stock leaves that address
          without Section 57 approval, SAPS can seize product instantly. We formalize additional warehouses—whether you’re a
          bottle store, restaurant group, event company, or wine estate needing overflow space.
        </p>
        <Callout variant="warning" title="High-Risk Triggers">
          Bulk festive-season orders, cooperative purchasing, third-party logistics, or pop-up bars drawing stock from a
          central depot all require Section 57 consent.
        </Callout>
        <p className="text-sm text-brand-cream/60 mt-6">
          Storage projects often accompany{" "}
          <Link href="/services/removal-of-licence" className="text-brand-sand underline underline-offset-4">
            Removal of Licence in Cape Town
          </Link>{" "}
          moves or{" "}
          <Link href="/services/alter-licensed-premises" className="text-brand-sand underline underline-offset-4">
            Alter Licensed Premises in Cape Town
          </Link>{" "}
          work—our team files everything together so inspectors see the full logistics chain.
        </p>
      </div>

      <SectionShell
        eyebrow="Ideal Candidates"
        title="Who Needs Off-Site Storage in Cape Town?"
        description="If your primary bar or retail outlet can’t safely hold inventory, the Authority expects you to formalize alternatives."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Bottle Stores & Retailers" icon={<Warehouse className="h-8 w-8" />}>
            Montague Gardens, Paarden Eiland, and Airport Industria warehouses feeding multiple outlets.
          </ContentBox>
          <ContentBox title="Restaurants & Hotel Groups" icon={<Truck className="h-8 w-8" />}>
            Central kitchens and beverage depots supplying satellite venues.
          </ContentBox>
          <ContentBox title="Event & Catering Teams" icon={<ThermometerSun className="h-8 w-8" />}>
            Cold-chain storage for festivals, wedding bars, and seasonal activations.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Storage Standards"
        title="What Inspectors Look For"
        description="Your warehouse must prove product security, traceability, and sanitary conditions."
      >
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Security Infrastructure</h3>
            <Checklist
              items={[
                "Alarm system & armed response",
                "Restricted access control / key logs",
                "CCTV covering entry & storage aisles",
                "Lockable cages for high-value stock",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Compliance Documents</h3>
            <Checklist
              items={[
                "Lease or title deed for storage site",
                "Zoning certificate (industrial/commercial)",
                "Insurance cover for stored liquor",
                "Health & safety certificates",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Operational Controls</h3>
            <Checklist
              items={[
                "Stock registers & movement logs",
                "Separate storage for returns/damaged goods",
                "Temperature control (for premium wines)",
                "Documented transport procedures",
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
              title: "Warehouse Audit",
              description: "We inspect the proposed site, note upgrades, and brief your facilities team on requirements.",
            },
            {
              title: "Documentation Pack",
              description: "Plans, photos, insurance certificates, and movement protocols compiled for submission.",
            },
            {
              title: "Authority Submission",
              description: "Section 57 application lodged with SAPS & Liquor Authority; inspections scheduled if needed.",
            },
            {
              title: "Compliance Upgrades",
              description: "We remedy any flagged issues (security hardware, signage, record-keeping).",
            },
            {
              title: "Consent Issued",
              description: "Written permission lists approved storage address(es) and conditions for ongoing monitoring.",
            },
          ]}
        />
      </div>

      <SectionShell
        eyebrow="What It Costs"
        title="Budget & Record Keeping"
        description="Affordable compliance compared with the risk of seized inventory."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Government Fees" icon={<DollarSign className="h-8 w-8" />}>
            R1,000 – R2,500 per storage site, plus optional expedited inspection fees where available.
          </ContentBox>
          <ContentBox title="Security Investments" icon={<Lock className="h-8 w-8" />}>
            Alarm upgrades, CCTV, or cages if existing infrastructure doesn’t satisfy the Authority’s checklist.
          </ContentBox>
          <ContentBox title="Record Management" icon={<ClipboardList className="h-8 w-8" />}>
            We implement electronic stock ledgers so SAPS can verify product movement within minutes.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Ongoing Support"
        title="We Keep You Audit-Ready"
        description="Section 57 permits are only as good as your daily controls."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Unannounced Audits" icon={<Shield className="h-8 w-8" />}>
            We conduct surprise checks mirroring SAPS inspections to keep teams sharp.
          </ContentBox>
          <ContentBox title="Multi-Site Management" icon={<MapPin className="h-8 w-8" />}>
            Need several warehouses? We maintain a master register so expansions stay coordinated.
          </ContentBox>
          <ContentBox title="Annual Renewals" icon={<Warehouse className="h-8 w-8" />}>
            We refresh insurance, zoning, and security certificates annually to avoid lapses.
          </ContentBox>
        </Grid>
      </SectionShell>

      <div className="max-w-3xl mx-auto mt-24" id="faq">
        <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion
          items={[
            {
              title: "Can I store liquor at home?",
              content:
                "No. Section 57 storage must be at compliant commercial premises with proper security, zoning, and insurance.",
            },
            {
              title: "Does each event site also need permission?",
              content:
                "Pop-ups draw stock from the approved warehouse. Event sites require their own licences (temporary or event) for retail service.",
            },
            {
              title: "What if I move warehouses?",
              content:
                "You must notify the Authority immediately and apply for an amended approval. We handle the paperwork to avoid gaps.",
            },
            {
              title: "Can wholesalers deliver directly to the warehouse?",
              content:
                "Yes, once the site is approved. Keep delivery notes and link them to outlet requisitions for complete traceability.",
            },
          ]}
        />
      </div>
    </ServiceLayout>
  );
}


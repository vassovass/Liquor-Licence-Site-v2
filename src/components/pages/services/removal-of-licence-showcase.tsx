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
import { MapPin, MoveRight, ClipboardCheck, ShieldCheck, Truck, Clock, DollarSign, Building2 } from "lucide-react";

export function RemovalOfLicenceShowcase() {
  return (
    <ServiceLayout
      breadcrumbLabel="Removal of Licence"
      hero={{
        title: "Removal of Liquor Licence in Cape Town (Section 66)",
        description:
          "Relocating within Cape Town? Section 66 lets you move your existing liquor licence to brand-new premises without starting from scratch. We coordinate the approvals so you can reopen seamlessly.",
        ctaText: "Plan Your Relocation",
        ctaHref: "#contact",
      }}
      stats={[
        { value: "60-90 days", label: "Typical Removal Timeline" },
        { value: "0", label: "Licences Lost in Transit" },
        { value: "150+", label: "Cape Town moves facilitated" },
      ]}
    >
      <div className="max-w-3xl mx-auto text-center mb-20">
        <p className="text-lg text-brand-cream/80 leading-relaxed mb-6">
          Section 66(2) protects the value of your liquor licence when your current premises becomes too small, too
          expensive, or no longer fits your concept. Rather than applying for a completely new licence (and risking quotas or
          objections), we relocate the existing licence to the new address.
        </p>
        <Callout variant="info" title="Ideal Scenarios">
          Lease expiries, gentrification, redevelopment, or strategic expansions across Cape Town’s CBD, suburbs, and
          Winelands.
        </Callout>
        <p className="text-sm text-brand-cream/60 mt-6">
          Relocations often also need{" "}
          <Link href="/services/alter-licensed-premises" className="text-brand-sand underline underline-offset-4">
            Alter Licensed Premises in Cape Town
          </Link>{" "}
          clearances for the new fit-out and{" "}
          <Link href="/services/consent-conduct-business" className="text-brand-sand underline underline-offset-4">
            Consent to Conduct Business in Cape Town
          </Link>{" "}
          so the new owner can trade while the removal and transfer run in parallel.
        </p>
      </div>

      <SectionShell
        eyebrow="Why Section 66"
        title="Benefits of Licence Removal vs New Application"
        description="Carry your trading history and credibility into the next chapter."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Faster Approvals" icon={<Clock className="h-8 w-8" />}>
            60–90 days vs 90–120 for a new licence, because the Authority already knows your track record.
          </ContentBox>
          <ContentBox title="Cost Savings" icon={<DollarSign className="h-8 w-8" />}>
            Lower application fees and no need to rebuild goodwill with suppliers and brand owners.
          </ContentBox>
          <ContentBox title="Competitive Advantage" icon={<MoveRight className="h-8 w-8" />}>
            Keeps your existing licence through municipal quota areas where new licences are capped.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Requirements"
        title="What We Need to Relocate Your Licence"
        description="Think of it as proving the new site is as compliant as the old one."
      >
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Current Licence Status</h3>
            <Checklist
              items={[
                "Licence in good standing & annual fees paid",
                "No outstanding compliance issues or penalties",
                "Original licence certificate & annexures",
                "Detailed trading history (for motivation)",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">New Premises Compliance</h3>
            <Checklist
              items={[
                "Lease/title deed & landlord consent",
                "Zoning certificate permitting liquor trade",
                "Municipal building plans & occupation certificate",
                "Fire, health, and safety approvals",
              ]}
            />
          </div>
          <div>
            <h3 className="font-serif text-2xl mb-4">Community Safeguards</h3>
            <Checklist
              items={[
                "Neighbour engagement strategy",
                "Updated site diagrams & parking plans",
                "Security and noise mitigation measures",
                "Motivation detailing public interest",
              ]}
            />
          </div>
        </div>
      </SectionShell>

      <div className="my-24 bg-brand-graphite/20 rounded-[40px] p-8 md:p-14">
        <h2 className="font-serif text-3xl text-center mb-10">Cape Town Removal Process</h2>
        <Timeline
          steps={[
            { title: "Site Feasibility", description: "We compare old vs new locations for zoning, distance rules, and demand." },
            {
              title: "Document Compilation",
              description: "Lease agreements, floor plans, motivations, and compliance certificates prepared.",
            },
            {
              title: "Public Notices",
              description: "Notices placed at both old and new premises plus local newspapers for transparency.",
            },
            {
              title: "Authority Review",
              description: "Liquor Authority and SAPS inspect the new site; we respond to any technical queries.",
            },
            {
              title: "Licence Reissue",
              description: "Once approved, the licence certificate is updated with the new address and trading can begin.",
            },
          ]}
        />
      </div>

      <SectionShell
        eyebrow="Logistics"
        title="Closing One Site, Opening Another"
        description="We choreograph the transition so you’re never trading illegally."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="Cutover Plan" icon={<Truck className="h-8 w-8" />}>
            Timelines ensure stock and fixtures move only once the Authority authorises relocation.
          </ContentBox>
          <ContentBox title="Compliance Binder" icon={<ShieldCheck className="h-8 w-8" />}>
            We assemble updated diagrams, certificates, and licence conditions for the new site’s inspector visits.
          </ContentBox>
          <ContentBox title="Handover Support" icon={<Building2 className="h-8 w-8" />}>
            We brief your contractors and management team on any structural conditions tied to the approval.
          </ContentBox>
        </Grid>
      </SectionShell>

      <Separator className="my-24" />

      <SectionShell
        eyebrow="Site Intelligence"
        title="Cape Town Hotspots We Regularly Serve"
        description="Wherever you relocate, we’ve likely obtained approvals nearby."
      >
        <Grid columns={3} className="mt-12">
          <ContentBox title="CBD & Atlantic Seaboard" icon={<MapPin className="h-8 w-8" />}>
            Bree/Loop Street, V&A Waterfront, Sea Point promenade, Camps Bay strip.
          </ContentBox>
          <ContentBox title="Northern & Southern Suburbs" icon={<ClipboardCheck className="h-8 w-8" />}>
            Table View, Durbanville wine route, Constantia, Claremont, Newlands.
          </ContentBox>
          <ContentBox title="Winelands & Coastal Towns" icon={<MapPin className="h-8 w-8" />}>
            Stellenbosch, Paarl, Franschhoek, Simon’s Town, Gordon’s Bay.
          </ContentBox>
        </Grid>
      </SectionShell>

      <div className="max-w-3xl mx-auto mt-24" id="faq">
        <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion
          items={[
            {
              title: "Can I keep trading at the old site during the process?",
              content:
                "Yes, until the removal is approved. Once the licence is reissued for the new address, the old site must cease trading immediately.",
            },
            {
              title: "Do I need to reapply for a business licence at the new site?",
              content:
                "Municipal business licences and zoning approvals must be obtained for the new premises. We coordinate those alongside the liquor removal.",
            },
            {
              title: "What if the new venue is a different concept?",
              content:
                "The Authority expects the operation to remain substantially similar. Major concept shifts may require additional motivations or even new licences.",
            },
            {
              title: "How far can I relocate?",
              content:
                "Anywhere within the province, provided zoning and distance requirements are satisfied. We analyse distances to schools, churches, and fellow licensees before submission.",
            },
          ]}
        />
      </div>
    </ServiceLayout>
  );
}


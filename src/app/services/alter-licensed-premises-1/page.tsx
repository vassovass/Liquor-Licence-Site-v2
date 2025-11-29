import { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAButton } from "@/components/cta-button";
import { FeatureHighlight } from "@/components/feature-highlight";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { ContentBox } from "@/components/content-box";
import { Checklist } from "@/components/checklist";
import { Timeline } from "@/components/timeline";
import { Callout } from "@/components/callout";
import { Separator } from "@/components/separator";
import { Accordion } from "@/components/accordion";
import { Card } from "@/components/card";
import { Tabs } from "@/components/tabs";
import {
  Building2,
  Hammer,
  Layout,
  MapPin,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Clock,
  DollarSign,
  CheckCircle2,
  XCircle,
  Users,
  Award,
  Home,
  Utensils,
  Store,
  Calendar,
  Scale,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Alter Licensed Premises Section 53 | Renovation Consent | Cape Town",
  description: "Apply for consent to alter, renovate or extend licensed premises in South Africa. Section 53 expert. Legal compliance for renovations. +27 82-321-7722",
  keywords: ["alter licensed premises", "section 53 liquor licence", "renovate licensed premises", "extend licensed premises south africa", "alteration consent"],
};

export default function AlterLicensedPremisesPage() {
  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Services", href: "/services" },
              { label: "Alter Licensed Premises" },
            ]}
          />
        </div>

        <FeatureHighlight
          title="Consent to Alter Licensed Premises - Section 53"
          description="Planning renovations, extensions, or alterations to your licensed restaurant, pub, or bottle store? Any structural or significant changes to licensed premises require official consent under Section 53 of the South African Liquor Act. Operating with unauthorized alterations can result in licence suspension, fines, or even licence revocation. With over 20 years of experience, Beverly Jeursen ensures your alteration application is approved legally and efficiently."
          ctaText="Get Free Consultation"
          ctaHref="#contact"
          imageSrc="/images/hero-beverly.jpg"
          className="mb-24"
        />

        <div className="mb-24">
          <SectionShell
            eyebrow="Understanding"
            title="What is Section 53?"
            description="Section 53 of the Liquor Act requires licence holders to obtain prior consent from the Liquor Licencing Authority before making any alterations to licensed premises."
          >
            <div className="mt-12 max-w-3xl mx-auto">
              <Callout variant="warning" title="Important" className="mb-8">
                You cannot proceed with alterations until consent is granted. Unauthorized changes can jeopardize your licence.
              </Callout>
              <div className="bg-brand-graphite/30 rounded-2xl p-6 border border-white/5">
                <p className="text-brand-cream/80 mb-4">This applies to:</p>
                <ul className="space-y-3 list-none pl-0 m-0">
                  <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                    <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                    <span className="leading-relaxed">Structural alterations or renovations</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                    <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                    <span className="leading-relaxed">Extensions or additions to the building</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                    <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                    <span className="leading-relaxed">Changes to the licensed area (bar, retail floor, seating)</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                    <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                    <span className="leading-relaxed">Layout modifications</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                    <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                    <span className="leading-relaxed">Changes to access or egress</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                    <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                    <span className="leading-relaxed">Addition of outdoor seating or trading areas</span>
                  </li>
                  <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                    <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                    <span className="leading-relaxed">Moving the bar or service area</span>
                  </li>
                </ul>
              </div>
            </div>
          </SectionShell>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <SectionShell
            eyebrow="Requirements"
            title="What Alterations Need Section 53 Approval?"
            description="Different types of alterations require consent under various subsections of Section 53."
          >
            <Grid columns={3} className="mt-12">
              <ContentBox title="Structural Changes (Section 53(1)(a))" icon={<Building2 className="h-8 w-8" />}>
                <ul className="mt-4 space-y-2 text-sm text-brand-cream/60">
                  <li>• Building extensions</li>
                  <li>• Knocking down walls</li>
                  <li>• Adding rooms or floors</li>
                  <li>• Changing roofline or structure</li>
                  <li>• Major renovations</li>
                </ul>
              </ContentBox>
              <ContentBox title="Layout Changes (Section 53(1)(b))" icon={<Layout className="h-8 w-8" />}>
                <ul className="mt-4 space-y-2 text-sm text-brand-cream/60">
                  <li>• Moving the bar area</li>
                  <li>• Reconfiguring seating layout</li>
                  <li>• Changing retail floor plan (bottle stores)</li>
                  <li>• Altering storage areas</li>
                  <li>• Modifying kitchen or service areas</li>
                </ul>
              </ContentBox>
              <ContentBox title="Area Changes (Section 53(1)(c))" icon={<MapPin className="h-8 w-8" />}>
                <ul className="mt-4 space-y-2 text-sm text-brand-cream/60">
                  <li>• Expanding licensed trading area</li>
                  <li>• Adding outdoor seating/trading space</li>
                  <li>• Creating new bar or service points</li>
                  <li>• Reducing licensed area</li>
                  <li>• Changing designated smoking areas</li>
                </ul>
              </ContentBox>
            </Grid>
            <div className="mt-12 max-w-2xl mx-auto">
              <Card variant="outline" title="When Consent May Not Be Required">
                <p className="mb-4">Minor cosmetic changes typically don't require consent:</p>
                <ul className="space-y-2 text-sm">
                  <li>• Repainting</li>
                  <li>• Replacing furniture (same layout)</li>
                  <li>• Cosmetic décor updates</li>
                  <li>• Replacing equipment (same location)</li>
                </ul>
                <p className="mt-4 text-brand-sand font-medium">Not sure if your changes require consent? Contact us for free assessment.</p>
              </Card>
            </div>
          </SectionShell>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Critical"
            title="Why Section 53 Consent is Critical"
            description="The importance of legal alteration approval cannot be overstated."
          >
            <Grid columns={3} className="mt-12">
              <ContentBox title="Protect Your Licence" icon={<ShieldCheck className="h-8 w-8" />}>
                Operating with unauthorized alterations is a violation that can result in licence suspension or revocation.
              </ContentBox>
              <ContentBox title="Avoid Fines & Penalties" icon={<AlertTriangle className="h-8 w-8" />}>
                Illegal alterations carry fines up to R100,000 plus potential criminal charges.
              </ContentBox>
              <ContentBox title="Transfer & Renewal Issues" icon={<FileText className="h-8 w-8" />}>
                Unauthorized alterations will be discovered during licence transfers, renewals, and inspections. Resolving violations retroactively is complicated and expensive.
              </ContentBox>
              <ContentBox title="Insurance Requirements" icon={<ShieldCheck className="h-8 w-8" />}>
                Insurance policies may be void if claims arise from unauthorized structural changes.
              </ContentBox>
              <ContentBox title="Building Compliance" icon={<Building2 className="h-8 w-8" />}>
                Section 53 ensures your alterations also comply with building regulations, health and safety, and fire codes.
              </ContentBox>
              <ContentBox title="Professional Standards" icon={<Award className="h-8 w-8" />}>
                Legal compliance demonstrates professionalism to customers, employees, and business partners.
              </ContentBox>
            </Grid>
          </SectionShell>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <SectionShell
            eyebrow="Application"
            title="What You Need to Apply for Alteration Consent"
            description="Complete documentation is essential for successful Section 53 applications."
          >
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card title="Current Licence Documentation">
                <Checklist items={[
                  "Original liquor licence certificate",
                  "Licence in good standing",
                  "Proof of current annual fee payment"
                ]} />
              </Card>
              <Card title="Alteration Details">
                <Checklist items={[
                  "Detailed description of proposed changes",
                  "Motivation for alterations (improve service, expand capacity, etc.)",
                  "Timeline for work completion"
                ]} />
              </Card>
              <Card title="Building Plans">
                <Checklist items={[
                  "Architectural drawings or floor plans",
                  "Before and after layouts clearly marked",
                  "Showing all licensed areas",
                  "Drawn to scale",
                  "Prepared by professional (for major alterations)"
                ]} />
              </Card>
              <Card title="Regulatory Approvals">
                <Checklist items={[
                  "Building plan approval from municipality",
                  "Health and safety compliance",
                  "Fire department approval (if required)",
                  "Zoning confirmation (if area changes)"
                ]} />
              </Card>
              <Card title="Business Documentation">
                <Checklist items={[
                  "Proof of ownership or landlord consent",
                  "Building contractor details",
                  "Insurance certificates",
                  "Cost estimates or project plans"
                ]} />
              </Card>
            </div>
            <Callout variant="warning" title="Critical" className="mt-8 max-w-3xl mx-auto">
              Missing or incomplete plans are the #1 cause of delays. We ensure your application is complete.
            </Callout>
          </SectionShell>
        </div>

        <div className="mb-24 bg-brand-graphite/20 rounded-[40px] p-8 md:p-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl mb-12 text-center">The Application Process</h2>
            <Timeline
              steps={[
                {
                  title: "Planning Phase",
                  description: "Before you start any work, contact us. We assess your plans and identify all requirements.",
                },
                {
                  title: "Obtain Building Approval",
                  description: "Get municipal building plan approval first - this is usually required for Section 53 application.",
                },
                {
                  title: "Document Preparation",
                  description: "We prepare comprehensive floor plans, motivation letters, and all supporting documents.",
                },
                {
                  title: "Application Completion",
                  description: "We complete the official LA8 form (or provincial equivalent) with all alteration details.",
                },
                {
                  title: "Submission",
                  description: "We submit your application to the provincial Liquor Licencing Authority.",
                },
                {
                  title: "Authority Review",
                  description: "The authority reviews your proposed alterations for compliance with Liquor Act requirements.",
                },
                {
                  title: "Inspection (if required)",
                  description: "Some alterations require site inspection by liquor inspectors.",
                },
                {
                  title: "Approval Granted",
                  description: "Once approved, you receive written consent to proceed with alterations.",
                },
                {
                  title: "Post-Completion Inspection",
                  description: "After work is completed, final inspection confirms compliance with approved plans.",
                },
              ]}
            />
            <Callout variant="error" title="Warning" className="mt-8">
              Don't start renovations before approval - it's illegal and risks your licence.
            </Callout>
          </div>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Expectations"
            title="Timeline & Costs"
            description="Transparency is key. Here is what you can expect in terms of time and budget."
          >
            <Grid columns={2} className="mt-12">
              <ContentBox title="Application Timeline" icon={<Clock className="h-8 w-8" />}>
                <ul className="space-y-4 mt-4">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Western Cape</span>
                    <span className="text-brand-sand font-bold">30-60 Days</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Gauteng</span>
                    <span className="text-brand-sand font-bold">45-75 Days</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>KwaZulu-Natal</span>
                    <span className="text-brand-sand font-bold">45-75 Days</span>
                  </li>
                </ul>
                <p className="text-xs text-brand-cream/50 mt-4">Start early: Begin the application process before you need to start construction. Building approval, document preparation, and authority processing all take time.</p>
              </ContentBox>
              <ContentBox title="Costs" icon={<DollarSign className="h-8 w-8" />}>
                <ul className="space-y-4 mt-4">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Government application fee</span>
                    <span className="text-brand-sand font-bold">R1,000 - R2,500</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Building plan costs (architect/draftsman)</span>
                    <span className="text-brand-sand font-bold">R5,000 - R20,000+</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Consultant fees</span>
                    <span className="text-brand-sand font-bold">Contact for quote</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Inspection fees (if applicable)</span>
                    <span className="text-brand-sand font-bold">Varies</span>
                  </li>
                </ul>
                <p className="text-xs text-brand-cream/50 mt-4">*Depends on scope of alterations</p>
                <Callout variant="warning" className="mt-4">
                  The cost of NOT getting consent is far higher - fines, licence suspension, or revocation.
                </Callout>
              </ContentBox>
            </Grid>
          </SectionShell>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Scenarios"
            title="Typical Licensed Premises Alterations"
            description="Common alteration scenarios we handle regularly."
          >
            <Grid columns={4} className="mt-12">
              <ContentBox title="Restaurant Expansions" icon={<Utensils className="h-6 w-6" />}>
                Adding seating areas, outdoor patios, or expanding dining rooms requires Section 53 consent.
              </ContentBox>
              <ContentBox title="Bar Relocations" icon={<Utensils className="h-6 w-6" />}>
                Moving your bar to a different wall or area of the premises needs approval.
              </ContentBox>
              <ContentBox title="Bottle Store Layout Changes" icon={<Store className="h-6 w-6" />}>
                Changing retail floor layout, adding walk-in fridges, or expanding sales floor.
              </ContentBox>
              <ContentBox title="Outdoor Trading Areas" icon={<Home className="h-6 w-6" />}>
                Popular in Cape Town - adding outdoor seating, beer gardens, or sidewalk trading requires consent.
              </ContentBox>
              <ContentBox title="Kitchen Expansions" icon={<Utensils className="h-6 w-6" />}>
                Major kitchen renovations that affect licensed area layout.
              </ContentBox>
              <ContentBox title="Adding Smoking Areas" icon={<Home className="h-6 w-6" />}>
                Designating or modifying smoking areas (must comply with tobacco legislation too).
              </ContentBox>
              <ContentBox title="Building Extensions" icon={<Building2 className="h-6 w-6" />}>
                Adding a second floor, extending the building, or constructing additions.
              </ContentBox>
              <ContentBox title="Converting Non-Licensed Areas" icon={<Layout className="h-6 w-6" />}>
                Converting storage or non-trading areas into licensed trading space.
              </ContentBox>
            </Grid>
          </SectionShell>
        </div>

        <Separator className="my-24" />

        <div className="mb-24">
          <SectionShell
            eyebrow="Regularization"
            title="What If Alterations Were Already Made Without Consent?"
            description="Many licence holders discover previous owners made unauthorized alterations, or they weren't aware consent was required."
          >
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card title="The Problem" className="border-red-500/30 bg-red-500/5">
                <p className="mb-4">Unauthorized alterations are a violation that can:</p>
                <Checklist variant="error" items={[
                  "Block licence transfers",
                  "Cause renewal issues",
                  "Result in fines",
                  "Lead to licence suspension"
                ]} />
              </Card>
              <Card title="The Solution" className="border-green-500/30 bg-green-500/5">
                <p className="mb-4">Apply retrospectively for Section 53 consent to regularize the alterations.</p>
                <p className="text-sm text-brand-cream/70">We assess if alterations can be approved retroactively and guide you through the regularization process.</p>
              </Card>
            </div>
            <div className="mt-12">
              <h3 className="font-serif text-2xl mb-6">Regularization Process</h3>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 
                [&>li]:bg-brand-graphite/20 [&>li]:border [&>li]:border-white/5 [&>li]:rounded-3xl [&>li]:p-6 [&>li]:h-full
                [&>li_strong]:block [&>li_strong]:text-lg [&>li_strong]:font-serif [&>li_strong]:text-brand-cream [&>li_strong]:mb-2
                [&>li]:text-sm [&>li]:text-brand-cream/70">
                <li>
                  <strong>Disclosure</strong>
                  Acknowledge alterations and when they occurred
                </li>
                <li>
                  <strong>Assessment</strong>
                  We assess if alterations can be approved retroactively
                </li>
                <li>
                  <strong>Documentation</strong>
                  Prepare as-built plans showing current layout
                </li>
                <li>
                  <strong>Application</strong>
                  Apply for consent to regularize existing alterations
                </li>
                <li>
                  <strong>Compliance</strong>
                  Demonstrate current compliance with all regulations
                </li>
                <li>
                  <strong>Resolution</strong>
                  Authority grants consent or requires modifications
                </li>
              </ol>
            </div>
            <Callout variant="warning" title="Important" className="mt-8">
              Discovered unauthorized alterations when buying a business? Don't complete the purchase until they're resolved. We assist buyers with due diligence and sellers with regularization.
            </Callout>
          </SectionShell>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Compliance"
            title="Requirements After Section 53 is Granted"
            description="Ongoing compliance is essential after approval is received."
          >
            <Grid columns={2} className="mt-12">
              <Card title="Follow Approved Plans">
                <p>Construction must match exactly what was approved. Any deviations require amended application.</p>
              </Card>
              <Card title="Maintain Documentation">
                <p className="mb-3">Keep copies of:</p>
                <Checklist items={[
                  "Section 53 approval letter",
                  "Approved floor plans",
                  "Building completion certificates",
                  "Final inspection reports"
                ]} />
              </Card>
              <Card title="Update Licence Certificate">
                <p>Some provinces issue updated licence certificates showing the alterations.</p>
              </Card>
              <Card title="Ongoing Compliance">
                <p className="mb-3">Altered premises must continue to meet:</p>
                <Checklist items={[
                  "Health and safety standards",
                  "Fire regulations",
                  "Building codes",
                  "Liquor Act requirements"
                ]} />
              </Card>
            </Grid>
            <Callout variant="info" className="mt-8 max-w-2xl mx-auto">
              Each new alteration requires a separate Section 53 application.
            </Callout>
          </SectionShell>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Coordination"
            title="Coordinating Renovations and Legal Compliance"
            description="Working effectively with contractors while maintaining legal compliance."
          >
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <Card title="Inform Your Contractor">
                <p className="mb-4">Ensure building contractors understand:</p>
                <Checklist items={[
                  "Work cannot start until Section 53 is approved",
                  "Must follow approved plans exactly",
                  "Final inspection will be required"
                ]} />
              </Card>
              <Card title="Project Timeline">
                <p className="mb-4">Factor Section 53 approval time into your renovation schedule:</p>
                <ol className="space-y-2 text-sm text-brand-cream/70 list-decimal pl-5">
                  <li>Design phase (2-4 weeks)</li>
                  <li>Building plan approval (4-8 weeks)</li>
                  <li>Section 53 application and approval (4-8 weeks)</li>
                  <li>Construction phase</li>
                  <li>Final inspections and sign-off</li>
                </ol>
                <p className="mt-4 text-brand-sand font-medium">Plan 3-4 months minimum from initial design to starting construction.</p>
              </Card>
            </div>
            <Callout variant="error" title="Avoid Costly Mistakes" className="mt-8">
              Contractors sometimes advise "no one will notice" or "apply later." This is illegal and jeopardizes your licence. Always get consent first.
            </Callout>
          </SectionShell>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Provinces"
            title="Section 53 Requirements by Province"
            description="While Section 53 is national legislation, implementation varies by province."
          >
            <div className="mt-12">
              <Tabs
                items={[
                  {
                    label: "Western Cape",
                    content: (
                      <div className="p-6 bg-brand-graphite/20 rounded-xl">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                            <span>Strict enforcement</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                            <span>Detailed floor plans required</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                            <span>Post-completion inspections common</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                            <span>Tourist area alterations heavily scrutinized</span>
                          </li>
                        </ul>
                      </div>
                    ),
                  },
                  {
                    label: "Gauteng",
                    content: (
                      <div className="p-6 bg-brand-graphite/20 rounded-xl">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                            <span>Focus on compliance with building regs</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                            <span>Metro vs rural variations</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                            <span>Johannesburg particularly strict</span>
                          </li>
                        </ul>
                      </div>
                    ),
                  },
                  {
                    label: "KwaZulu-Natal",
                    content: (
                      <div className="p-6 bg-brand-graphite/20 rounded-xl">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                            <span>Coastal area development focus</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                            <span>Tourism venue alterations well-supported</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                            <span>Strong building compliance requirements</span>
                          </li>
                        </ul>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
            <Callout variant="info" className="mt-8">
              Provincial expertise matters. With 20+ years across all provinces, Beverly knows local nuances.
            </Callout>
          </SectionShell>
        </div>

        <div className="max-w-3xl mx-auto mb-24" id="faq">
          <h2 className="font-serif text-3xl mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion
            items={[
              {
                title: "Do I need Section 53 for minor renovations?",
                content: "Cosmetic changes (painting, furniture) generally don't require consent. Structural changes, layout changes, or area expansions do require consent. Contact us if you're unsure.",
              },
              {
                title: "Can I start renovations while waiting for approval?",
                content: "No. Starting work before approval is illegal and can result in licence suspension and fines.",
              },
              {
                title: "How much does Section 53 application cost?",
                content: "Government fees are R1,000-R2,500 plus professional fees for architects and consultants. Total costs depend on alteration scope.",
              },
              {
                title: "What if my landlord is doing the renovations?",
                content: "You (the licence holder) are still responsible for getting Section 53 consent. Coordinate with your landlord.",
              },
              {
                title: "Can Section 53 be denied?",
                content: "Yes, if proposed alterations don't comply with regulations, create safety issues, or violate licence conditions. We assess feasibility before applying.",
              },
              {
                title: "How long is Section 53 approval valid?",
                content: "Typically 12 months to complete approved alterations. Extensions may be granted with motivation.",
              },
              {
                title: "What happens if I sell my business with unapproved alterations?",
                content: "The licence transfer will be blocked until alterations are regularized. This delays sales and can collapse deals.",
              },
            ]}
          />
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Expertise"
            title="Alteration Application Expertise"
            description="Why choose Beverly Jeursen for Section 53 applications."
          >
            <Grid columns={2} className="mt-12">
              <ContentBox title="Comprehensive Service" icon={<CheckCircle2 className="h-8 w-8" />}>
                From initial assessment through final inspection, we handle every aspect of your alteration application.
              </ContentBox>
              <ContentBox title="Coordinate with Professionals" icon={<Users className="h-8 w-8" />}>
                We work with your architects, contractors, and authorities to ensure seamless compliance.
              </ContentBox>
              <ContentBox title="Regularization Specialists" icon={<Scale className="h-8 w-8" />}>
                Extensive experience resolving unauthorized alterations for sellers and buyers.
              </ContentBox>
              <ContentBox title="Fast Processing" icon={<Clock className="h-8 w-8" />}>
                We know how to prepare complete applications that process quickly without delays.
              </ContentBox>
              <ContentBox title="Provincial Expertise" icon={<Award className="h-8 w-8" />}>
                20+ years experience with Section 53 applications across all South African provinces.
              </ContentBox>
            </Grid>
          </SectionShell>
        </div>

        <div
          id="contact"
          className="bg-brand-sand/10 rounded-[40px] p-12 text-center border border-brand-sand/20"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-cream">Renovate Your Licensed Premises Legally</h2>
          <p className="text-lg text-brand-cream/70 mb-8 max-w-2xl mx-auto">
            Planning alterations to your licensed premises? Need to regularize previous alterations? Contact Beverly Jeursen today for expert Section 53 application assistance.
          </p>
          <div className="bg-brand-graphite/30 rounded-2xl p-6 mb-8 max-w-md mx-auto">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <span className="text-brand-sand font-medium">Phone:</span>
                <a href="tel:+27823217722" className="text-brand-cream hover:text-brand-sand transition-colors">+27 82-321-7722</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-sand font-medium">Email:</span>
                <a href="mailto:bajeursen.liquorlicences@gmail.com" className="text-brand-cream hover:text-brand-sand transition-colors">bajeursen.liquorlicences@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-sand font-medium">WhatsApp:</span>
                <a href="https://wa.me/27823217722" className="text-brand-cream hover:text-brand-sand transition-colors">+27 82-321-7722</a>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-sm text-brand-cream/60 mb-2"><strong className="text-brand-sand">Office Hours:</strong></p>
                <p className="text-sm text-brand-cream/60">Monday - Thursday: 09:00 - 17:00</p>
                <p className="text-sm text-brand-cream/60">Friday: 09:00 - 15:00</p>
              </div>
              <div className="pt-3 border-t border-white/10">
                <p className="text-sm text-brand-cream/60"><strong className="text-brand-sand">Location:</strong> Blouberg, Cape Town, Western Cape</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Get Free Consultation
            </CTAButton>
            <CTAButton href="https://wa.me/27823217722" variant="secondary" size="lg">
              WhatsApp Beverly
            </CTAButton>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10">
          <h3 className="font-serif text-2xl mb-6">Related Services</h3>
          <div className="flex flex-wrap gap-4">
            <a href="/services/new-liquor-licence-application" className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors">
              New Liquor Licence Application
            </a>
            <a href="/services/transfer-liquor-licence" className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors">
              Transfer of Liquor Licence
            </a>
            <a href="/services" className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-brand-sand hover:text-brand-sand transition-colors">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


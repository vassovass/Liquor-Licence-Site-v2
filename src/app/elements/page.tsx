import { Metadata } from "next";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/card";
import { Accordion } from "@/components/accordion";
import { Timeline } from "@/components/timeline";
import { Tabs } from "@/components/tabs";
import { Callout } from "@/components/callout";
import { Breadcrumb } from "@/components/breadcrumb";
import { Checklist } from "@/components/checklist";
import { Grid } from "@/components/grid";
import { ContentBox } from "@/components/content-box";
import { Review } from "@/components/review";
import { FeatureHighlight } from "@/components/feature-highlight";
import { Counter } from "@/components/counter";
import { Separator } from "@/components/separator";
import { StatsBar } from "@/components/stats-bar";
import { FileText, ShieldCheck, Clock, Calendar, Star, Globe, Zap, Award, Code, Layers, Users, Settings, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Design Elements | BJ Liquor Licence Consultants",
  description: "A comprehensive library of reusable design elements and layout components.",
};

export default function ElementsPage() {
  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
        <SectionShell
            eyebrow="Design System"
            title="Elements & Components"
            description="A complete set of building blocks for creating rich, engaging content layouts."
        >
            <div className="space-y-32 mt-12">
                
                {/* Feature Highlight (Green Callout Style) */}
                <div>
                    <h2 className="text-3xl font-serif mb-8">Feature Highlight</h2>
                    <p className="text-brand-cream/60 mb-8">Large callout for promoting key services or products.</p>
                    <FeatureHighlight 
                        title="Build Successful Websites With Avada"
                        description="Whether you are a beginner, marketer, or professional, Avada has the tools & resources you can rely on to succeed."
                        ctaText="Get Started"
                        ctaHref="#"
                        imageSrc="/images/hero-beverly.jpg" // Placeholder using existing image
                    />
                </div>

                {/* Standard Lists (Styled) */}
                <div className="border-t border-white/10 pt-12">
                    <h2 className="text-3xl font-serif mb-8">Standard Lists</h2>
                    <p className="text-brand-cream/60 mb-8">Enhanced styling for standard ordered and unordered lists.</p>
                    <div className="grid gap-12 md:grid-cols-2">
                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-6">Unordered List (Card Style)</h4>
                            <div className="bg-brand-graphite/30 rounded-2xl p-6 border border-white/5">
                                <ul className="space-y-3 list-none pl-0 m-0">
                                    <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                                        <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                                        <span className="leading-relaxed">First item in the list with custom bullet</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                                        <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                                        <span className="leading-relaxed">Second item showing consistent spacing</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                                        <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                                        <span className="leading-relaxed">Third item for demonstration</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-6">Ordered List (Grid Style)</h4>
                            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 
                                [&>li]:bg-brand-graphite/20 [&>li]:border [&>li]:border-white/5 [&>li]:rounded-3xl [&>li]:p-6 [&>li]:h-full
                                [&>li_strong]:block [&>li_strong]:text-lg [&>li_strong]:font-serif [&>li_strong]:text-brand-cream [&>li_strong]:mb-2
                                [&>li]:text-sm [&>li]:text-brand-cream/70">
                                <li>
                                    <strong>Step 1: Planning</strong>
                                    Define your goals and requirements clearly before starting.
                                </li>
                                <li>
                                    <strong>Step 2: Execution</strong>
                                    Implement the strategy with precision and attention to detail.
                                </li>
                                <li>
                                    <strong>Step 3: Review</strong>
                                    Analyze performance and optimize for better results.
                                </li>
                                <li>
                                    <strong>Step 4: Launch</strong>
                                    Go live and monitor the initial feedback.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* Grid Layouts & Content Boxes */}
                <div className="border-t border-white/10 pt-12">
                    <h2 className="text-3xl font-serif mb-8">Grid Layouts & Content Boxes</h2>
                    <p className="text-brand-cream/60 mb-8">Flexible column layouts supporting 2 to 6 columns.</p>
                    
                    <div className="space-y-16">
                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-6">2 Columns</h4>
                            <Grid columns={2}>
                                <ContentBox title="Web Development" icon={<Globe className="h-8 w-8" />} href="#">
                                    Magna fermentum faucibus nibh ullamcorper consectetur est. Pellentesque egestas, neque sit amet convallis pulvinar.
                                </ContentBox>
                                <ContentBox title="Game Development" icon={<Zap className="h-8 w-8" />} href="#">
                                    Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla. Sem nam interdum sit accumsan tellus.
                                </ContentBox>
                            </Grid>
                        </div>

                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-6">3 Columns</h4>
                            <Grid columns={3}>
                                <ContentBox title="Strategy" icon={<Layers className="h-8 w-8" />}>
                                    Developing a clear roadmap for your project's success.
                                </ContentBox>
                                <ContentBox title="Design" icon={<Award className="h-8 w-8" />}>
                                    Creating visually stunning and user-friendly interfaces.
                                </ContentBox>
                                <ContentBox title="Development" icon={<Code className="h-8 w-8" />}>
                                    Building robust and scalable solutions with clean code.
                                </ContentBox>
                            </Grid>
                        </div>

                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-6">4 Columns</h4>
                            <Grid columns={4}>
                                <ContentBox title="Planning" icon={<Calendar className="h-6 w-6" />}>Define goals.</ContentBox>
                                <ContentBox title="Execution" icon={<Settings className="h-6 w-6" />}>Build it out.</ContentBox>
                                <ContentBox title="Testing" icon={<CheckCircle2 className="h-6 w-6" />}>Ensure quality.</ContentBox>
                                <ContentBox title="Launch" icon={<Zap className="h-6 w-6" />}>Go live.</ContentBox>
                            </Grid>
                        </div>
                         
                         <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-6">6 Columns (Logo/Icon Grid)</h4>
                            <Grid columns={6} gap="sm" className="text-center">
                                <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"><Globe className="h-8 w-8 mx-auto opacity-50" /></div>
                                <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"><Zap className="h-8 w-8 mx-auto opacity-50" /></div>
                                <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"><Award className="h-8 w-8 mx-auto opacity-50" /></div>
                                <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"><Code className="h-8 w-8 mx-auto opacity-50" /></div>
                                <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"><Layers className="h-8 w-8 mx-auto opacity-50" /></div>
                                <div className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"><Users className="h-8 w-8 mx-auto opacity-50" /></div>
                            </Grid>
                        </div>
                    </div>
                </div>

                {/* Reviews & Testimonials */}
                <div className="border-t border-white/10 pt-12">
                    <h2 className="text-3xl font-serif mb-8">Reviews</h2>
                    <p className="text-brand-cream/60 mb-8">Social proof modules.</p>
                    <Grid columns={2}>
                        <Review 
                            author="Sarah Jenkins" 
                            role="Restaurant Owner" 
                            content="Beverly made the impossible possible. We got our licence in record time despite the zoning complications." 
                        />
                        <Review 
                            author="Michael Ross" 
                            role="Event Organizer" 
                            content="Professional, fast, and incredibly knowledgeable. I wouldn't trust anyone else with our festival permits." 
                        />
                    </Grid>
                </div>

                {/* Counters & Stats */}
                <div className="border-t border-white/10 pt-12">
                    <h2 className="text-3xl font-serif mb-8">Counters & Stats</h2>
                    <p className="text-brand-cream/60 mb-8">Displaying key metrics.</p>
                    
                    <div className="space-y-12">
                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-6">Stats Bar (Home Page Component)</h4>
                            <StatsBar 
                                stats={[
                                    { value: "95%", label: "Approval Rate", helper: "Across all provinces" },
                                    { value: "20+ yrs", label: "Experience" },
                                    { value: "10", label: "Licence Types" },
                                ]} 
                            />
                        </div>

                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-6">Simple Counters</h4>
                            <div className="bg-brand-graphite/30 rounded-3xl p-8">
                                <Grid columns={4}>
                                    <Counter value="20+" label="Years Experience" />
                                    <Counter value="95%" label="Approval Rate" />
                                    <Counter value="1000+" label="Licences Issued" />
                                    <Counter value="24/7" label="Support" />
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Existing Elements (Cards, Breadcrumbs, etc.) */}
                <div className="border-t border-white/10 pt-12">
                    <h2 className="text-3xl font-serif mb-8">Standard Components</h2>
                    <div className="grid gap-12">
                        
                        {/* Breadcrumbs */}
                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-4">Breadcrumbs</h4>
                            <Breadcrumb 
                                items={[
                                    { label: "Home", href: "/" },
                                    { label: "Services", href: "/services" },
                                    { label: "Current Page" }
                                ]} 
                            />
                        </div>

                        {/* Checklists */}
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-4">Success Checklist</h4>
                                <Checklist items={["Requirement Met", "Document Verified", "Fee Paid"]} />
                            </div>
                            <div>
                                <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-4">Error Checklist</h4>
                                <Checklist variant="error" items={["Missing ID", "Invalid Zone", "Expired Permit"]} />
                            </div>
                        </div>

                        {/* Tabs */}
                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-4">Tabs</h4>
                            <Tabs 
                                items={[
                                    { label: "Description", content: <div className="p-6 bg-brand-graphite/20 rounded-xl">Detailed description of the service...</div> },
                                    { label: "Process", content: <div className="p-6 bg-brand-graphite/20 rounded-xl">Step 1, Step 2, Step 3...</div> },
                                ]}
                            />
                        </div>

                        {/* Timeline */}
                        <div>
                            <h4 className="text-sm uppercase tracking-widest text-brand-sand mb-4">Timeline</h4>
                            <Timeline 
                                steps={[
                                    { title: "Step 1", description: "Initial assessment" },
                                    { title: "Step 2", description: "Document compilation" },
                                    { title: "Step 3", description: "Submission" },
                                ]}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </SectionShell>
    </div>
  );
}

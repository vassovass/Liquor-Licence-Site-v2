import { Metadata } from "next";
import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAButton } from "@/components/cta-button";
import { FeatureHighlight } from "@/components/feature-highlight";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { ContentBox } from "@/components/content-box";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Areas Served | BJ Liquor Licence Consultants | Cape Town & Surrounds",
  description:
    "Liquor licence services in Cape Town and surrounding areas. Serving CBD, Northern Suburbs, Southern Suburbs, Winelands, and coastal areas. Expert consultation.",
};

const capeTownAreas = [
  {
    name: "Cape Town CBD & Surrounds",
    suburbs: ["City Bowl", "V&A Waterfront", "Gardens", "Tamboerskloof", "Oranjezicht", "De Waterkant"],
    description: "City center, waterfront, and inner city areas",
  },
  {
    name: "Atlantic Seaboard",
    suburbs: ["Sea Point", "Green Point", "Mouille Point", "Bantry Bay", "Clifton", "Camps Bay"],
    description: "Coastal areas along the Atlantic Ocean",
  },
  {
    name: "Northern Suburbs",
    suburbs: ["Blouberg", "Table View", "Milnerton", "Durbanville", "Bellville", "Tyger Valley", "Parow", "Goodwood", "Brackenfell", "Kraaifontein"],
    description: "Northern suburbs and business districts",
  },
  {
    name: "Southern Suburbs",
    suburbs: ["Claremont", "Newlands", "Constantia", "Rondebosch", "Observatory", "Mowbray", "Wynberg", "Plumstead", "Diep River", "Tokai"],
    description: "Southern suburbs and residential areas",
  },
  {
    name: "Winelands",
    suburbs: ["Stellenbosch", "Paarl", "Franschhoek", "Wellington", "Somerset West", "Strand", "Gordon's Bay"],
    description: "Wine regions and surrounding towns",
  },
  {
    name: "Coastal Areas",
    suburbs: ["Hout Bay", "Noordhoek", "Kommetjie", "Fish Hoek", "Simon's Town", "Muizenberg"],
    description: "Southern coastal areas and False Bay",
  },
];

const areaCards = [
  {
    title: "Cape Town CBD & Surrounds",
    image: assetPath("/images/areas-western-cape.jpg"),
    locations: ["City Bowl · V&A Waterfront", "Gardens · Tamboerskloof", "Oranjezicht · De Waterkant"],
  },
  {
    title: "Atlantic Seaboard",
    image: assetPath("/images/areas-gauteng.jpg"),
    locations: [
      "Sea Point · Green Point · Mouille Point",
      "Bantry Bay · Clifton · Camps Bay",
    ],
  },
  {
    title: "Northern Suburbs",
    image: assetPath("/images/areas-kzn.jpg"),
    locations: [
      "Blouberg · Table View · Milnerton",
      "Durbanville · Bellville · Tyger Valley",
      "Parow · Goodwood · Brackenfell",
    ],
  },
  {
    title: "Southern Suburbs",
    image: assetPath("/images/areas-western-cape.jpg"),
    locations: [
      "Claremont · Newlands · Constantia",
      "Rondebosch · Observatory · Mowbray",
      "Wynberg · Plumstead · Diep River",
    ],
  },
  {
    title: "Winelands",
    image: assetPath("/images/areas-gauteng.jpg"),
    locations: [
      "Stellenbosch · Paarl · Franschhoek",
      "Somerset West · Strand · Gordon's Bay",
    ],
  },
  {
    title: "Coastal Areas",
    image: assetPath("/images/areas-kzn.jpg"),
    locations: [
      "Hout Bay · Noordhoek · Kommetjie",
      "Fish Hoek · Simon's Town · Muizenberg",
    ],
  },
];

export default function AreasServedPage() {
  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Areas Served" }]} />
        </div>

        <FeatureHighlight
          title="Liquor Licence Services in Cape Town and Surrounds"
          description="Based in Blouberg, Cape Town, Beverly Jeursen provides expert liquor licence consultation services throughout Cape Town and surrounding areas. With 20+ years of experience in the Western Cape, we understand the unique requirements and nuances of liquor licencing in this region."
          ctaText="Get Free Consultation"
          ctaHref="/contact"
          imageSrc="/images/hero-beverly.jpg"
          className="mb-24"
        />

        <div className="mb-24">
          <SectionShell
            eyebrow="Cape Town Areas"
            title="Serving Cape Town and Surrounding Areas"
            description="From the City Bowl to the Winelands, we handle liquor licence applications across Cape Town and surrounds."
          >
            <Grid columns={3} className="mt-12">
              {areaCards.map((card) => (
                <div key={card.title} className="space-y-4 rounded-3xl border border-white/10 bg-brand-graphite/30 p-4">
                  <div className="overflow-hidden rounded-3xl">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={420}
                      height={320}
                      className="h-48 w-full object-cover"
                    />
                  </div>
                  <p className="text-sm uppercase tracking-[0.3em] text-brand-sand">{card.title}</p>
                  <ul className="space-y-2 text-sm text-brand-cream/75">
                    {card.locations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </Grid>
          </SectionShell>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Detailed Coverage"
            title="Comprehensive Coverage of Cape Town Areas"
            description="Expert liquor licence services across all major areas of Cape Town and surrounds with deep understanding of local requirements."
          >
            <Grid columns={3} className="mt-12">
              {capeTownAreas.map((area) => (
                <ContentBox key={area.name} title={area.name} icon={<MapPin className="h-8 w-8" />}>
                  <p className="text-sm text-brand-cream/70 mb-4">{area.description}</p>
                  <ul className="space-y-1 text-sm text-brand-cream/60">
                    {area.suburbs.map((suburb) => (
                      <li key={suburb}>• {suburb}</li>
                    ))}
                  </ul>
                </ContentBox>
              ))}
            </Grid>
          </SectionShell>
        </div>

        <div className="mb-24">
          <div className="bg-brand-graphite/30 rounded-3xl p-8 border border-white/5">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="h-8 w-8 text-brand-sand" />
              <h2 className="font-serif text-2xl">Why Local Expertise Matters</h2>
            </div>
            <p className="text-brand-cream/70 mb-6">
              The Western Cape has specific liquor legislation, application processes, and requirements. Beverly&apos;s 20+ years
              of experience in Cape Town means:
            </p>
            <ul className="space-y-3 list-none pl-0 m-0">
              <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                <span className="leading-relaxed">Understanding of provincial-specific forms and procedures</span>
              </li>
              <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                <span className="leading-relaxed">Knowledge of local authority preferences and requirements</span>
              </li>
              <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                <span className="leading-relaxed">Established relationships with provincial Liquor Licencing Authorities</span>
              </li>
              <li className="flex items-start gap-3 text-brand-cream/80 text-base">
                <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-sand" />
                <span className="leading-relaxed">Awareness of provincial timelines and processing variations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-24">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href="/contact"
              variant="primary"
              size="lg"
              trackingAction="click_cta"
              trackingCategory="areas_served"
              trackingLabel="get_free_consultation"
            >
              Get Free Consultation
            </CTAButton>
            <CTAButton
              href="tel:+27823217722"
              variant="secondary"
              size="lg"
              trackingAction="click_phone_cta"
              trackingCategory="areas_served"
              trackingLabel="call_phone"
            >
              Call +27 82 321 7722
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}


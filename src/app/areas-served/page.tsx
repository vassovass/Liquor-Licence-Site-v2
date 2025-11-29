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
  title: "Areas Served | BJ Liquor Licence Consultants | Nationwide Service",
  description:
    "Liquor licence services across South Africa. Serving Cape Town, Johannesburg, Durban, and all provinces. Expert consultation nationwide.",
};

const provinces = [
  {
    name: "Western Cape",
    cities: ["Cape Town", "Stellenbosch", "Paarl", "Franschhoek", "Somerset West", "Hermanus", "George"],
    description: "Cape Town metro, wine lands, tourist areas, township licensing",
  },
  {
    name: "Gauteng",
    cities: ["Johannesburg", "Pretoria", "Sandton", "Rosebank", "Centurion", "Midrand", "Fourways"],
    description: "Johannesburg, Pretoria, Sandton, entertainment districts",
  },
  {
    name: "KwaZulu-Natal",
    cities: ["Durban", "Umhlanga", "Pietermaritzburg", "Ballito", "Richards Bay"],
    description: "Durban, coastal areas, tourism zones",
  },
  {
    name: "Eastern Cape",
    cities: ["Port Elizabeth", "East London", "Grahamstown"],
    description: "Port Elizabeth, East London, rural areas",
  },
  {
    name: "Free State",
    cities: ["Bloemfontein", "Welkom"],
    description: "Comprehensive provincial knowledge",
  },
  {
    name: "Limpopo",
    cities: ["Polokwane", "Tzaneen"],
    description: "Comprehensive provincial knowledge",
  },
  {
    name: "Mpumalanga",
    cities: ["Nelspruit", "White River"],
    description: "Comprehensive provincial knowledge",
  },
  {
    name: "North West",
    cities: ["Rustenburg", "Potchefstroom"],
    description: "Comprehensive provincial knowledge",
  },
  {
    name: "Northern Cape",
    cities: ["Kimberley", "Upington"],
    description: "Comprehensive provincial knowledge",
  },
];

const areaCards = [
  {
    title: "Cape Town CBD & Surrounds",
    image: assetPath("/images/areas-western-cape.jpg"),
    locations: ["City Bowl · V&A Waterfront", "Atlantic Seaboard · Sea Point", "Green Point · De Waterkant"],
  },
  {
    title: "Northern Suburbs",
    image: assetPath("/images/areas-gauteng.jpg"),
    locations: [
      "Blouberg · Table View · Milnerton",
      "Durbanville · Bellville · Tyger Valley",
      "Parow · Goodwood · Brackenfell",
    ],
  },
  {
    title: "Southern Suburbs & Winelands",
    image: assetPath("/images/areas-kzn.jpg"),
    locations: [
      "Claremont · Newlands · Constantia",
      "Stellenbosch · Paarl · Franschhoek",
      "Somerset West · Strand · Gordon's Bay",
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
          title="Liquor Licence Services Across South Africa"
          description="While based in Blouberg, Cape Town, Beverly Jeursen provides expert liquor licence consultation services throughout South Africa. With 20+ years of experience across all 9 provinces, we understand the unique requirements and nuances of each jurisdiction."
          ctaText="Get Free Consultation"
          ctaHref="/contact"
          imageSrc="/images/hero-beverly.jpg"
          className="mb-24"
        />

        <div className="mb-24">
          <SectionShell
            eyebrow="Greater Cape Town"
            title="Serving Greater Cape Town and the Western Cape"
            description="From the City Bowl to the Winelands, we handle liquor licence applications across the region."
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
            eyebrow="Nationwide"
            title="All 9 Provinces Covered"
            description="Expert liquor licence services across South Africa with deep understanding of provincial variations."
          >
            <Grid columns={3} className="mt-12">
              {provinces.map((province) => (
                <ContentBox key={province.name} title={province.name} icon={<MapPin className="h-8 w-8" />}>
                  <p className="text-sm text-brand-cream/70 mb-4">{province.description}</p>
                  <ul className="space-y-1 text-sm text-brand-cream/60">
                    {province.cities.map((city) => (
                      <li key={city}>• {city}</li>
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
              <h2 className="font-serif text-2xl">Why Provincial Expertise Matters</h2>
            </div>
            <p className="text-brand-cream/70 mb-6">
              Each province has unique liquor legislation, application processes, and requirements. Beverly's 20+ years
              of experience across all provinces means:
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
            <CTAButton href="/contact" variant="primary" size="lg">
              Get Free Consultation
            </CTAButton>
            <CTAButton href="tel:+27823217722" variant="secondary" size="lg">
              Call +27 82 321 7722
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}


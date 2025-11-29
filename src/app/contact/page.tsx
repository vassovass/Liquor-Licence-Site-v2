import { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAButton } from "@/components/cta-button";
import { ContactStrip } from "@/components/contact-strip";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { Card } from "@/components/card";
import { Callout } from "@/components/callout";
import { FeatureHighlight } from "@/components/feature-highlight";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MessageCircle, MapPin, Clock, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | BJ Liquor Licence Consultants",
  description: "Get in touch with Beverly Jeursen for expert liquor licence advice. Free consultation for new applications, transfers, and more.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="mb-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
        </div>

        <FeatureHighlight
          title="Get Your Liquor Licence Application Started Today"
          description="Don't risk delays or rejection. Contact Beverly Jeursen for expert consultation and guaranteed results. Every engagement begins with a complimentary consultation where we assess your specific situation, explain the required process, provide realistic timelines, and offer transparent pricing."
          ctaText="Request Consultation"
          ctaHref="#contact-form"
          imageSrc="/images/hero-beverly.jpg"
          className="mb-24"
        />

        <div className="mb-24">
          <SectionShell
            eyebrow="Contact"
            title="Get in Touch"
            description="Choose the method that works best for you. We're here to help with all your liquor licence needs."
          >
            <Grid columns={2} className="mt-12">
              <Card
                title="Phone"
                icon={<Phone className="h-8 w-8 text-brand-sand" />}
                className="text-center"
              >
                <a
                  href="tel:+27823217722"
                  className="text-2xl font-serif text-brand-sand hover:text-brand-cream transition-colors block mb-4"
                >
                  +27 82 321 7722
                </a>
                <p className="text-sm text-brand-cream/70">Call during office hours for immediate assistance</p>
                <div className="mt-6">
                  <CTAButton href="tel:+27823217722" variant="primary" className="w-full justify-center">
                    Call Now
                  </CTAButton>
                </div>
              </Card>

              <Card
                title="WhatsApp"
                icon={<MessageCircle className="h-8 w-8 text-brand-sand" />}
                className="text-center"
              >
                <a
                  href="https://wa.me/27823217722"
                  className="text-2xl font-serif text-brand-sand hover:text-brand-cream transition-colors block mb-4"
                >
                  +27 82 321 7722
                </a>
                <p className="text-sm text-brand-cream/70">Send a message anytime - we'll respond promptly</p>
                <div className="mt-6">
                  <CTAButton href="https://wa.me/27823217722" variant="secondary" className="w-full justify-center">
                    WhatsApp Us
                  </CTAButton>
                </div>
              </Card>
            </Grid>
          </SectionShell>
        </div>

        <div className="mb-24">
          <Grid columns={2} gap="lg">
            <div>
              <SectionShell eyebrow="Contact Details" title="Office Information" description="">
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-brand-sand shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg mb-1">Location</h3>
                      <p className="text-brand-cream/70">Blouberg, Cape Town, Western Cape</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-brand-sand shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg mb-1">Email</h3>
                      <a
                        href="mailto:bajeursen.liquorlicences@gmail.com"
                        className="text-brand-cream hover:text-brand-sand transition-colors"
                      >
                        bajeursen.liquorlicences@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-brand-sand shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg mb-1">Office Hours</h3>
                      <p className="text-brand-cream/70">Monday - Thursday: 09:00 - 17:00</p>
                      <p className="text-brand-cream/70">Friday: 09:00 - 15:00</p>
                    </div>
                  </div>
                </div>

                <Callout variant="info" className="mt-8">
                  <strong>Free Initial Consultation:</strong> Every engagement begins with a complimentary consultation
                  where Beverly assesses your specific situation, explains the required process, provides realistic
                  timelines, and offers transparent pricing.
                </Callout>
              </SectionShell>
            </div>

            <div id="contact-form">
              <ContactForm />
            </div>
          </Grid>
        </div>

        <div className="mb-24">
          <SectionShell
            eyebrow="Why Contact Us"
            title="Expert Guidance from Day One"
            description="Starting your liquor licence application with professional guidance ensures success."
          >
            <Grid columns={3} className="mt-12">
              <Card title="Free Consultation">
                Every engagement begins with a complimentary consultation where we assess your situation and explain the
                process.
              </Card>
              <Card title="Expert Advice">
                Get guidance from South Africa's leading liquor licence consultant with 20+ years of experience.
              </Card>
              <Card title="Fast Response">
                We respond promptly to all enquiries and are available during office hours for immediate assistance.
              </Card>
            </Grid>
          </SectionShell>
        </div>

        <div className="mb-24">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="tel:+27823217722" variant="primary" size="lg">
              Call +27 82 321 7722
            </CTAButton>
            <CTAButton href="https://wa.me/27823217722" variant="secondary" size="lg">
              WhatsApp Beverly
            </CTAButton>
          </div>
        </div>

        <div className="mt-20">
          <ContactStrip />
        </div>
      </div>
    </div>
  );
}

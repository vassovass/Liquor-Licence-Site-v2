import { Metadata } from "next";
import { Breadcrumb } from "@/components/breadcrumb";
import { CTAButton } from "@/components/cta-button";
import { ContactStrip } from "@/components/contact-strip";
import { SectionShell } from "@/components/section-shell";
import { Grid } from "@/components/grid";
import { Card } from "@/components/card";
import { Callout } from "@/components/callout";
import { FeatureHighlight } from "@/components/feature-highlight";
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
              <Card title="Request Free Consultation" className="h-full">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-brand-sand block">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none transition-colors"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-brand-sand block">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none transition-colors"
                        placeholder="082 123 4567"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-sand block">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-brand-sand block">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream focus:border-brand-sand focus:outline-none transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="new-licence">New Liquor Licence Application</option>
                      <option value="transfer">Transfer of Liquor Licence</option>
                      <option value="temporary">Temporary Licence</option>
                      <option value="event">Event Licence</option>
                      <option value="alter">Alter Licensed Premises</option>
                      <option value="extension">Extended Trading Hours</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-brand-sand block">
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your business and what you need..."
                    ></textarea>
                  </div>
                  <CTAButton href="#" variant="primary" className="w-full justify-center" type="submit">
                    Send Request
                  </CTAButton>
                  <p className="text-xs text-center text-brand-cream/50">
                    We respect your privacy. Your details are kept confidential and will only be used to contact you
                    about your enquiry.
                  </p>
                </form>
              </Card>
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

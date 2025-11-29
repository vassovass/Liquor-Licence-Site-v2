import { Metadata } from "next";
import { ContactStrip } from "@/components/contact-strip";
import { SectionShell } from "@/components/section-shell";
import { CTAButton } from "@/components/cta-button";

export const metadata: Metadata = {
  title: "Contact Us | BJ Liquor Licence Consultants",
  description: "Get in touch with Beverly Jeursen for expert liquor licence advice. Free consultation for new applications, transfers, and more.",
};

export default function ContactPage() {
  return (
    <div className="bg-brand-charcoal text-brand-cream min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionShell
              eyebrow="Contact Us"
              title="Get your liquor licence application started today"
              description="Don't risk delays or rejection. Contact Beverly Jeursen for expert consultation and guaranteed results."
            >
              <div className="space-y-8 mt-8">
                 <div className="space-y-4">
                    <h3 className="font-serif text-2xl text-brand-cream">Contact Details</h3>
                    <p className="text-brand-cream/75">
                        <strong>Phone:</strong> +27 82 321 7722<br />
                        <strong>Email:</strong> bajeursen.liquorlicences@gmail.com<br />
                        <strong>Location:</strong> Blouberg, Cape Town, Western Cape
                    </p>
                    <p className="text-brand-cream/75">
                        <strong>Office Hours:</strong><br />
                        Monday - Thursday: 09:00 - 17:00<br />
                        Friday: 09:00 - 15:00
                    </p>
                 </div>

                 <div className="flex flex-wrap gap-4">
                    <CTAButton href="tel:+27823217722" variant="primary">
                        Call Now
                    </CTAButton>
                    <CTAButton href="https://wa.me/27823217722" variant="secondary">
                        WhatsApp Us
                    </CTAButton>
                 </div>
              </div>
            </SectionShell>
          </div>

          <div className="rounded-3xl border border-white/10 bg-brand-graphite/30 p-8">
            <h3 className="font-serif text-2xl mb-6">Request Free Consultation</h3>
            <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-brand-sand">Name</label>
                        <input type="text" id="name" className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-brand-sand">Phone</label>
                        <input type="tel" id="phone" className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none" placeholder="082 123 4567" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-brand-sand">Email</label>
                    <input type="email" id="email" className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-brand-sand">How can we help?</label>
                    <textarea id="message" rows={4} className="w-full rounded-lg border border-white/10 bg-brand-charcoal p-3 text-brand-cream placeholder-white/30 focus:border-brand-sand focus:outline-none" placeholder="Tell us about your business..."></textarea>
                </div>
                <CTAButton href="#" variant="primary" className="w-full justify-center">
                    Send Request
                </CTAButton>
                <p className="text-xs text-center text-brand-cream/50 mt-4">
                    We respect your privacy. Your details are kept distinct.
                </p>
            </form>
          </div>
        </div>

        <div className="mt-20">
            <ContactStrip />
        </div>
      </div>
    </div>
  );
}


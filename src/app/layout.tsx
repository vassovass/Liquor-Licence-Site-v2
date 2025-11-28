import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BJ Liquor Licence Consultants | Cape Town & Nationwide",
  description:
    "Liquor licence consultant Beverly Jeursen delivers expert guidance for new applications, transfers, and events across South Africa with a 95% approval rate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-brand-charcoal text-brand-cream`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 bg-brand-charcoal">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

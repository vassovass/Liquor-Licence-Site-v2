export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Areas Served", href: "/areas-served" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About Beverly", href: "/about" },
    { label: "Areas Served", href: "/areas-served" },
    { label: "FAQs", href: "/faq" },
  ],
  services: [
    { label: "New Applications", href: "/services/new-liquor-licence-application" },
    { label: "Transfers", href: "/services/transfer-liquor-licence" },
    { label: "Temporary Licences", href: "/services/temporary-liquor-licence" },
    { label: "Event Licences", href: "/services/event-liquor-licence" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ],
};

export const contactPoints: { label: string; value: string; href: string; helper?: string }[] = [
  {
    label: "Call",
    value: "+27 82 321 7722",
    href: "tel:+27823217722",
    helper: "Mon–Thu 09:00–17:00, Fri 09:00–15:00",
  },
  {
    label: "Email",
    value: "bajeursen.liquorlicences@gmail.com",
    href: "mailto:bajeursen.liquorlicences@gmail.com",
  },
  {
    label: "WhatsApp",
    value: "+27 82 321 7722",
    href: "https://wa.me/27823217722",
  },
];


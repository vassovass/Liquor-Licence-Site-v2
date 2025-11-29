export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "New Liquor Licence", href: "/services/new-liquor-licence-application" },
      { label: "Transfer of Licence", href: "/services/transfer-liquor-licence" },
      { label: "Temporary Licence", href: "/services/temporary-liquor-licence" },
      { label: "Event Licence", href: "/services/event-liquor-licence" },
      { label: "Alter Licensed Premises", href: "/services/alter-licensed-premises" },
      { label: "Extended Trading Hours", href: "/services/extension-trading-hours" },
      { label: "View All Services", href: "/services" },
    ],
  },
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

export type ContactPoint = {
  label: string;
  value: string;
  href: string;
  helper?: string;
  icon?: "phone" | "email" | "whatsapp";
};

export const contactPoints: ContactPoint[] = [
  {
    label: "Call",
    value: "+27 82 321 7722",
    href: "tel:+27823217722",
    helper: "Mon–Thu 09:00–17:00, Fri 09:00–15:00",
    icon: "phone",
  },
  {
    label: "Email",
    value: "bajeursen.liquorlicences@gmail.com",
    href: "mailto:bajeursen.liquorlicences@gmail.com",
    icon: "email",
  },
  {
    label: "WhatsApp",
    value: "+27 82 321 7722",
    href: "https://wa.me/27823217722",
    icon: "whatsapp",
  },
];


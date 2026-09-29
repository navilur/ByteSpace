export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Creators",
    href: "/creators",
  },
];

export const authNavItems: NavItem[] = [
  {
    label: "Sign In",
    href: "/login",
  },
  {
    label: "Join Us",
    href: "/register",
  },
];

export interface FooterItem {
  links: NavItem[];
}

export const footerSections: FooterItem[] = [
  {
    links: [
      { label: "Featured Courses", href: "/featured-courses" },
      { label: "Featured Categories", href: "/featured-categories" },
      { label: "Business", href: "/business" },
      { label: "IT", href: "/it" },
      { label: "Design", href: "/design" },
    ],
  },
  {
    links: [
      { label: "Development", href: "/development" },
      { label: "Marketing", href: "/marketing" },
      { label: "Photography", href: "/photography" },
      { label: "Finance", href: "/finance" },
      { label: "Sport", href: "/sport" },
    ],
  },
  {
    links: [
      { label: "Become a Creator", href: "/become-creator" },
      { label: "Affiliate Program", href: "/affiliate-program" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];
export const privacyList: NavItem[] = [
  {
    label: "Privacy Policy",
    href: "/privacy",
  },
  {
    label: "Terms of Service",
    href: "/terms",
  },
  {
    label: "Cookies Settings",
    href: "/cookies",
  },
];

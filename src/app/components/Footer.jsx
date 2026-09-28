import Link from "next/link";
const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      { label: "Mobile Apps", href: "/services/mobile-apps" },
      { label: "Consulting", href: "/services/consulting" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Instagram", href: "#" },
    ],
  },
];
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      {" "}
      {/* ======================================== TOP SECTION - 4 COLUMNS ======================================== */}{" "}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {" "}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {" "}
          {/* Column 1 - Brand */}{" "}
          <div>
            {" "}
            <Link href="/" className="text-2xl font-bold text-white">
              {" "}
              MyLogo{" "}
            </Link>{" "}
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              {" "}
              We build modern digital experiences and scalable solutions for
              businesses of all sizes.{" "}
            </p>{" "}
          </div>{" "}
          {/* Columns 2-4 */}{" "}
          {footerSections.slice(0, 3).map((section) => (
            <div key={section.title}>
              {" "}
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {" "}
                {section.title}{" "}
              </h3>{" "}
              <ul className="mt-5 space-y-3">
                {" "}
                {section.links.map((link) => (
                  <li key={link.label}>
                    {" "}
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {" "}
                      {link.label}{" "}
                    </Link>{" "}
                  </li>
                ))}{" "}
              </ul>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        {/* ======================================== CONNECT SECTION ======================================== */}{" "}
        <div className="mt-12 border-t border-gray-800 pt-10">
          {" "}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {" "}
            {/* Newsletter */}{" "}
            <div>
              {" "}
              <h3 className="text-sm font-semibold text-white">
                {" "}
                Stay Updated{" "}
              </h3>{" "}
              <p className="mt-2 text-sm text-gray-400">
                {" "}
                Subscribe to our newsletter for the latest updates.{" "}
              </p>{" "}
              <form className="mt-4 flex max-w-md">
                {" "}
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-l-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
                />{" "}
                <button
                  type="submit"
                  className="rounded-r-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  {" "}
                  Subscribe{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
            {/* Social Links */}{" "}
            <div className="md:text-right">
              {" "}
              <h3 className="text-sm font-semibold text-white">
                {" "}
                Follow Us{" "}
              </h3>{" "}
              <div className="mt-4 flex gap-4 md:justify-end">
                {" "}
                <Link href="#" className="text-gray-400 hover:text-white">
                  {" "}
                  Facebook{" "}
                </Link>{" "}
                <Link href="#" className="text-gray-400 hover:text-white">
                  {" "}
                  LinkedIn{" "}
                </Link>{" "}
                <Link href="#" className="text-gray-400 hover:text-white">
                  {" "}
                  GitHub{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* ======================================== BOTTOM SECTION 1 - COPYRIGHT ======================================== */}{" "}
      <div className="border-t border-gray-800">
        {" "}
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm sm:flex-row sm:px-6 lg:px-8">
          {" "}
          <p className="text-gray-500">
            {" "}
            © {new Date().getFullYear()} MyCompany. All rights reserved.{" "}
          </p>{" "}
          <p className="text-gray-500"> Made with ❤️ for the web </p>{" "}
        </div>{" "}
      </div>{" "}
      {/* ======================================== BOTTOM SECTION 2 - LEGAL ======================================== */}{" "}
      <div className="border-t border-gray-800 bg-gray-900">
        {" "}
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-sm sm:flex-row sm:px-6 lg:px-8">
          {" "}
          <div className="flex gap-6">
            {" "}
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              {" "}
              Privacy Policy{" "}
            </Link>{" "}
            <Link href="/terms" className="text-gray-400 hover:text-white">
              {" "}
              Terms of Service{" "}
            </Link>{" "}
            <Link href="/cookies" className="text-gray-400 hover:text-white">
              {" "}
              Cookie Policy{" "}
            </Link>{" "}
          </div>{" "}
          <p className="text-gray-500"> All systems operational </p>{" "}
        </div>{" "}
      </div>{" "}
    </footer>
  );
}

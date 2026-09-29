import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { footerSections, privacyList } from "../constants/NavLinks";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-[#CED0D3]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="w-full">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image
                src="/Footer_Logo.svg"
                alt="Logo"
                width={171}
                height={37}
                priority
              />
            </Link>

            <p className="mt-4 mb-11.25 max-w-125 font-[Satoshi] text-sm font-normal text-[#242528]">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <div className="flex gap-4 md:gap-8">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border border-[#CED0D3] max-w-94 w-full"
              />

              <Button className="my-auto hover:translate-y-0">Search</Button>
            </div>

            <p className="mt-8 max-w-125 font-[Satoshi] text-xs font-normal text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {footerSections.slice(0, 3).map((section, index) => (
              <div key={index}>
                <ul className="mt-5 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-[Satoshi] text-sm font-normal text-[#242528]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#CED0D3] max-w-7xl mx-auto">
        <div className="mx-auto flex flex-col items-center justify-between gap-3 px-4 py-5 text-sm sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-[#242528] font-[Satoshi] font-normal">
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <div className="flex gap-6">
            {privacyList.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs text-[#242528] font-[Satoshi] font-normal"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

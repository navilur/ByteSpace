"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideShoppingBag } from "lucide-react";
import { mainNavItems, authNavItems } from "../constants/NavLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="absolute inset-x-0 top-9 z-50 w-full bg-transparent">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="shrink-0 transition-transform duration-300 hover:-translate-y-1"
        >
          <Image
            src="/Header_Logo.svg"
            alt="Logo"
            width={171}
            height={37}
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {mainNavItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative font-[Satoshi] text-[16px] font-normal leading-[160%] transition-all duration-300 ${
                  active
                    ? "text-white -translate-y-1"
                    : "text-[#F5F5F6] hover:-translate-y-1 hover:text-white"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-2 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-white transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex gap-6">
          {authNavItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative font-[Satoshi] text-[16px] font-normal leading-[160%] transition-all duration-300 text-[#F5F5F6] hover:-translate-y-1 hover:text-white`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-white transition-all duration-300 w-0 group-hover:w-full`}
                />
              </Link>
            );
          })}
          <Link href="/">
            <LucideShoppingBag color="#F5F5F6" size={20} />
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 md:hidden"
        >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`absolute inset-x-0 top-full border-t border-black/5 bg-white shadow-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-6">
          <div className="space-y-2">
            {mainNavItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-4 font-[Satoshi] text-lg font-medium transition-all duration-300 ${
                    active
                      ? "bg-[#242528] text-white"
                      : "text-[#242528] hover:bg-[#F5F5F6]"
                  }`}
                >
                  <span>{item.label}</span>

                  <span
                    className={`h-2 w-2 rounded-full bg-[#D4FB20] transition-all duration-300 ${
                      active ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="my-5 h-px bg-black/10" />

          <div className="space-y-2">
            {authNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-4 font-[Satoshi] text-lg font-medium text-[#242528] transition-all duration-300 hover:bg-[#F5F5F6]"
              >
                <span>{item.label}</span>

                <span className="text-[#242528]/40">→</span>
              </Link>
            ))}

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between rounded-xl px-4 py-4 font-[Satoshi] text-lg font-medium text-[#242528] transition-all duration-300 hover:bg-[#F5F5F6]"
            >
              <span>Cart</span>

              <LucideShoppingBag
                size={20}
                strokeWidth={1.8}
                className="text-[#242528]"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

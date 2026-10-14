"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { btn } from "@/components/styles";
import { nav } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3">
        <Link href="/" aria-label="Land CoPilot home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`border-b pb-1 text-[13px] tracking-wide ${
                isCurrent(pathname, item.href)
                  ? "border-gold text-deep"
                  : "border-transparent text-deep/70 hover:text-deep"
              }`}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className={`${btn.deep} hidden md:inline-flex`}>
          Get in touch
        </Link>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-line text-deep md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-px w-4 bg-deep" />
            <span className="block h-px w-4 bg-deep" />
            <span className="block h-px w-4 bg-deep" />
          </span>
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line px-6 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-1 text-base ${isCurrent(pathname, item.href) ? "text-gold" : "text-deep"}`}
                  aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

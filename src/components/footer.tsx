import Link from "next/link";
import { Logo } from "@/components/logo";
import { company, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-deep text-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Logo tone="light" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-surface/75">{company.motto}</p>
          <p className="mt-2 text-sm text-surface/60">{company.eyebrow}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-mint">Visit</p>
          <address className="mt-3 text-sm leading-6 text-surface/80 not-italic">
            {company.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
        <div>
          <p className="text-sm font-medium text-mint">Talk to us</p>
          <ul className="mt-3 space-y-2 text-sm text-surface/80">
            <li>
              <a href={company.phoneHref} className="hover:text-white">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={company.emailHref} className="hover:text-white">
                {company.email}
              </a>
            </li>
            <li>
              <a href={company.instagramHref} className="hover:text-white" target="_blank" rel="noreferrer">
                Instagram · {company.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-sm text-surface/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Land CoPilot. Angadippuram, Malappuram.</p>
          <ul className="flex flex-wrap gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

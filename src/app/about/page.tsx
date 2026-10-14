import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { company, reasons } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: company.about,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Who we are"
        text="Premium real estate consulting for buyers, sellers, and developers in Malappuram."
      />
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="space-y-4 leading-7 text-muted">
          <p>{company.about}</p>
          <p>{company.servicesIntro}</p>
          <p>
            The office is in Angadippuram, opposite the TVS showroom. From there we work with people looking for
            plots, land, joint ventures, and development advice across Malappuram.
          </p>
          <p>{company.motto}</p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
          <Image
            src="/images/project2.jpeg"
            alt="A villa in the evening with the porch lights on"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
      <section className="bg-surface py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-serif text-3xl text-deep">Office</h2>
            <address className="mt-4 text-base leading-7 text-muted not-italic">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a href={company.mapHref} className="mt-4 inline-flex text-sm font-medium text-mint hover:text-mint-dark">
              Open in maps
            </a>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-deep">Why clients stay</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason} className="rounded-2xl border border-line bg-background p-4 text-sm leading-6 text-deep/80">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Link href="/contact" className="text-sm font-medium text-mint hover:text-mint-dark">
          Talk to the office
        </Link>
      </section>
    </>
  );
}

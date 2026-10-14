import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { btn, eyebrow } from "@/components/styles";
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
      <section className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
        <div className="space-y-4 leading-7 text-muted">
          <p>{company.about}</p>
          <p>{company.servicesIntro}</p>
          <p>
            The office is in Angadippuram, opposite the TVS showroom. From there we work with people looking for
            plots, land, joint ventures, and development advice across Malappuram.
          </p>
          <p className="font-serif text-2xl leading-snug text-deep">{company.motto}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden sm:col-span-1">
            <Image
              src="/images/project2.jpeg"
              alt="A villa in the evening with the porch lights on"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/interior.jpg"
              alt="A bright living room with a sofa, chairs, and large windows"
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="border-t border-line bg-surface py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className={eyebrow}>Office</p>
            <address className="mt-4 text-base leading-7 text-deep not-italic">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a href={company.mapHref} className="mt-4 inline-flex text-sm text-deep underline decoration-gold underline-offset-4">
              Open in maps
            </a>
          </div>
          <div>
            <p className={eyebrow}>Why clients stay</p>
            <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {reasons.map((reason) => (
                <li key={reason} className="border-b border-line py-3 text-sm leading-6 text-deep/80">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-14">
        <Link href="/contact" className={btn.deep}>
          Talk to the office
        </Link>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { company, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: company.servicesIntro,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Our services" text={company.servicesIntro} />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <ol className="space-y-6">
          {services.map((service, index) => (
            <li key={service.title} className="rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm font-semibold text-gold">0{index + 1}</p>
              <h2 className="mt-2 font-serif text-3xl text-deep">{service.title}</h2>
              <p className="mt-3 leading-7 text-muted">{service.text}</p>
            </li>
          ))}
        </ol>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/images/project1.jpeg"
              alt="A white three-storey house with a timber screen"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-sm leading-6 text-muted">
            Every service includes the legal, financial, and operational side of the work, not only an introduction.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-mint px-5 py-3 text-sm font-medium text-white hover:bg-mint-dark"
          >
            Ask about a service
          </Link>
        </div>
      </section>
    </>
  );
}

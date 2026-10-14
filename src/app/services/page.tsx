import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { btn } from "@/components/styles";
import { company, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: company.servicesIntro,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Our services" text={company.servicesIntro} />
      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:py-20">
        <ol>
          {services.map((service, index) => (
            <li key={service.title} className="border-t border-line py-7 last:border-b">
              <p className="text-sm text-gold">0{index + 1}</p>
              <h2 className="mt-2 font-serif text-3xl text-deep">{service.title}</h2>
              <p className="mt-3 max-w-xl leading-7 text-muted">{service.text}</p>
            </li>
          ))}
        </ol>
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/interior.jpg"
              alt="A bright living room with a sofa, chairs, and large windows"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover"
            />
          </div>
          <p className="mt-5 text-sm leading-6 text-muted">
            Every service includes the legal, financial, and operational side of the work, not only an introduction.
          </p>
          <Link href="/contact" className={`${btn.deep} mt-5`}>
            Ask about a service
          </Link>
        </div>
      </section>
    </>
  );
}

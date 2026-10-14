import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call Land CoPilot on ${company.phone} or visit the office in Angadippuram, Malappuram.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        text="Call, email, or visit the office opposite the TVS showroom in Angadippuram."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-2xl text-deep">Phone</h2>
            <a href={company.phoneHref} className="mt-2 block text-lg text-mint hover:text-mint-dark">
              {company.phone}
            </a>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-deep">WhatsApp</h2>
            <a
              href={company.whatsappHref}
              className="mt-2 block text-lg text-mint hover:text-mint-dark"
              target="_blank"
              rel="noreferrer"
            >
              {company.phone}
            </a>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-deep">Email</h2>
            <a href={company.emailHref} className="mt-2 block text-lg text-mint hover:text-mint-dark">
              {company.email}
            </a>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-deep">Instagram</h2>
            <a
              href={company.instagramHref}
              className="mt-2 block text-lg text-mint hover:text-mint-dark"
              target="_blank"
              rel="noreferrer"
            >
              {company.instagram}
            </a>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-deep">Office</h2>
            <address className="mt-2 text-base leading-7 text-muted not-italic">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <a href={company.mapHref} className="mt-3 inline-flex text-sm font-medium text-mint hover:text-mint-dark">
              Open in maps
            </a>
          </div>
        </div>
        <Suspense fallback={<div className="h-96 rounded-2xl border border-line bg-surface" />}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}

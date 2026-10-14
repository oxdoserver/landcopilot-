import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { company, projects, reasons, services, steps } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[36rem] items-center overflow-hidden bg-deep text-surface sm:min-h-[42rem] lg:min-h-[48rem]">
        <Image
          src="/images/project2.jpeg"
          alt="A villa in the evening, with the porch lights on"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_70%] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/75 via-deep/40 to-deep/15" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
          <p className="text-xs font-semibold tracking-[0.22em] text-mint uppercase">{company.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
            {company.tagline}
          </h1>
          <p className="mt-5 max-w-md text-lg leading-8 text-surface/80">
            Consulting for buyers, sellers, and developers in Malappuram. Clear paperwork, local knowledge, and
            support from the first conversation to the close.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-mint px-5 py-3 text-sm font-medium text-white hover:bg-mint-dark">
              Get in touch
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-surface hover:bg-white/10"
            >
              View projects
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <ul className="mx-auto grid max-w-6xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {["Legal and financial support", "Local expertise", "Verified information", "Clear communication"].map(
            (item) => (
              <li key={item} className="text-sm font-medium text-deep">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
                {item}
              </li>
            ),
          )}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/project3.jpeg"
              alt="A white two-storey villa with a wooden front door"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_75%]"
            />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">Who we are</p>
          <h2 className="mt-3 font-serif text-4xl text-deep">A local partner for clear property deals</h2>
          <p className="mt-4 leading-7 text-muted">{company.about}</p>
          <p className="mt-4 leading-7 text-muted">{company.motto}</p>
          <Link href="/about" className="mt-6 inline-flex text-sm font-medium text-mint hover:text-mint-dark">
            About Land CoPilot
          </Link>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">Services</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl text-deep">What we handle</h2>
              <p className="mt-4 max-w-2xl leading-7 text-muted">{company.servicesIntro}</p>
            </div>
            <Link href="/services" className="text-sm font-medium text-mint hover:text-mint-dark">
              See all services
            </Link>
          </div>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-line sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.title} className="bg-background px-7 py-8">
                <h3 className="font-serif text-2xl text-deep">{service.title}</h3>
                <span className="mt-4 block h-px w-10 bg-gold" aria-hidden="true" />
                <p className="mt-4 text-sm leading-7 text-muted">{service.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">Projects</p>
            <h2 className="mt-3 font-serif text-4xl text-deep">Work we take on</h2>
          </div>
          <Link href="/projects" className="text-sm font-medium text-mint hover:text-mint-dark">
            Browse projects
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-deep py-20 text-surface">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">Why choose us</p>
            <h2 className="mt-3 font-serif text-4xl">Ethics, local knowledge, and a clear deal</h2>
            <ol className="mt-8 space-y-5">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="font-serif text-2xl text-gold">{index + 1}</span>
                  <div>
                    <p className="font-medium">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-surface/70">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="rounded-2xl bg-white/5 p-4 text-sm leading-6 text-surface/85">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid overflow-hidden rounded-3xl bg-deep text-surface lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-12">
            <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">Contact</p>
            <h2 className="mt-3 font-serif text-4xl">Ready to talk about a property?</h2>
            <p className="mt-4 max-w-md leading-7 text-surface/75">
              Call, write, or visit the office in Angadippuram. We will tell you what is open and handle the paperwork
              with you.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href={company.phoneHref} className="block font-medium text-surface hover:text-mint">
                {company.phone}
              </a>
              <a href={company.emailHref} className="block text-surface/80 hover:text-mint">
                {company.email}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={company.phoneHref}
                className="rounded-full bg-mint px-5 py-3 text-sm font-medium text-white hover:bg-mint-dark"
              >
                Call the office
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-surface hover:bg-white/10"
              >
                Send an enquiry
              </Link>
            </div>
          </div>
          <div className="relative min-h-64">
            <Image
              src="/images/project3.jpeg"
              alt="A white two-storey villa with a wooden front door"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[center_80%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { btn, eyebrow } from "@/components/styles";
import { company, projects, reasons, services, steps } from "@/lib/site";

export default function HomePage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <section className="bg-deep text-surface">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 lg:py-24 lg:pr-16">
            <p className={eyebrow}>{company.eyebrow}</p>
            <h1 className="mt-5 max-w-xl font-serif text-4xl leading-[1.1] text-balance sm:text-5xl lg:text-6xl">
              {company.tagline}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-surface/75">
              Consulting for buyers, sellers, and developers in Malappuram. Clear paperwork, local knowledge, and
              support from the first conversation to the close.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={btn.gold}>
                Get in touch
              </Link>
              <Link href="/projects" className={btn.line}>
                View projects
              </Link>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[680px]">
            <Image
              src="/images/project1.jpeg"
              alt="A white three-storey house with a timber screen and a carport"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <ul className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-4">
          {["Legal and financial support", "Local expertise", "Verified information", "Clear communication"].map(
            (item) => (
              <li key={item} className="border-line px-6 py-6 text-sm text-deep lg:border-l lg:first:border-l-0">
                <span className="mb-3 block h-px w-8 bg-gold" aria-hidden="true" />
                {item}
              </li>
            ),
          )}
        </ul>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/project3.jpeg"
            alt="A white two-storey villa with a wooden front door"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className={eyebrow}>Who we are</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-deep">A local partner for clear property deals</h2>
          <p className="mt-5 leading-7 text-muted">{company.about}</p>
          <p className="mt-4 leading-7 text-muted">{company.motto}</p>
          <Link href="/about" className="mt-6 inline-flex text-sm text-deep underline decoration-gold underline-offset-4">
            About Land CoPilot
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className={eyebrow}>Services</p>
          <h2 className="mt-4 max-w-xl font-serif text-4xl text-deep">What we handle</h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">{company.servicesIntro}</p>
          <ul className="mt-10 border-t border-line">
            {services.map((service, index) => (
              <li key={service.title} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[4.5rem_1fr_1.4fr] sm:items-baseline sm:gap-6">
                <span className="text-sm text-gold">0{index + 1}</span>
                <h3 className="font-serif text-2xl text-deep">{service.title}</h3>
                <p className="text-sm leading-6 text-muted">{service.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className={eyebrow}>Projects</p>
            <h2 className="mt-4 font-serif text-4xl text-deep">Work we take on</h2>
          </div>
          <Link href="/projects" className="text-sm text-deep underline decoration-gold underline-offset-4">
            Browse projects
          </Link>
        </div>
        {featured ? (
          <Link href={`/projects/${featured.slug}`} className="group mt-10 grid items-stretch lg:grid-cols-[1.4fr_0.8fr]">
            <div className="relative min-h-[320px] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex flex-col justify-center border border-line bg-surface px-6 py-8 lg:border-l-0 lg:px-10">
              <p className={eyebrow}>{featured.category}</p>
              <h3 className="mt-3 font-serif text-3xl text-deep">{featured.title}</h3>
              <p className="mt-2 text-sm text-muted">{featured.area}</p>
              <p className="mt-4 leading-7 text-deep/80">{featured.summary}</p>
              <p className="mt-6 text-sm text-deep">View details</p>
            </div>
          </Link>
        ) : null}
        <ul className="mt-8 grid gap-8 md:grid-cols-2">
          {rest.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section className="relative min-h-[340px]">
        <Image
          src="/images/project2.jpeg"
          alt="A villa in the evening with the porch lights on"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep/55" />
        <div className="relative mx-auto flex min-h-[340px] max-w-6xl items-end px-6 py-12">
          <p className="max-w-lg font-serif text-4xl leading-tight text-surface sm:text-5xl">{company.motto}</p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className={eyebrow}>How it works</p>
            <h2 className="mt-4 font-serif text-4xl text-deep">A clear path from the first call to the close</h2>
            <ol className="mt-8 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-line pt-6">
                  <span className="font-serif text-2xl text-gold">0{index + 1}</span>
                  <div>
                    <p className="font-medium text-deep">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className={eyebrow}>Why choose us</p>
            <ul className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="border-b border-line pb-4 text-sm leading-6 text-deep/85">
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="border border-line bg-surface px-6 py-12 sm:px-12">
          <p className={eyebrow}>Contact</p>
          <h2 className="mt-4 font-serif text-4xl text-deep">Ready to talk about a property?</h2>
          <p className="mt-4 max-w-xl leading-7 text-muted">
            Call {company.phone}, write to {company.email}, or visit the office in Angadippuram.
          </p>
          <Link href="/contact" className={`${btn.deep} mt-8`}>
            Contact the office
          </Link>
        </div>
      </section>
    </>
  );
}

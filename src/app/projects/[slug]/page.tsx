import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-2">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover ${project.imagePosition ?? "object-center"}`}
        />
      </div>
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-mint uppercase">{project.category}</p>
        <h1 className="mt-3 font-serif text-4xl text-deep sm:text-5xl">{project.title}</h1>
        <p className="mt-2 text-sm text-muted">{project.area}</p>
        <div className="mt-6 space-y-4 leading-7 text-muted">
          {project.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-6 space-y-2">
          {project.points.map((point) => (
            <li key={point} className="text-sm text-deep">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/contact?interest=${project.slug}`}
            className="rounded-full bg-mint px-5 py-3 text-sm font-medium text-white hover:bg-mint-dark"
          >
            Enquire about this
          </Link>
          <Link href="/projects" className="rounded-full border border-line px-5 py-3 text-sm font-medium text-deep hover:bg-surface">
            All projects
          </Link>
        </div>
      </div>
      {project.gallery?.length ? (
        <section className="lg:col-span-2">
          <h2 className="font-serif text-3xl text-deep">Plans and views</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((item) => (
              <li key={item.src} className="relative aspect-square overflow-hidden rounded-2xl border border-line bg-white">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className={item.fit === "contain" ? "object-contain" : "object-cover"}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}

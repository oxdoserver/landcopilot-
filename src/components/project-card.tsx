import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition duration-500 group-hover:scale-105 ${project.imagePosition ?? "object-center"}`}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold tracking-[0.16em] text-mint uppercase">{project.category}</p>
        <h3 className="mt-2 font-serif text-2xl text-deep">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.area}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-deep/80">{project.summary}</p>
        <p className="mt-4 text-sm font-medium text-deep">View details</p>
      </div>
    </Link>
  );
}

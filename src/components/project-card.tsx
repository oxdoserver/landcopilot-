import Image from "next/image";
import Link from "next/link";
import { eyebrow } from "@/components/styles";
import type { Project } from "@/lib/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-deep">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`object-cover transition duration-700 group-hover:scale-[1.03] ${project.imagePosition ?? "object-center"}`}
        />
      </div>
      <div className="flex flex-1 flex-col border border-t-0 border-line bg-surface px-5 py-5">
        <p className={eyebrow}>{project.category}</p>
        <h3 className="mt-2 font-serif text-2xl text-deep">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.area}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-deep/80">{project.summary}</p>
        <p className="mt-4 text-sm text-deep">View details</p>
      </div>
    </Link>
  );
}

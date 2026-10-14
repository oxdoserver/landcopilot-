"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/site";

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const [category, setCategory] = useState("All");
  const visible =
    category === "All" ? projects : projects.filter((project) => project.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line" role="group" aria-label="Filter projects">
        {categories.map((item) => {
          const selected = item === category;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={selected}
              className={`border-b px-1 py-2 text-sm ${
                selected ? "border-gold text-deep" : "border-transparent text-muted hover:text-deep"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

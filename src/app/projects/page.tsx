import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectBrowser } from "@/components/project-browser";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Plots, land transactions, joint ventures, and development work handled by Land CoPilot in Malappuram.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects we take on"
        text="Homes and plotted layouts we can walk you through in Malappuram. Ask us what is open right now."
      />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ProjectBrowser projects={projects} />
      </section>
    </>
  );
}

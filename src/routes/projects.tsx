import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/components/site/data";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Fahid Ahmed — Projects" },
      {
        name: "description",
        content:
          "Spec sheets for Fahid Ahmed's personal projects — AI Card Grade Estimator, Maze Game, and Account Management CLI.",
      },
      { property: "og:title", content: "Fahid Ahmed — Projects" },
      {
        property: "og:description",
        content: "Blueprint-style project spec sheets — designation, dates, notes, stack.",
      },
    ],
  }),
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-10 pb-10 sm:px-8 sm:pt-16">
      <SectionHeading index="§ 03" label="spec sheets" title="Projects">
        Personal builds — each one carries a designation, a date range, notes on
        implementation, and the stack it runs on.
      </SectionHeading>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.designation} {...p} />
        ))}
      </div>
    </div>
  );
}

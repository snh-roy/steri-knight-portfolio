import { createFileRoute } from "@tanstack/react-router";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/components/site/data";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Fahid's webpage" },
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
  // Separate current project from previous projects
  const currentProject = projects.find(p => p.status === "IN BUILD");
  const previousProjects = projects.filter(p => p.status !== "IN BUILD");

  return (
    <div className="mx-auto max-w-5xl px-5 pt-10 pb-10 sm:px-8 sm:pt-16">
      {/* Current Project Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 sm:text-3xl">Right now, I am building,</h2>
        {currentProject && (
          <div className="grid gap-6 md:grid-cols-2">
            <ProjectCard {...currentProject} />
          </div>
        )}
      </div>

      {/* Previous Projects Section */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 sm:text-3xl">Previously I have built,</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {previousProjects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

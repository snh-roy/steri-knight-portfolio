import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TimelineEntry } from "@/components/site/TimelineEntry";
import { experience } from "@/components/site/data";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Fahid Ahmed — Experience" },
      {
        name: "description",
        content:
          "Build log of Fahid Ahmed's work experience — NYC DOT, Art Beyond Sight, and coursework at Hunter College.",
      },
      { property: "og:title", content: "Fahid Ahmed — Experience" },
      {
        property: "og:description",
        content: "A field-report style timeline of roles, tools, and outcomes.",
      },
    ],
  }),
});

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-10 pb-10 sm:px-8 sm:pt-16">
      <SectionHeading index="§ 02" label="build log" title="Experience">
        A running log of internships and roles — dates, tools, and what shipped. Newest at
        the top.
      </SectionHeading>

      <div>
        {experience.map((e) => (
          <TimelineEntry key={e.ref ?? e.role} {...e} />
        ))}
        <div className="border-t border-rule/80 py-8">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-10">
            <div>
              <span className="label-mono !text-primary">MAY 2027</span>
              <div className="label-mono mt-2">ENTRY 0000</div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                BA, Computer Science · Minor in Mathematics
              </h3>
              <p className="mt-1 text-sm text-ink-dim">Hunter College · GPA 3.52</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                Coursework in Computer Architecture, Software Analysis &amp; Design, Discrete
                Mathematics, Operating Systems, Data Structures &amp; Algorithms, and Algorithm
                Design &amp; Analysis. Certification: CodePath Web Development 101.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

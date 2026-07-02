import { createFileRoute } from "@tanstack/react-router";
import { TimelineEntry } from "@/components/site/TimelineEntry";
import { experience } from "@/components/site/data";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Fahid's webpage" },
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
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-8 sm:text-3xl">Education</h2>
        <div className="border-t-2 border-foreground/40 mb-8"></div>
        <div className="py-8">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-16">
            <div className="flex flex-col items-center flex-shrink-0">
              <img 
                src="/steri-knight-portfolio/Hunter.png" 
                alt="Hunter College" 
                className="w-40 h-40 object-contain mb-3"
              />
              <span className="label-mono !text-foreground text-center" style={{ fontSize: "0.65rem", whiteSpace: "nowrap" }}>MAY 2027</span>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">B.A. in Computer Science & minor in Mathematics</h3>
                <span className="text-ink-faint">/</span>
                <span className="text-sm text-ink-dim">Hunter College</span>
              </div>
              <p className="mt-1 text-sm text-ink-dim">GPA 3.52</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                Relevant coursework in Computer Architecture, Software Analysis &amp; Design, Discrete
                Mathematics, Operating Systems, Data Structures &amp; Algorithms, and Algorithm
                Design &amp; Analysis.
              </p>
            </div>
          </div>
        </div>
        
        {/* CodePath Education */}
        <div className="border-t border-rule/80 py-8">
          <div className="grid grid-cols-[minmax(0,1fr)] gap-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-16">
            <div className="flex flex-col items-center flex-shrink-0">
              <img 
                src="/steri-knight-portfolio/codepath.png" 
                alt="CodePath" 
                className="w-40 h-40 object-contain mb-3"
              />
              <span className="label-mono !text-foreground text-center" style={{ fontSize: "0.65rem", whiteSpace: "nowrap" }}>FALL 2024</span>
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">Web Development 101</h3>
                <span className="text-ink-faint">/</span>
                <span className="text-sm text-ink-dim">CodePath</span>
              </div>
              <p className="mt-1 text-sm text-ink-dim">
                <a 
                  href="https://drive.google.com/file/d/13asCDT84gMc8MNRAnOKkL8E9A-VKeQaA/view?usp=sharing" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground hover:underline"
                >
                  [CERTIFICATION]
                </a>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                Skills learned: HTML, CSS, JavaScript, Animation, Web Design Principles
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-foreground mb-8 mt-12 sm:text-3xl">Experience</h2>
        <div className="border-t-2 border-foreground/40 mb-8"></div>
        {experience.map((e, index) => (
          <TimelineEntry key={e.ref ?? e.role} {...e} isFirst={index === 0} />
        ))}
      </div>
    </div>
  );
}

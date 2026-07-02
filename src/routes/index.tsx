import { createFileRoute } from "@tanstack/react-router";
import steriKnight from "@/assets/steri-knight.jpg.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { Shield } from "@/components/site/Shield";

export const Route = createFileRoute("/")({
  component: About,
  head: () => ({
    meta: [
      { title: "Fahid Ahmed — About" },
      {
        name: "description",
        content:
          "Fahid Ahmed — CS student at Hunter College, building interactive tools in NYC under the Steri Knight banner.",
      },
      { property: "og:title", content: "Fahid Ahmed — About" },
      {
        property: "og:description",
        content: "About, now-working, and quick links to resume, GitHub, and email.",
      },
    ],
  }),
});

function IconLink({
  href,
  label,
  download,
  children,
}: {
  href: string;
  label: string;
  download?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
      className="group flex items-center gap-2 border border-rule/80 px-3 py-2 text-ink-dim transition-colors hover:border-primary/60 hover:text-primary"
    >
      <span className="h-5 w-5">{children}</span>
      <span className="label-mono !text-inherit">{label}</span>
    </a>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4M9 12h6M9 16h6M9 8h2" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.7 2.8 5.7 3.1 5.7 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.3 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 7 9-7" />
    </svg>
  );
}

function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-10 pb-10 sm:px-8 sm:pt-16">
      {/* Field header */}
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2 border-b border-rule/80 pb-3">
        <span className="label-mono">FIELD REPORT · 001</span>
        <span className="label-mono">SUBJECT / STERI KNIGHT</span>
      </div>

      {/* Hero */}
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center">
        <figure className="relative">
          <div className="bracket-frame relative border border-rule/70 p-3">
            <div className="pointer-events-none absolute inset-0 -z-10 blur-2xl opacity-40 bg-primary/25" />
            <img
              src={steriKnight.url}
              alt="Steri Knight — the project mascot"
              className="block h-auto w-full"
              loading="eager"
            />
            <figcaption className="mt-3 flex items-center justify-between border-t border-rule/60 pt-2">
              <span className="label-mono">PLATE-01 · steri_knight.jpg</span>
              <span className="label-mono !text-primary">v1</span>
            </figcaption>
          </div>
        </figure>

        <div className="min-w-0">
          <span className="label-mono">// hello world</span>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Fahid Ahmed
          </h1>
          <p className="mt-3 text-lg text-ink-dim">
            CS student at Hunter College — building small, careful tools for the streets of New York.
          </p>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-dim">
            BA in Computer Science with a Mathematics minor (GPA 3.52), coursework in
            Computer Architecture, Operating Systems, and Algorithm Design. Comfortable in
            C++, Python, and modern web stacks. Most recently an App Development Intern at
            the NYC Department of Transportation, working on the streetlight reporting
            pipeline. I like problems where computer vision, cities, and games overlap.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <IconLink href={resumeAsset.url} label="Resume" download="fahid_ahmed_resume.pdf">
              <ResumeIcon />
            </IconLink>
            <IconLink href="https://github.com/" label="GitHub">
              <GithubIcon />
            </IconLink>
            <IconLink href="mailto:ahmed.fahid2005@gmail.com" label="Email">
              <MailIcon />
            </IconLink>
          </div>
        </div>
      </section>

      {/* Now */}
      <section className="mt-20">
        <div className="mb-6 flex items-baseline gap-3 border-b border-rule/80 pb-3">
          <Shield className="h-4 w-4 text-primary" />
          <span className="label-mono">NOW · 2026-07</span>
          <span className="label-mono !text-primary">what i&apos;m working on</span>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              k: "Building",
              v: "SK-03 — an AI card-grade estimator using OpenCV for centering + edge wear, served through a small FastAPI backend.",
            },
            {
              k: "Learning",
              v: "Algorithm design and operating systems — carrying the Hunter coursework into small side experiments in C++ and Python.",
            },
            {
              k: "Sketching",
              v: "Lightweight civic tools — the DOT streetlight work made me want to keep prototyping in that space.",
            },
          ].map((row) => (
            <div key={row.k} className="border border-rule/70 bg-card/40 p-5">
              <div className="label-mono !text-primary">{row.k}</div>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">{row.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20">
        <div className="mb-6 flex items-baseline gap-3 border-b border-rule/80 pb-3">
          <span className="label-mono">02</span>
          <span className="label-mono !text-primary">toolkit</span>
        </div>
        <dl className="grid gap-8 sm:grid-cols-3">
          {[
            { k: "Languages", v: ["C++", "C", "Java", "Python", "HTML/CSS"] },
            { k: "Frameworks", v: ["Tailwind", "Bootstrap", "Flask", "FastAPI"] },
            { k: "Tools", v: ["Xcode", "Git", "VS Code", "Linux", "Vim"] },
          ].map((g) => (
            <div key={g.k}>
              <dt className="label-mono">{g.k}</dt>
              <dd className="mt-3 flex flex-wrap gap-1.5">
                {g.v.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}

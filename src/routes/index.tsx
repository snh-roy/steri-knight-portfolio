import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import steriKnight from "@/assets/steri-knight.jpg.asset.json";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { Shield } from "@/components/site/Shield";
import { Typewriter } from "@/components/site/Typewriter";

export const Route = createFileRoute("/")({
  component: About,
  head: () => ({
    meta: [
      { title: "Fahid Ahmed — About" },
      {
        name: "description",
        content:
          "Fahid Ahmed — CS student at Hunter College, building interactive tools in NYC.",
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
      className="group flex items-center gap-2 border border-rule bg-background/70 px-3 py-2 text-ink-dim backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
    >
      <span className="h-4 w-4">{children}</span>
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
  const [nameDone, setNameDone] = useState(false);

  return (
    // Fixed to the viewport below the 56px nav so the hero fits one screen.
    <section
      className="relative overflow-hidden"
      style={{ height: "calc(100vh - 3.5rem)", minHeight: "560px" }}
    >
      {/* Layer 1: painting fades in first */}
      <div className="absolute inset-0 anim-fade">
        <img
          src={steriKnight.url}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* soft light wash to keep text legible on the light theme */}
        <div className="absolute inset-0 bg-background/55" />
      </div>

      {/* Layer 2: blurred shield sitting on top of the painting */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center anim-fade-slow"
        style={{ animationDelay: "0.4s" }}
        aria-hidden
      >
        <Shield
          className="h-[70vmin] w-[70vmin] text-primary/25"
          // blur applied via wrapping style so stroke reads as a soft glow
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center anim-fade-slow"
        style={{ animationDelay: "0.4s", filter: "blur(24px)", opacity: 0.7 }}
        aria-hidden
      >
        <Shield className="h-[70vmin] w-[70vmin] text-primary/40" />
      </div>

      {/* Layer 3: content */}
      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col justify-center px-5 sm:px-8">
        <div
          className="mb-4 flex items-baseline gap-3 anim-rise"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="label-mono">// hello world</span>
          <span className="label-mono !text-primary">FIELD REPORT · 001</span>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          <Typewriter
            text="I'm Fahid Ahmed."
            startDelay={900}
            speed={70}
            onDone={() => setNameDone(true)}
          />
        </h1>

        <div
          className="mt-3 min-h-[1.6rem] text-lg text-ink-dim sm:text-xl"
          style={{
            opacity: nameDone ? 1 : 0,
            transform: nameDone ? "translateY(0)" : "translateY(6px)",
            transition: "opacity 500ms ease-out, transform 500ms ease-out",
          }}
        >
          A student at Hunter College, currently{" "}
          <span className="text-foreground">
            {nameDone ? (
              <Typewriter
                text="building an AI card-grade estimator with OpenCV + FastAPI."
                startDelay={200}
                speed={22}
              />
            ) : null}
          </span>
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2 anim-rise"
          style={{ animationDelay: "2.6s" }}
        >
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
  );
}

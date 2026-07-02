import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Typewriter } from "@/components/site/Typewriter";

export const Route = createFileRoute("/")({
  component: About,
  head: () => ({
    meta: [
      { title: "Fahid's webpage" },
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


function ResumeIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M15 3v4h4M9 12h6M9 16h6M9 8h2" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 0 0-6 0C6.7 2.8 5.7 3.1 5.7 3.1a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.3 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

function About() {
  const [helloWorldDone, setHelloWorldDone] = useState(false);
  const [nameDone, setNameDone] = useState(false);
  const [loveBuildDone, setLoveBuildDone] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  // Show content after a delay to let user see the painting first
  useState(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
      // Start typing after blur overlay is fully visible
      setTimeout(() => setStartTyping(true), 1200);
    }, 1500);
    return () => clearTimeout(timer);
  });

  return (
    // Full viewport section with starry night background
    <section
      className="fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Layer 1: Starry Night background - fills entire viewport */}
      <div className="absolute inset-0 anim-fade">
        <img
          src="/steri-knight-portfolio/starry-night.jpg"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          style={{ 
            objectPosition: "center"
          }}
          loading="eager"
        />
      </div>

      {/* Layer 2: Blur overlay that fades in after showing the painting */}
      <div 
        className="absolute inset-0"
        style={{
          backdropFilter: showContent ? "blur(8px)" : "none",
          backgroundColor: showContent ? "rgba(0, 0, 0, 0.3)" : "transparent",
          transition: "all 1s ease-in-out"
        }}
      />

      {/* Layer 3: content with fade-in animation after blur */}
      <div 
        className="relative z-10 mx-auto flex h-full max-w-3xl flex-col justify-center px-5 sm:px-8"
        style={{ 
          paddingTop: "3.5rem",
          opacity: showContent ? 1 : 0,
          transform: showContent ? "translateY(0)" : "translateY(20px)",
          transition: "all 1s ease-in-out",
          transitionDelay: "0.5s"
        }}
      >
        <div className="space-y-4">
          {/* Hello World line */}
          <div>
            <span 
              className="label-mono"
              style={{
                color: "#00d4ff",
                textShadow: "0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff, 0 0 40px #00d4ff",
                filter: "brightness(1.5)",
                fontSize: "1.2rem"
              }}
            >
              {startTyping ? (
                <Typewriter
                  text="// hello world"
                  startDelay={0}
                  speed={70}
                  onDone={() => setHelloWorldDone(true)}
                  showCursor={!helloWorldDone}
                />
              ) : null}
            </span>
            {helloWorldDone && <span className="text-transparent">.</span>}
          </div>

          {/* I am Fahid Ahmed line */}
          {helloWorldDone && (
            <h1 
              className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
              style={{ 
                color: "white",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)"
              }}
            >
              <Typewriter
                text="I am Fahid Ahmed."
                startDelay={400}
                speed={80}
                onDone={() => setNameDone(true)}
                showCursor={!nameDone}
              />
            </h1>
          )}

          {/* I love to build line */}
          {nameDone && (
            <div
              className="text-lg sm:text-xl"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)"
              }}
            >
              <Typewriter
                text="I love to build in low-level languages."
                startDelay={400}
                speed={80}
                onDone={() => setLoveBuildDone(true)}
                showCursor={true}
              />
            </div>
          )}
        </div>

        <div
          className="mt-8 flex items-center gap-6"
          style={{ 
            opacity: loveBuildDone ? 1 : 0,
            transition: "opacity 0.8s ease-out",
            transitionDelay: "1.5s"
          }}
        >
          <a
            href="https://drive.google.com/file/d/1irf06sE8NSYKGvt4kOrODGp009Lm7nV3/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Resume"
          >
            <ResumeIcon />
          </a>
          <a
            href="https://github.com/fahid82"
            target="_blank"
            rel="noreferrer"
            className="text-white/80 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <span className="text-white/80" style={{ fontSize: "1.2rem" }}>
            [ahmed.fahid2005@gmail.com]
          </span>
        </div>
      </div>
    </section>
  );
}

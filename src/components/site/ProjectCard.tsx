import { Chip } from "./Chip";

export interface ProjectCardProps {
  designation: string;
  title: string;
  dateRange: string;
  status: string;
  description: string;
  bullets: string[];
  stack: string[];
}

export function ProjectCard(p: ProjectCardProps) {
  return (
    <article className="bracket-frame group relative border border-rule/80 bg-card/60 p-6 transition-colors hover:border-primary/40 sm:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-rule/60 pb-3">
        <span className="label-mono !text-primary">{p.designation}</span>
        <span className="label-mono">{p.status}</span>
      </div>
      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">{p.title}</h3>
        <span className="label-mono">{p.dateRange}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-dim">{p.description}</p>

      <div className="mt-5">
        <div className="label-mono mb-2">Implementation notes</div>
        <ul className="space-y-2 text-sm leading-relaxed text-ink-dim">
          {p.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span
                aria-hidden
                className="mt-1.5 font-mono text-[0.7rem] leading-none text-primary"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 border-t border-rule/60 pt-3">
        <div className="label-mono mb-2">Stack</div>
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </div>
    </article>
  );
}

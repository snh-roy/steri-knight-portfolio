import { Chip } from "./Chip";

export interface TimelineEntryProps {
  date: string;
  role: string;
  company: string;
  location?: string;
  bullets: string[];
  tags: string[];
  ref?: string;
}

export function TimelineEntry(p: TimelineEntryProps) {
  return (
    <article className="relative grid grid-cols-[minmax(0,1fr)] gap-4 border-t border-rule/80 py-8 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-10">
      <div className="flex flex-col gap-2 sm:pt-1">
        <span className="label-mono !text-primary">{p.date}</span>
        {p.ref ? <span className="label-mono">ENTRY {p.ref}</span> : null}
        {p.location ? <span className="label-mono">{p.location}</span> : null}
      </div>
      <div className="min-w-0">
        <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-lg font-semibold text-foreground">{p.role}</h3>
          <span className="text-ink-faint">/</span>
          <span className="text-sm text-ink-dim">{p.company}</span>
        </header>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-dim">
          {p.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-primary/70" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        {p.tags.length ? (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

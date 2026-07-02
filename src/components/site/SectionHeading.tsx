import type { ReactNode } from "react";

export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10 border-b border-rule/80 pb-6">
      <div className="flex items-baseline gap-3">
        <span className="label-mono">{index}</span>
        <span className="label-mono !text-primary">{label}</span>
      </div>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h1>
      {children ? <p className="mt-3 max-w-2xl text-sm text-ink-dim">{children}</p> : null}
    </div>
  );
}

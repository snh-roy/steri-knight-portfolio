import { Link } from "@tanstack/react-router";
import { Shield } from "./Shield";

const items = [
  { to: "/", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
        >
          <Shield className="h-5 w-5 text-primary" />
          <span className="label-mono !text-[0.7rem] !text-foreground">Steri Knight</span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary border-primary/60" }}
              inactiveProps={{ className: "text-ink-dim border-transparent hover:text-foreground" }}
              className="label-mono !text-[0.68rem] !text-inherit border-t-2 px-2 py-1 transition-colors sm:px-3"
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

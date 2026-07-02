import { Link, useLocation } from "@tanstack/react-router";

const items = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Curriculum Vitae" },
  { to: "/projects", label: "Projects" },
] as const;

export function Nav() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "transparent" }}>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-end px-5 sm:px-8">
        <nav className="flex items-center gap-1 sm:gap-2">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              activeOptions={{ exact: true }}
              activeProps={{ 
                className: isHomePage 
                  ? "!text-white/90" 
                  : "!text-black/90" 
              }}
              inactiveProps={{
                className: isHomePage 
                  ? "text-white/60 hover:text-white/80" 
                  : "text-black/60 hover:text-black/80",
              }}
              className="label-mono !text-base px-2 py-1 transition-colors sm:px-3"
            >
              {it.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

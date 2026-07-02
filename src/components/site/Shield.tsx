export function Shield({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 28" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 1.5 2.5 4.5v9c0 6.5 4.5 10.5 9.5 13 5-2.5 9.5-6.5 9.5-13v-9L12 1.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M12 8v10M7.5 12h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

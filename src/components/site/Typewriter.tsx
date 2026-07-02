import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 65,
  startDelay = 0,
  className = "",
  onDone,
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  onDone?: () => void;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let interval: ReturnType<typeof setInterval> | null = null;
    const startTimer = setTimeout(() => {
      if (cancelled) return;
      interval = setInterval(() => {
        setI((prev) => {
          if (prev >= text.length) {
            if (interval) clearInterval(interval);
            onDone?.();
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    }, startDelay);

    return () => {
      cancelled = true;
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay, onDone]);

  const done = i >= text.length;
  return (
    <span className={className}>
      {text.slice(0, i)}
      <span
        aria-hidden
        className={
          "ml-0.5 inline-block w-[0.55ch] -translate-y-[0.05em] bg-primary align-middle " +
          (done ? "animate-pulse" : "")
        }
        style={{ height: "0.9em" }}
      />
    </span>
  );
}

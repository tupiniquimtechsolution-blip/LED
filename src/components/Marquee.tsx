import type { ReactNode } from "react";
import { cn } from "../lib/utils";

/** Letreiro contínuo (pausa no hover, desligado com prefers-reduced-motion). */
export default function Marquee({
  children,
  className,
  duration = 40,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div className={cn("marquee", className)}>
      <div
        className="marquee-track items-center"
        style={{
          ["--dur" as string]: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

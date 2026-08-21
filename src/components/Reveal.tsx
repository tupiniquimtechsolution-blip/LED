import type { CSSProperties, ReactNode } from "react";
import { cn, useInView } from "../lib/utils";

/** Revela o conteúdo com translate + fade quando entra na viewport. */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 30,
  duration = 900,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? "none" : `translateY(${y}px)`,
    transition: `opacity ${duration}ms ${delay}ms cubic-bezier(0.2,0.7,0.2,1), transform ${duration}ms ${delay}ms cubic-bezier(0.2,0.7,0.2,1)`,
    willChange: "opacity, transform",
  };
  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  );
}

import { useEffect, useRef } from "react";
import { isFinePointer } from "../lib/gsapSetup";

/** Cursor customizado (somente desktop com ponteiro fino e sem reduced-motion). */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFinePointer()) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("has-cursor");
    const dot = dotRef.current!;
    const ring = ringRef.current!;

    let x = -100, y = -100, rx = -100, ry = -100;
    let hovering = false;
    let down = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      const t = e.target as HTMLElement | null;
      hovering = !!t?.closest("a, button, [role='slider'], input, textarea, select, [data-cursor]");
    };
    const onDown = () => (down = true);
    const onUp = () => (down = false);

    const loop = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      dot.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      const scale = down ? 0.7 : hovering ? 1.9 : 1;
      ring.style.transform = `translate(${rx - 17}px, ${ry - 17}px) scale(${scale})`;
      ring.style.opacity = hovering ? "0.9" : "0.55";
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-[34px] w-[34px] rounded-full border border-volt-400/70 transition-opacity duration-300 md:block"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[201] hidden h-1.5 w-1.5 rounded-full bg-volt-400 shadow-[0_0_12px_rgba(63,220,255,0.9)] md:block"
      />
    </>
  );
}

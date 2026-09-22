import { useEffect, useRef } from "react";

/**
 * Fundo ambiente: uma malha de pixels LED que "respira" — alguns pixels
 * acendem em ciano/âmbar e apagando devagar, como um painel em standby.
 */
export default function PixelGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const CELL = 26;
    let w = 0, h = 0, cols = 0, rows = 0;
    let phases: Float32Array = new Float32Array(0);
    let speeds: Float32Array = new Float32Array(0);
    let hues: Uint8Array = new Uint8Array(0); // 0 = volt, 1 = ember, 2 = branco
    let raf = 0;

    const COLORS = ["63,220,255", "255,180,77", "234,241,248"];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      cols = Math.ceil(w / CELL);
      rows = Math.ceil(h / CELL);
      const n = cols * rows;
      phases = new Float32Array(n);
      speeds = new Float32Array(n);
      hues = new Uint8Array(n);
      for (let i = 0; i < n; i++) {
        phases[i] = Math.random() * Math.PI * 2;
        speeds[i] = 0.4 + Math.random() * 0.9;
        const r = Math.random();
        hues[i] = r < 0.68 ? 0 : r < 0.88 ? 1 : 2;
      }
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(63,220,255,0.10)";
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          if ((c * 7 + r * 13) % 37 === 0) ctx.fillRect(c * CELL + 11, r * CELL + 11, 2, 2);
        }
      }
    };

    const frame = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const i = c * rows + r;
          const v = Math.sin(t * 0.0006 * speeds[i] + phases[i]);
          if (v < 0.86) continue;
          const a = ((v - 0.86) / 0.14) * 0.4;
          ctx.fillStyle = `rgba(${COLORS[hues[i]]},${a.toFixed(3)})`;
          ctx.fillRect(c * CELL + 10, r * CELL + 10, 3, 3);
        }
      }
      raf = requestAnimationFrame(frame);
    };

    resize();
    if (reduced) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(frame);
    }

    const onResize = () => {
      resize();
      if (reduced) drawStatic();
    };
    window.addEventListener("resize", onResize);
    const onVis = () => {
      if (reduced) return;
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-70" />
      {/* camadas de luz ambiente */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(900px 600px at 12% -8%, rgba(20,196,238,0.10), transparent 60%), radial-gradient(800px 600px at 96% 108%, rgba(247,155,30,0.07), transparent 60%), linear-gradient(180deg, rgba(4,7,12,0) 0%, rgba(4,7,12,0.55) 100%)",
        }}
      />
    </>
  );
}

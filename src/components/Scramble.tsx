import { useEffect, useRef, useState, type ElementType } from "react";

const GLYPHS = "▓▒░<>/#%&@LUMENIX01";

/**
 * Assinatura de movimento: o texto "decodifica" como um painel recebendo sinal —
 * caracteres aleatórios vão travando no lugar, da esquerda para a direita.
 */
export default function Scramble({
  text,
  className,
  as: Tag = "span",
  speed = 26,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  as?: ElementType;
  speed?: number;
  startDelay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [out, setOut] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOut(text);
      return;
    }
    let interval = 0;
    const run = () => {
      let frame = 0;
      interval = window.setInterval(() => {
        frame++;
        const reveal = Math.floor(frame / 2);
        if (reveal >= text.length) {
          setOut(text);
          window.clearInterval(interval);
          return;
        }
        setOut(
          text
            .split("")
            .map((c, i) => {
              if (i < reveal) return c;
              if (c === " ") return " ";
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join(""),
        );
      }, speed);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started.current) {
          started.current = true;
          window.setTimeout(run, startDelay);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <Tag ref={ref as never} className={className}>
      {out}
    </Tag>
  );
}

import { cn } from "../lib/utils";

/** Etiqueta de seção no padrão "01 // SOLUÇÕES" com linha de energia. */
export default function SectionTag({
  index,
  label,
  className,
  tone = "volt",
}: {
  index: string;
  label: string;
  className?: string;
  tone?: "volt" | "ember";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.3em]",
        tone === "volt" ? "text-volt-400" : "text-ember-400",
        className,
      )}
    >
      <span className={cn("h-px w-10", tone === "volt" ? "bg-volt-400/60" : "bg-ember-400/60")} />
      <span>
        {index} <span className="text-faint">//</span> {label}
      </span>
    </p>
  );
}

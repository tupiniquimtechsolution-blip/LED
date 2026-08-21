import { cn } from "../lib/utils";

/**
 * Wordmark P1LED (versão tipográfica de trabalho).
 * TEMP_REPLACE_ME — substituir pelo arquivo oficial em
 * /public/client-assets/logo/ quando fornecido pela P1LED.
 */
export default function Logo({
  className,
  withTag = false,
}: {
  className?: string;
  withTag?: boolean;
}) {
  return (
    <span className={cn("inline-flex flex-col leading-none select-none", className)}>
      <span className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
        P1<span className="text-volt-400">LED</span>
        <span className="ml-1 inline-block h-2 w-2 translate-y-[-0.7em] bg-ember-400 align-middle" />
      </span>
      {withTag && (
        <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.34em] text-faint">
          Painéis de LED · desde 2007
        </span>
      )}
    </span>
  );
}

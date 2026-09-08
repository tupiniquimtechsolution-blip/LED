import { assets } from "../config/assets";
import { business } from "../config/business";

export default function Logo({ withTag = false }: { withTag?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src={assets.logo.main}
        alt={business.name}
        className="h-8 w-auto sm:h-9"
        loading="eager"
      />
      {withTag && (
        <span className="hidden font-mono text-[0.58rem] uppercase tracking-[0.22em] text-faint sm:block">
          {business.tagline}
        </span>
      )}
    </span>
  );
}

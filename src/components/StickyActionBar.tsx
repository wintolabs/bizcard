// src/components/StickyActionBar.tsx
import { cn } from "@/lib/utils";

type Props = {
  primaryLabel: string;
  secondaryLabel: string;
  onPrimaryHref?: string;
  onSecondaryHref?: string;
  accentHex?: string;
  primaryDisabled?: boolean;
  secondaryDisabled?: boolean;
};

export default function StickyActionBar({
  primaryLabel,
  secondaryLabel,
  onPrimaryHref = "#",
  onSecondaryHref = "#",
  accentHex = "#0B63F6",
  primaryDisabled = false,
  secondaryDisabled = false,
}: Props) {
  const primaryStyles =
    "flex-1 rounded-2xl px-6 h-12 flex items-center justify-center text-sm font-semibold text-white outline-none ring-offset-2 focus:ring-2 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-black/10";
  const secondaryStyles =
    "flex-1 rounded-2xl border border-zinc-200 bg-white px-6 h-12 flex items-center justify-center text-sm font-medium text-zinc-700 outline-none ring-offset-2 focus:ring-2 active:scale-[0.98] transition-all duration-200 shadow-sm hover:border-zinc-300 hover:shadow-md";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-md">
        <div className="px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
          <div className="flex gap-3 rounded-3xl border border-zinc-200/80 bg-white/95 backdrop-blur-sm p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
            {secondaryDisabled ? (
              <span
                aria-disabled="true"
                className={cn(
                  secondaryStyles,
                  "cursor-not-allowed opacity-50 select-none"
                )}
              >
                {secondaryLabel}
              </span>
            ) : (
              <a href={onSecondaryHref} className={secondaryStyles}>
                {secondaryLabel}
              </a>
            )}

            {primaryDisabled ? (
              <span
                aria-disabled="true"
                className={cn(
                  primaryStyles,
                  "cursor-not-allowed opacity-50 select-none"
                )}
              >
                {primaryLabel}
              </span>
            ) : (
              <a
                href={onPrimaryHref}
                style={{
                  backgroundColor: accentHex,
                  boxShadow: `0 8px 25px ${accentHex}20`,
                }}
                className={cn(primaryStyles, "hover:brightness-110")}
              >
                {primaryLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

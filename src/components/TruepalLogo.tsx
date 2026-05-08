import { cn } from "../lib/utils";

export function TruepalLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center text-4xl font-extrabold uppercase tracking-tight">
        <span className="text-truepal-blue">TRUE</span>
        <span className="text-truepal-green flex items-center gap-1">
          P
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-truepal-green text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 22h20L12 2z" />
            </svg>
          </span>
          L
        </span>
      </div>
      <span className="text-[0.6rem] font-bold tracking-[0.1em] text-truepal-blue uppercase text-left ml-0.5">
        For Trading and Contracting
      </span>
    </div>
  );
}

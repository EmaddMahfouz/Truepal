import { cn } from "../lib/utils";

export function TruepalLogo({ className, isLight }: { className?: string, isLight?: boolean }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center text-4xl font-extrabold uppercase tracking-tight">
        <span className={cn("transition-colors", isLight ? "text-white" : "text-truepal-blue")}>TRUE</span>
        <span className="text-truepal-green flex items-center gap-1">
          P
          <span className={cn("inline-flex h-7 w-7 items-center justify-center rounded-md transition-colors", isLight ? "bg-white text-truepal-green" : "bg-truepal-green text-white")}>
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
      <span className={cn("text-[0.6rem] font-bold tracking-[0.1em] uppercase text-left ml-0.5 transition-colors", isLight ? "text-blue-100" : "text-truepal-blue")}>
        For Trading and Contracting
      </span>
    </div>
  );
}

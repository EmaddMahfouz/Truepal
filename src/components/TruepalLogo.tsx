import { cn } from "../lib/utils";

export function TruepalLogo({ className, isLight }: { className?: string, isLight?: boolean }) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center text-5xl font-extrabold uppercase tracking-tight">
        <span className={cn("transition-colors", isLight ? "text-white" : "text-truepal-blue")}>TRUEP</span>
        
        <span className={cn(
          "inline-flex relative h-[0.85em] w-[0.85em] mx-1.5 items-center justify-center rounded-xl transition-colors shadow-sm", 
          isLight ? "bg-white text-truepal-green" : "bg-truepal-green text-white"
        )}>
          {/* Base lowercase 'a' */}
          <span className="font-sans font-bold text-[0.65em] lowercase translate-y-[2%] pr-1">a</span>
          
          {/* Overlapping checkmark to form the stylized 'a' */}
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3.5" 
            className="absolute h-[55%] w-[55%] bottom-[20%] right-[10%] text-current"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l4 4L20 4" />
          </svg>
        </span>

        <span className={cn("transition-colors", isLight ? "text-white" : "text-truepal-blue")}>L</span>
      </div>
      <span className={cn(
        "text-[0.65rem] font-bold tracking-[0.15em] uppercase text-left ml-1 mt-1 transition-colors", 
        isLight ? "text-blue-100" : "text-truepal-blue"
      )}>
        For Trading and Contracting
      </span>
    </div>
  );
}

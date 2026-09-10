"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const liquidButtonVariants = cva(
  "relative inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 disabled:pointer-events-none disabled:opacity-50 select-none overflow-hidden cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-white/70 hover:bg-white/85 text-slate-800 backdrop-blur-xl backdrop-saturate-150 border border-white/80 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.9),inset_0_-1px_2px_0_rgba(0,0,0,0.04),0_8px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,1),inset_0_-1px_2px_0_rgba(0,0,0,0.04),0_12px_28px_-6px_rgba(37,99,235,0.18)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        primary:
          "bg-blue-600/90 hover:bg-blue-600 text-white backdrop-blur-xl border border-blue-400/40 shadow-[inset_0_1.5px_2px_0_rgba(255,255,255,0.4),0_8px_20px_-4px_rgba(37,99,235,0.35)] hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.6),0_12px_28px_-6px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]",
        glossy:
          "bg-gradient-to-b from-white/90 via-white/75 to-white/55 text-slate-900 backdrop-blur-2xl border border-white shadow-[inset_0_2px_3px_0_rgba(255,255,255,1),inset_0_-1px_3px_0_rgba(0,0,0,0.06),0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,1),0_15px_35px_rgba(37,99,235,0.15)] hover:-translate-y-0.5 active:scale-95",
        outline:
          "bg-white/40 hover:bg-white/60 text-slate-800 backdrop-blur-md border border-slate-200/80 shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.8),0_4px_12px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 active:scale-95",
      },
      size: {
        sm: "h-8 px-3.5 text-xs rounded-full gap-1.5",
        md: "h-10 px-5 text-sm rounded-full gap-2",
        lg: "h-12 px-7 text-base rounded-full gap-2.5",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface LiquidButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof liquidButtonVariants> {
  asChild?: boolean;
}

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(liquidButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Shimmer light sweep */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);
LiquidButton.displayName = "LiquidButton";

export { LiquidButton, LiquidButton as LiquidGlassButton, liquidButtonVariants };

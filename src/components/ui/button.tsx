import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-normal text-center sm:whitespace-nowrap max-w-full shrink-0 rounded-[12px] text-[15px] font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E0004D] min-h-[44px]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#E0004D] text-white hover:bg-[#C20042] shadow-[0_2px_10px_rgba(224,0,77,0.18)] hover:-translate-y-0.5",
        navy:
          "bg-[#031E61] text-white hover:bg-[#021547] shadow-[0_2px_10px_rgba(3,30,97,0.16)] hover:-translate-y-0.5",
        outline:
          "border border-[#031E61]/25 bg-white text-[#031E61] hover:border-[#031E61] hover:bg-[#F7F8FC]",
        outlineLight:
          "border border-white/35 bg-transparent text-white hover:bg-white/10 hover:border-white/60",
        ghost:
          "text-[#1B2440] hover:bg-[#F7F8FC] hover:text-[#031E61]",
      },
      size: {
        default: "px-6 py-2.5",
        sm: "px-4 py-2 text-sm min-h-[40px]",
        lg: "px-7 py-3.5 text-base",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

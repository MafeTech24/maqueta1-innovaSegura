import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/src/lib/utils";

export const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "block text-sm font-medium text-[#1B2440] mb-1.5",
      className
    )}
    {...props}
  />
));
Label.displayName = "Label";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => (
  <input
    ref={ref}
    type={type}
    className={cn(
      "w-full min-h-[46px] rounded-[12px] border border-[#E2E6F0] bg-white px-4 py-2.5 text-[16px] text-[#1B2440] placeholder:text-[#4A5578]/60 transition-colors focus:border-[#031E61] focus:outline-none focus:ring-2 focus:ring-[#031E61]/15",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full min-h-[112px] rounded-[12px] border border-[#E2E6F0] bg-white px-4 py-3 text-[16px] text-[#1B2440] placeholder:text-[#4A5578]/60 transition-colors focus:border-[#031E61] focus:outline-none focus:ring-2 focus:ring-[#031E61]/15",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/src/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export function DialogContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[#021547]/55 backdrop-blur-[2px] transition-opacity" />
      <DialogPrimitive.Content
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100%-1.5rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-[20px] border border-[#E2E6F0] bg-white p-5 sm:p-8 shadow-xl max-h-[90dvh] overflow-y-auto focus:outline-none",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close
          aria-label="Cerrar ventana"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-[#4A5578] hover:bg-[#F7F8FC] hover:text-[#031E61] transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-5 pr-8 space-y-1.5", className)} {...props} />
  );
}

export function DialogTitle({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      className={cn(
        "font-serif text-2xl sm:text-[28px] leading-tight text-[#031E61]",
        className
      )}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      className={cn("text-[15px] text-[#4A5578] leading-relaxed", className)}
      {...props}
    />
  );
}

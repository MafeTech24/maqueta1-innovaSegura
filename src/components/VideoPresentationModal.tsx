import { Video } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";

interface VideoPresentationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function VideoPresentationModal({
  open,
  onOpenChange,
}: VideoPresentationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <p className="text-xs font-medium uppercase tracking-wider text-[#E0004D]">
            Presentación institucional
          </p>
          <DialogTitle>Conocé cómo trabajamos en Innova Segura</DialogTitle>
          <DialogDescription>
            Espacio reservado para el video de presentación de 60 a 90 segundos.
          </DialogDescription>
        </DialogHeader>

        <div className="aspect-video w-full rounded-[16px] border border-[#E2E6F0] bg-[#031E61] text-white flex flex-col items-center justify-center p-6 text-center space-y-3">
          <div className="h-14 w-14 rounded-full border border-white/25 bg-white/10 flex items-center justify-center">
            <Video className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p className="font-serif text-xl sm:text-2xl">
            [Video de presentación · 60–90 segundos]
          </p>
          <p className="text-sm text-white/75 max-w-md">
            Aquí se insertará el reproductor con la bienvenida de la directora, la dinámica de las clases en vivo y el enfoque práctico sobre normativa argentina.
          </p>
        </div>

        <div className="mt-4 flex justify-end">
          <Button
            type="button"
            variant="navy"
            onClick={() => onOpenChange(false)}
          >
            Volver al sitio
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/src/data/siteConfig";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";

interface WhatsAppCommunityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WhatsAppCommunityModal({
  open,
  onOpenChange,
}: WhatsAppCommunityModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <p className="text-xs font-medium uppercase tracking-wider text-[#E0004D]">
            Comunidad Innova Segura
          </p>
          <DialogTitle>Sumate a la comunidad de WhatsApp</DialogTitle>
          <DialogDescription>
            Un espacio gratuito para estudiantes, profesionales y referentes de Higiene y Seguridad de toda la Argentina.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5">
          <ul className="space-y-3 text-[15px] text-[#4A5578] border-y border-[#E2E6F0] py-4">
            <li>• Avisos anticipados de webinars gratuitos y cupos 2027.</li>
            <li>• Novedades concretas sobre resoluciones de la SRT y normativa vigente.</li>
            <li>• Guías descargables, criterios de campo y consultas compartidas.</li>
          </ul>

          <div className="rounded-[12px] border border-[#E2E6F0] bg-[#F7F8FC] p-4 space-y-1 text-sm text-[#4A5578]">
            <p className="font-medium text-[#031E61]">
              Enlace de invitación configurado
            </p>
            <p className="font-mono text-xs break-all">
              {siteConfig.contact.whatsappCommunityLink}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cerrar
            </Button>
            <Button
              type="button"
              onClick={() => {
                onOpenChange(false);
              }}
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Unirme a la comunidad</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { useState, FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitCompanyQuote } from "@/src/lib/integrations";
import { Button } from "@/src/components/ui/button";
import { Input, Label, Textarea } from "@/src/components/ui/fields";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";

interface CompanyQuoteFormProps {
  onSuccessClose?: () => void;
}

export function CompanyQuoteForm({ onSuccessClose }: CompanyQuoteFormProps) {
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (
      !company.trim() ||
      !contactName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !teamSize.trim()
    ) {
      setError("Por favor completá todos los campos obligatorios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Ingresá un correo electrónico laboral o personal válido.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitCompanyQuote({
        company: company.trim(),
        contactName: contactName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        teamSize: teamSize.trim(),
        message: message.trim(),
      });
      setConfirmation({
        referenceId: res.referenceId,
        message: res.message,
      });
    } catch {
      setError("Hubo un error al enviar la solicitud. Probá de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  if (confirmation) {
    return (
      <div className="rounded-[16px] border border-[#E2E6F0] bg-[#F7F8FC] p-6 space-y-4">
        <div className="flex items-start gap-3">
          <CheckCircle2
            className="h-6 w-6 text-[#031E61] shrink-0 mt-0.5"
            aria-hidden="true"
          />
          <div className="space-y-1">
            <p className="font-semibold text-[#031E61]">
              Solicitud de propuesta recibida
            </p>
            <p className="text-[15px] text-[#4A5578] leading-relaxed">
              {confirmation.message}
            </p>
            <p className="text-xs text-[#4A5578] pt-1 font-mono tabular-nums">
              Referencia: {confirmation.referenceId}
            </p>
          </div>
        </div>
        {onSuccessClose && (
          <div className="flex justify-end">
            <Button type="button" variant="navy" onClick={onSuccessClose}>
              Cerrar
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="comp-name">Empresa / Razón social *</Label>
          <Input
            id="comp-name"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Nombre de la empresa"
          />
        </div>
        <div>
          <Label htmlFor="comp-contact">Tu nombre y apellido *</Label>
          <Input
            id="comp-contact"
            required
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            placeholder="Nombre y cargo"
          />
        </div>
        <div>
          <Label htmlFor="comp-email">Correo electrónico *</Label>
          <Input
            id="comp-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="contacto@empresa.com"
          />
        </div>
        <div>
          <Label htmlFor="comp-phone">Teléfono / WhatsApp *</Label>
          <Input
            id="comp-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+54 9 351 ..."
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="comp-size">Cantidad aproximada de personas a capacitar *</Label>
          <Input
            id="comp-size"
            required
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            placeholder="Ej.: 25 personas en planta / 15 en oficina"
          />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="comp-msg">Temática, localidad o consulta</Label>
          <Textarea
            id="comp-msg"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Contanos el rubro de tu empresa, si preferís modalidad presencial en Córdoba u online en vivo, y qué temas necesitás priorizar."
          />
        </div>
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-[#E0004D]">
          {error}
        </p>
      )}

      <div className="flex justify-end pt-1">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Enviando solicitud..." : "Enviar solicitud de propuesta"}
        </Button>
      </div>
    </form>
  );
}

interface CompanyQuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CompanyQuoteModal({
  open,
  onOpenChange,
}: CompanyQuoteModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <p className="text-xs font-medium uppercase tracking-wider text-[#E0004D]">
            Capacitación In Company
          </p>
          <DialogTitle>Pedí una propuesta para tu empresa</DialogTitle>
          <DialogDescription>
            Diseñamos planes a medida en Córdoba (presencial) y para equipos de todo el país (online en vivo).
          </DialogDescription>
        </DialogHeader>
        <CompanyQuoteForm onSuccessClose={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}

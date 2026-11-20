import { useState, FormEvent } from "react";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { submitGuideLead } from "@/src/lib/integrations";
import { Button } from "@/src/components/ui/button";
import { Input, Label } from "@/src/components/ui/fields";

export function GuideDownloadBlock() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [doneMessage, setDoneMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError("Ingresá un correo electrónico válido para enviarte la guía.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitGuideLead({
        name: name.trim() || undefined,
        email: email.trim(),
        resourceTitle:
          "Guía gratuita: Checklist de cumplimiento básico en Higiene y Seguridad (Ley 19.587)",
      });
      setDoneMessage(res.message);
      setName("");
      setEmail("");
    } catch {
      setError("No pudimos procesar tu solicitud. Probá nuevamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-[20px] sm:rounded-[24px] bg-[#031E61] text-white p-6 sm:p-10 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        <div className="lg:col-span-7 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/75">
            <BookOpen className="h-4 w-4 text-[#E0004D]" aria-hidden="true" />
            <span>Recurso descargable sin costo</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-white">
            Descargá la guía gratuita
          </h3>
          <p className="text-[16px] sm:text-[17px] leading-relaxed text-white/80 max-w-xl">
            Recibí en tu correo una guía práctica con los puntos clave de la Ley 19.587, documentación esencial ante ART y errores frecuentes que conviene evitar en planta y obra.
          </p>
        </div>

        <div className="lg:col-span-5">
          {doneMessage ? (
            <div className="rounded-[16px] border border-white/20 bg-white/10 p-6 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="h-6 w-6 text-white shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="space-y-1">
                  <p className="font-medium text-white">Guía en camino</p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {doneMessage}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setDoneMessage(null)}
                className="text-xs underline text-white/80 hover:text-white cursor-pointer"
              >
                Enviar a otro correo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              <div>
                <Label htmlFor="guide-name" className="text-white/90">
                  Tu nombre (opcional)
                </Label>
                <Input
                  id="guide-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nombre"
                  className="bg-white text-[#1B2440] border-transparent"
                />
              </div>
              <div>
                <Label htmlFor="guide-email" className="text-white/90">
                  Correo electrónico *
                </Label>
                <Input
                  id="guide-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="bg-white text-[#1B2440] border-transparent"
                />
              </div>
              {error && (
                <p role="alert" className="text-sm font-medium text-[#FFD1DF]">
                  {error}
                </p>
              )}
              <Button
                type="submit"
                disabled={submitting}
                className="w-full"
              >
                {submitting ? "Enviando..." : "Quiero recibir la guía gratuita"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

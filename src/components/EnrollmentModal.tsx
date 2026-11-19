import { useState, useEffect, FormEvent } from "react";
import { CheckCircle2, Calendar, Clock } from "lucide-react";
import { CourseItem } from "@/src/data/courses";
import { submitEnrollment } from "@/src/lib/integrations";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Button } from "@/src/components/ui/button";
import { Input, Label } from "@/src/components/ui/fields";

interface EnrollmentModalProps {
  course: CourseItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function EnrollmentModal({
  course,
  open,
  onOpenChange,
}: EnrollmentModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("Córdoba");
  const [profile, setProfile] = useState("Profesional de HyS");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (open) {
      setError(null);
      setConfirmation(null);
    }
  }, [open, course?.slug]);

  if (!course) return null;

  const isWebinar = course.type === "webinar";

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Por favor completá tu nombre, correo electrónico y teléfono.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Ingresá un correo electrónico válido.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitEnrollment({
        courseSlug: course.slug,
        courseTitle: course.title,
        courseType: course.type,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        province: province.trim(),
        profile,
      });
      setConfirmation({
        referenceId: res.referenceId,
        message: res.message,
      });
    } catch {
      setError("No pudimos procesar tu solicitud. Intentá nuevamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <p className="text-xs font-medium uppercase tracking-wider text-[#E0004D]">
            {isWebinar ? "Webinar gratuito en vivo" : "Inscripción 2027"}
          </p>
          <DialogTitle>{course.title}</DialogTitle>
          <DialogDescription>
            <span className="inline-flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-sm text-[#4A5578]">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#031E61]" aria-hidden="true" />
                {course.dateLabel}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#031E61]" aria-hidden="true" />
                {course.duration}
              </span>
            </span>
          </DialogDescription>
        </DialogHeader>

        {confirmation ? (
          <div className="rounded-[16px] border border-[#E2E6F0] bg-[#F7F8FC] p-6 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="h-6 w-6 text-[#031E61] shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div className="space-y-1">
                <p className="font-semibold text-[#031E61]">
                  {isWebinar ? "Lugar reservado" : "Preinscripción registrada"}
                </p>
                <p className="text-[15px] text-[#4A5578] leading-relaxed">
                  {confirmation.message}
                </p>
                <p className="text-xs text-[#4A5578] pt-1 font-mono tabular-nums">
                  Código de referencia: {confirmation.referenceId}
                </p>
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <Button
                type="button"
                variant="navy"
                onClick={() => onOpenChange(false)}
              >
                Cerrar
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <Label htmlFor="enroll-name">Nombre y apellido *</Label>
                <Input
                  id="enroll-name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <Label htmlFor="enroll-email">Correo electrónico *</Label>
                <Input
                  id="enroll-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                />
              </div>
              <div>
                <Label htmlFor="enroll-phone">WhatsApp / Teléfono *</Label>
                <Input
                  id="enroll-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+54 9 351 ..."
                />
              </div>
              <div>
                <Label htmlFor="enroll-province">Provincia</Label>
                <Input
                  id="enroll-province"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  placeholder="Córdoba, Buenos Aires, Santa Fe..."
                />
              </div>
              <div>
                <Label htmlFor="enroll-profile">Perfil actual</Label>
                <select
                  id="enroll-profile"
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  className="w-full min-h-[46px] rounded-[12px] border border-[#E2E6F0] bg-white px-3.5 py-2.5 text-[16px] text-[#1B2440] focus:border-[#031E61] focus:outline-none focus:ring-2 focus:ring-[#031E61]/15"
                >
                  <option value="Profesional de HyS">Profesional de HyS</option>
                  <option value="Estudiante avanzado/a">Estudiante avanzado/a</option>
                  <option value="Responsable de empresa / RR. HH.">
                    Responsable de empresa / RR. HH.
                  </option>
                  <option value="Otro perfil técnico">Otro perfil técnico</option>
                </select>
              </div>
            </div>

            {!isWebinar && (
              <div className="rounded-[12px] border border-[#E2E6F0] bg-[#F7F8FC] px-4 py-3 text-sm text-[#4A5578] flex items-center justify-between gap-4">
                <span>Arancel de la edición</span>
                <span className="font-semibold text-[#031E61] tabular-nums">
                  {course.price}
                </span>
              </div>
            )}

            {error && (
              <p
                role="alert"
                className="text-sm font-medium text-[#E0004D]"
              >
                {error}
              </p>
            )}

            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
              <p className="text-xs text-[#4A5578]">
                {isWebinar
                  ? "Actividad sin costo · Recibís el enlace en tu correo."
                  : "Medios de pago: Mercado Pago / Transferencia."}
              </p>
              <Button type="submit" disabled={submitting}>
                {submitting
                  ? "Enviando..."
                  : isWebinar
                    ? "Confirmar lugar"
                    : "Enviar preinscripción"}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

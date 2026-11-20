import { useState, FormEvent } from "react";
import {
  MapPin,
  Mail,
  MessageCircle,
  Clock,
  CheckCircle2,
  Instagram,
  Youtube,
} from "lucide-react";
import { siteConfig } from "@/src/data/siteConfig";
import { submitContactMessage } from "@/src/lib/integrations";
import { SeoHead } from "@/src/components/SeoHead";
import { Button } from "@/src/components/ui/button";
import { Input, Label, Textarea } from "@/src/components/ui/fields";
import { WhatsAppCommunityModal } from "@/src/components/WhatsAppCommunityModal";

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("Consulta sobre cursos 2027");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);
  const [communityOpen, setCommunityOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Por favor completá tu nombre, correo electrónico y mensaje.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Ingresá un correo electrónico válido.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitContactMessage({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim() || undefined,
        topic,
        message: message.trim(),
      });
      setConfirmation({
        referenceId: res.referenceId,
        message: res.message,
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setError("No pudimos enviar tu mensaje. Probá nuevamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SeoHead
        title="Contacto | Innova Segura — Córdoba, Argentina"
        description="Escribinos por dudas sobre los cursos 2027 de Higiene y Seguridad, webinars gratuitos o capacitaciones in company para tu empresa."
        path="/contacto"
      />

      <section className="bg-white pt-14 pb-16 sm:pt-20 sm:pb-20 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-5">
            <p className="inline-flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
              <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
              <span>Contacto directo</span>
            </p>
            <h1 className="font-serif text-[38px] sm:text-[50px] leading-[1.08] text-[#031E61]">
              Estamos para acompañarte y responder tus consultas
            </h1>
            <p className="text-[18px] leading-relaxed text-[#4A5578]">
              Escribinos si querés asesorarte sobre qué curso 2027 elegir, consultar por inscripciones grupales o coordinar una capacitación in company.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-14 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-[20px] border border-[#E2E6F0] bg-white p-6 sm:p-7 space-y-5">
              <h2 className="font-serif text-2xl text-[#031E61]">
                Canales de atención
              </h2>
              <ul className="space-y-4 text-[15px] text-[#4A5578]">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#E0004D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{siteConfig.location} · Modalidad online para toda la Argentina</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#E0004D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{siteConfig.contact.email}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-[#E0004D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{siteConfig.contact.whatsappDisplay}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#E0004D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{siteConfig.contact.hours}</span>
                </li>
              </ul>

              <div className="pt-4 border-t border-[#E2E6F0] flex flex-wrap gap-4 text-sm">
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#031E61] hover:text-[#E0004D] font-medium"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <span>{siteConfig.contact.instagramHandle}</span>
                </a>
                <a
                  href={siteConfig.contact.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#031E61] hover:text-[#E0004D] font-medium"
                >
                  <Youtube className="h-4 w-4" aria-hidden="true" />
                  <span>{siteConfig.contact.youtubeHandle}</span>
                </a>
              </div>
            </div>

            <div className="rounded-[20px] bg-[#031E61] text-white p-6 sm:p-7 space-y-4">
              <h2 className="font-serif text-2xl text-white">
                Comunidad de WhatsApp
              </h2>
              <p className="text-[15px] text-white/80 leading-relaxed">
                Sumate al espacio gratuito donde compartimos novedades de la SRT, recursos descargables y avisos de webinars.
              </p>
              <Button
                type="button"
                onClick={() => setCommunityOpen(true)}
                className="w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>Sumarme al grupo</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-[20px] sm:rounded-[24px] border border-[#E2E6F0] bg-white p-6 sm:p-10">
            <h2 className="font-serif text-3xl text-[#031E61] mb-6">
              Envianos tu mensaje
            </h2>

            {confirmation ? (
              <div className="rounded-[16px] border border-[#E2E6F0] bg-[#F7F8FC] p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-6 w-6 text-[#031E61] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="space-y-1">
                    <p className="font-semibold text-[#031E61]">
                      Mensaje enviado correctamente
                    </p>
                    <p className="text-[15px] text-[#4A5578] leading-relaxed">
                      {confirmation.message}
                    </p>
                    <p className="text-xs text-[#4A5578] pt-1 font-mono tabular-nums">
                      Referencia: {confirmation.referenceId}
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setConfirmation(null)}
                >
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Nombre y apellido *</Label>
                    <Input
                      id="contact-name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Correo electrónico *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@correo.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Teléfono / WhatsApp</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+54 9 351 ..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-topic">Motivo de consulta</Label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full min-h-[46px] rounded-[12px] border border-[#E2E6F0] bg-white px-3.5 py-2.5 text-[16px] text-[#1B2440] focus:border-[#031E61] focus:outline-none focus:ring-2 focus:ring-[#031E61]/15"
                    >
                      <option value="Consulta sobre cursos 2027">
                        Consulta sobre cursos 2027
                      </option>
                      <option value="Capacitación in company para empresas">
                        Capacitación in company para empresas
                      </option>
                      <option value="Webinars gratuitos y comunidad">
                        Webinars gratuitos y comunidad
                      </option>
                      <option value="Otra consulta">Otra consulta</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-message">Mensaje *</Label>
                  <Textarea
                    id="contact-message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Contanos en qué te podemos ayudar..."
                  />
                </div>

                {error && (
                  <p role="alert" className="text-sm font-medium text-[#E0004D]">
                    {error}
                  </p>
                )}

                <div className="flex justify-end">
                  <Button type="submit" size="lg" disabled={submitting}>
                    {submitting ? "Enviando..." : "Enviar consulta"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <WhatsAppCommunityModal
        open={communityOpen}
        onOpenChange={setCommunityOpen}
      />
    </>
  );
}

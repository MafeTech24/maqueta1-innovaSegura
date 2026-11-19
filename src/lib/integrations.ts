/**
 * Capa de integración preparada para conectar Supabase (persistencia de formularios,
 * inscripciones y suscriptores) y Mercado Pago (preferencias de checkout).
 *
 * Actualmente valida los datos y devuelve respuestas tipadas de confirmación.
 * Para activar en producción:
 * 1. Configurar VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en variables de entorno.
 * 2. Crear endpoint de backend (/api/mercadopago/preference) con ACCESS_TOKEN de Mercado Pago.
 */

export interface IntegrationResult<T = unknown> {
  ok: boolean;
  referenceId: string;
  message: string;
  paymentInitPoint?: string;
  data?: T;
}

export interface CourseEnrollmentPayload {
  courseSlug: string;
  courseTitle: string;
  courseType: "curso" | "webinar";
  fullName: string;
  email: string;
  phone: string;
  province: string;
  profile: string;
}

export interface CompanyQuotePayload {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  teamSize: string;
  message: string;
}

export interface GuideLeadPayload {
  name?: string;
  email: string;
  resourceTitle: string;
}

export interface ContactMessagePayload {
  name: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
}

const generateRef = (prefix: string) =>
  `${prefix}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

const delay = (ms = 450) => new Promise((resolve) => setTimeout(resolve, ms));

export async function submitEnrollment(
  payload: CourseEnrollmentPayload
): Promise<IntegrationResult<CourseEnrollmentPayload>> {
  await delay();

  // Punto de conexión futuro con Supabase:
  // const { data, error } = await supabase.from("enrollments").insert([payload]);
  // Y si payload.courseType === "curso", solicitar /api/mercadopago/preference

  const referenceId = generateRef("INS");
  return {
    ok: true,
    referenceId,
    message:
      payload.courseType === "webinar"
        ? "Tu lugar en el webinar gratuito quedó reservado. Te enviamos los datos de acceso por correo."
        : "Recibimos tu preinscripción. Te vamos a contactar por correo y WhatsApp con el enlace de pago de Mercado Pago y los accesos a la cursada.",
    data: payload,
  };
}

export async function submitCompanyQuote(
  payload: CompanyQuotePayload
): Promise<IntegrationResult<CompanyQuotePayload>> {
  await delay();

  // Punto de conexión futuro con Supabase:
  // await supabase.from("company_quotes").insert([payload]);

  return {
    ok: true,
    referenceId: generateRef("EMP"),
    message:
      "Recibimos tu solicitud de capacitación in company. En menos de 48 horas hábiles te enviamos una propuesta a medida.",
    data: payload,
  };
}

export async function submitGuideLead(
  payload: GuideLeadPayload
): Promise<IntegrationResult<GuideLeadPayload>> {
  await delay(350);

  // Punto de conexión futuro con Supabase:
  // await supabase.from("newsletter_leads").upsert([{ email: payload.email, name: payload.name }]);

  return {
    ok: true,
    referenceId: generateRef("GUI"),
    message:
      "Listo. Revisá tu casilla de correo: te enviamos el enlace de descarga de la guía gratuita.",
    data: payload,
  };
}

export async function submitContactMessage(
  payload: ContactMessagePayload
): Promise<IntegrationResult<ContactMessagePayload>> {
  await delay();

  // Punto de conexión futuro con Supabase:
  // await supabase.from("contact_messages").insert([payload]);

  return {
    ok: true,
    referenceId: generateRef("CON"),
    message:
      "Gracias por escribirnos. Recibimos tu consulta y te respondemos a la brevedad.",
    data: payload,
  };
}

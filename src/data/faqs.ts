export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: "modalidad-vivo",
    question: "¿Las clases son realmente en vivo o son videos grabados?",
    answer:
      "Todas las ediciones del calendario 2027 se dictan online en vivo en días y horarios definidos para que puedas preguntar, compartir casos de tu trabajo o estudio y recibir devolución directa de la docente. Además, si algún día no podés conectarte en el horario pautado, contás con acceso temporal a la grabación de la clase.",
  },
  {
    id: "seguimiento-personal",
    question: "¿Cómo funciona el seguimiento personalizado?",
    answer:
      "Trabajamos con cupos cuidados para poder leer tus trabajos prácticos, revisar tus consultas sobre normativa o casos reales y darte feedback concreto. No quedás solo frente a una plataforma automática: tenés acompañamiento real durante toda la cursada.",
  },
  {
    id: "certificados",
    question: "¿Entregan certificado al finalizar?",
    answer:
      "Sí. Quienes completan las instancias de cada curso reciben un certificado digital de aprobación con carga horaria y temario detallado ([Aval institucional: a confirmar / placeholder]). En los webinars gratuitos emitimos constancia digital de asistencia.",
  },
  {
    id: "quienes-pueden-cursar",
    question: "¿Necesito estar recibido para inscribirme a los cursos?",
    answer:
      "No necesariamente. Muchos de nuestros cursos están pensados tanto para técnicos y licenciados en ejercicio como para estudiantes avanzados de la carrera o responsables internos de áreas operativas que buscan comprender la normativa argentina con claridad. En cada curso te indicamos el perfil recomendado.",
  },
  {
    id: "medios-de-pago",
    question: "¿Cómo se abonan los cursos y desde qué provincias puedo participar?",
    answer:
      "Podés cursar desde cualquier provincia de Argentina porque la modalidad es 100 % online en vivo. Estamos preparando la integración directa con Mercado Pago (tarjetas, dinero en cuenta y transferencia). Mientras tanto, al completar tu preinscripción te enviamos el enlace de pago correspondiente.",
  },
  {
    id: "empresas-in-company",
    question: "¿Cómo contratan las empresas las capacitaciones in company?",
    answer:
      "Podés pedir una propuesta desde el botón de Empresas o la página de Contacto indicando cantidad de personas y necesidades del rubro. Realizamos capacitaciones presenciales en Córdoba y alrededores, y online en vivo para equipos distribuidos en todo el país, entregando todas las constancias para legajo y ART.",
  },
];

export interface TestimonialPlaceholder {
  id: string;
  quote: string;
  authorName: string;
  roleOrCompany: string;
  courseOrService: string;
}

export const testimonials: TestimonialPlaceholder[] = [
  {
    id: "testimonio-1",
    quote:
      "[Testimonio real de alumno/a o profesional sobre el acompañamiento en vivo y la aplicación práctica de los contenidos.]",
    authorName: "[NOMBRE]",
    roleOrCompany: "[Profesión / Provincia]",
    courseOrService: "[Nombre del curso o taller]",
  },
  {
    id: "testimonio-2",
    quote:
      "[Testimonio real de estudiante avanzado/a sobre cómo las clases le dieron seguridad para sus primeros relevamientos.]",
    authorName: "[NOMBRE]",
    roleOrCompany: "[Estudiante / Institución]",
    courseOrService: "[Nombre del curso o webinar]",
  },
  {
    id: "testimonio-3",
    quote:
      "[Testimonio real de empresa sobre la capacitación in company, la claridad docente y el orden documental alcanzado.]",
    authorName: "[NOMBRE]",
    roleOrCompany: "[Cargo / Nombre de empresa / Córdoba]",
    courseOrService: "[Capacitación in company]",
  },
];

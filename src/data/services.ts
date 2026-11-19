export interface CompanyService {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const companyServices: CompanyService[] = [
  {
    index: "01",
    title: "Inducción en Higiene y Seguridad para nuevos ingresos",
    description:
      "Formación inicial clara antes de que cada persona comience sus tareas, alineada a los riesgos reales de tu establecimiento.",
    deliverables: [
      "Contenidos adaptados a tu rubro y procesos",
      "Evaluación breve de comprensión",
      "Constancias firmadas para legajo de RR. HH. y ART",
    ],
  },
  {
    index: "02",
    title: "Uso correcto, cuidado y reposición de EPP",
    description:
      "Talleres prácticos para que el equipo entienda por qué, cuándo y cómo utilizar cada elemento de protección personal.",
    deliverables: [
      "Revisión del cumplimiento de Resolución SRT 299/11",
      "Práctica directa con el equipamiento del puesto",
      "Criterios claros de mantenimiento y recambio",
    ],
  },
  {
    index: "03",
    title: "Capacitaciones por riesgos específicos y plan anual",
    description:
      "Ciclos planificados durante todo el año según tu matriz de riesgos: trabajo en altura, riesgo eléctrico, cargas, incendio y productos químicos.",
    deliverables: [
      "Cronograma anual coordinado con producción y turnos",
      "Modalidad presencial en Córdoba o en vivo online para sucursales",
      "Registro auditable ante SRT, ART y clientes",
    ],
  },
  {
    index: "04",
    title: "Ergonomía y prevención de trastornos musculoesqueléticos",
    description:
      "Entrenamiento práctico sobre posturas, levantamiento manual de cargas y pausas activas con foco en el puesto real.",
    deliverables: [
      "Articulación con Protocolo Resolución SRT 886/15",
      "Recomendaciones concretas para mandos medios",
      "Material visual de refuerzo para planta y oficinas",
    ],
  },
  {
    index: "05",
    title: "Brigadas de emergencia, evacuación y uso de extintores",
    description:
      "Preparación de líderes de piso y personal general para responder de forma ordenada ante principios de incendio o emergencias.",
    deliverables: [
      "Definición de roles de evacuación",
      "Acompañamiento en simulacros y actas de evaluación",
      "Informe posterior con oportunidades de mejora",
    ],
  },
  {
    index: "06",
    title: "Sensibilización para supervisores y mandos medios",
    description:
      "Herramientas de liderazgo preventivo para que quienes coordinan equipos puedan corregir desvíos cotidianos con criterio y respeto.",
    deliverables: [
      "Talleres participativos con casos reales de la empresa",
      "Guía de observaciones preventivas en campo",
      "Seguimiento posterior a la capacitación",
    ],
  },
];

export type CourseType = "curso" | "webinar";

export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseItem {
  slug: string;
  month: string;
  dateLabel: string;
  isoDate: string;
  type: CourseType;
  title: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  schedule: string;
  modality: string;
  price: string;
  certificateNote: string;
  audience: string[];
  normativeFocus: string[];
  modules: CourseModule[];
}

export const courses2027: CourseItem[] = [
  {
    slug: "ley-19587-practica-profesional",
    month: "Febrero 2027",
    dateLabel: "18 de febrero de 2027",
    isoDate: "2027-02-18",
    type: "curso",
    title: "Ley 19.587 y Decreto 351/79 en la práctica profesional",
    shortDescription:
      "Cómo bajar la normativa argentina principal a relevamientos, informes técnicos y planes anuales de prevención sin perderte en tecnicismos.",
    fullDescription:
      "Un recorrido intensivo en vivo por la estructura operativa de la Ley 19.587 y su Decreto Reglamentario 351/79. Trabajamos sobre casos reales de establecimientos industriales, comerciales y de servicios para que sepas qué documentar, cómo priorizar desvíos y cómo defender tus informes.",
    duration: "4 encuentros en vivo (8 horas totales)",
    schedule: "Jueves de 19:00 a 21:00 hs (ARG)",
    modality: "Online en vivo por videollamada + campus con grabaciones",
    price: "[PRECIO]",
    certificateNote: "Certificado de aprobación con aval institucional ([A confirmar])",
    audience: [
      "Estudiantes avanzados de Higiene y Seguridad",
      "Técnicos y licenciados que inician su práctica independiente",
      "Profesionales que buscan actualizar criterios de relevamiento",
    ],
    normativeFocus: ["Ley 19.587", "Decreto 351/79", "Resolución SRT 905/15"],
    modules: [
      {
        title: "Módulo 1 · Lectura operativa de la Ley 19.587 y Dec. 351/79",
        topics: [
          "Obligaciones del empleador, del trabajador y del servicio de HyS",
          "Cómo organizar un legajo técnico ordenado y auditable",
        ],
      },
      {
        title: "Módulo 2 · Relevamientos y matrices de cumplimiento",
        topics: [
          "Condiciones edilicias, carga de fuego, iluminación y ventilación",
          "Criterios para redactar observaciones claras y viables",
        ],
      },
      {
        title: "Módulo 3 · Plan anual de prevención y seguimiento",
        topics: [
          "Priorización de riesgos según criticidad y presupuesto",
          "Devolución personalizada sobre tu caso práctico final",
        ],
      },
    ],
  },
  {
    slug: "webinar-induccion-art-srt",
    month: "Marzo 2027",
    dateLabel: "11 de marzo de 2027",
    isoDate: "2027-03-11",
    type: "webinar",
    title: "Webinar: Qué mirar primero cuando asesorás a una pyme ante la ART y SRT",
    shortDescription:
      "Clase abierta en vivo con checklist inicial para ordenar documentación obligatoria, RGRL y visitas de prevención.",
    fullDescription:
      "Encuentro abierto en vivo para despejar dudas concretas sobre el vínculo entre la empresa, el profesional de Higiene y Seguridad, la Aseguradora de Riesgos del Trabajo (ART) y la Superintendencia de Riesgos del Trabajo (SRT).",
    duration: "1 encuentro en vivo (90 minutos)",
    schedule: "Jueves 11 de marzo · 19:00 hs (ARG)",
    modality: "Online en vivo · Cupos limitados con inscripción previa",
    price: "Gratuito",
    certificateNote: "Constancia digital de asistencia",
    audience: [
      "Estudiantes de tecnicaturas y licenciaturas en HyS",
      "Profesionales que toman sus primeros clientes pymes",
      "Responsables administrativos o de RR. HH. en pymes",
    ],
    normativeFocus: ["Ley 24.557", "Resolución SRT 463/09 (RGRL)", "Nómina de personal expuesto"],
    modules: [
      {
        title: "Bloque único · Ruta crítica de los primeros 30 días",
        topics: [
          "Qué documentación solicita la ART en la primera visita",
          "Errores comunes al completar el RGRL y el RAR",
          "Espacio abierto de preguntas en vivo",
        ],
      },
    ],
  },
  {
    slug: "investigacion-accidentes-arbol-causas",
    month: "Abril 2027",
    dateLabel: "15 de abril de 2027",
    isoDate: "2027-04-15",
    type: "curso",
    title: "Investigación de accidentes laborales y método del Árbol de Causas",
    shortDescription:
      "Aprendé a entrevistar, reconstruir hechos sin buscar culpables y diseñar medidas preventivas que eviten la repetición.",
    fullDescription:
      "Taller práctico en vivo centrado en el método del Árbol de Causas adoptado en la normativa argentina. Analizamos accidentes reales e incidentes críticos para distinguir hechos concretos de interpretaciones y redactar informes con sustento técnico.",
    duration: "3 encuentros en vivo (6 horas totales)",
    schedule: "Jueves de 19:00 a 21:00 hs (ARG)",
    modality: "Online en vivo con análisis de casos y devolución personal",
    price: "[PRECIO]",
    certificateNote: "Certificado de aprobación con aval institucional ([A confirmar])",
    audience: [
      "Profesionales y técnicos de Higiene y Seguridad",
      "Supervisores operativos y miembros de comités mixtos",
      "Estudiantes avanzados",
    ],
    normativeFocus: ["Resolución SRT 801/15", "Método Árbol de Causas OIT / SRT"],
    modules: [
      {
        title: "Módulo 1 · Toma de datos en escena y entrevistas",
        topics: [
          "Diferencia entre hecho objetivo, juicio de valor e interpretación",
          "Cómo entrevistar sin generar actitudes defensivas",
        ],
      },
      {
        title: "Módulo 2 · Construcción lógica del Árbol de Causas",
        topics: [
          "Encadenamiento, conjunción y disyunción de factores",
          "Ejercitación guiada en vivo sobre caso real",
        ],
      },
      {
        title: "Módulo 3 · Medidas correctivas y seguimiento",
        topics: [
          "Jerarquía de controles aplicada al árbol",
          "Revisión individual de tu informe de investigación",
        ],
      },
    ],
  },
  {
    slug: "evaluacion-riesgos-matrices-operativas",
    month: "Mayo 2027",
    dateLabel: "20 de mayo de 2027",
    isoDate: "2027-05-20",
    type: "curso",
    title: "Evaluación de riesgos laborales y diseño de matrices operativas",
    shortDescription:
      "De la teoría a la planilla real: criterios de probabilidad, severidad y controles aplicables por puesto de trabajo.",
    fullDescription:
      "Aprendé a construir matrices de identificación de peligros y evaluación de riesgos que no queden archivadas en una carpeta. Trabajamos con criterios claros para distintos rubros: industria, logística, construcción y oficinas.",
    duration: "4 encuentros en vivo (8 horas totales)",
    schedule: "Jueves de 19:00 a 21:00 hs (ARG)",
    modality: "Online en vivo + plantillas editables + feedback personalizado",
    price: "[PRECIO]",
    certificateNote: "Certificado de aprobación con aval institucional ([A confirmar])",
    audience: [
      "Profesionales de HyS independientes o en relación de dependencia",
      "Estudiantes de último año",
    ],
    normativeFocus: ["Resolución SRT 905/15", "ISO 45001 (criterios de referencia)"],
    modules: [
      {
        title: "Módulo 1 · Mapeo de procesos y puestos",
        topics: [
          "Cómo dividir tareas rutinarias y no rutinarias",
          "Identificación de peligros físicos, químicos, mecánicos y ergonómicos",
        ],
      },
      {
        title: "Módulo 2 · Valoración y criterio técnico",
        topics: [
          "Escalas de probabilidad, exposición y severidad sin sesgos",
          "Riesgo puro vs. riesgo residual",
        ],
      },
      {
        title: "Módulo 3 · Plan de acción verificable",
        topics: [
          "Cómo presentar resultados ante gerencia",
          "Corrección en vivo de tu propia matriz",
        ],
      },
    ],
  },
  {
    slug: "webinar-epp-normativa-control",
    month: "Junio 2027",
    dateLabel: "17 de junio de 2027",
    isoDate: "2027-06-17",
    type: "webinar",
    title: "Webinar: Uso, selección y entrega legal de EPP según Resolución SRT 299/11",
    shortDescription:
      "Todo sobre certificaciones IRAM/sello S, planilla de entrega obligatoria y cómo lograr adhesión real en el equipo.",
    fullDescription:
      "Webinar en vivo pensado para evitar los errores más frecuentes en la compra, entrega y control de Elementos de Protección Personal. Revisamos el marco legal de la Resolución SRT 299/11 y estrategias prácticas para capacitar al personal.",
    duration: "1 encuentro en vivo (90 minutos)",
    schedule: "Jueves 17 de junio · 19:00 hs (ARG)",
    modality: "Online en vivo · Gratuito con inscripción previa",
    price: "Gratuito",
    certificateNote: "Constancia digital de asistencia",
    audience: [
      "Profesionales y estudiantes de Higiene y Seguridad",
      "Responsables de compras y pañol",
      "Supervisores de planta y obra",
    ],
    normativeFocus: ["Resolución SRT 299/11", "Sello S / Certificaciones vigentes"],
    modules: [
      {
        title: "Bloque único · Gestión integral de EPP",
        topics: [
          "Cómo validar que un EPP esté certificado en Argentina",
          "Llenado correcto de la constancia de entrega Res. 299/11",
          "Ronda de consultas en vivo",
        ],
      },
    ],
  },
  {
    slug: "ergonomia-resolucion-886-15",
    month: "Agosto 2027",
    dateLabel: "12 de agosto de 2027",
    isoDate: "2027-08-12",
    type: "curso",
    title: "Ergonomía laboral aplicada: Protocolo Resolución SRT 886/15",
    shortDescription:
      "Paso a paso para completar planillas 1, 2, 3 y 4, identificar factores de riesgo y proponer mejoras realistas.",
    fullDescription:
      "Curso en vivo orientado a dominar la aplicación del Protocolo de Ergonomía vigente en Argentina. Practicamos la evaluación de levantamiento de cargas, movimientos repetitivos y posturas forzadas sobre puestos reales.",
    duration: "4 encuentros en vivo (8 horas totales)",
    schedule: "Jueves de 19:00 a 21:00 hs (ARG)",
    modality: "Online en vivo + revisión individual de planillas",
    price: "[PRECIO]",
    certificateNote: "Certificado de aprobación con aval institucional ([A confirmar])",
    audience: [
      "Licenciados y técnicos en Higiene y Seguridad",
      "Estudiantes avanzados",
      "Kinesiólogos laborales y médicos del trabajo",
    ],
    normativeFocus: ["Resolución SRT 886/15", "Resolución MTEySS 295/03"],
    modules: [
      {
        title: "Módulo 1 · Planilla 1 y análisis del puesto",
        topics: [
          "Identificación de factores de riesgo ergonómico",
          "Registro de tareas y tiempos de ciclo",
        ],
      },
      {
        title: "Módulo 2 · Evaluación inicial y métodos específicos",
        topics: [
          "Criterios para NIOSH, RULA, REBA y OCRA",
          "Planillas 2 y 3 sin errores de carga",
        ],
      },
      {
        title: "Módulo 3 · Planilla 4 y rediseño de puestos",
        topics: [
          "Medidas administrativas y de ingeniería posibles",
          "Feedback directo sobre un caso evaluado por vos",
        ],
      },
    ],
  },
  {
    slug: "planes-evacuacion-emergencias",
    month: "Septiembre 2027",
    dateLabel: "16 de septiembre de 2027",
    isoDate: "2027-09-16",
    type: "curso",
    title: "Diseño de planes de evacuación, brigadas y simulacros efectivos",
    shortDescription:
      "Cómo redactar un plan útil, formar roles de emergencia y ejecutar simulacros evaluables en empresas e instituciones.",
    fullDescription:
      "Dejá atrás los planes copiados y pegados que nadie lee. En este curso en vivo diseñamos planes de evacuación adaptados al edificio real, la dotación y los riesgos específicos de cada organización.",
    duration: "3 encuentros en vivo (6 horas totales)",
    schedule: "Jueves de 19:00 a 21:00 hs (ARG)",
    modality: "Online en vivo con guía de diseño y devolución",
    price: "[PRECIO]",
    certificateNote: "Certificado de aprobación con aval institucional ([A confirmar])",
    audience: [
      "Profesionales de Higiene y Seguridad",
      "Líderes de brigadas y responsables de mantenimiento",
    ],
    normativeFocus: ["Decreto 351/79 Cap. 18", "Normativa municipal y provincial vigente"],
    modules: [
      {
        title: "Módulo 1 · Análisis edilicio y cálculo de vías de escape",
        topics: [
          "Factor de ocupación, medios de salida y señalización",
          "Puntos de encuentro y roles críticos",
        ],
      },
      {
        title: "Módulo 2 · Formación de brigadas y comunicación",
        topics: [
          "Capacitación operativa de líderes de piso",
          "Protocolos ante incendio, fuga o sismo",
        ],
      },
      {
        title: "Módulo 3 · Ejecución y evaluación del simulacro",
        topics: [
          "Cronometraje, planilla de observación y acta posterior",
          "Revisión de tu proyecto de plan de evacuación",
        ],
      },
    ],
  },
  {
    slug: "auditorias-internas-higiene-seguridad",
    month: "Noviembre 2027",
    dateLabel: "11 de noviembre de 2027",
    isoDate: "2027-11-11",
    type: "curso",
    title: "Auditorías internas de Higiene y Seguridad e informes ejecutivos",
    shortDescription:
      "Cerrá el año profesional sabiendo auditar cumplimiento legal, detectar brechas y presentar reportes claros a dirección.",
    fullDescription:
      "Capacitación integral para profesionales que necesitan ordenar su servicio anual, preparar auditorías internas o responder inspecciones oficiales con documentación consistente e indicadores comprensibles.",
    duration: "4 encuentros en vivo (8 horas totales)",
    schedule: "Jueves de 19:00 a 21:00 hs (ARG)",
    modality: "Online en vivo + tableros de seguimiento + devolución individual",
    price: "[PRECIO]",
    certificateNote: "Certificado de aprobación con aval institucional ([A confirmar])",
    audience: [
      "Profesionales y consultores independientes en HyS",
      "Responsables de sistemas de gestión integrada",
    ],
    normativeFocus: ["Ley 19.587", "Resoluciones SRT 905/15 y 900/15", "Auditoría interna"],
    modules: [
      {
        title: "Módulo 1 · Planificación de la auditoría y listas de verificación",
        topics: [
          "Revisión documental vs. verificación en campo",
          "Mediciones ambientales obligatorias (iluminación, ruido, PAT)",
        ],
      },
      {
        title: "Módulo 2 · Redacción de hallazgos y no conformidades",
        topics: [
          "Criterio técnico para documentar desvíos sin ambigüedades",
          "Seguimiento de acciones correctivas",
        ],
      },
      {
        title: "Módulo 3 · Comunicación ejecutiva con gerencia",
        topics: [
          "Indicadores simples que muestran valor preventivo",
          "Feedback personalizado de cierre",
        ],
      },
    ],
  },
];

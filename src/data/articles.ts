export interface ArticleItem {
  slug: string;
  category: string;
  readTime: string;
  publishedLabel: string;
  title: string;
  excerpt: string;
  keyTakeaways: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  normativeReferences: string[];
}

export const articles: ArticleItem[] = [
  {
    slug: "que-dice-la-ley-19587-en-5-minutos",
    category: "Normativa Argentina",
    readTime: "5 min de lectura",
    publishedLabel: "Guía práctica",
    title: "Qué dice la Ley 19.587, en 5 minutos",
    excerpt:
      "Una lectura clara y directa de la norma madre de Higiene y Seguridad en el Trabajo en Argentina: qué exige, a quién alcanza y cómo ordenarla en la práctica.",
    keyTakeaways: [
      "Aplica a todo establecimiento y explotación en el país, persiga o no fines de lucro.",
      "Establece obligaciones concretas tanto para la parte empleadora como para las personas trabajadoras.",
      "Se reglamenta operativamente a través de decretos específicos como el Decreto 351/79 (industria/comercio), 911/96 (construcción) y 617/97 (agro).",
    ],
    sections: [
      {
        heading: "El propósito central de la ley",
        paragraphs: [
          "Sancionada en 1972, la Ley Nacional 19.587 de Higiene y Seguridad en el Trabajo sigue siendo el pilar técnico y legal de la prevención laboral en la Argentina. Su objetivo es claro: proteger la vida, preservar y mantener la integridad psicofísica de los trabajadores, prevenir, reducir, eliminar o aislar los riesgos de cada puesto y estimular una actitud positiva respecto de la prevención.",
          "Lejos de ser un texto abstracto, la ley marca reglas de juego para cualquier lugar donde haya trabajo en relación de dependencia, sin importar el tamaño de la empresa o el rubro.",
        ],
      },
      {
        heading: "Qué le exige al empleador",
        paragraphs: [
          "La norma coloca la responsabilidad primaria de garantizar condiciones seguras en quien organiza el trabajo. Esto incluye realizar exámenes médicos preocupacionales y periódicos, mantener en buen estado instalaciones, máquinas y herramientas, entregar elementos de protección personal cuando el riesgo no pudo eliminarse en la fuente, señalizar peligros y capacitar al personal.",
          "También exige contar con servicios de Medicina del Trabajo e Higiene y Seguridad (internos o externos según dotación y riesgo, hoy detallados en la Resolución SRT 905/15).",
        ],
      },
      {
        heading: "Qué le corresponde a quien trabaja",
        paragraphs: [
          "Muchas veces se olvida que la ley también establece deberes para los trabajadores: cumplir con las normas de higiene y seguridad, usar adecuadamente los equipos y elementos de protección provistos, asistir a las capacitaciones y exámenes médicos obligatorios, y avisar de inmediato ante cualquier condición insegura o accidente.",
          "Comprender esta corresponsabilidad ayuda a construir acuerdos sanos en el equipo, en lugar de plantear la seguridad como una imposición aislada.",
        ],
      },
      {
        heading: "Cómo bajarla a tierra sin abrumarse",
        paragraphs: [
          "El error más común al empezar es intentar memorizar artículos sueltos. La forma práctica de trabajar con la Ley 19.587 es cruzar el rubro de la empresa con su decreto reglamentario correspondiente (por ejemplo, Decreto 351/79 para industria y comercio, o 911/96 para obra), armar un relevamiento inicial ordenado y fijar un cronograma anual realista.",
        ],
      },
    ],
    normativeReferences: [
      "Ley Nacional N.° 19.587",
      "Decreto Reglamentario N.° 351/79",
      "Decreto N.° 911/96 (Construcción)",
      "Resolución SRT N.° 905/15",
    ],
  },
  {
    slug: "que-cubre-la-art-y-que-no",
    category: "Riesgos del Trabajo",
    readTime: "6 min de lectura",
    publishedLabel: "Guía práctica",
    title: "Qué cubre la ART y qué no",
    excerpt:
      "Diferencias clave entre cobertura de la Aseguradora de Riesgos del Trabajo, obligaciones preventivas de la empresa y situaciones frecuentes que generan conflictos.",
    keyTakeaways: [
      "La ART cubre accidentes de trabajo, accidentes in itinere y enfermedades profesionales listadas (o reconocidas por Comisión Médica).",
      "Tener ART no reemplaza al Servicio de Higiene y Seguridad ni exime a la empresa de prevenir.",
      "Las multas administrativas, sanciones laborales o daños por dolo/incumplimiento grave no quedan cubiertos como un seguro patrimonial.",
    ],
    sections: [
      {
        heading: "El rol real de la ART en Argentina",
        paragraphs: [
          "Bajo la Ley 24.557 de Riesgos del Trabajo, todo empleador debe contratar una Aseguradora de Riesgos del Trabajo (o estar autoasegurado bajo requisitos estrictos). Sin embargo, en muchas pymes persiste la idea equivocada de que pagar la alícuota mensual de la ART resuelve toda la seguridad laboral.",
          "La ART cumple un doble rol: brinda prestaciones médicas y dinerarias cuando ocurre un siniestro laboral cubierto, y realiza visitas de asesoramiento, control y denuncia de incumplimientos ante la SRT.",
        ],
      },
      {
        heading: "Qué sí cubre ante un siniestro",
        paragraphs: [
          "Cubre la atención médica integral, farmacia, rehabilitación, prótesis y traslados derivados de un accidente ocurrido por el hecho o en ocasión del trabajo, los accidentes in itinere (en el trayecto habitual entre el domicilio y el trabajo) y las enfermedades profesionales incluidas en el listado oficial (Decreto 658/96 y modificatorias).",
          "Además, cubre las prestaciones dinerarias por Incapacidad Laboral Temporaria (a partir del día 11 de baja) y las indemnizaciones por incapacidad permanente o fallecimiento según la normativa vigente.",
        ],
      },
      {
        heading: "Qué no cubre y dónde aparecen los riesgos legales",
        paragraphs: [
          "La ART no cubre enfermedades inculpables (ajenas al trabajo, que se rigen por la Ley de Contrato de Trabajo), ni accidentes ocurridos fuera del trayecto declarado sin causa justificada, ni daños materiales a vehículos o maquinarias de la empresa.",
          "Tampoco reemplaza las mediciones ambientales obligatorias (ruido, iluminación, puesta a tierra, ergonomía), la elaboración de programas de seguridad en obra ni las capacitaciones anuales del personal: todo eso es responsabilidad directa del empleador junto con su profesional de Higiene y Seguridad.",
        ],
      },
    ],
    normativeReferences: [
      "Ley Nacional N.° 24.557 (LRT)",
      "Ley N.° 26.773 y Ley N.° 27.348",
      "Decreto N.° 658/96 (Listado de Enfermedades Profesionales)",
    ],
  },
  {
    slug: "errores-frecuentes-uso-epp",
    category: "Prevención en Campo",
    readTime: "4 min de lectura",
    publishedLabel: "Guía práctica",
    title: "Errores frecuentes en el uso de EPP",
    excerpt:
      "Por qué entregar elementos de protección personal no alcanza si falla la selección, el talle, la conservación o el registro legal según la Resolución SRT 299/11.",
    keyTakeaways: [
      "El EPP siempre es la última barrera, nunca la primera ni la única solución frente a un riesgo.",
      "Entregar equipamiento sin certificación vigente o sin planilla firmada invalida el respaldo técnico y legal.",
      "La comodidad, el talle adecuado y la capacitación práctica definen si la persona realmente lo usa.",
    ],
    sections: [
      {
        heading: "Error 1: Pensar que el EPP reemplaza a la protección colectiva",
        paragraphs: [
          "La jerarquía de controles es clara: primero se busca eliminar el peligro, sustituirlo, aplicar controles de ingeniería (resguardos, extracción localizada, barandas) y medidas administrativas. Recién cuando el riesgo residual persiste entra el Elemento de Protección Personal.",
          "Usar tapones auditivos en un sector donde una simple aislación o mantenimiento reduciría 10 dB el ruido es trasladar toda la carga preventiva al trabajador.",
        ],
      },
      {
        heading: "Error 2: Comprar por precio sin verificar certificación",
        paragraphs: [
          "En Argentina, la Resolución SRT 299/11 exige la entrega de EPP certificados (sello S / normas IRAM o equivalentes autorizados) y su registro escrito en la constancia oficial firmada por el trabajador.",
          "Un casco vencido, un calzado sin puntera certificada o un arnés sin etiqueta legible no protegen ni sirven como respaldo ante una auditoría.",
        ],
      },
      {
        heading: "Error 3: Talles únicos y falta de capacitación práctica",
        paragraphs: [
          "Cuando un protector ocular se empaña, un guante queda dos talles grande o una protección respiratoria no sella bien por falta de prueba de ajuste, el trabajador termina quitándoselo apenas no lo miran.",
          "Probar los modelos en campo, respetar talles reales, explicar cuándo se reemplaza cada elemento y escuchar a quien lo usa ocho horas por día cambia por completo la adherencia.",
        ],
      },
    ],
    normativeReferences: [
      "Resolución SRT N.° 299/11",
      "Resolución SICyM N.° 896/99 (Certificación de EPP)",
      "Ley 19.587 · Art. 8 y 10",
    ],
  },
];

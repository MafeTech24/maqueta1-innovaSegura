import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Video,
  MessageSquareText,
  Scale,
  Award,
  ArrowRight,
  Building2,
  UserCheck,
  MessageCircle,
  Check,
} from "lucide-react";
import { siteConfig } from "@/src/data/siteConfig";
import { courses2027, CourseItem } from "@/src/data/courses";
import { companyServices } from "@/src/data/services";
import { articles } from "@/src/data/articles";
import { testimonials } from "@/src/data/testimonials";
import { faqs } from "@/src/data/faqs";
import { SeoHead } from "@/src/components/SeoHead";
import { Reveal } from "@/src/components/Reveal";
import { Button } from "@/src/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/src/components/ui/accordion";
import { CourseCard } from "@/src/components/CourseCard";
import { GuideDownloadBlock } from "@/src/components/GuideDownloadBlock";
import { EnrollmentModal } from "@/src/components/EnrollmentModal";
import { CompanyQuoteModal } from "@/src/components/CompanyQuoteModal";
import { VideoPresentationModal } from "@/src/components/VideoPresentationModal";
import { WhatsAppCommunityModal } from "@/src/components/WhatsAppCommunityModal";

export function HomePage() {
  const [courseFilter, setCourseFilter] = useState<"todos" | "curso" | "webinar">("todos");
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [enrollOpen, setEnrollOpen] = useState(false);
  const [companyModalOpen, setCompanyModalOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);

  const filteredCourses = courses2027.filter((item) =>
    courseFilter === "todos" ? true : item.type === courseFilter
  );

  const handleOpenEnroll = (course: CourseItem) => {
    setSelectedCourse(course);
    setEnrollOpen(true);
  };

  const homeJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: siteConfig.brandName,
      description:
        "Academia de capacitación en Higiene y Seguridad laboral de Córdoba, Argentina. Cursos y webinars online en vivo con seguimiento personalizado y capacitación in company.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Córdoba",
        addressRegion: "Córdoba",
        addressCountry: "AR",
      },
      areaServed: "AR",
      sameAs: [
        siteConfig.contact.instagramUrl,
        siteConfig.contact.youtubeUrl,
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <SeoHead
        title="Innova Segura | Capacitación en Higiene y Seguridad Online"
        description="Cursos de higiene y seguridad online en vivo con seguimiento personalizado, normativa argentina simple y capacitación in company en Córdoba y todo el país."
        path="/"
        jsonLd={homeJsonLd}
      />

      {/* 1. HERO */}
      <section className="bg-white pt-10 pb-14 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-24 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="inline-flex items-center gap-2.5 text-sm font-medium text-[#4A5578] mb-4 sm:mb-5">
                <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
                <span>Córdoba, Argentina · Capacitación online en vivo para todo el país</span>
              </p>

              <h1 className="font-serif text-[32px] sm:text-[46px] lg:text-[54px] leading-[1.08] text-[#031E61] max-w-2xl">
                Aprendé a prevenir con quien te acompaña de verdad
                <span className="text-[#E0004D]" aria-hidden="true">.</span>
              </h1>

              <p className="mt-5 sm:mt-6 text-[16px] sm:text-[18px] leading-[1.68] text-[#4A5578] max-w-[60ch]">
                Cursos y webinars online en vivo con seguimiento docente personalizado y normativa argentina explicada simple. Formación real para estudiantes, profesionales y empresas que buscan trabajar con criterio y respaldo.
              </p>

              <div className="mt-7 sm:mt-9 flex flex-col xs:flex-row flex-wrap items-start xs:items-center gap-3 sm:gap-4">
                <Button asChild size="lg" className="w-full xs:w-auto">
                  <a href="#calendario-2027">Ver cursos 2027</a>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  className="w-full xs:w-auto"
                  onClick={() => setCompanyModalOpen(true)}
                >
                  Capacitación para empresas
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                aria-label="Reproducir video de presentación de Innova Segura"
                className="group relative w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[390px] rounded-[20px] sm:rounded-[24px] border border-[#E2E6F0] bg-[#031E61] p-5 sm:p-7 sm:p-8 text-left text-white flex flex-col justify-between overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-widest text-white/70">
                  <span>Presentación de la academia</span>
                  <span className="tabular-nums">60–90 seg</span>
                </div>

                <div className="my-auto py-6 sm:py-8 flex flex-col items-center text-center space-y-4">
                  <span className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#E0004D] text-white shadow-lg transition-transform duration-200 group-hover:scale-105">
                    <Play className="h-5 w-5 sm:h-6 sm:w-6 ml-0.5" aria-hidden="true" />
                  </span>
                  <div className="space-y-1.5">
                    <p className="font-serif text-xl sm:text-2xl text-white">
                      Conocé Innova Segura en 1 minuto
                    </p>
                    <p className="text-sm text-white/75 max-w-xs mx-auto">
                      [Espacio reservado para video de presentación de 60–90 segundos]
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-sm text-white/80">
                  <span>Dirección docente · {siteConfig.founder.name}</span>
                  <span className="inline-flex items-center gap-1 text-white font-medium">
                    Ver avance
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRAYECTORIA EN NÚMEROS */}
      <section aria-label="Trayectoria en números" className="bg-[#F7F8FC] border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-[#E2E6F0]">
            {siteConfig.metrics.map((metric) => (
              <div key={metric.label} className="lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <p className="font-serif text-3xl sm:text-4xl text-[#031E61] tabular-nums">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-[14px] sm:text-[15px] text-[#4A5578] leading-snug">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SOBRE MÍ */}
      <section id="sobre-mi" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              <div className="lg:col-span-5">
                <div className="rounded-[24px] border border-[#E2E6F0] bg-[#F7F8FC] p-5 sm:p-6">
                  <div className="aspect-[3/4] w-full rounded-[16px] border border-[#E2E6F0] bg-white flex flex-col items-center justify-center p-8 text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-[#F7F8FC] border border-[#E2E6F0] flex items-center justify-center text-[#031E61]">
                      <UserCheck className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="font-serif text-xl text-[#031E61]">
                        [Foto profesional]
                      </p>
                      <p className="text-sm text-[#4A5578]">
                        {siteConfig.founder.name}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#E2E6F0] space-y-1 text-sm text-[#4A5578]">
                    <p className="font-medium text-[#031E61]">
                      {siteConfig.founder.title}
                    </p>
                    <p>Matrícula: {siteConfig.founder.license}</p>
                    <p>{siteConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
                  <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
                  <span>Sobre mí y el origen de Innova Segura</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-[42px] leading-[1.14] text-[#031E61]">
                  Formación con criterio de campo y cercanía docente
                </h2>

                <div className="space-y-4 text-[17px] leading-[1.7] text-[#4A5578]">
                  {siteConfig.founder.storyParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <blockquote className="my-8 py-6 border-y border-[#E2E6F0]">
                  <p className="font-serif italic text-xl sm:text-2xl leading-relaxed text-[#031E61]">
                    “{siteConfig.founder.quote}”
                  </p>
                </blockquote>

                <div>
                  <Link
                    to="/sobre-mi"
                    className="inline-flex items-center gap-2 text-[15px] font-medium text-[#031E61] hover:text-[#E0004D] transition-colors"
                  >
                    <span>Conocer mi trayectoria y formación completa</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.missionVisionValues.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-[#E2E6F0] bg-[#F7F8FC] p-7 space-y-3"
                >
                  <h3 className="font-serif text-2xl text-[#031E61]">
                    {item.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-[#4A5578]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. DIFERENCIAL: NO ES UN CURSO GRABADO MÁS */}
      <section className="bg-[#031E61] text-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-2.5 text-sm font-medium text-white/80">
                <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
                <span>Nuestro diferencial académico</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-[42px] leading-[1.15] text-white">
                No es un curso grabado más
              </h2>
              <p className="text-[17px] leading-relaxed text-white/80">
                Estudiar Higiene y Seguridad sin poder preguntar casos reales deja dudas justo cuando más necesitás seguridad técnica. Por eso cada encuentro está pensado para acompañarte en vivo.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-[20px] border border-white/15 bg-white/[0.04] p-7 space-y-3">
                <Video className="h-6 w-6 text-[#E0004D]" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-white">Clases en vivo</h3>
                <p className="text-[15px] leading-relaxed text-white/75">
                  Intercambio directo en cada encuentro para resolver dudas en el momento y analizar situaciones reales de trabajo.
                </p>
              </div>

              <div className="rounded-[20px] border border-white/15 bg-white/[0.04] p-7 space-y-3">
                <MessageSquareText className="h-6 w-6 text-[#E0004D]" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-white">Feedback personal</h3>
                <p className="text-[15px] leading-relaxed text-white/75">
                  Seguimiento cercano sobre tus trabajos, matrices e informes técnicos con devolución docente individual.
                </p>
              </div>

              <div className="rounded-[20px] border border-white/15 bg-white/[0.04] p-7 space-y-3">
                <Scale className="h-6 w-6 text-[#E0004D]" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-white">Normativa argentina</h3>
                <p className="text-[15px] leading-relaxed text-white/75">
                  Ley 19.587, ART y resoluciones vigentes de la SRT explicadas con claridad para aplicarlas sin vueltas.
                </p>
              </div>

              <div className="rounded-[20px] border border-white/15 bg-white/[0.04] p-7 space-y-3">
                <Award className="h-6 w-6 text-[#E0004D]" aria-hidden="true" />
                <h3 className="font-serif text-2xl text-white">Certificado oficial</h3>
                <p className="text-[15px] leading-relaxed text-white/75">
                  Certificado de aprobación con carga horaria y detalle de contenidos. [Aval institucional: placeholder].
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. CALENDARIO DE CURSOS 2027 */}
      <section id="calendario-2027" className="bg-[#F7F8FC] py-20 sm:py-28 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <div className="flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
                  <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
                  <span>Agenda anual · Febrero a diciembre</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-[42px] leading-[1.14] text-[#031E61]">
                  Calendario de cursos y webinars 2027
                </h2>
                <p className="text-[17px] text-[#4A5578]">
                  Elegí la formación según tu etapa profesional. Todas las fechas son online en vivo con cupos cuidados.
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Filtrar calendario 2027"
                className="inline-flex flex-wrap items-center gap-1 rounded-[14px] border border-[#E2E6F0] bg-white p-1.5 self-start lg:self-auto"
              >
                {[
                  { id: "todos", label: "Todos" },
                  { id: "curso", label: "Cursos" },
                  { id: "webinar", label: "Webinars gratuitos" },
                ].map((tab) => {
                  const active = courseFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() =>
                        setCourseFilter(tab.id as "todos" | "curso" | "webinar")
                      }
                      className={`px-4 py-2 text-sm font-medium rounded-[10px] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        active
                          ? "bg-[#031E61] text-white"
                          : "text-[#4A5578] hover:text-[#031E61]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.slug}
                  course={course}
                  onEnroll={handleOpenEnroll}
                />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/cursos">Ver agenda completa 2027 y programas</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. EMPRESAS IN COMPANY */}
      <section id="empresas" className="bg-white py-20 sm:py-28 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
                  <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
                  <span>Empresas y pymes</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-[42px] leading-[1.14] text-[#031E61]">
                  Capacitación in company a medida
                </h2>
                <p className="text-[17px] leading-[1.7] text-[#4A5578]">
                  Diseñamos e implementamos capacitaciones laborales adaptadas a los riesgos reales, turnos y cultura de tu organización. Trabajamos presencialmente en Córdoba y en modalidad en vivo para sucursales de todo el país.
                </p>

                <ul className="space-y-3 pt-2 text-[16px] text-[#1B2440]">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#E0004D] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Contenidos adaptados a tu matriz de riesgos y rubro.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#E0004D] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Constancias y evaluaciones listas para legajo y ART.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#E0004D] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Lenguaje claro para operarios, mandos medios y gerencia.</span>
                  </li>
                </ul>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Button
                    type="button"
                    size="lg"
                    onClick={() => setCompanyModalOpen(true)}
                  >
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                    <span>Pedir propuesta para mi empresa</span>
                  </Button>
                  <Link
                    to="/empresas"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#031E61] hover:text-[#E0004D] transition-colors"
                  >
                    <span>Ver detalle de servicios</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {companyServices.map((service) => (
                  <div
                    key={service.index}
                    className="rounded-[20px] border border-[#E2E6F0] bg-[#F7F8FC] p-6 space-y-2.5"
                  >
                    <span className="text-xs font-semibold tracking-wider text-[#E0004D] tabular-nums">
                      {service.index}
                    </span>
                    <h3 className="font-serif text-xl leading-snug text-[#031E61]">
                      {service.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-[#4A5578]">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. RECURSOS GRATUITOS */}
      <section id="recursos" className="bg-[#F7F8FC] py-20 sm:py-28 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-14">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <div className="flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
                  <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
                  <span>Biblioteca editorial</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-[42px] leading-[1.14] text-[#031E61]">
                  Recursos gratuitos para entender la normativa
                </h2>
              </div>
              <Link
                to="/recursos"
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#031E61] hover:text-[#E0004D] transition-colors shrink-0"
              >
                <span>Ver todos los recursos</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="flex flex-col justify-between rounded-[20px] border border-[#E2E6F0] bg-white p-7 transition-all duration-200 hover:border-[#031E61]/30 hover:shadow-[0_10px_30px_rgba(3,30,97,0.06)]"
                >
                  <div>
                    <p className="text-[13px] font-medium text-[#4A5578]">
                      <span>{article.category}</span>
                      <span className="mx-2" aria-hidden="true">·</span>
                      <span>{article.readTime}</span>
                    </p>
                    <h3 className="mt-3 font-serif text-2xl leading-snug text-[#031E61]">
                      <Link
                        to={`/recursos/${article.slug}`}
                        className="hover:text-[#E0004D] transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-[#4A5578]">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E2E6F0]">
                    <Link
                      to={`/recursos/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#031E61] hover:text-[#E0004D] transition-colors"
                    >
                      <span>Leer artículo</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <GuideDownloadBlock />
          </Reveal>
        </div>
      </section>

      {/* 8. TESTIMONIOS (PLACEHOLDERS) */}
      <section className="bg-white py-20 sm:py-24 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
                <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
                <span>Experiencias reales</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-[42px] leading-[1.14] text-[#031E61]">
                Lo que dicen quienes ya cursaron
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col justify-between rounded-[20px] border border-[#E2E6F0] bg-[#F7F8FC] p-7 space-y-6"
                >
                  <p className="text-[16px] leading-relaxed text-[#1B2440]">
                    “{item.quote}”
                  </p>
                  <div className="pt-4 border-t border-[#E2E6F0] space-y-0.5 text-sm">
                    <p className="font-semibold text-[#031E61]">{item.authorName}</p>
                    <p className="text-[#4A5578]">{item.roleOrCompany}</p>
                    <p className="text-xs text-[#4A5578] pt-0.5">{item.courseOrService}</p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. PREGUNTAS FRECUENTES */}
      <section id="preguntas-frecuentes" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="space-y-3 mb-10">
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
                <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
                <span>Preguntas frecuentes</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-[42px] leading-[1.14] text-[#031E61]">
                Despejá tus dudas antes de inscribirte
              </h2>
            </div>

            <Accordion type="single" collapsible className="border-t border-[#E2E6F0]">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* 10. BANDA COMUNIDAD WHATSAPP */}
      <section className="bg-[#031E61] text-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-serif text-2xl sm:text-[40px] leading-tight text-white">
                Sumate a la comunidad de WhatsApp
              </h2>
              <p className="text-[16px] sm:text-[17px] text-white/80 leading-relaxed">
                Enterate primero de nuevos webinars gratuitos, actualizaciones de la SRT, recursos prácticos y fechas de cursada 2027.
              </p>
            </div>
            <div className="shrink-0">
              <Button
                type="button"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => setCommunityOpen(true)}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                <span>Sumarme a la comunidad</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EnrollmentModal
        course={selectedCourse}
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
      />
      <CompanyQuoteModal
        open={companyModalOpen}
        onOpenChange={setCompanyModalOpen}
      />
      <VideoPresentationModal open={videoOpen} onOpenChange={setVideoOpen} />
      <WhatsAppCommunityModal
        open={communityOpen}
        onOpenChange={setCommunityOpen}
      />
    </>
  );
}

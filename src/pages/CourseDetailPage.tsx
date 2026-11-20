import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MonitorPlay,
  Award,
  Check,
} from "lucide-react";
import { courses2027 } from "@/src/data/courses";
import { siteConfig } from "@/src/data/siteConfig";
import { SeoHead } from "@/src/components/SeoHead";
import { Button } from "@/src/components/ui/button";
import { EnrollmentModal } from "@/src/components/EnrollmentModal";

export function CourseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [enrollOpen, setEnrollOpen] = useState(false);

  const course = courses2027.find((item) => item.slug === slug);

  if (!course) {
    return (
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[760px] px-4 sm:px-6 text-center space-y-5">
          <h1 className="font-serif text-4xl text-[#031E61]">
            Curso no encontrado
          </h1>
          <p className="text-[17px] text-[#4A5578]">
            La capacitación que buscás no está disponible en el calendario actual o cambió de dirección.
          </p>
          <Button asChild>
            <Link to="/cursos">Volver al calendario 2027</Link>
          </Button>
        </div>
      </section>
    );
  }

  const isWebinar = course.type === "webinar";

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.fullDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.brandName,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Córdoba",
        addressCountry: "AR",
      },
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      startDate: course.isoDate,
      inLanguage: "es-AR",
    },
    ...(isWebinar
      ? {
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "ARS",
          },
        }
      : {}),
  };

  return (
    <>
      <SeoHead
        title={`${course.title} | Innova Segura`}
        description={course.shortDescription}
        path={`/cursos/${course.slug}`}
        jsonLd={courseJsonLd}
      />

      <section className="bg-white pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Link
            to="/cursos"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#4A5578] hover:text-[#031E61] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Volver al calendario 2027</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <p className="text-sm font-medium text-[#4A5578]">
                <span className={isWebinar ? "text-[#E0004D] font-semibold" : "text-[#031E61] font-semibold"}>
                  {isWebinar ? "Webinar gratuito" : "Curso online en vivo"}
                </span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span>{course.month}</span>
              </p>

              <h1 className="font-serif text-[32px] sm:text-[44px] lg:text-[46px] leading-[1.1] text-[#031E61]">
                {course.title}
              </h1>

              <p className="text-[17px] sm:text-[18px] leading-[1.7] text-[#4A5578]">
                {course.fullDescription}
              </p>

              <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#4A5578]">
                {course.normativeFocus.map((norm) => (
                  <span key={norm} className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#E0004D]" aria-hidden="true" />
                    <span>{norm}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Sidebar — on mobile shows after text, on lg shows in right column */}
            <aside className="lg:col-span-4 rounded-[20px] border border-[#E2E6F0] bg-[#F7F8FC] p-6 sm:p-7 space-y-6">
              <div className="space-y-1 pb-5 border-b border-[#E2E6F0]">
                <p className="text-sm text-[#4A5578]">Arancel</p>
                <p className="font-serif text-3xl text-[#031E61] tabular-nums">
                  {course.price}
                </p>
              </div>

              <dl className="space-y-4 text-[15px]">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[#031E61] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[#4A5578]">Fecha de inicio</dt>
                    <dd className="font-medium text-[#1B2440]">{course.dateLabel}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#031E61] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[#4A5578]">Duración y horario</dt>
                    <dd className="font-medium text-[#1B2440]">
                      {course.duration} · {course.schedule}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MonitorPlay className="h-5 w-5 text-[#031E61] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[#4A5578]">Modalidad</dt>
                    <dd className="font-medium text-[#1B2440]">{course.modality}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-[#031E61] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wider text-[#4A5578]">Certificación</dt>
                    <dd className="font-medium text-[#1B2440]">{course.certificateNote}</dd>
                  </div>
                </div>
              </dl>

              <Button
                type="button"
                size="lg"
                className="w-full"
                onClick={() => setEnrollOpen(true)}
              >
                {isWebinar ? "Reservar mi lugar gratis" : "Inscribirme a esta edición"}
              </Button>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-serif text-3xl text-[#031E61]">
              Programa y contenidos
            </h2>
            <div className="space-y-4">
              {course.modules.map((mod) => (
                <div
                  key={mod.title}
                  className="rounded-[20px] border border-[#E2E6F0] bg-white p-6 sm:p-7 space-y-3"
                >
                  <h3 className="font-serif text-xl sm:text-2xl text-[#031E61]">
                    {mod.title}
                  </h3>
                  <ul className="space-y-2 text-[16px] text-[#4A5578]">
                    {mod.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-[#E0004D] shrink-0 mt-1" aria-hidden="true" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-serif text-3xl text-[#031E61]">
              A quién está dirigido
            </h2>
            <div className="rounded-[20px] border border-[#E2E6F0] bg-white p-6 sm:p-7 space-y-3">
              <ul className="space-y-3 text-[16px] text-[#4A5578]">
                {course.audience.map((person) => (
                  <li key={person} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-[#031E61] shrink-0 mt-1" aria-hidden="true" />
                    <span>{person}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[20px] border border-[#E2E6F0] bg-white p-6 space-y-3">
              <p className="font-serif text-xl text-[#031E61]">
                Certificado de aprobación
              </p>
              <div className="aspect-[4/3] rounded-[14px] border border-dashed border-[#031E61]/25 bg-[#F7F8FC] flex items-center justify-center p-4 text-center text-sm text-[#4A5578]">
                [Certificado modelo con aval institucional · Placeholder]
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnrollmentModal
        course={course}
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
      />
    </>
  );
}

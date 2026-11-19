import { Link } from "react-router-dom";
import { UserCheck, ArrowRight, Award } from "lucide-react";
import { siteConfig } from "@/src/data/siteConfig";
import { SeoHead } from "@/src/components/SeoHead";
import { Reveal } from "@/src/components/Reveal";
import { Button } from "@/src/components/ui/button";

export function AboutPage() {
  return (
    <>
      <SeoHead
        title="Sobre mí | Innova Segura — Higiene y Seguridad en Córdoba"
        description="Conocé a la profesional detrás de Innova Segura, su formación, matrícula, misión y el propósito de enseñar Higiene y Seguridad laboral con acompañamiento real."
        path="/sobre-mi"
      />

      <section className="bg-white pt-14 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="inline-flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
              <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
              <span>Sobre mí · Dirección académica</span>
            </p>
            <h1 className="font-serif text-[38px] sm:text-[50px] leading-[1.08] text-[#031E61]">
              Enseñar prevención desde la experiencia real en el terreno
            </h1>
            <p className="text-[18px] leading-relaxed text-[#4A5578]">
              {siteConfig.founder.shortBio}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16 sm:py-24 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="rounded-[24px] border border-[#E2E6F0] bg-white p-6 space-y-5">
                  <div className="aspect-[3/4] w-full rounded-[16px] border border-[#E2E6F0] bg-[#F7F8FC] flex flex-col items-center justify-center p-8 text-center space-y-4">
                    <div className="h-16 w-16 rounded-full bg-white border border-[#E2E6F0] flex items-center justify-center text-[#031E61]">
                      <UserCheck className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-serif text-xl text-[#031E61]">
                        [Foto profesional de la directora]
                      </p>
                      <p className="text-sm text-[#4A5578]">
                        {siteConfig.founder.name}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 space-y-2 text-[15px] text-[#4A5578]">
                    <p className="font-semibold text-[#031E61]">
                      {siteConfig.founder.name}
                    </p>
                    <p>{siteConfig.founder.title}</p>
                    <p>Matrícula habilitante: {siteConfig.founder.license}</p>
                    <p>Sede: {siteConfig.location}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-[17px] leading-[1.75] text-[#4A5578]">
                <h2 className="font-serif text-3xl sm:text-4xl text-[#031E61]">
                  Cómo nació Innova Segura
                </h2>
                {siteConfig.founder.storyParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}

                <div className="rounded-[20px] border border-[#E2E6F0] bg-white p-7 space-y-3 mt-8">
                  <div className="flex items-center gap-2.5 text-[#031E61] font-medium">
                    <Award className="h-5 w-5 text-[#E0004D]" aria-hidden="true" />
                    <span>Formación y credenciales</span>
                  </div>
                  <ul className="space-y-2 text-[16px] text-[#4A5578]">
                    <li>• {siteConfig.founder.title}</li>
                    <li>• Matrícula profesional: {siteConfig.founder.license}</li>
                    <li>• Especialización y experiencia docente: [Completar con formación real]</li>
                    <li>• Asesoramiento técnico a empresas en Córdoba y región: [XX] años</li>
                  </ul>
                </div>

                <blockquote className="py-6 border-y border-[#E2E6F0] my-8">
                  <p className="font-serif italic text-2xl leading-relaxed text-[#031E61]">
                    “{siteConfig.founder.quote}”
                  </p>
                </blockquote>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {siteConfig.missionVisionValues.map((item) => (
              <div
                key={item.title}
                className="rounded-[20px] border border-[#E2E6F0] bg-[#F7F8FC] p-7 space-y-3"
              >
                <h2 className="font-serif text-2xl text-[#031E61]">{item.title}</h2>
                <p className="text-[16px] leading-relaxed text-[#4A5578]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[24px] bg-[#031E61] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="font-serif text-2xl sm:text-3xl text-white">
                ¿Querés conocer los próximos cursos en vivo?
              </h2>
              <p className="text-white/80 text-[16px]">
                Revisá el calendario 2027 de febrero a diciembre y elegí la edición que mejor se adapte a tu etapa profesional.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/cursos">
                <span>Ver calendario 2027</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

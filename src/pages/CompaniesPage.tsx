import { Check } from "lucide-react";
import { companyServices } from "@/src/data/services";
import { SeoHead } from "@/src/components/SeoHead";
import { Reveal } from "@/src/components/Reveal";
import { CompanyQuoteForm } from "@/src/components/CompanyQuoteModal";

export function CompaniesPage() {
  return (
    <>
      <SeoHead
        title="Capacitación In Company Córdoba y Argentina | Innova Segura"
        description="Capacitación in company en Higiene y Seguridad laboral en Córdoba y todo el país. Programas a medida, EPP, ergonomía, brigadas y constancias para ART."
        path="/empresas"
      />

      <section className="bg-white pt-14 pb-16 sm:pt-20 sm:pb-20 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="inline-flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
              <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
              <span>Capacitación In Company · Córdoba y todo el país</span>
            </p>
            <h1 className="font-serif text-[38px] sm:text-[50px] leading-[1.08] text-[#031E61]">
              Capacitaciones laborales diseñadas para la realidad de tu empresa
            </h1>
            <p className="text-[18px] leading-relaxed text-[#4A5578]">
              Transformamos los requisitos de la Ley 19.587 y la SRT en instancias participativas, claras y aplicables para operarios, mandos medios y áreas administrativas.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16 sm:py-24 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl space-y-3 mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#031E61]">
                Líneas de capacitación disponibles
              </h2>
              <p className="text-[17px] text-[#4A5578]">
                Cada propuesta se ajusta a la nómina, turnos operativos y riesgos propios de tu establecimiento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyServices.map((service) => (
                <article
                  key={service.index}
                  className="rounded-[20px] border border-[#E2E6F0] bg-white p-6 sm:p-7 space-y-4"
                >
                  <span className="text-xs font-semibold tracking-wider text-[#E0004D] tabular-nums">
                    {service.index}
                  </span>
                  <h3 className="font-serif text-2xl leading-snug text-[#031E61]">
                    {service.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#4A5578]">
                    {service.description}
                  </p>
                  <ul className="pt-3 border-t border-[#E2E6F0] space-y-2 text-sm text-[#1B2440]">
                    {service.deliverables.map((del) => (
                      <li key={del} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-[#E0004D] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[20px] sm:rounded-[24px] border border-[#E2E6F0] bg-[#F7F8FC] p-6 sm:p-10 lg:p-12 space-y-8">
            <div className="space-y-3 max-w-2xl">
              <h2 className="font-serif text-2xl sm:text-4xl text-[#031E61]">
                Pedí una propuesta para tu empresa
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#4A5578]">
                Completá los datos de tu organización y te enviamos un plan de capacitación y presupuesto a medida dentro de las próximas 48 horas hábiles.
              </p>
            </div>
            <CompanyQuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}

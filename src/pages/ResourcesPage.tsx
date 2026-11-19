import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { articles } from "@/src/data/articles";
import { SeoHead } from "@/src/components/SeoHead";
import { GuideDownloadBlock } from "@/src/components/GuideDownloadBlock";

export function ResourcesPage() {
  return (
    <>
      <SeoHead
        title="Recursos gratuitos de Higiene y Seguridad | Innova Segura"
        description="Artículos prácticos sobre Ley 19.587, cobertura de ART, uso correcto de EPP y guía gratuita descargable para profesionales y empresas."
        path="/recursos"
      />

      <section className="bg-white pt-14 pb-16 sm:pt-20 sm:pb-20 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="inline-flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
              <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
              <span>Biblioteca gratuita</span>
            </p>
            <h1 className="font-serif text-[38px] sm:text-[50px] leading-[1.08] text-[#031E61]">
              Normativa argentina explicada sin vueltas
            </h1>
            <p className="text-[18px] leading-relaxed text-[#4A5578]">
              Guías breves y lecturas prácticas para estudiantes, profesionales de Higiene y Seguridad y responsables de equipos.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <h2 className="mt-3 font-serif text-2xl leading-snug text-[#031E61]">
                    <Link
                      to={`/recursos/${article.slug}`}
                      className="hover:text-[#E0004D] transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[16px] leading-relaxed text-[#4A5578]">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E2E6F0]">
                  <Link
                    to={`/recursos/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#031E61] hover:text-[#E0004D] transition-colors"
                  >
                    <span>Leer artículo completo</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <GuideDownloadBlock />
        </div>
      </section>
    </>
  );
}

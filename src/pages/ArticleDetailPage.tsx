import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { articles } from "@/src/data/articles";
import { siteConfig } from "@/src/data/siteConfig";
import { SeoHead } from "@/src/components/SeoHead";
import { GuideDownloadBlock } from "@/src/components/GuideDownloadBlock";
import { Button } from "@/src/components/ui/button";

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-[760px] px-4 sm:px-6 text-center space-y-5">
          <h1 className="font-serif text-4xl text-[#031E61]">
            Artículo no encontrado
          </h1>
          <p className="text-[17px] text-[#4A5578]">
            El recurso que buscás no está disponible o fue movido.
          </p>
          <Button asChild>
            <Link to="/recursos">Volver a recursos</Link>
          </Button>
        </div>
      </section>
    );
  }

  const related = articles.filter((a) => a.slug !== article.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    inLanguage: "es-AR",
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
    },
  };

  return (
    <>
      <SeoHead
        title={`${article.title} | Innova Segura`}
        description={article.excerpt}
        path={`/recursos/${article.slug}`}
        type="article"
        jsonLd={articleJsonLd}
      />

      <article className="bg-white pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[760px] px-4 sm:px-6">
          <Link
            to="/recursos"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#4A5578] hover:text-[#031E61] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Volver a recursos</span>
          </Link>

          <header className="space-y-4 pb-8 border-b border-[#E2E6F0]">
            <p className="text-sm font-medium text-[#4A5578]">
              <span className="text-[#E0004D] font-semibold">
                {article.category}
              </span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>{article.readTime}</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>{article.publishedLabel}</span>
            </p>
            <h1 className="font-serif text-[34px] sm:text-[46px] leading-[1.12] text-[#031E61]">
              {article.title}
            </h1>
            <p className="text-[18px] leading-relaxed text-[#4A5578]">
              {article.excerpt}
            </p>
          </header>

          <div className="my-8 rounded-[20px] border border-[#E2E6F0] bg-[#F7F8FC] p-6 sm:p-7 space-y-3">
            <h2 className="font-serif text-xl text-[#031E61]">
              Puntos clave de esta lectura
            </h2>
            <ul className="space-y-2.5 text-[16px] text-[#1B2440]">
              {article.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-[#E0004D] shrink-0 mt-1" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-10 text-[17px] leading-[1.8] text-[#1B2440]">
            {article.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#031E61]">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-[#4A5578]">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <aside className="mt-12 pt-8 border-t border-[#E2E6F0] space-y-3">
            <h2 className="font-serif text-xl text-[#031E61]">
              Marco normativo de referencia
            </h2>
            <ul className="space-y-1.5 text-[15px] text-[#4A5578]">
              {article.normativeReferences.map((ref) => (
                <li key={ref}>• {ref}</li>
              ))}
            </ul>
          </aside>
        </div>
      </article>

      <section className="bg-[#F7F8FC] py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 space-y-14">
          <GuideDownloadBlock />

          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#031E61]">
              Seguí leyendo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((item) => (
                <div
                  key={item.slug}
                  className="rounded-[20px] border border-[#E2E6F0] bg-white p-6 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <p className="text-xs font-medium text-[#4A5578]">
                      {item.category} · {item.readTime}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-[#031E61]">
                      {item.title}
                    </h3>
                  </div>
                  <Link
                    to={`/recursos/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#031E61] hover:text-[#E0004D] transition-colors"
                  >
                    <span>Leer artículo</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

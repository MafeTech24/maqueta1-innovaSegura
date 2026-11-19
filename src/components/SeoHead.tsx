import { Helmet } from "react-helmet-async";

interface SeoHeadProps {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function SeoHead({
  title,
  description,
  path = "/",
  type = "website",
  jsonLd,
}: SeoHeadProps) {
  const origin =
    typeof window !== "undefined" ? window.location.origin : "";
  const canonicalUrl = `${origin}${path}`;
  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Helmet>
      <html lang="es-AR" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {origin && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content={type} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content="Innova Segura" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {origin && <meta property="og:url" content={canonicalUrl} />}
      <meta
        property="og:image"
        content={`${origin}/assets/aistudio/image_4fce9dd2.png`}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

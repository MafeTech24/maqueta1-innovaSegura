import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Layout } from "@/src/components/Layout";
import { Button } from "@/src/components/ui/button";
import { HomePage } from "@/src/pages/HomePage";
import { AboutPage } from "@/src/pages/AboutPage";
import { CoursesPage } from "@/src/pages/CoursesPage";
import { CourseDetailPage } from "@/src/pages/CourseDetailPage";
import { CompaniesPage } from "@/src/pages/CompaniesPage";
import { ResourcesPage } from "@/src/pages/ResourcesPage";
import { ArticleDetailPage } from "@/src/pages/ArticleDetailPage";
import { ContactPage } from "@/src/pages/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFoundPage() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-[700px] px-4 sm:px-6 text-center space-y-5">
        <p className="text-sm font-medium text-[#E0004D]">Error 404</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#031E61]">
          No encontramos esa página
        </h1>
        <p className="text-[17px] text-[#4A5578]">
          El enlace puede haber cambiado o estar mal escrito. Podés volver al inicio o explorar el calendario 2027.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Button asChild>
            <Link to="/">Ir al inicio</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/cursos">Ver cursos 2027</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre-mi" element={<AboutPage />} />
            <Route path="/cursos" element={<CoursesPage />} />
            <Route path="/cursos/:slug" element={<CourseDetailPage />} />
            <Route path="/empresas" element={<CompaniesPage />} />
            <Route path="/recursos" element={<ResourcesPage />} />
            <Route path="/recursos/:slug" element={<ArticleDetailPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

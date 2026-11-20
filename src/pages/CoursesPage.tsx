import { useState } from "react";
import { courses2027, CourseItem } from "@/src/data/courses";
import { SeoHead } from "@/src/components/SeoHead";
import { CourseCard } from "@/src/components/CourseCard";
import { EnrollmentModal } from "@/src/components/EnrollmentModal";

export function CoursesPage() {
  const [filter, setFilter] = useState<"todos" | "curso" | "webinar">("todos");
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [enrollOpen, setEnrollOpen] = useState(false);

  const visibleCourses = courses2027.filter((c) =>
    filter === "todos" ? true : c.type === filter
  );

  return (
    <>
      <SeoHead
        title="Cursos 2027 de Higiene y Seguridad Online | Innova Segura"
        description="Calendario completo 2027 de cursos y webinars gratuitos online en vivo de Higiene y Seguridad laboral con normativa argentina y seguimiento docente."
        path="/cursos"
      />

      <section className="bg-white pt-14 pb-14 sm:pt-20 sm:pb-16 border-b border-[#E2E6F0]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <p className="inline-flex items-center gap-2.5 text-sm font-medium text-[#4A5578]">
                <span className="h-2 w-2 rounded-full bg-[#E0004D]" aria-hidden="true" />
                <span>Calendario 2027 · Febrero a diciembre</span>
              </p>
              <h1 className="font-serif text-[38px] sm:text-[50px] leading-[1.08] text-[#031E61]">
                Cursos y webinars online en vivo
              </h1>
              <p className="text-[18px] leading-relaxed text-[#4A5578]">
                Formación práctica sobre Ley 19.587, resoluciones SRT, ergonomía, investigación de accidentes y auditorías con acompañamiento docente real.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Filtrar por modalidad"
              className="inline-flex flex-wrap items-center gap-1 rounded-[14px] border border-[#E2E6F0] bg-[#F7F8FC] p-1.5 self-start lg:self-auto"
            >
              {[
                { id: "todos", label: "Todos" },
                { id: "curso", label: "Cursos arancelados" },
                { id: "webinar", label: "Webinars gratuitos" },
              ].map((tab) => {
                const active = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() =>
                      setFilter(tab.id as "todos" | "curso" | "webinar")
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
        </div>
      </section>

      <section className="bg-[#F7F8FC] py-16 sm:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCourses.map((course) => (
              <CourseCard
                key={course.slug}
                course={course}
                onEnroll={(c) => {
                  setSelectedCourse(c);
                  setEnrollOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <EnrollmentModal
        course={selectedCourse}
        open={enrollOpen}
        onOpenChange={setEnrollOpen}
      />
    </>
  );
}

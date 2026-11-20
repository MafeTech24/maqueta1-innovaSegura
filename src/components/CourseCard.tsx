import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CourseItem } from "@/src/data/courses";
import { Button } from "@/src/components/ui/button";

interface CourseCardProps {
  course: CourseItem;
  onEnroll: (course: CourseItem) => void;
}

export function CourseCard({ course, onEnroll }: CourseCardProps) {
  const isWebinar = course.type === "webinar";

  return (
    <article className="flex flex-col justify-between rounded-[20px] border border-[#E2E6F0] bg-white p-6 sm:p-7 transition-all duration-200 hover:border-[#031E61]/30 hover:shadow-[0_10px_30px_rgba(3,30,97,0.06)]">
      <div>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] font-medium text-[#4A5578]">
          <span className={isWebinar ? "text-[#E0004D] font-semibold" : "text-[#031E61] font-semibold"}>
            {isWebinar ? "Webinar gratuito" : "Curso en vivo"}
          </span>
          <span aria-hidden="true">·</span>
          <span>{course.dateLabel}</span>
        </div>

        <h3 className="mt-3 font-serif text-[23px] leading-[1.25] text-[#031E61]">
          <Link
            to={`/cursos/${course.slug}`}
            className="hover:text-[#E0004D] transition-colors"
          >
            {course.title}
          </Link>
        </h3>

        <p className="mt-3 text-[16px] leading-relaxed text-[#4A5578]">
          {course.shortDescription}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-[#E2E6F0] space-y-4">
        <div className="flex items-baseline justify-between gap-4 text-sm">
          <span className="text-[#4A5578]">{course.duration}</span>
          <span className="font-semibold text-[#031E61] tabular-nums shrink-0">
            {course.price}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/cursos/${course.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#031E61] hover:text-[#E0004D] transition-colors whitespace-nowrap"
          >
            <span>Ver detalle</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Button
            type="button"
            size="sm"
            variant={isWebinar ? "navy" : "primary"}
            onClick={() => onEnroll(course)}
          >
            Inscribirme
          </Button>
        </div>
      </div>
    </article>
  );
}

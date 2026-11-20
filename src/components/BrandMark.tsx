import { Link } from "react-router-dom";
import { siteConfig } from "@/src/data/siteConfig";
import { cn } from "@/src/lib/utils";

interface BrandMarkProps {
  inverted?: boolean;
  className?: string;
  onClick?: () => void;
}

export function BrandMark({
  inverted = false,
  className,
  onClick,
}: BrandMarkProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-3 whitespace-nowrap shrink-0 group",
        className
      )}
    >
      <img
        src={siteConfig.logoPath}
        alt="Logo de Innova Segura"
        width={38}
        height={38}
        className={cn(
          "h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover shrink-0 transition-transform duration-200 group-hover:scale-[1.03]",
          inverted ? "ring-1 ring-white/25" : "ring-1 ring-[#031E61]/10"
        )}
      />
      <span
        className={cn(
          "font-serif text-[19px] sm:text-[21px] tracking-tight whitespace-nowrap shrink-0",
          inverted ? "text-white" : "text-[#031E61]"
        )}
      >
        {siteConfig.brandName}
      </span>
    </Link>
  );
}

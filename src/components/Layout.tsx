import { ReactNode, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, MessageCircle, Instagram, Youtube, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/src/data/siteConfig";
import { BrandMark } from "@/src/components/BrandMark";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { WhatsAppCommunityModal } from "@/src/components/WhatsAppCommunityModal";
import { cn } from "@/src/lib/utils";

const navItems = [
  { label: "Sobre mí", to: "/sobre-mi" },
  { label: "Cursos 2027", to: "/cursos" },
  { label: "Empresas", to: "/empresas" },
  { label: "Recursos", to: "/recursos" },
  { label: "Contacto", to: "/contacto" },
];

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1B2440]">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#031E61] focus:px-4 focus:py-2 focus:text-white"
      >
        Ir al contenido principal
      </a>

      <header className="sticky top-0 z-40 border-b border-[#E2E6F0] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[64px] sm:h-[68px] max-w-[1200px] items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
          <BrandMark />

          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-5 xl:gap-7"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "text-[15px] font-medium whitespace-nowrap shrink-0 transition-colors border-b-2 py-1",
                    isActive
                      ? "text-[#031E61] border-[#E0004D]"
                      : "text-[#4A5578] border-transparent hover:text-[#031E61] hover:border-[#031E61]/30"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              type="button"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => setCommunityOpen(true)}
            >
              Sumate a la comunidad
            </Button>

            <button
              type="button"
              aria-label="Abrir menú de navegación"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex lg:hidden h-11 w-11 items-center justify-center rounded-[12px] border border-[#E2E6F0] text-[#031E61] hover:bg-[#F7F8FC] cursor-pointer"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <main id="contenido-principal" className="flex-1">
        {children}
      </main>

      <footer className="bg-[#021547] text-white border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/12">
            <div className="md:col-span-5 space-y-5">
              <BrandMark inverted />
              <p className="text-[15px] leading-relaxed text-white/75 max-w-sm">
                Academia de capacitación en Higiene y Seguridad laboral. Cursos y webinars online en vivo con acompañamiento real y capacitación in company desde Córdoba para toda la Argentina.
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
                <a
                  href={siteConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Innova Segura"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Instagram className="h-4 w-4 text-[#E0004D]" aria-hidden="true" />
                  <span>{siteConfig.contact.instagramHandle}</span>
                </a>
                <a
                  href={siteConfig.contact.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube de Innova Segura"
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Youtube className="h-4 w-4 text-[#E0004D]" aria-hidden="true" />
                  <span>{siteConfig.contact.youtubeHandle}</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-4">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/60">
                Navegación
              </h2>
              <ul className="space-y-2.5 text-[15px]">
                <li>
                  <Link to="/" className="text-white/80 hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-white/60">
                Contacto
              </h2>
              <ul className="space-y-3 text-[15px] text-white/80">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 mt-1 shrink-0 text-[#E0004D]" aria-hidden="true" />
                  <span>{siteConfig.location} · Cursos online para todo el país</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 mt-1 shrink-0 text-[#E0004D]" aria-hidden="true" />
                  <span className="break-all">{siteConfig.contact.email}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MessageCircle className="h-4 w-4 mt-1 shrink-0 text-[#E0004D]" aria-hidden="true" />
                  <span>{siteConfig.contact.whatsappDisplay}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-white/65">
            <p className="shrink-0">
              © {new Date().getFullYear()} {siteConfig.brandName}. Todos los derechos reservados.
            </p>
            <p className="sm:text-right">
              {siteConfig.developerCredit}{" "}
              <a
                href={siteConfig.developerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white hover:text-[#E0004D] underline underline-offset-4 transition-colors"
              >
                {siteConfig.developerName}
              </a>
            </p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => setCommunityOpen(true)}
        aria-label="Abrir contacto y comunidad de WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2.5 rounded-full bg-[#031E61] px-4 text-sm font-medium text-white shadow-lg ring-1 ring-white/15 hover:bg-[#021547] transition-all cursor-pointer"
      >
        <MessageCircle className="h-5 w-5 text-[#E0004D]" aria-hidden="true" />
        <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
      </button>

      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Menú</DialogTitle>
          </DialogHeader>
          <nav aria-label="Navegación móvil" className="flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-[12px] px-3 py-2.5 text-[16px] font-medium text-[#1B2440] hover:bg-[#F7F8FC] hover:text-[#031E61]"
            >
              Inicio
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-[12px] px-3 py-2.5 text-[16px] font-medium text-[#1B2440] hover:bg-[#F7F8FC] hover:text-[#031E61]"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-[#E2E6F0]">
              <Button
                type="button"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCommunityOpen(true);
                }}
              >
                Sumate a la comunidad
              </Button>
            </div>
          </nav>
        </DialogContent>
      </Dialog>

      <WhatsAppCommunityModal
        open={communityOpen}
        onOpenChange={setCommunityOpen}
      />
    </div>
  );
}

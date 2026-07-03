import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portafolio de Proyectos Web en Puerto Rico",
  description:
    "Mira ejemplos reales de páginas web y producción de contenido visual hechas por ForTek PR para negocios en Puerto Rico: talleres, barberías y atletas.",
};

export default function PortafolioPage() {
  return (
    <div className="px-6 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Portafolio de Proyectos" />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <PortfolioCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

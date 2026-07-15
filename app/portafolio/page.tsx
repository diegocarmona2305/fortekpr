import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PortfolioZigzagCard from "@/components/PortfolioZigzagCard";
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

        <div className="mt-16 flex flex-col gap-20 lg:mt-20 lg:gap-28">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <PortfolioZigzagCard key={project.name} project={project} position={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

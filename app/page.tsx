import Hero from "@/components/Hero";
import ServiciosPreview from "@/components/ServiciosPreview";
import PortafolioPreview from "@/components/PortafolioPreview";
import Proceso from "@/components/Proceso";
import Metricas from "@/components/Metricas";
import CTAFinal from "@/components/CTAFinal";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiciosPreview />
      <PortafolioPreview />
      <Proceso />
      <Metricas />
      <CTAFinal />
    </>
  );
}

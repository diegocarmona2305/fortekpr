import type { Metadata } from "next";
import ServiciosCategoryTabs from "@/components/ServiciosCategoryTabs";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";
import { PAYMENT_MODEL } from "@/lib/pricing";
import { PHONE_DISPLAY, PHONE_LINK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios y Precios de Páginas Web en Puerto Rico",
  description:
    "Precios de páginas web informativas, tiendas en línea, portafolios personales y producción de contenido visual de ForTek PR en Puerto Rico. Planes desde $174.99.",
};

export default function ServiciosPage() {
  return (
    <div className="px-6 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Servicios y Precios" />

        <div className="mt-14">
          <ServiciosCategoryTabs />
        </div>

        <FadeIn className="mt-20 rounded-2xl border border-primary/30 bg-[#161005] px-6 py-6 text-center">
          <p className="font-semibold text-white">{PAYMENT_MODEL}</p>
          <p className="mt-2 text-sm text-white/60">
            ¿Prefieres hablar directo?{" "}
            <a href={PHONE_LINK} className="font-semibold text-accent hover:underline">
              Llámanos al {PHONE_DISPLAY}
            </a>
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

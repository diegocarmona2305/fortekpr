import type { Metadata } from "next";
import ContactoContent from "@/components/ContactoContent";

export const metadata: Metadata = {
  title: "Contáctanos — Cotiza tu Proyecto",
  description:
    "Contacta a ForTek PR por WhatsApp o teléfono para cotizar tu página web, tienda en línea, portafolio personal o producción de contenido visual en Puerto Rico.",
};

export default function ContactoPage() {
  return <ContactoContent />;
}

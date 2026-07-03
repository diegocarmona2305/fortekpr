import type { Metadata } from "next";
import NosotrosContent from "@/components/NosotrosContent";

export const metadata: Metadata = {
  title: "Sobre Nosotros — Agencia Digital en la UPR Río Piedras",
  description:
    "Conoce la historia de ForTek PR, una agencia digital fundada por un estudiante de la UPR Río Piedras con la misión de llevar tecnología profesional a todo Puerto Rico.",
};

export default function NosotrosPage() {
  return <NosotrosContent />;
}

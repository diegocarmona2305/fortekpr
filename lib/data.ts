export const SERVICES_SUMMARY = [
  {
    icon: "web" as const,
    title: "Páginas Web",
    description:
      "Sitios modernos y rápidos, hechos a la medida de tu negocio para convertir visitantes en clientes.",
  },
  {
    icon: "content" as const,
    title: "Producción de Contenido",
    description:
      "Artes y videos profesionales para redes sociales que conectan con tu audiencia y venden tu marca.",
  },
  {
    icon: "portfolio" as const,
    title: "Portafolios Personales",
    description:
      "Presencia digital profesional para destacar tu talento, experiencia y proyectos personales.",
  },
];

export const PORTFOLIO_PREVIEW = [
  {
    name: "Professional Alignment & Repair Center",
    category: "Página Web",
    location: "Carolina, PR",
    description: "Taller mecánico premium con identidad oscura y automotriz.",
    accent: "#E01020",
  },
  {
    name: "Jean La Barber",
    category: "Página Web",
    location: "Puerto Rico",
    description: "Barbería premium con carrusel de trabajos y reservas por WhatsApp.",
    accent: "#C9A84C",
  },
  {
    name: "Valentina Dávila",
    category: "Contenido Visual",
    location: "Selección Nacional PR",
    description: "Campaña de posters cinematográficos para atleta de tenis de mesa.",
    accent: "#4A90D9",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consulta",
    description: "Hablamos sobre tu negocio y objetivos",
  },
  {
    number: "02",
    title: "Propuesta",
    description: "Te enviamos plan y precio exacto",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos tu proyecto paso a paso",
  },
  {
    number: "04",
    title: "Entrega",
    description: "Tu proyecto live, listo para crecer",
  },
];

export type Metric =
  | { end: number; suffix: string; label: string }
  | { display: string; label: string };

export const METRICS: Metric[] = [
  { end: 5, suffix: "+", label: "Proyectos" },
  { end: 4, suffix: "+", label: "Industrias" },
  { display: "1-3", label: "Semanas de Entrega" },
  { display: "🇵🇷", label: "Puerto Rico" },
];

export type Plan = {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
  delivery: string;
  addon?: string;
};

export const INFORMATIVOS_PLANS: Plan[] = [
  {
    name: "Tek Start",
    price: "$449.99",
    features: [
      "1 página (one page)",
      "Diseño mobile-first",
      "WhatsApp + redes integrados",
      "Scroll animations",
      "Dominio + hosting 1 año",
      "1 ronda de revisión",
    ],
    delivery: "Entrega en 1 semana",
  },
  {
    name: "Tek Pro",
    price: "$599.99",
    popular: true,
    features: [
      "Hasta 3 páginas",
      "Todo lo de Tek Start",
      "SEO básico",
      "2 rondas de revisión",
    ],
    delivery: "Entrega en 1-2 semanas",
    addon: "Add-on: rediseño de logo +$89",
  },
  {
    name: "Tek Elite",
    price: "$799.99",
    features: [
      "Hasta 5 páginas",
      "Todo lo de Tek Pro",
      "Bilingüe español/inglés",
      "Google Business Profile",
      "Logo incluido",
      "3 rondas de revisión",
    ],
    delivery: "Entrega en 2-3 semanas",
  },
];

export const SERVICIOS_TIENDAS_PLANS: Plan[] = [
  {
    name: "Tek Start",
    price: "$599.99",
    features: [
      "Hasta 3 páginas",
      "Citas en línea (Cal.com)",
      "Diseño mobile-first",
      "WhatsApp + redes integrados",
      "Dominio + hosting 1 año",
      "1 ronda de revisión",
    ],
    delivery: "Entrega en 1-2 semanas",
  },
  {
    name: "Tek Pro",
    price: "$799.99",
    popular: true,
    features: [
      "Hasta 5 páginas",
      "Todo lo de Tek Start",
      "SEO básico",
      "2 rondas de revisión",
    ],
    delivery: "Entrega en 2 semanas",
    addon: "Add-on: rediseño de logo +$89",
  },
  {
    name: "Tek Elite",
    price: "$989.99",
    features: [
      "Hasta 8 páginas",
      "Todo lo de Tek Pro",
      "Tienda Shopify",
      "Pagos con tarjeta",
      "Bilingüe español/inglés",
      "Google Business Profile",
      "Logo incluido",
      "3 rondas de revisión",
    ],
    delivery: "Entrega en 2-3 semanas",
  },
];

export const PORTFOLIO_PLANS: Plan[] = [
  {
    name: "Básico",
    price: "$174.99",
    features: ["One page", "Dominio + hosting incluido"],
    delivery: "Entrega en 3-4 días",
  },
  {
    name: "Profesional",
    price: "$249.99",
    features: ["Diseño elaborado", "Animaciones", "Descarga de CV", "Dominio + hosting incluido"],
    delivery: "Entrega en 4-5 días",
  },
  {
    name: "Premium",
    price: "$389.99",
    features: [
      "Next.js + Framer Motion",
      "Modo claro/oscuro",
      "Proyectos interactivos",
      "Formulario al email",
      "Dominio + hosting incluido",
    ],
    delivery: "Entrega en 6-7 días",
  },
];

export const CONTENT_PACKAGES = [
  { name: "Arte individual", price: "$35" },
  { name: "Paquete básico", price: "$200/mes", detail: "8 artes" },
  { name: "Paquete pro", price: "$350/mes", detail: "16 artes" },
  { name: "Video individual", price: "$75" },
  { name: "Paquete video", price: "$250/mes", detail: "4 videos" },
  { name: "Paquete combo", price: "$350/mes", detail: "8 artes + 2 videos" },
];

export const ADDITIONALS = [
  { name: "Diseño de logo", price: "$119.99" },
  { name: "Dominio + hosting", price: "$49.99" },
  { name: "Mantenimiento web", price: "$49.99/mes" },
];

export const PAYMENT_MODEL = "50% al firmar · 50% al entregar · Pagos via ATH Móvil o Cash";

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ServiciosTabs from "@/components/ServiciosTabs";
import PricingCard from "@/components/PricingCard";
import { ADDITIONALS, CONTENT_PACKAGES, PORTFOLIO_PLANS } from "@/lib/pricing";

const CATEGORIES = [
  { id: "web", label: "Páginas Web" },
  { id: "portafolios", label: "Portafolios Personales" },
  { id: "contenido", label: "Contenido Visual" },
  { id: "adicionales", label: "Adicionales" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

export default function ServiciosCategoryTabs() {
  const [active, setActive] = useState<CategoryId>("web");

  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-white/10 bg-[#111111] p-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                active === cat.id ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {active === cat.id && (
                <motion.span
                  layoutId="category-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mt-12"
        >
          {active === "web" && (
            <div>
              <p className="text-center text-white/70">
                Elige el plan que mejor se adapta a tu negocio.
              </p>
              <div className="mt-10">
                <ServiciosTabs />
              </div>
            </div>
          )}

          {active === "portafolios" && (
            <div>
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-white">Portafolios Personales</h2>
                <p className="mt-2 text-white/70">
                  Presencia digital profesional para destacar tu talento y proyectos.
                </p>
              </div>
              <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {PORTFOLIO_PLANS.map((plan) => (
                  <PricingCard key={plan.name} plan={plan} />
                ))}
              </div>
            </div>
          )}

          {active === "contenido" && (
            <div>
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-white">
                  Producción de Contenido Visual
                </h2>
                <p className="mt-2 text-white/70">
                  Artes y videos profesionales para tus redes sociales.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CONTENT_PACKAGES.map((pkg) => (
                  <div
                    key={pkg.name}
                    className="rounded-xl border border-white/10 bg-[#111111] p-6 transition-colors hover:border-primary/60"
                  >
                    <p className="font-bold text-white">{pkg.name}</p>
                    {pkg.detail && <p className="mt-1 text-sm text-white/60">{pkg.detail}</p>}
                    <p className="mt-3 text-xl font-extrabold text-primary">{pkg.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === "adicionales" && (
            <div>
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-white">Adicionales</h2>
              </div>
              <div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 bg-[#111111]">
                {ADDITIONALS.map((item) => (
                  <div key={item.name} className="flex items-center justify-between px-6 py-4">
                    <span className="text-white/85">{item.name}</span>
                    <span className="font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

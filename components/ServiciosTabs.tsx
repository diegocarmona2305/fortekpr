"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PricingCard from "@/components/PricingCard";
import { INFORMATIVOS_PLANS, SERVICIOS_TIENDAS_PLANS } from "@/lib/pricing";

const TABS = [
  { id: "informativos", label: "Informativos", plans: INFORMATIVOS_PLANS },
  { id: "servicios", label: "Servicios + Tiendas", plans: SERVICIOS_TIENDAS_PLANS },
] as const;

export default function ServiciosTabs() {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("informativos");
  const current = TABS.find((tab) => tab.id === active)!;

  return (
    <div>
      <div className="flex justify-center">
        <div className="inline-flex gap-1 rounded-full border border-white/10 bg-[#111111] p-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors ${
                active === tab.id ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              {active === tab.id && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
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
          className="mt-12 grid gap-6 lg:grid-cols-3"
        >
          {current.plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

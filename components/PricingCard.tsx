"use client";

import { motion } from "framer-motion";
import type { Plan } from "@/lib/pricing";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function PricingCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative flex flex-col rounded-2xl border p-8 ${
        plan.popular
          ? "border-primary bg-[#161005]"
          : "border-white/10 bg-[#111111] hover:border-primary/60"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
          Popular
        </span>
      )}

      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
      <p className="mt-2 text-3xl font-extrabold text-primary">{plan.price}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm font-medium text-white/60">{plan.delivery}</p>
      {plan.addon && (
        <p className="mt-1 text-sm font-medium text-accent">{plan.addon}</p>
      )}

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-bold transition-transform hover:scale-105 ${
          plan.popular ? "bg-primary text-white" : "border border-white text-white"
        }`}
      >
        Escríbenos por WhatsApp
      </a>
    </motion.div>
  );
}

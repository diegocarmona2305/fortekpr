"use client";

import { motion } from "framer-motion";
import { PHONE_DISPLAY, PHONE_LINK, WHATSAPP_LINK } from "@/lib/constants";

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a0e05] to-background px-6 py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,19,0.18),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p className="mt-4 text-lg text-white/80">
          Escríbenos hoy y recibe una consulta gratuita.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition-transform hover:scale-105"
        >
          Escríbenos por WhatsApp
        </a>
        <a
          href={PHONE_LINK}
          className="mt-4 text-sm font-medium text-white/60 transition-colors hover:text-primary"
        >
          o llámanos al {PHONE_DISPLAY}
        </a>
      </motion.div>
    </section>
  );
}

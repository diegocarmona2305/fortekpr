"use client";

import { motion } from "framer-motion";
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_LINK,
  PHONE_DISPLAY,
  PHONE_LINK,
  WHATSAPP_LINK,
} from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function ContactoContent() {
  return (
    <div className="flex min-h-[80vh] items-center px-6 py-32 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-2xl flex-col items-center text-center"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl"
        >
          Hablemos
        </motion.h1>

        <motion.p variants={item} className="mt-5 text-lg text-white/75">
          Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-10 py-5 text-base font-bold text-white transition-transform hover:scale-105"
          >
            Escríbenos por WhatsApp
          </a>
          <a
            href={PHONE_LINK}
            className="rounded-full border border-white px-10 py-5 text-base font-bold text-white transition-colors hover:bg-white hover:text-background"
          >
            Llámanos: {PHONE_DISPLAY}
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center gap-2 text-sm text-white/70 sm:flex-row sm:gap-6"
        >
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Instagram {INSTAGRAM_HANDLE}
          </a>
          <span className="hidden sm:inline text-white/30">·</span>
          <span>Pagos: ATH Móvil o Cash</span>
        </motion.div>
      </motion.div>
    </div>
  );
}

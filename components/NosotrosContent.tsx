"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import { WHATSAPP_LINK } from "@/lib/constants";
import type { Metric } from "@/lib/data";

const NOSOTROS_METRICS: Metric[] = [
  { end: 5, suffix: "+", label: "Proyectos" },
  { end: 4, suffix: "+", label: "Industrias" },
  { display: "1-3", label: "Semanas de Entrega" },
  { display: "Hecho en Puerto Rico", label: "" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function NosotrosContent() {
  return (
    <div className="px-6 pb-24 pt-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl"
            >
              Tecnología de primer nivel, nacida en el Recinto de Río Piedras
              de la UPR, hecha para Puerto Rico.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-white/75">
              Soy Diego, estudiante de Sistemas Computarizados de Información
              en la UPR Río Piedras y fundador de ForTek PR. Mientras completo
              mi bachillerato con honores, construyo una agencia con una
              visión clara — que ningún negocio en Puerto Rico se quede atrás
              por falta de acceso a tecnología profesional. Cada proyecto es
              una oportunidad de demostrar que la tecnología bien aplicada
              transforma negocios reales.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
              >
                Escríbenos por WhatsApp
              </a>
              <Link
                href="/portafolio"
                className="rounded-full border border-white px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-background"
              >
                Conoce nuestros proyectos
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <Image
              src="/logo-nosotros.png"
              alt="ForTek PR"
              fill
              sizes="(min-width: 1024px) 400px, 90vw"
              className="rounded-3xl border border-white/10 object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="mt-24 grid grid-cols-2 gap-8 rounded-2xl border border-white/10 bg-[#111111] px-6 py-12 text-center lg:grid-cols-4"
        >
          {NOSOTROS_METRICS.map((metric) => (
            <motion.div key={metric.label} variants={fadeUp}>
              <div className="text-3xl font-extrabold text-primary sm:text-4xl">
                {"end" in metric ? (
                  <Counter to={metric.end} suffix={metric.suffix} />
                ) : (
                  metric.display
                )}
              </div>
              {metric.label && (
                <p className="mt-2 text-sm font-medium text-white/80">{metric.label}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

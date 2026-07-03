"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ContentIcon, PortfolioIcon, WebIcon } from "@/components/icons";
import { SERVICES_SUMMARY } from "@/lib/data";

const icons = { web: WebIcon, content: ContentIcon, portfolio: PortfolioIcon };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ServiciosPreview() {
  return (
    <section className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Nuestros Servicios" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES_SUMMARY.map((service) => {
            const Icon = icons[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-2xl border border-white/10 bg-[#111111] p-8 transition-colors hover:border-primary"
              >
                <Icon className="h-10 w-10 text-primary" />
                <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/servicios"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  );
}

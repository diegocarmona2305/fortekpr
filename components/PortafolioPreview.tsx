"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { PORTFOLIO_PREVIEW } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function PortafolioPreview() {
  return (
    <section className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Nuestro Trabajo" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PORTFOLIO_PREVIEW.map((project) => (
            <motion.div
              key={project.name}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              style={{ ["--accent" as string]: project.accent }}
              className="rounded-2xl border border-white/10 bg-[#111111] p-8 transition-colors hover:border-[var(--accent)]"
            >
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                style={{ backgroundColor: `${project.accent}22`, color: project.accent }}
              >
                {project.category}
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{project.name}</h3>
              <p className="mt-1 text-sm text-white/50">{project.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/portafolio"
            className="rounded-full border border-white px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-background"
          >
            Ver portafolio completo
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import type { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

export default function PortfolioCard({
  project,
}: {
  project: (typeof PORTFOLIO_PROJECTS)[number];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ ["--accent" as string]: project.accent }}
      className="flex flex-col rounded-2xl border border-white/10 bg-[#111111] p-8 transition-colors hover:border-[var(--accent)]"
    >
      <span
        className="inline-block w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
        style={{ backgroundColor: `${project.accent}22`, color: project.accent }}
      >
        {project.category}
      </span>

      <h3 className="mt-5 text-xl font-bold text-white">{project.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
        {project.description}
      </p>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-background"
        >
          Ver proyecto
        </a>
      ) : (
        <p className="mt-6 text-xs uppercase tracking-wide text-white/40">
          Proyecto de contenido visual
        </p>
      )}
    </motion.div>
  );
}

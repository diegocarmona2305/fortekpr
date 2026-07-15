"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { PORTFOLIO_PROJECTS } from "@/lib/portfolio";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

export default function PortfolioZigzagCard({
  project,
  position,
}: {
  project: (typeof PORTFOLIO_PROJECTS)[number];
  position: number;
}) {
  const isEven = position % 2 === 0;
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();

  const imageHidden = reduceMotion
    ? { opacity: 1, x: 0, y: 0 }
    : isDesktop
      ? { opacity: 0, x: isEven ? 80 : -80, y: 0 }
      : { opacity: 0, x: 0, y: 40 };

  const textHidden = reduceMotion
    ? { opacity: 1, x: 0, y: 0 }
    : isDesktop
      ? { opacity: 0, x: isEven ? -60 : 60, y: 0 }
      : { opacity: 0, x: 0, y: 40 };

  if (!project.image) {
    return (
      <motion.div
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ ["--accent" as string]: project.accent }}
        className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-[#111111] p-8 text-center transition-colors hover:border-[var(--accent)]"
      >
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
          style={{ backgroundColor: `${project.accent}22`, color: project.accent }}
        >
          {project.category}
        </span>
        <h3 className="mt-5 text-xl font-bold text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{project.description}</p>
        <p className="mt-6 text-xs uppercase tracking-wide text-white/40">
          Proyecto de contenido visual
        </p>
      </motion.div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center gap-8 lg:gap-16 ${
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <motion.a
        href={project.url ?? undefined}
        target="_blank"
        rel="noopener noreferrer"
        initial={imageHidden}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        whileHover={{ rotate: 0, scale: 1.02 }}
        className="block w-full lg:w-1/2"
      >
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50 transition-transform duration-300 ${
            isEven ? "lg:rotate-3" : "lg:-rotate-3"
          }`}
        >
          <Image
            src={project.image}
            alt={`Vista previa de ${project.name}`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </motion.a>

      <motion.div
        initial={textHidden}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        style={{ ["--accent" as string]: project.accent }}
        className="w-full lg:w-1/2"
      >
        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
          style={{ backgroundColor: `${project.accent}22`, color: project.accent }}
        >
          {project.category}
        </span>
        <h3 className="mt-5 text-2xl font-bold text-white">{project.name}</h3>
        <p className="mt-3 text-base leading-relaxed text-white/70">{project.description}</p>
        <a
          href={project.url ?? undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-background"
        >
          Ver proyecto
        </a>
      </motion.div>
    </div>
  );
}

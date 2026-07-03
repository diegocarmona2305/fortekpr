"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { PROCESS_STEPS } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Proceso() {
  return (
    <section className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="¿Cómo trabajamos?" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="absolute top-6 left-0 right-0 hidden h-px bg-white/10 lg:block" />

          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="relative flex flex-col items-start"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-lg font-extrabold text-primary">
                {step.number}
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

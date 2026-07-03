"use client";

import { motion } from "framer-motion";
import Counter from "@/components/Counter";
import { METRICS } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 18 },
  },
};

export default function Metricas() {
  return (
    <section className="bg-[#111111] px-6 py-20 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-10 text-center lg:grid-cols-4"
      >
        {METRICS.map((metric) => (
          <motion.div key={metric.label} variants={item}>
            <div className="text-4xl font-extrabold text-primary sm:text-5xl">
              {"end" in metric ? (
                <Counter to={metric.end} suffix={metric.suffix} />
              ) : (
                metric.display
              )}
            </div>
            <p className="mt-2 text-sm font-medium text-white/80">{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

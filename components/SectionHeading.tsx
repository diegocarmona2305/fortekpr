"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  center = true,
}: {
  title: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={center ? "flex flex-col items-center text-center" : ""}
    >
      <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <span className="mt-4 block h-1 w-16 rounded-full bg-primary" />
    </motion.div>
  );
}

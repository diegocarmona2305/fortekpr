"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type MouseEvent } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,106,19,0.16), transparent 70%)`;

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-screen min-h-[640px] w-full items-center overflow-hidden"
    >
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-bg.jpg"
          alt="ForTek PR — tecnología en Puerto Rico"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-background/30" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{ backgroundImage: spotlight }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/25 blur-[110px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[130px]"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start px-6 lg:px-8"
      >
        <motion.span
          variants={item}
          className="relative mb-6 flex items-center rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium tracking-wide text-white"
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full border border-primary/60"
            animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          🇵🇷 DISPONIBLE EN PUERTO RICO
        </motion.span>

        <motion.h1
          variants={item}
          className="max-w-3xl text-5xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Technology · Forward
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl"
        >
          Transformamos negocios en Puerto Rico con presencia digital de
          primer nivel.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/servicios"
            className="group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            <span className="relative z-10">Ver servicios</span>
            <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-full border border-white px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-background"
          >
            <span className="relative z-10">Escríbenos por WhatsApp</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 1.2 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
      >
        <svg
          width="22"
          height="34"
          viewBox="0 0 22 34"
          fill="none"
          className="text-white/60"
        >
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="11" cy="10" r="3" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  );
}

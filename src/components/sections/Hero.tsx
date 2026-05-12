"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Github,
  Linkedin,
  Sparkles,
  ArrowRight,
  Code2,
} from "lucide-react";
import { profile } from "@/data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] flex-col items-center justify-center gap-10 overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black px-6 py-16 text-center shadow-[0_0_60px_rgba(0,0,0,0.6)] sm:px-10 sm:py-20 md:flex-row md:items-center md:justify-between md:text-left"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <motion.div
        className="relative space-y-6 md:max-w-xl"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.p
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-200"
          variants={fadeUp}
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          Available for remote roles
        </motion.p>

        <motion.h1
          className="text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl"
          variants={fadeUp}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-zinc-400 sm:justify-start sm:text-sm"
          variants={fadeUp}
        >
          <Code2 className="h-4 w-4 text-emerald-500/80" />
          {profile.role}
        </motion.p>

        <motion.p
          className="max-w-xl text-balance text-sm text-zinc-400 sm:text-base"
          variants={fadeUp}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
          variants={fadeUp}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-50 px-6 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-white"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Let&apos;s work together
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-900/40"
            whileHover={{ scale: 1.03, borderColor: "rgba(113,113,122,0.8)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkles className="h-4 w-4 text-amber-400/80" />
            View shipped work
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400 md:justify-start"
          variants={fadeUp}
        >
          <motion.a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-zinc-800/60 hover:text-zinc-200"
            whileHover={{ y: -2 }}
          >
            <Mail className="h-4 w-4 text-emerald-500/80" />
            <span className="hidden sm:inline">{profile.email}</span>
            <span className="sm:hidden">Email</span>
          </motion.a>
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-zinc-800/60 hover:text-zinc-200"
            whileHover={{ y: -2 }}
          >
            <Github className="h-4 w-4 text-zinc-400" />
            GitHub
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-2 transition hover:bg-zinc-800/60 hover:text-zinc-200"
            whileHover={{ y: -2 }}
          >
            <Linkedin className="h-4 w-4 text-blue-400/80" />
            LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative mt-4 flex justify-center md:mt-0"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="relative h-64 w-64 overflow-hidden rounded-3xl border border-zinc-700/80 bg-zinc-900/60 shadow-[0_24px_80px_rgba(0,0,0,0.9)] sm:h-72 sm:w-72 md:h-80 md:w-80"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <Image
            src="/profile.png"
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-32 bg-gradient-to-t from-emerald-500/20 via-transparent to-transparent blur-3xl" />
      </motion.div>
    </section>
  );
}

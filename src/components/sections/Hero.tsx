"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { highlights, profile, ticker } from "@/data/profile";
import { easeOut, fadeUp } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const loop = reduce ? ticker : [...ticker, ...ticker];
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -36]);

  return (
    <section id="top" ref={sectionRef} className="relative scroll-mt-28 pt-6 sm:pt-10">
      <div className="relative lg:grid lg:grid-cols-[minmax(0,1.12fr)_minmax(16rem,0.72fr)] lg:grid-rows-[auto_auto] lg:items-end">
        <motion.div
          className="relative z-10 lg:col-start-1 lg:row-start-1"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal"
          >
            {profile.role}
          </motion.p>
          <h1 className="mt-5 font-display text-[clamp(3rem,6vw,5.45rem)] leading-[0.9] tracking-[-0.045em] text-ink">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease: easeOut }}
              >
                Michael B.
              </motion.span>
            </span>
            <span className="mt-1 block overflow-hidden">
              <motion.span
                className="block italic text-ink/75"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, delay: 0.12, ease: easeOut }}
              >
                Oluwatimileyin
              </motion.span>
            </span>
          </h1>
          <motion.span
            aria-hidden
            className="mt-6 block h-px w-16 origin-left bg-signal"
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
          />
        </motion.div>

        <motion.figure
          className="relative z-20 mx-auto -mt-2 w-[min(100%,17.5rem)] lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:-mb-8 lg:ml-[-4.5rem] lg:mt-0 lg:w-[min(100%,24rem)] lg:max-w-none lg:justify-self-end"
          style={{ y: photoY }}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: easeOut }}
          >
            <Image
              src="/profile-cutout.png"
              alt={`Portrait of ${profile.name}`}
              width={537}
              height={858}
              priority
              className="relative h-auto w-full"
            />
          </motion.div>
        </motion.figure>

        <motion.div
          className="relative z-10 lg:col-start-1 lg:row-start-2"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-muted lg:mt-8">
            {profile.hero}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              href="#projects"
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="inline-flex items-center rounded-full bg-signal px-5 py-2.5 text-sm text-paper transition hover:brightness-110"
            >
              Selected work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={reduce ? undefined : { y: -3 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="inline-flex items-center rounded-full border border-ink/20 px-5 py-2.5 text-sm transition-colors hover:border-ink"
            >
              Start a project
            </motion.a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center px-2 py-2.5 text-sm text-muted transition hover:text-ink"
            >
              Download CV
            </a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted"
          >
            {profile.now}
          </motion.p>
        </motion.div>
      </div>

      <motion.dl
        className="relative z-30 mt-2 grid grid-cols-2 border-y border-ink/15 bg-paper md:grid-cols-4 lg:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={container}
      >
        {highlights.map((item, index) => (
          <motion.div
            key={item.label}
            variants={fadeUp}
            className={`px-4 py-6 ${index % 2 === 0 ? "border-r border-ink/15 md:border-r-0" : ""} ${
              index > 0 ? "md:border-l md:border-ink/15" : ""
            } ${index > 1 ? "border-t border-ink/15 md:border-t-0" : ""}`}
          >
            <dt className="font-display text-4xl tracking-[-0.04em] text-ink sm:text-5xl">{item.value}</dt>
            <dd className="mt-2 max-w-[14rem] text-sm leading-snug text-muted">{item.label}</dd>
          </motion.div>
        ))}
      </motion.dl>

      <div className="overflow-hidden border-b border-ink/15 py-4">
        <div className={`flex gap-8 ${reduce ? "flex-wrap" : "ticker w-max"}`}>
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/70"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-signal" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { experience } from "@/data/profile";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 rounded-3xl border border-zinc-800 bg-zinc-950/60 px-6 py-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] sm:px-10 sm:py-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <motion.div variants={item}>
          <SectionHeader
            icon={Briefcase}
            title="Experience"
            description="Teams I've helped ship production‑grade web, mobile, and API products with."
          />
        </motion.div>

        <div className="relative mt-10 pl-6 sm:pl-8">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/50 via-zinc-600 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-6">
            {experience.map((role, index) => (
              <motion.article
                key={`${role.company}-${role.period}`}
                className="relative grid gap-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 transition-colors sm:grid-cols-[1fr_minmax(0,2fr)] sm:gap-5 sm:p-6"
                variants={item}
                whileHover={{
                  borderColor: "rgba(113,113,122,0.9)",
                  boxShadow: "0 0 0 1px rgba(52,211,153,0.15), 0 20px 40px -20px rgba(0,0,0,0.5)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Timeline dot */}
                <motion.span
                  className="absolute -left-6 top-8 h-3 w-3 rounded-full border-2 border-zinc-800 bg-emerald-500/80 sm:-left-8"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 400, damping: 20 }}
                />

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-800/80 text-emerald-400">
                      <Briefcase className="h-4 w-4" />
                    </span>
                    <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                      {role.title}
                    </h3>
                  </div>
                  <p className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                    <MapPin className="h-3 w-3" />
                    {role.company} · {role.location}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <Calendar className="h-3 w-3" />
                    {role.type} · {role.period}
                  </p>
                </div>
                <ul className="space-y-2 text-sm text-zinc-300">
                  {role.highlights.map((highlight) => (
                    <motion.li
                      key={highlight}
                      className="flex gap-2"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500/70" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}


"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { experience } from "@/data/profile";
import { fadeUp } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="mt-24 scroll-mt-28 border-t border-ink/15 pt-16 md:mt-32 md:pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader
            index="03 — Experience"
            title="Where the products shipped."
            description="Fintech, commerce, and logistics. The titles are mobile. The work is the product: interface, API, and the release."
          />
        </motion.div>

        <div className="mt-12">
          {experience.map((role) => (
            <motion.article
              key={`${role.company}-${role.period}`}
              variants={fadeUp}
              className="role-row grid gap-6 border-t border-ink/15 py-10 pl-4 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                  {role.period}
                  {role.current ? " · Now" : ""}
                </p>
                <h3 className="mt-3 font-display text-4xl tracking-[-0.04em]">{role.company}</h3>
                <p className="mt-2 text-sm text-ink">{role.title}</p>
                <p className="mt-1 text-sm text-muted">
                  {role.location}
                  {role.type ? ` · ${role.type}` : ""}
                </p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-muted md:col-span-8">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="mt-2 h-1 w-1 bg-signal" aria-hidden />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

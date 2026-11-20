"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { certifications, leadership, profile } from "@/data/profile";
import { fadeUp } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export function BackgroundSection() {
  return (
    <section id="background" className="mt-24 scroll-mt-28 border-t border-ink/15 pt-16 md:mt-32 md:pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader
            index="04 — Background"
            title="Degree, credentials, community."
            description="Computer science, recent generative-AI coursework, and the communities I’ve stayed part of."
          />
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <motion.article variants={fadeUp} className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">Education</p>
            <h3 className="mt-3 font-display text-3xl tracking-[-0.03em]">{profile.education.degree}</h3>
            <p className="mt-2 text-sm text-ink">{profile.education.school}</p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {profile.education.years}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Coursework includes {profile.education.coursework.join(", ")}.
            </p>
          </motion.article>

          <motion.article variants={fadeUp} className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">Certifications</p>
            <ul className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
              {certifications.map((item) => (
                <li key={item.name} className="grid gap-1 py-4 sm:grid-cols-[1fr_auto]">
                  <h3 className="text-sm font-medium text-ink">{item.name}</h3>
                  <p className="font-mono text-[11px] text-muted sm:text-right">{item.year}</p>
                  <p className="text-xs text-signal sm:col-span-2">{item.issuer}</p>
                  <p className="text-sm leading-relaxed text-muted sm:col-span-2">{item.detail}</p>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.div variants={fadeUp} className="mt-12 grid gap-6 border-t border-ink/15 pt-8 sm:grid-cols-2">
          {leadership.map((item) => (
            <div key={item.name}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">Membership</p>
              <h3 className="mt-2 font-display text-2xl tracking-[-0.03em]">{item.name}</h3>
              <p className="mt-1 text-sm text-muted">
                {item.role} · {item.period}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

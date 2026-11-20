"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";
import { fadeUp } from "@/lib/motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export function AboutSection() {
  return (
    <section id="about" className="mt-24 scroll-mt-28 border-t border-ink/15 pt-16 md:mt-32 md:pt-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={container}
      >
        <motion.div variants={fadeUp}>
          <SectionHeader
            index="02 — About"
            title="Full stack, in practice."
            description="A website, an API, and a mobile client are one product. I stay with it until all three agree."
          />
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <motion.div variants={fadeUp} className="space-y-5 text-base leading-relaxed text-muted">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
          <motion.ol variants={container} className="divide-y divide-ink/10 border-y border-ink/10">
            {profile.principles.map((item, index) => (
              <motion.li key={item.title} variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-4 py-5">
                <span className="font-mono text-[11px] text-signal">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-2xl tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skillGroups.map((group) => (
            <motion.div key={group.title} variants={fadeUp}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">{group.title}</h3>
              <ul className="mt-4 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="skill-item border-b border-ink/10 py-1.5 text-sm text-ink/80">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

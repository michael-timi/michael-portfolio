"use client";

import { motion } from "framer-motion";
import { Code2, Wrench, Heart, GraduationCap, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { profile } from "@/data/profile";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const pillContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const pill = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function SkillPills({ items, icon: Icon }: { items: string[]; icon: LucideIcon }) {
  return (
    <motion.ul
      className="mt-3 flex flex-wrap gap-2"
      variants={pillContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {items.map((item) => (
        <motion.li key={item} variants={pill}>
          <motion.span
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/80 bg-zinc-800/50 px-3 py-1.5 text-xs text-zinc-300"
            whileHover={{ scale: 1.05, borderColor: "rgba(52,211,153,0.4)", backgroundColor: "rgba(52,211,153,0.08)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Icon className="h-3.5 w-3.5 text-emerald-500/80" />
            {item}
          </motion.span>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 rounded-3xl border border-zinc-800 bg-zinc-950/60 px-6 py-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] sm:px-10 sm:py-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.div variants={fadeIn}>
          <SectionHeader
            icon={GraduationCap}
            title="About"
            description="Background and what I work with."
          />
        </motion.div>
        <motion.p
          className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base"
          variants={fadeIn}
        >
          I&apos;m a mobile engineer with a strong computer science foundation
          from{" "}
          <span className="text-zinc-100">
            {profile.education.school}
          </span>{" "}
          ({profile.education.degree}). I enjoy building reliable, user-focused
          products and collaborating with designers, product managers, and
          backend teams to ship high-quality applications.
        </motion.p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          <motion.div variants={fadeIn}>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              <Code2 className="h-4 w-4 text-emerald-500/70" />
              Technologies
            </h3>
            <SkillPills items={profile.skills.technologies} icon={Code2} />
          </motion.div>
          <motion.div variants={fadeIn}>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              <Wrench className="h-4 w-4 text-amber-500/70" />
              Tools
            </h3>
            <SkillPills items={profile.skills.tools} icon={Wrench} />
          </motion.div>
          <motion.div variants={fadeIn}>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              <Heart className="h-4 w-4 text-rose-500/70" />
              Soft Skills
            </h3>
            <SkillPills items={profile.skills.softSkills} icon={Heart} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}


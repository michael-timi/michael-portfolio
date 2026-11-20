import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BackgroundSection } from "@/components/sections/BackgroundSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LayoutShell } from "@/components/sections/LayoutShell";

export default function Home() {
  return (
    <LayoutShell>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ExperienceSection />
      <BackgroundSection />
      <ContactSection />
    </LayoutShell>
  );
}

import { HeroSection } from "@/src/features/hero/components/HeroSection";
import { ProjectsSection } from "@/src/features/projects/components/ProjectsSection";
import { SkillsSection } from "@/src/features/skills/components/SkillsSection";
import { ExperienceSection } from "@/src/features/experience/components/ExperienceSection";
import { AboutSection } from "@/src/features/blog/components/AboutSection";
import { ContactSection } from "../features/contact/components/ContactSection";

export default function Home() {
  return (
    <>
    <section id="home"><HeroSection /></section>
     <section id="projects"><ProjectsSection /></section>
      <section id="skills"><SkillsSection /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="contact"><ContactSection /></section>
    </>
  );
}
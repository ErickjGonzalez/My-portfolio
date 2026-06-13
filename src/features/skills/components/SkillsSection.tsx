"use client";

import { motion, Variants } from "framer-motion";
import { useSkills } from "../hooks/useSkills";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};

export const SkillsSection = () => {
  const skills = useSkills();

  return (
    <section className="relative py-20 px-4 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-nebula-glow pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100"
        >
          Skills & Tech Stack
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-5"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="relative"
            >
              <div
                className="
                  relative overflow-hidden rounded-full
                  px-6 py-2.5 md:px-7 md:py-3
                  text-sm md:text-base font-medium
                  border border-purple-500/30
                  backdrop-blur-sm
                  bg-gradient-to-r from-purple-900/30 via-purple-600/40 to-purple-900/30
                  bg-[length:200%_100%] bg-left
                  transition-all duration-500 ease-out
                  hover:border-purple-400
                  hover:shadow-[0_0_15px_rgba(139,92,246,0.6)]
                  hover:bg-right
                  cursor-default
                  before:absolute before:inset-0
                  before:rounded-full before:bg-purple-400/40
                  before:scale-0 before:transition-transform before:duration-500 before:ease-out
                  hover:before:scale-[3]
                  before:pointer-events-none
                "
              >
                <span className="relative z-10 text-purple-100 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
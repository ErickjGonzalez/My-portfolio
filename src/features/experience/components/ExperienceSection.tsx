"use client";

import { motion } from "framer-motion";
import { useExperience } from "../hooks/useExperience";
import { FaGraduationCap, FaLaptopCode, FaBriefcase, FaCertificate, FaExternalLinkAlt, FaQuestionCircle } from "react-icons/fa";

const iconMap: Record<string, React.ElementType> = {
  education: FaGraduationCap,
  internship: FaBriefcase,
  project: FaLaptopCode,
  certification: FaCertificate,
};

export const ExperienceSection = () => {
  const experiences = useExperience();

  return (
    <section className="relative py-20 px-4 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-nebula-glow pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100"
        >
          Education & Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((item, idx) => {
            const Icon = iconMap[item.type] || FaQuestionCircle;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group"
              >
                <div className="relative h-full rounded-2xl bg-purple-950/20 backdrop-blur-sm border border-purple-500/30 p-6 transition-all duration-300 hover:border-purple-400/70 hover:shadow-[0_8px_25px_-5px_rgba(139,92,246,0.4)] hover:-translate-y-1">
                  <div className="absolute -top-4 left-6 bg-purple-600 p-2 rounded-full border border-purple-300/50 shadow-lg">
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  <div className="text-sm font-mono text-purple-300 mb-3 mt-2">
                    {item.period}
                  </div>

                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-purple-300 text-sm mt-1">{item.subtitle}</p>

                  <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                    {item.description.map((desc, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-purple-400 mt-1">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-4 text-xs text-purple-300 hover:text-purple-100 transition-colors"
                    >
                      Ver proyecto <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-purple-300/60 text-sm mt-12"
        >
         Always learning and looking for new challenges. ✨
        </motion.p>
      </div>
    </section>
  );
};
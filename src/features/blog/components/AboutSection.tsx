"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaUser, FaCode, FaHeart, FaCoffee } from "react-icons/fa";

export const AboutSection = () => {
  const aboutData = {
    name: "Erick Jesus Alvarado Gonzalez",
    role: "Full Stack Developer",
    description: `I'm a developer passionate about crafting elegant, functional experiences. I love learning new technologies and applying them to projects that make a real impact. I'm currently specializing in React and Laravel, and I'm always exploring new tools to keep growing and sharpening my skills.`,
    details: [
      { label: "Location", value: "México, Pachuca" },
      { label: "Email", value: "erickjgonzalez117@gmail.com" },
      { label: "Languages", value: "Spanish (Native), English (Intermediate)" },
    ],
    interests: ["Clean code", "New technologies", "Coffee ☕"],
  };

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
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20 group">
              <Image
                src="/images/profile2.jpeg"
                alt={aboutData.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 border border-purple-400/30 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">{aboutData.name}</h3>
            <p className="text-purple-300 font-medium">{aboutData.role}</p>
            <p className="text-gray-300 leading-relaxed">{aboutData.description}</p>

            <div className="space-y-2">
              {aboutData.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <span className="text-purple-400 font-medium w-24">{detail.label}:</span>
                  <span className="text-gray-300">{detail.value}</span>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <FaHeart className="text-purple-400" />
                Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-200 text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-500/30">
              <p className="text-purple-300/70 italic flex items-center gap-2">
                <FaCoffee className="text-purple-400" />
                Always learning, always creating.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
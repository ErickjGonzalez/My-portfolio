"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt, FaRegCopy, FaCheck } from "react-icons/fa";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const contactInfo = {
    email: "erickjgonzalez117@gmail.com",
    github: "https://github.com/ErickjGonzalez",
    linkedin: "https://www.linkedin.com/in/erick-jesus-alvarado-gonz%C3%A1lez-8189043b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgJRA99fzRaqmZwk2KxVmcw%3D%3D",
    twitter: "https://twitter.com/tuusuario",
    location: "Pachuca, MX",
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="relative py-20 px-4 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-nebula-glow pointer-events-none opacity-30" />

<div className="relative z-10 max-w-6xl mx-auto text-center">        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100"
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-16"
        >
         Do you have a project, an opportunity, or just want to say hello?
          <br />
          I'm just a click away.

        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative rounded-2xl bg-purple-950/20 backdrop-blur-sm border border-purple-500/30 p-6 transition-all duration-300 hover:border-purple-400/70 hover:shadow-[0_8px_25px_-5px_rgba(139,92,246,0.4)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 border border-purple-500/40 group-hover:scale-110 transition-transform">
                <FaEnvelope className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-purple-300 text-sm break-all">{contactInfo.email}</p>
              <button
                onClick={copyToClipboard}
                className="mt-4 inline-flex items-center gap-1 text-xs text-purple-300 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-green-400" /> Copy
                  </>
                ) : (
                  <>
                    <FaRegCopy /> Copy
                  </>
                )}
              </button>
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full rounded-2xl bg-purple-950/20 backdrop-blur-sm border border-purple-500/30 p-6 transition-all duration-300 hover:border-purple-400/70 hover:shadow-[0_8px_25px_-5px_rgba(139,92,246,0.4)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 border border-purple-500/40 group-hover:scale-110 transition-transform">
                <FaGithub className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-purple-300 text-sm">/ErickjGonzalez</p>
              <span className="inline-block mt-4 text-xs text-purple-300 group-hover:text-white transition-colors">
                See profile →
              </span>
            </a>
          </motion.div>

          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full rounded-2xl bg-purple-950/20 backdrop-blur-sm border border-purple-500/30 p-6 transition-all duration-300 hover:border-purple-400/70 hover:shadow-[0_8px_25px_-5px_rgba(139,92,246,0.4)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 border border-purple-500/40 group-hover:scale-110 transition-transform">
                <FaLinkedin className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-purple-300 text-sm">Let's Connect</p>
              <span className="inline-block mt-4 text-xs text-purple-300 group-hover:text-white transition-colors">
                See profile →
              </span>
            </a>
          </motion.div>

          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group"
          >
            <div className="rounded-2xl bg-purple-950/20 backdrop-blur-sm border border-purple-500/30 p-6 transition-all duration-300 hover:border-purple-400/70 hover:shadow-[0_8px_25px_-5px_rgba(139,92,246,0.4)] hover:-translate-y-1 h-full">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4 border border-purple-500/40 group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">Ubication</h3>
              <p className="text-purple-300 text-sm">{contactInfo.location}</p>
              <span className="inline-block mt-4 text-xs text-purple-300/60">Available for remote work</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-500/30"
        >
          <p className="text-purple-300/70 text-sm">
             Fast response | Interview availability
 
          </p>
        </motion.div>
      </div>
    </section>
  );
};
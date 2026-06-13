"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG } from "@/src/lib/constants";
import { Button } from "@/src/components/ui/Button";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-10">
      <div className="absolute inset-0 bg-nebula-glow pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-purple-500/50 p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600/20 to-purple-900/20 backdrop-blur-sm flex items-center justify-center">
              <Image
                src="/images/profile.jpeg"
                alt={SITE_CONFIG.name}
                width={160}
                height={160}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full border border-purple-400/30 animate-pulse" />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-white">
            {SITE_CONFIG.name}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-xl md:text-2xl text-purple-300/80 mt-4 font-light"
        >
          {SITE_CONFIG.title}
        </motion.p>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <Button href={SITE_CONFIG.github} variant="outline">
            <FaGithub className="w-4 h-4" />
            GitHub
          </Button>
          <Button href={SITE_CONFIG.linkedin} variant="outline">
            <FaLinkedin className="w-4 h-4" />
            LinkedIn
          </Button>
          <Button href={SITE_CONFIG.cvUrl} variant="primary">
            <FaFilePdf className="w-4 h-4" />
            Download CV
          </Button>
        </motion.div>

        
      </motion.div>
    </section>
  );
};
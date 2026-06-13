"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/src/lib/constants";
import { ProjectCard } from "@/src/features/projects/components/ProjectCard";

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
            Outstanding Projects
          </span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {PROJECTS.length > 3 && (
        <div className="flex justify-center mt-8">
          {!showAll ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
            >
              See more
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(false)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/30 to-purple-700/30 border border-purple-500/50 text-purple-200 font-medium shadow-lg shadow-purple-500/10 hover:shadow-purple-500/30 transition-shadow"
            >
              See less
            </motion.button>
          )}
        </div>
      )}
    </section>
  );
};

"use client";

import Image from "next/image";
import { Project } from "@/src/lib/constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group relative h-[400px] w-full perspective-1000">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-gray-900 to-black">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <rect
              x="0.5"
              y="0.5"
              width="99"
              height="99"
              rx="8"
              fill="none"
              stroke="#a855f7"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeDasharray="10 400"
              style={{ animation: "dash 6s linear infinite" }}
            />
          </svg>

          <div className="relative h-full w-full bg-black rounded-2xl p-5 flex flex-col">
            <div className="relative w-full h-48 rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="mt-4 flex-1">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{project.shortDescription}</p>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-purple-500/30 bg-black">
          <div className="h-full w-full p-6 flex flex-col">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
              {project.name}
            </h3>
            <p className="text-gray-300 text-sm mt-3 leading-relaxed flex-1">
              {project.description}
            </p>
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wider text-purple-400 mb-2">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-gray-800 text-gray-200 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-full transition"
                >
                  <FaGithub className="w-4 h-4" />
                  code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-full transition"
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
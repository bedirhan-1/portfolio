"use client";

import { useState } from "react";
import projectsData from "@/data/projects.json";
import ProjectCard from "../ProjectCard";
import AnimatedText from "../ui/AnimatedText";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  // Tüm benzersiz tagleri topla
  const allTags = [
    "All",
    ...Array.from(new Set(projectsData.projects.flatMap((p) => p.tags))),
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.tags.includes(filter));

  return (
    <section
      className="relative w-full py-24 bg-background px-4 sm:px-6 lg:px-8 overflow-hidden"
      id="projects"
    >
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-sm font-medium tracking-widest text-blue-400 uppercase">
              Selected Works
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display mb-8">
            <AnimatedText text="Featured Projects" />
          </h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {allTags.slice(0, 6).map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === tag
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

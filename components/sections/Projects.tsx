"use client";

import MasonryGrid from "@/components/MasonryGrid";

export default function ProjectsSection() {
  return (
    <section
      className="flex justify-center items-center min-h-screen w-full p-10 gap-10 mix-blend-difference pt-24"
      id="projects"
    >
      <MasonryGrid />
    </section>
  );
}

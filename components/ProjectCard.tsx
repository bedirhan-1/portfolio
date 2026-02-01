"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
  tags: string[];
  year: string;
  index: number;
}

export default function ProjectCard({
  title,
  description,
  link,
  image,
  tags,
  year,
  index,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={link} target="_blank" className="block">
        <CardContainer className="inter-var w-full">
          <CardBody className="relative group/card w-full h-auto min-h-[500px] rounded-xl p-6 border border-white/10 bg-zinc-900/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/[0.1] transition-all duration-300">
            <div className="flex justify-between items-center mb-4">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white font-display"
              >
                {title}
              </CardItem>
              <CardItem
                translateZ="50"
                className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-xs text-blue-400 font-mono"
              >
                {year}
              </CardItem>
            </div>

            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-400 text-sm max-w-sm mt-2 line-clamp-2"
            >
              {description}
            </CardItem>

            <CardItem translateZ="100" className="w-full mt-6 grow">
              <div className="relative w-full h-60 rounded-lg overflow-hidden group-hover/card:shadow-xl">
                <Image
                  src={image}
                  height="1000"
                  width="1000"
                  className="h-full w-full object-cover rounded-xl group-hover/card:scale-105 transition-transform duration-500"
                  alt={title}
                />
                <div className="absolute inset-0 bg-black/20 group-hover/card:bg-transparent transition-colors duration-300" />
              </div>
            </CardItem>

            <div className="flex justify-between items-center mt-8">
              <CardItem translateZ={20} className="flex flex-wrap gap-2">
                {tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-zinc-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </CardItem>

              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-colors"
              >
                View Project
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </Link>
    </motion.div>
  );
}

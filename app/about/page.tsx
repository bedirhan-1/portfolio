"use client";

import { motion } from "framer-motion";
import AnimatedText, { AnimatedCharacters } from "@/components/ui/AnimatedText";
import GradientOrbs from "@/components/ui/GradientOrbs";
import ContactForm from "@/components/ContactForm"; // Eski component, Contact sayfasına yönlendirme yapılacaksa kaldırılabilir.

export default function About() {
  const skills = [
    {
      name: "Frontend Development",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      name: "Backend Development",
      items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Supabase"],
    },
    {
      name: "Tools & DevOps",
      items: ["Git", "Docker", "VS Code", "Figma", "Vercel"],
    },
  ];

  return (
    <div className="w-full bg-background pt-32 pb-20 relative overflow-hidden">
      <GradientOrbs />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold font-display mb-8">
                <AnimatedCharacters text="About Me" />
              </h1>

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Hello! I'm Bedirhan, a passionate Fullstack Developer based in
                  Turkey. My journey in web development started with a curiosity
                  about how things work on the internet, which quickly turned
                  into a love for creating visually stunning and highly
                  functional applications.
                </p>
                <p>
                  I believe that a great website isn't just about code; it's
                  about telling a story and creating an experience. I strive to
                  blend{" "}
                  <span className="text-white font-medium">
                    aesthetic design
                  </span>{" "}
                  with{" "}
                  <span className="text-white font-medium">
                    robust engineering
                  </span>{" "}
                  to build digital products that leave a lasting impression.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or seeking
                  inspiration in the world of art and design.
                </p>
              </div>
            </motion.div>

            {/* Experience or Philosophy */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold font-display mb-6 text-white flex items-center gap-3">
                <span className="w-8 h-px bg-blue-400" />
                My Philosophy
              </h2>
              <blockquote className="border-l-2 border-blue-400/30 pl-6 italic text-xl text-gray-400">
                "Simplicity is the ultimate sophistication. I aim to create
                interfaces that feel natural, intuitive, and effortlessly
                luxurious."
              </blockquote>
            </motion.div>
          </div>

          {/* Sidebar - Skills */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-zinc-900/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 sticky top-32"
            >
              <h2 className="text-2xl font-bold font-display mb-8">
                Technical Skills
              </h2>

              <div className="space-y-8">
                {skills.map((category, index) => (
                  <div key={category.name}>
                    <h3 className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-4">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <h3 className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-widest">
                  Connect
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/bedirhan-1"
                    target="_blank"
                    className="p-2 bg-white/5 rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    Github
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:bedirhangiden.info@gmail.com"
                    className="p-2 bg-white/5 rounded-full hover:bg-green-600 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

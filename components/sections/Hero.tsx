"use client";

import { motion } from "framer-motion";
import AnimatedText, { AnimatedCharacters } from "../ui/AnimatedText";
import GradientOrbs from "../ui/GradientOrbs";
import MagneticButton from "../ui/MagneticButton";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center items-center w-full overflow-hidden py-10 px-4 sm:px-6">
      {/* <GradientOrbs /> */}

      <div className="container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-blue-400"></div>
            <span className="text-sm sm:text-base font-medium text-blue-400 tracking-widest uppercase">
              Fullstack Developer
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-bold font-display leading-[0.9] mb-8 tracking-tight">
            <span className="block overflow-hidden">
              <AnimatedCharacters text="Transforming" className="pb-2" />
            </span>
            <span className="block overflow-hidden text-gray-500">
              <AnimatedCharacters
                text="Concepts"
                delay={0.2}
                className="pb-2"
              />
            </span>
            <span className="block overflow-hidden">
              <AnimatedCharacters
                text="Into Reality"
                delay={0.4}
                className="pb-2"
              />
            </span>
          </h1>

          <div className="w-full max-w-2xl mt-4">
            <motion.p
              className="text-lg sm:text-xl text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Hi, I'm Bedirhan. A creative developer based in Turkey,
              specializing in building high-quality websites and applications
              that focus on{" "}
              <span className="text-white font-medium">motion</span>,{" "}
              <span className="text-white font-medium">experience</span>, and{" "}
              <span className="text-white font-medium">precision</span>.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link href="/projects">
                <MagneticButton className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors">
                  View Projects
                </MagneticButton>
              </Link>
              <Link href="/contact">
                <MagneticButton className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors">
                  Contact Me
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right side decorative or stats */}
        <div className="hidden lg:flex lg:col-span-4 justify-end items-end h-full flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center relative backdrop-blur-sm"
          >
            <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[spin_10s_linear_infinite]" />
            <div className="text-center">
              <span className="block text-5xl font-bold font-display">4+</span>
              <span className="text-sm text-gray-400 uppercase tracking-wider">
                Years Experience
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 text-right">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="group cursor-pointer"
            >
              <span className="text-gray-500 text-sm mb-1 block">Location</span>
              <span className="text-xl font-medium group-hover:text-blue-400 transition-colors">
                Turkey, TR
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
              className="group cursor-pointer"
            >
              <span className="text-gray-500 text-sm mb-1 block">Status</span>
              <span className="text-xl font-medium text-green-400 flex items-center justify-end gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { generateRandomColor } from "@/lib/utils";
import ColoredText from "./ColoredText";

interface ILink {
  href: string;
  title: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const links: ILink[] = [
    {
      href: "/",
      title: "HOME",
    },
    {
      href: "/contact",
      title: "CONTACT",
    },
    {
      href: "/about",
      title: "ABOUT",
    },
    {
      href: "/projects",
      title: "PROJECTS",
    },
  ];

  const handleSurpriseMe = () => {
    const currentPath = window.location.pathname;
    const filteredLinks = links.filter((link) => link.href !== currentPath);
    const randomLink =
      filteredLinks[Math.floor(Math.random() * filteredLinks.length)];
    router.push(randomLink.href);
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg">
      <div className="flex w-full justify-between text-lg mix-blend-difference border-b border-current">
        <Link
          href={"/"}
          className="px-6 sm:px-10 my-auto flex cursor-pointer text-3xl sm:text-4xl font-bold font-display"
        >
          <motion.div whileHover={{ color: generateRandomColor() }}>
            BG
          </motion.div>
        </Link>
        <div
          onClick={toggleMenu}
          className="px-6 sm:px-10 py-4 sm:py-6 mix-blend-difference cursor-pointer font-medium border-l border-current"
        >
          <ColoredText text="MENU" />
        </div>
      </div>

      {/* Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} // Custom easing for premium feel
            style={{ originY: 0 }} // Animate from top
            className="fixed top-20 left-0 w-full h-[50vh] bg-black/95 backdrop-blur-2xl z-40 text-white flex flex-col justify-center border-b border-white/10 shadow-2xl"
          >
            <div className="grid grid-cols-2 w-full h-full text-center relative divide-x divide-white/10">
              {links.map((x, i) => (
                <div
                  key={i}
                  className="w-full flex justify-center items-center h-full hover:bg-white/5 transition-colors duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    href={x.href}
                    className="relative text-3xl sm:text-5xl font-bold font-display tracking-tight text-zinc-400 group-hover:text-white transition-colors duration-300"
                  >
                    {x.title}
                  </Link>
                </div>
              ))}
              <div
                onClick={handleSurpriseMe}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-full w-32 h-20 sm:w-64 sm:h-36 flex items-center justify-center cursor-pointer text-lg sm:text-3xl font-bold -rotate-12 hover:bg-orange-600 hover:text-emerald-100"
              >
                Surprise me!
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

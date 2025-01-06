"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Notable } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { generateRandomColor } from "@/lib/utils";
import ColoredText from "./ColoredText";

const notable = Notable({
  subsets: ["latin"],
  weight: "400",
});

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
    <div>
      <div
        className="flex w-full justify-between fixed top-0 text-[18px] mix-blend-difference z-50 backdrop-blur-3xl"
        style={{ borderBottom: "1px solid" }}
      >
        <Link
          href={"/"}
          className={`px-10 my-[auto] flex cursor-pointer text-[36px] font-bold ${notable.className}`}
        >
          <motion.div whileHover={{ color: generateRandomColor() }}>
            BG
          </motion.div>
        </Link>
        <div
          onClick={toggleMenu}
          className="px-10 py-6 mix-blend-difference cursor-pointer font-medium"
          style={{ borderLeft: "1px solid" }}
        >
          <ColoredText text="MENU" />
        </div>
      </div>

      {/* Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed bottom-0 left-0 w-full bg-black z-10 text-7xl text-white border-t"
          >
            <div className="grid grid-cols-2 w-full text-center relative">
              {links.map((x, i) => (
                <div
                  key={i}
                  className="w-full flex justify-center items-center transition-all duration-300 my-auto"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    href={x.href}
                    className="relative border py-[10vh] border-transparent hover:border-white hover:text-white w-full text-center font-bold text-zinc-700 text-9xl"
                  >
                    {x.title}
                  </Link>
                </div>
              ))}
              <div
                onClick={handleSurpriseMe}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black rounded-[50%] w-64 h-36 flex items-center justify-center cursor-pointer text-3xl font-bold -rotate-12 hover:bg-orange-600 hover:text-emerald-100"
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

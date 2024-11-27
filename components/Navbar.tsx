"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Notable } from "@next/font/google";

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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const links: ILink[] = [
    {
      href: "/",
      title: "HOME",
    },
    {
      href: "/",
      title: "CONTACT",
    },
    {
      href: "/references",
      title: "REFERENCES",
    },
    {
      href: "/projects",
      title: "PROJECTS",
    },
  ];

  return (
    <div>
      <div
        className="flex w-full justify-between fixed top-0 text-[18px] mix-blend-difference z-50"
        style={{ borderBottom: "1px solid" }}
      >
        <Link
          href={"/"}
          className={`px-10 my-[auto] flex cursor-pointer text-[36px] font-bold ${notable.className}`}
        >
          BG
        </Link>
        <div
          onClick={toggleMenu}
          className="px-10 py-6 mix-blend-difference cursor-pointer font-medium"
          style={{ borderLeft: "1px solid" }}
        >
          MENU
        </div>
      </div>

      {/* Menu */}
      {isMenuOpen && (
        <div className="grid grid-cols-2 w-full fixed bottom-0 justify-center items-center text-center bg-black z-10 text-7xl border-t">
          {links.map((x, i) => (
            <div
              key={i}
              className="w-full   flex justify-center items-center text-white transition-all duration-300"
            >
              <Link
                href={x.href}
                className="relative p-8 before:absolute before:inset-0 before:border before:border-white before:scale-110 hover:before:scale-100 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300"
              >
                {x.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

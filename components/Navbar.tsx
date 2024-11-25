import Link from "next/link";
import React from "react";
import { Notable } from "@next/font/google";

const notable = Notable({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  return (
    <div
      className="flex w-full justify-between fixed top-0 text-[18px] mix-blend-difference z-50 backdrop-blur-[2px]"
      style={{ borderBottom: "1px solid" }}
    >
      <Link
        href={"/"}
        className={`px-12 my-[auto] flex cursor-pointer text-[36px] ${notable.className}`}
      >
        BG
      </Link>
      <Link
        href={"/about"}
        className="px-10 py-6 mix-blend-difference cursor-pointer"
        style={{ borderLeft: "1px solid" }}
      >
        MENU
      </Link>
    </div>
  );
};

export default Navbar;

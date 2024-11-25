import React from "react";
import MarqueeDivider, { Direction, Size } from "./MarqueeDivider";

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="flex flex-col items-center text-center">
        <p className="text-sm mt-[10vh]">
          &copy; {new Date().getFullYear()} Bedirhan. Tüm hakları saklıdır.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/bedirhan-1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bedirhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a href="mailto:bedirhan@example.com" className="hover:text-gray-400">
            İletişim
          </a>
        </div>
        <p className="text-xs text-gray-500 mb-[10vh]">
          "Yaratıcı çözümler, verimli kodlar." - Bedirhan Giden
        </p>
      </div>
    </footer>
  );
};

export default Footer;

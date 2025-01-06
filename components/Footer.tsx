import React from "react";

const Footer = () => {
  return (
    <footer className="text-white h-[10vh] flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-sm mb-1">
          &copy; {new Date().getFullYear()} bedirhangiden.com Tüm hakları
          saklıdır.
        </p>
        <div className="flex space-x-4 justify-center">
          <a
            href="https://github.com/bedirhan-1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bedirhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:bedirhan@example.com"
            className="hover:text-gray-400 transition duration-300"
          >
            İletişim
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          &quot;Yaratıcı çözümler, verimli kodlar.&quot; - Bedirhan Giden
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// import Github from "../public/icons/github.svg";
// import Youtube from "../public/icons/youtube.svg";
// import LinkedIn from "../public/icons/linkedin.svg";
import { MenuIcon } from "lucide-react";

export default function Menu() {
  return (
    <div className="flex fixed bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-4 p-2 transition-all duration-300 ease-in-out rounded-full items-center justify-center z-50 bg-white hover:w-48 hover:h-10 group mix-blend-difference">
      <div className="flex items-center gap-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        {/* <a href="https://github.com/bedirhan-1" target="_blank">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://www.youtube.com/@codingwithbedirhan" target="_blank">
          <Youtube className="w-6 h-6" />
        </a>
        <a href="https://www.linkedin.com/in/bedirhan-giden/" target="_blank"> 
          <LinkedIn className="w-6 h-6" /> 
        </a> */}
        <MenuIcon color="black" className="w-6 h-6" />
      </div>
    </div>
  );
}

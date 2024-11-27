"use client";

import { scrollToId } from "@/lib/utils";
import { MoveDownIcon } from "lucide-react";

interface HeroTextSectionProps {
  heroText: string[];
  heroDesc: string[];
  textStyle: string;
}

export default function HeroTextSection({
  heroText,
  heroDesc,
  textStyle,
}: HeroTextSectionProps) {
  return (
    <section className="flex justify-center items-center min-h-[100vh] w-full overflow-hidden p-10 gap-10 mix-blend-difference">
      <div className="gap-6">
        <div className="flex flex-wrap justify-center w-[600px] capitalize">
          {heroText.map((item, index) => (
            <span key={index.toString()} className="mr-2">
              <h1 className={`${textStyle} text-6xl hover:text-red-500`}>
                {item}
              </h1>
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center w-full mt-8">
          {heroDesc.map((item, index) => (
            <span key={index.toString()} className="mr-1">
              <h1 className={`${textStyle} hover:text-green-500`}>{item}</h1>
            </span>
          ))}
        </div>
      </div>
      <div
        className="border-2 cursor-pointer p-4"
        onClick={() => scrollToId("projects")}
      >
        <MoveDownIcon size={64} />
      </div>
    </section>
  );
}

"use client";

import { MoveDownIcon } from "lucide-react";
import LinkNavigation from "@/components/LinkNavigation";
import MarqueeDivider, { Direction, Size } from "@/components/MarqueeDivider";
import MasonryGrid from "@/components/MasonryGrid";

export default function Hero() {
  const textStyle = "bg-clip-text inline mix-blend-difference";
  const heroText = "transforming concepts into seamless experiences";
  const heroDesc = "Hi I’m Bedirhan, a fullstack developer based in Turkey";
  const heroTextLetterByLetter = heroText.split(" ");
  const heroDescByLetter = heroDesc.split(" ");
  const speed = 40;

  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div>
      <section className="flex justify-center items-center min-h-[100vh] w-full overflow-hidden p-10 gap-10 mix-blend-difference">
        <div className="gap-6">
          <div className="flex flex-wrap justify-center w-[600px] capitalize">
            {heroTextLetterByLetter.map((item, index) => (
              <span key={index.toString()} className="mr-2">
                <h1 className={`${textStyle} text-6xl hover:text-red-500`}>
                  {item}
                </h1>
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center w-full mt-8">
            {heroDescByLetter.map((item, index) => (
              <span key={index.toString()} className="mr-1">
                <h1 className={`${textStyle} hover:text-green-500`}>{item}</h1>
              </span>
            ))}
          </div>
        </div>
        <div
          className="border-2 cursor-pointer p-4 rounded-md"
          onClick={() => scrollToId("projects")}
        >
          <MoveDownIcon size={64} />
        </div>
      </section>

      <section
        className="flex justify-center items-center min-h-screen w-full p-10 gap-10 mix-blend-difference pt-24"
        id="projects"
      >
        <MasonryGrid />
      </section>
      <section
        className="flex flex-col justify-center items-center w-full -z-40"
        id="languages"
      >
        <div className="w-full overflow-hidden">
          <MarqueeDivider
            speed={speed}
            title=" JAVASCRIPT "
            backgroundColor={"bg-zinc-600"}
            textColor="#F7DF1E"
            size={Size.xxxl}
          />
          <MarqueeDivider
            speed={speed - 5}
            title=" SPRING BOOT "
            backgroundColor={"bg-zinc-800"}
            textColor="#00d084"
            size={Size.xxxl}
          />
          <MarqueeDivider
            speed={speed - 10}
            title=" REACT NATIVE "
            backgroundColor={"bg-sky-600"}
            textColor="white"
            size={Size.xxxl}
          />
          <MarqueeDivider
            speed={speed - 15}
            title=" NEXT JS "
            backgroundColor={"bg-gray-300"}
            textColor="black"
            size={Size.xxxl}
          />
        </div>
      </section>
      <LinkNavigation />
    </div>
  );
}

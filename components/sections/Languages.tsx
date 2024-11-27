"use client";

import MarqueeDivider, { Size } from "@/components/MarqueeDivider";

interface LanguagesSectionProps {
  speed: number;
}

export default function LanguagesSection({ speed }: LanguagesSectionProps) {
  return (
    <section
      className="flex flex-col justify-center items-center w-full -z-40"
      id="languages"
    >
      <div className="w-full overflow-hidden">
        <MarqueeDivider
          speed={speed + 10}
          title=" JAVASCRIPT "
          backgroundColor={"bg-zinc-600"}
          textColor="#F7DF1E"
          size={Size.xxxl}
        />
        <MarqueeDivider
          speed={speed}
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
          speed={speed + 30}
          title=" NEXT JS "
          backgroundColor={"bg-gray-300"}
          textColor="black"
          size={Size.xxxl}
        />
      </div>
    </section>
  );
}

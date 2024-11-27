"use client";

import {
  HeroTextSection,
  ProjectsSection,
  LanguagesSection,
} from "@/components/sections";

export default function Hero() {
  const textStyle = "bg-clip-text inline mix-blend-difference";
  const heroText = "transforming concepts into seamless experiences!";
  const heroDesc = "Hi I’m Bedirhan, a fullstack developer based in Turkey";
  const heroTextLetterByLetter = heroText.split(" ");
  const heroDescByLetter = heroDesc.split(" ");
  const speed = 40;

  return (
    <div>
      <HeroTextSection
        heroText={heroTextLetterByLetter}
        heroDesc={heroDescByLetter}
        textStyle={textStyle}
      />
      <ProjectsSection />
      <LanguagesSection speed={speed} />
    </div>
  );
}

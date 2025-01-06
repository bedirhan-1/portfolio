"use client";

import React from "react";
import MarqueeDivider, { Size } from "@/components/MarqueeDivider";

interface LanguagesSectionProps {
  speed: number;
}

export default function LanguagesSection({ speed }: LanguagesSectionProps) {
  const dividers = [
    {
      title: "JAVASCRIPT",
      backgroundColor: "bg-zinc-600",
      textColor: "#F7DF1E",
      size: Size.sm,
      speed: speed + 10,
    },
    {
      title: "SPRING BOOT",
      backgroundColor: "bg-zinc-800",
      textColor: "#00d084",
      size: Size.sm,
      speed: speed,
    },
    {
      title: "REACT NATIVE",
      backgroundColor: "bg-sky-600",
      textColor: "white",
      size: Size.sm,
      speed: speed - 10,
    },
    {
      title: "NEXT JS",
      backgroundColor: "bg-gray-300",
      textColor: "black",
      size: Size.sm,
      speed: speed + 30,
    },
    {
      title: "JAVA",
      backgroundColor: "bg-zinc-800",
      textColor: "#007396",
      size: Size.sm,
      speed: speed,
    },
    {
      title: "TYPESCRIPT",
      backgroundColor: "bg-zinc-600",
      textColor: "#007ACC",
      size: Size.sm,
      speed: speed + 15,
    },
    {
      title: "NODE JS",
      backgroundColor: "bg-zinc-800",
      textColor: "#68A063",
      size: Size.sm,
      speed: speed - 15,
    },
    {
      title: "REACT JS",
      backgroundColor: "bg-sky-600",
      textColor: "white",
      size: Size.sm,
      speed: speed + 40,
    },
  ];

  // Her `Size` için tahmini yüksekliği hesaplayan harita
  const sizeHeightMap: Record<Size, number> = {
    [Size.xxxl]: 112, // py-14 -> 14 * 4
    [Size.xxl]: 96, // py-12 -> 12 * 4
    [Size.xl]: 80, // py-10 -> 10 * 4
    [Size.lg]: 64, // py-8 -> 8 * 4
    [Size.md]: 48, // py-6 -> 6 * 4
    [Size.sm]: 32, // py-4 -> 4 * 4
  };

  const getTotalHeight = () =>
    dividers.reduce((sum, divider) => sum + sizeHeightMap[divider.size], 0);

  const repeatCount = Math.ceil(
    (typeof window !== "undefined" ? window.innerHeight : 0) / getTotalHeight()
  );

  return (
    <section
      className="flex flex-col justify-center items-center w-full h-screen overflow-hidden -z-40 opacity-20"
      id="languages"
    >
      {Array.from({ length: repeatCount }).map((_, outerIndex) =>
        dividers.map((divider, index) => (
          <div className="w-full" key={`${outerIndex}-${index}`}>
            <MarqueeDivider
              title={divider.title}
              backgroundColor={divider.backgroundColor}
              textColor={divider.textColor}
              size={divider.size}
              speed={divider.speed}
            />
          </div>
        ))
      )}
    </section>
  );
}

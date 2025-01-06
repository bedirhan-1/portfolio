"use client";

import ColoredText from "../ColoredText";

export default function Hero() {
  const heroText = "transforming concepts into seamless experiences!";
  const heroDesc =
    "Hi I’m Bedirhan, a fullstack developer based in Turkey. I specialize in building high-quality websites and applications that are both user-friendly and visually appealing.";

  const textStyle = "bg-clip-text inline mix-blend-difference";
  const titleStyle = `${textStyle} uppercase text-6xl`;
  const descStyle = `${textStyle} text-lg text-right`;

  return (
    <div>
      <section className="flex justify-center items-center w-full overflow-hidden p-10 gap-10 mix-blend-difference h-[90vh]">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center w-[600px] capitalize">
            <ColoredText text={heroText} className={titleStyle} />
          </div>
          <div className="w-full mt-8 max-w-[600px]">
            <ColoredText text={heroDesc} className={descStyle} />
          </div>
        </div>
      </section>
    </div>
  );
}

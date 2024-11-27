import React from "react";
import Marquee from "react-fast-marquee";

export enum Direction {
  RIGHT = "right",
  LEFT = "left",
}

export enum Size {
  xxxl = "xxxl",
  xxl = "xxl",
  xl = "xl",
  lg = "lg",
  md = "md",
  sm = "sm",
}

const MarqueeDivider = ({
  title = "DEFAULT TITLE",
  backgroundColor = "bg-gray-200",
  textColor = "#000",
  direction = Direction.LEFT,
  size = Size.lg,
  speed,
  className,
}: {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  direction?: Direction;
  size?: Size;
  className?: string;
  speed?: number;
}) => {
  const getFontSize = () => {
    switch (size) {
      case Size.sm:
        return "text-xs font-medium";
      case Size.md:
        return "text-xl font-medium p-0 m-0";
      case Size.lg:
        return "text-2xl font-semibold";
      case Size.xl:
        return "text-4xl font-extrabold";
      case Size.xxl:
        return "text-6xl font-extrabold";
      case Size.xxxl:
        return "text-9xl font-extrabold p-0 m-0";
      default:
        return "text-3xl font-semibold";
    }
  };

  return (
    <Marquee
      speed={speed}
      className={`${backgroundColor} opacity-40 p-12`}
      direction={direction}
    >
      {new Array(100).fill(title).map((e, index) => (
        <h1
          key={index}
          className={`mr-24 ${getFontSize()} ${className}`}
          style={{ color: textColor }}
        >
          {e}
        </h1>
      ))}
    </Marquee>
  );
};

export default MarqueeDivider;

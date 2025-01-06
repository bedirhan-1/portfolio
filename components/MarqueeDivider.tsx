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

interface MarqueeDividerProps {
  title?: string;
  backgroundColor?: string;
  textColor?: string;
  direction?: Direction;
  size?: Size;
  className?: string;
  speed?: number;
}

const fontSizeMap: Record<Size, string> = {
  [Size.xxxl]: "text-9xl font-extrabold py-14 mr-14",
  [Size.xxl]: "text-6xl font-extrabold  py-12 mr-12",
  [Size.xl]: "text-4xl font-extrabold py-10 mr-10",
  [Size.lg]: "text-2xl font-semibold py-8 mr-8",
  [Size.md]: "text-xl font-medium py-6 mr-6",
  [Size.sm]: "text-xs font-medium py-4 mr-4",
};

const MarqueeDivider: React.FC<MarqueeDividerProps> = ({
  title = "DEFAULT TITLE",
  backgroundColor = "bg-gray-200",
  textColor = "#000",
  direction = Direction.LEFT,
  size = Size.lg,
  speed = 50,
  className = "",
}) => {
  const fontSizeClass = fontSizeMap[size] || "text-3xl font-semibold";

  return (
    <div className={`relative ${backgroundColor}`}>
      <Marquee speed={speed} direction={direction} gradient={false}>
        {[...Array(50)].map((_, index) => (
          <h1
            key={index}
            className={`${fontSizeClass} ${className}`}
            style={{ color: textColor }}
          >
            {title}
          </h1>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDivider;

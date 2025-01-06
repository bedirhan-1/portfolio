import React from "react";
import { motion } from "framer-motion";
import { generateRandomColor } from "@/lib/utils";

const ColoredText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          transition={{ duration: 0.3 }}
          whileHover={{
            opacity: 0.4,
            color: generateRandomColor(),
            transition: { duration: 0.3 },
          }}
        >
          {word + " "}
        </motion.span>
      ))}
    </div>
  );
};

export default ColoredText;

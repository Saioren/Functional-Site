import React from "react";
import ButtonComponent from "../../Button";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function BackToTop() {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex pb-[2rem] flex-col w-100%">
        <ButtonComponent
          smallBtn={true}
          image={React.createElement(FaArrowUp)}
          href={"/"}
          colorScheme={theme === "dark" ? "light" : "dark"}
          type="link"
        />
      </div>
    </motion.div>
  );
}

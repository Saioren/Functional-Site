import React from "react";
import ButtonComponent from "../../Button";
import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

export default function BackToTop() {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex sm:pb-[1rem] pb-[3rem] flex-col w-100%">
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

"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <button
        className="fixed bottom-5 left-5 bg-gray-50 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white z-9999  border-opacity-40 shadow-lg rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={handleClick}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
    </motion.div>
  );
}

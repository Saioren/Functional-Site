import React from "react";
import { motion } from "framer-motion";

export default function SpacerComponent() {
  return (
    <motion.div
      className="bg-white mt-12 mb-6 h-16 sm:mt-24 sm:mb-12 sm:h-16 w-1 rounded-full block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function SpacerComponent() {
  return (
    <motion.div
      className="bg-gray-200 mt-24 mb-12 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
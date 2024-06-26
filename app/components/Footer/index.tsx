import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <footer className="w-100vw absolute text-center left-0 right-0 bottom-0 dark:bg-slate-950 bg-white shadow-md p-[2rem]">
        © 2024 Saioren.io All Rights Reserved.
      </footer>
    </motion.div>
  );
}

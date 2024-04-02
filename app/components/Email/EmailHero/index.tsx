"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EmailHero() {
  return (
    <motion.div initial={{ y: -25, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <div className="text-center">
        <h2 className="text-2xl">Write emails here!</h2>
        <h3>Send and receive emails.</h3>
      </div>
    </motion.div>
  );
}

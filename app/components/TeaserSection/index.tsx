import React from "react";
import TeaserImage from "./TeaserImage";
import { components } from "@/lib/data";
import { motion } from "framer-motion";

export default function TeaserSection() {
  return (
    <div className="flex flex-auto justify-stretch flex-wrap xl:flex-nowrap gap-10 w-full">
      {components.map((item, index) => (
        <motion.div
          className="w-full"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.15 * index,
          }}
        >
          <TeaserImage {...item} />
        </motion.div>
      ))}
    </div>
  );
}

import React from "react";
import TeaserImage from "./TeaserImage";
import { components } from "@/lib/data";
import { motion } from "framer-motion";

export default function TeaserSection() {
  return (
    <div className={`flex justify-center flex-wrap gap-10`}>
      {components.map((item, index) => (
        <motion.div
          className="max-w-[26rem] w-full"
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

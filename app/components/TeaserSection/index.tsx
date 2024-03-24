import React from "react";
import TeaserImage from "./TeaserImage";
import { components } from "@/lib/data";
import { motion } from "framer-motion";
import classes from "./index.module.scss";

export default function TeaserSection() {
  return (
    <div className="flex flex-wrap justify-center max-w-[107rem] gap-10 ">
      <div className={`w-full lg:flex gap-10 max-w-[90rem]`}>
        {components.map((item, index) => (
          <motion.div
            className={`w-full`}
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
    </div>
  );
}

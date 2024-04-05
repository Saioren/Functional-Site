import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import MaxWidth from "../../MaxWidth";
import SectionHeading from "../../Heading";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  return (
    <motion.div
      ref={ref}
      id="about"
      className=""
      initial={{}}
      animate={{}}
      transition={{}}
    >
      <main className="mb-[6rem]">
        <SectionHeading>About Me</SectionHeading>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          nisi quis minima aliquid placeat accusantium obcaecati animi dicta
          adipisci consectetur sapiente illum explicabo aperiam recusandae, quas
          maxime sed. Debitis, distinctio?
        </div>
      </main>
    </motion.div>
  );
}

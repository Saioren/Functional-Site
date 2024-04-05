import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Heading";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);
  return (
    <motion.div
      ref={ref}
      id="skills"
      className=""
      initial={{}}
      animate={{}}
      transition={{}}
    >
      <main className="mb-[6rem]">
        <SectionHeading>My Skills</SectionHeading>
        <div>Skills</div>
      </main>
    </motion.div>
  );
}

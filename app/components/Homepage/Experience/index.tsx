import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <motion.div
      ref={ref}
      id="experience"
      className=""
      initial={{}}
      animate={{}}
      transition={{}}
    >
      <main className="mb-[6rem]">
        <SectionHeading>My Experience</SectionHeading>
        <div>Experience</div>
      </main>
    </motion.div>
  );
}

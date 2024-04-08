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
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{}}
    >
      <main className="mb-[3rem] pt-[3rem]">
        <SectionHeading>My Experience</SectionHeading>
        <div>Experience</div>
      </main>
    </motion.div>
  );
}

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import MaxWidth from "../../MaxWidth";
import SectionHeading from "../../Heading";

export default function About() {
  const { ref } = useSectionInView("About", 0.4);
  const paragraphContent = `I love coding. It takes up most of my time now'adays. I'm a huge
  fitness and health enthusiast. I believe a healthy body contributes to
  a wealth of good that people don't take seriously enough. A big part
  of me also loves music. I play piano, and have been playing since late
  2022. I'm convinced the music gene runs in the family. \nApart from
  that, I draw, and see myself as quite the artist. I speak Japanese,
  and studied in school, only to pick it back up a little over a year
  ago. And anime is my jam. Specifically comedy / shonen.`;
  return (
    <motion.section
      ref={ref}
      id="about"
      className=""
      whileInView="animate"
      viewport={{
        once: true,
      }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.175 }}
    >
      <main className="mb-[3rem] pt-[3rem] leading-8 tracking-wide">
        <SectionHeading>About Me</SectionHeading>
        <div>{paragraphContent}</div>
      </main>
    </motion.section>
  );
}

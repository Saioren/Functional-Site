import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import SectionHeading from "../../Heading";
import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const { ref, inView } = useSectionInView("About", 1);
  const { theme } = useTheme();
  const paragraphContent = `I love coding. It takes up most of my time now'adays. I'm a huge
  fitness and health enthusiast. I believe a healthy body contributes to
  a wealth of good that people don't take seriously enough. A big part
  of me also loves music. I play piano, and have been playing since late
  2022. I'm convinced the music gene runs in the family. \nApart from
  that, I draw, and see myself as quite the artist. I speak Japanese,
  and studied in school, only to pick it back up a little over a year
  ago. And anime is my jam. Specifically comedy / shonen.`;

  return (
    <section ref={ref} id="about">
      <motion.div
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          once: true,
        }}
      >
        <main className="mb-[3rem] pt-[3rem] leading-8 tracking-wide">
          <SectionHeading>About Me</SectionHeading>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <div>{paragraphContent}</div>
          </motion.div>
        </main>
      </motion.div>
    </section>
  );
}

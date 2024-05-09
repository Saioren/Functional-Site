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
            <div>
              I&apos;m a{" "}
              <span className="text-blue-500 font-semibold dark:text-purple-500">
                programmer🖥️
              </span>
              ! I&apos;m currently working toward becoming a full-fledged
              developer, and I get closer every day. People would call me{" "}
              <span className="font-semibold text-orange-500 dark:text-red-400">
                persistent
              </span>{" "}
              and{" "}
              <span className="font-semibold text-green-500 dark:text-yellow-400">
                curious
              </span>
              , which I think are two of my strongest qualities. I&apos;m also a
              huge{" "}
              <span className="dark:text-green-400 text-purple-800">
                health💪
              </span>{" "}
              advocate, and care about my wellbeing{" "}
              <span className="font-semibold">(a lot)</span>. I play{" "}
              <span className="font-semibold">piano🎹</span> and speak{" "}
              <span className="text-pink-600 dark:text-pink-300">
                Japanese⛩️
              </span>{" "}
              among a multitude of other things I love to do.{" "}
              <span className="font-bold underline underline-offset-2">
                <a href="#contact">Let&apos;s talk!</a>
              </span>
            </div>
          </motion.div>
        </main>
      </motion.div>
    </section>
  );
}

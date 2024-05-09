import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  name,
  projectHref,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const { theme } = useTheme();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group"
    >
      <section className="bg-gray-100 max-w-[42rem] shadow-md border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:flex-row-reverse dark:text-white flex dark:bg-white/10 flex-col sm:flex-row dark:hover:bg-white/20 h-[30rem]">
        <div className="p-[2rem] sm:max-w-[50%] flex h-full gap-8 flex-col sm:h-full w-100%">
          <div className="flex gap-4 flex-col">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:absolute sm:-right-[8rem] sm:group-even:-left-[8rem] sm:top-[2rem] top-[17rem] px-[2rem] sm:w-[28.25rem] w-full rounded-t-lg">
          <Link href={projectHref} target="_blank">
            <Image
              width={1000}
              height={1000}
              src={`/ProjectsImages/${name}.png`}
              alt={title}
              quality={95}
              className="shadow-2xl rounded-t-lg transition sm:group-hover:scale-[1.04] sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2"
            />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}

"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Heading";
import { components, projectsData } from "@/lib/data";
import TeaserImage from "../../TeaserSection/TeaserImage";
import Project from "./Project/project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <motion.div
      ref={ref}
      id="projects"
      className=""
      initial={{}}
      animate={{}}
      transition={{}}
    >
      <main className="mb-[6rem]">
        <SectionHeading>My Projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

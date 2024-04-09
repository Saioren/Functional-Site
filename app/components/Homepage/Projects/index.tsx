"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Heading";
import { components, projectsData } from "@/lib/data";
import TeaserImage from "../../TeaserSection/TeaserImage";
import Project from "./Project/project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.25);
  return (
    <motion.div
      ref={ref}
      id="projects"
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{}}
    >
      <main className="mb-[3rem] pt-[3rem]">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <SectionHeading>My Projects</SectionHeading>
        </motion.div>
        <div className="flex gap-8 flex-col">
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

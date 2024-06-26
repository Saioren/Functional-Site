"use client";

import { useSectionInView } from "@/lib/hooks";
import React, { useState } from "react";
import SectionHeading from "../../Heading";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/ThemeContext";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const { ref } = useSectionInView("Experience", 0.4);
  const { theme } = useTheme();
  return (
    <section ref={ref} id="experience" className="py-[3rem]">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <SectionHeading>My Experience</SectionHeading>
      </motion.div>
      <VerticalTimeline
        lineColor={theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)"}
        className="ml-0 mr-0"
      >
        {experiencesData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}

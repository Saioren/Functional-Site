import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Heading";
import { languages } from "@/lib/data";
import Image from "next/image";
import classes from "./index.module.scss";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 1);
  return (
    <section ref={ref} id="skills" className="">
      <main className="pb-[3rem] pt-[3rem]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <SectionHeading>My Skills</SectionHeading>
          </motion.div>
        </motion.div>
        <ul className="flex gap-4 flex-wrap justify-center decoration-none">
          {languages.map((language, index) => (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
              key={language.name}
            >
              <a
                className={`flex items-center bg-white/40 border-2 border-black/10 dark:border-white/10 dark:bg-gray-800/60 shadow-md py-2 px-3 rounded-lg hover:scale-110 active:scale-105 transition gap-2 text-sm cursor-pointer  
                  ${classes[language.color]}
                  `}
                target="_blank"
                rel="noopener noreferrer"
                href={`${language.href}`}
              >
                <h4>{language.name}</h4>
                {typeof language.icon === "string" ? (
                  <React.Fragment>
                    <Image
                      src={language.icon}
                      alt={`${language.name} icon`}
                      width={800}
                      height={800}
                      className="dark:text-gray-50 text-gray-950 w-4 h-4"
                    />
                  </React.Fragment>
                ) : (
                  <React.Fragment>{language.icon}</React.Fragment>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </main>
    </section>
  );
}

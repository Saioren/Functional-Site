import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Heading";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);
  return (
    <motion.div
      ref={ref}
      id="contact"
      className=""
      initial={{}}
      animate={{}}
      transition={{}}
    >
      <main className="mb-[10rem]">
        <SectionHeading>Contact Me</SectionHeading>
        <div>Contact</div>
      </main>
    </motion.div>
  );
}

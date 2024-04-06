import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Heading";
import HomepageSendEmailComponent from "../../Email/HomepageEmail";

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
      <main className="mb-[13rem] pt-[3rem]">
        <SectionHeading>Contact Me</SectionHeading>
        <div>
          <HomepageSendEmailComponent />
        </div>
      </main>
    </motion.div>
  );
}

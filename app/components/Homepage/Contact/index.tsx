import { useSectionInView } from "@/lib/hooks";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../../Heading";
import HomepageSendEmailComponent from "../../Email/HomepageSendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.15);
  return (
    <section ref={ref} id="contact" className=" flex w-full">
      <motion.div
        className="flex w-full justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{}}
      >
        <main className="py-[3rem] flex w-full flex-col max-w-[40rem]">
          <SectionHeading>Contact Me</SectionHeading>
          <div className="flex w-full">
            <HomepageSendEmailComponent />
          </div>
        </main>
      </motion.div>
    </section>
  );
}

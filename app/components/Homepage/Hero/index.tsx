import React from "react";
import classes from "./index.module.scss";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import ButtonComponent from "../../Button";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0);
  return (
    <motion.div
      ref={ref}
      id="home"
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.1,
      }}
      className="flex flex-col justify-center text-center items-center"
    >
      <Image
        className="rounded-full border border-2 shadow-md border-white w-[7rem]"
        src="/NewPfp.png"
        alt="My profile image"
        width="800"
        height="800"
      ></Image>
      <p className="text-xl sm:text-2xl pb-[2rem] pt-[1rem]">
        <span className={classes.saioren}>
          Hello! I am <span className="font-semibold">Evan</span>!{" "}
        </span>
        I'm a 22 year old programmer, who uses Typescript among many other
        things. I set expectations high and strive to be the best I can.
      </p>
      <div className="flex gap-4 items-center">
        <ButtonComponent
          colorScheme="dark"
          href={"#/contact"}
          type="link"
          image={React.createElement(BsArrowRight)}
          buttonText="Contact me here"
        />
        <ButtonComponent
          colorScheme="light"
          href={"#/contact"}
          type="link"
          image={React.createElement(HiDownload)}
          buttonText="Download my CV"
        />
        <ButtonComponent
          colorScheme="light"
          href={"https://github.com/Saioren"}
          type="anchor"
          image={React.createElement(FaGithub)}
        />
        <ButtonComponent
          colorScheme="light"
          href={"https://www.linkedin.com/in/evan-mikrut-799190283/"}
          type="anchor"
          image={React.createElement(FaLinkedin)}
        />
      </div>
    </motion.div>
  );
}

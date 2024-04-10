import React from "react";
import classes from "./index.module.scss";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import ButtonComponent from "../../Button";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useActiveSectionContext } from "@/context/ActiveSection";
import { useTheme } from "@/context/ThemeContext";

export default function Hero() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);
  const { theme } = useTheme();
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
        delay: 0.2,
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
        I&apos;m a 22 year old programmer, who&apos;s partial to coding in
        <a
          className="group"
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          <span className="dark:text-blue-400 text-blue-700"> Typescript</span>
        </a>
        . I set expectations high and strive to be the best I can.
      </p>
      <div className="flex gap-4 items-center sm:flex-row flex-col">
        <ButtonComponent
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          paddingX={7}
          colorScheme={theme === "dark" ? "light" : "dark"}
          href={"#contact"}
          type="link"
          image={React.createElement(BsArrowRight)}
          buttonText="Contact me here"
        />
        <ButtonComponent
          paddingX={7}
          colorScheme={theme === "dark" ? "dark" : "light"}
          href={"#contact"}
          type="link"
          image={React.createElement(HiDownload)}
          buttonText="Download Resumé"
        />
        <div className="flex gap-8 sm:gap-4">
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
      </div>
    </motion.div>
  );
}

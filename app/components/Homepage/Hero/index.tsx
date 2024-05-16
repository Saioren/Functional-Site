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
      <section className="pr-[3rem] pl-[3rem] pt-[1rem] flex items-center flex-col md:flex-row md:gap-0 gap-[2rem]">
        <div className="md:hidden flex justify-center relative">
          <Image
            className="shadow-lg border-white rounded-md sm:w-300 sm:h-300 h-200px w-200px"
            src="/NewPfp.jpg"
            alt="My profile image"
            width={200}
            height={200}
          ></Image>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              rotate: -90,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="absolute bottom-[-1rem] right-[-1rem] "
          >
            <span className="w-100px text-[2rem]">👋</span>
          </motion.div>
        </div>
        <div className="flex w-full md:w-1/2 flex-col items-center">
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
              <span className="dark:text-blue-400 text-blue-700">
                {" "}
                Typescript
              </span>
            </a>
            . I set expectations high and strive to be the best I can.
          </p>
          <div className="flex gap-4 items-center sm:flex-row flex-col">
            <ButtonComponent
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
              colorScheme={theme === "dark" ? "light" : "dark"}
              href={"#contact"}
              type="link"
              image={React.createElement(BsArrowRight)}
              buttonText="Contact me here"
            />
            {/*<ButtonComponent
          colorScheme={theme === "dark" ? "dark" : "light"}
          href={"#contact"}
          type="link"
          image={React.createElement(HiDownload)}
          buttonText="Download Resumé"
        />*/}
            <div className="flex gap-8 sm:gap-4">
              <ButtonComponent
                smallBtn={true}
                colorScheme="light"
                href={"https://github.com/Saioren"}
                type="anchor"
                image={React.createElement(FaGithub)}
              />
              <ButtonComponent
                smallBtn={true}
                colorScheme="light"
                href={"https://www.linkedin.com/in/evan-mikrut-799190283/"}
                type="anchor"
                image={React.createElement(FaLinkedin)}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 justify-end md:flex hidden">
          <div className="relative">
            <Image
              className="shadow-lg border-white rounded-md"
              src="/NewPfp.jpg"
              alt="My profile image"
              width={300}
              height={300}
            ></Image>
            <motion.div
              initial={{ rotate: 180, scale: 0, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.35,
              }}
              className="absolute bottom-[-1rem] right-[-1rem] "
            >
              <span className="w-100px text-[3rem]">👋</span>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

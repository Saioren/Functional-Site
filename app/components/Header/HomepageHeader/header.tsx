"use client";

import React, { useState } from "react";
import { homepageLinks, links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSection";
import { HamburgerIcon } from "./HamburgerIcon";
import { menuItems } from "@/lib/data";
import Image from "next/image";
import { useHeaderProviderContext } from "@/context/HeaderProvider";
import SettingsModal from "./SettingsModal";
import classes from "./index.module.scss";

export default function HomepageHeader() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const {
    menu,
    setMenu,
    settings,
    setSettings,
    activeSetting,
    setActiveSetting,
    settingClicked,
    setSettingClicked,
    handleModal,
    handleSettings,
  } = useHeaderProviderContext();

  return (
    <header className="z-[999] fixed top-0 flex w-full justify-between items-center px-6">
      <motion.nav
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="top-0 sm:top-[1rem] flex items-center rounded-none h-[4.5rem]  dark:border-white/20 dark:bg-gray-850 dark:text-gray-50"
      >
        <Link className="sm:hidden block" href={"/"}>
          <Image
            className={classes.logo}
            src="/sigh.svg"
            width="800"
            height="800"
            alt="logo"
          />
        </Link>
        <ul className="hidden sm:flex gap-4 list-none">
          {homepageLinks.map((link, index) => (
            <li key={link.name}>
              <Link
                className={`flex w-full items-center justify-center  transition ${
                  activeSection === link.name
                    ? "text-gray-950 dark:text-gray-100 border-b border-gray-950 dark:border-gray-100"
                    : "hover:text-gray-950 dark:text-gray-500 dark:hover:text-gray-100  text-gray-500 "
                }`}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="underline absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
      <motion.div
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.5 }}
      >
        <HamburgerIcon />
      </motion.div>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            className={`flex rounded-md absolute top-[5.5rem] right-[1rem] ml-[1rem] p-[2rem] dark:bg-gray-700/75 border border-black/5 bg-white/80 backdrop-blur-sm shadow-lg`}
          >
            {settingClicked && <SettingsModal />}
            <div className="flex flex-col gap-3 items-center rounded-md font-semibold w-100% mb-5 last:mb-0">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    y: -15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ delay: 0.09 * index }}
                >
                  <div
                    className={` w-100% flex flex-row-reverse items-center gap-1 transition ${
                      classes[item.color]
                    } hover:scale-110 active:scale-105`}
                    onClick={() => handleSettings(item.name)}
                  >
                    <span>{item.name}</span>
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

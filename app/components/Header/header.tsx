"use client";

import React, { useState } from "react";
import { links } from "@/lib/data";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useActiveSectionContext } from "../../../context/ActiveSection";
import { HamburgerIcon } from "./HamburgerIcon";
import { menuItems } from "@/lib/data";
import Image from "next/image";
import { useHeaderProviderContext } from "@/context/HeaderProvider";
import SettingsModal from "./SettingsModal";
import classes from "./index.module.scss";

export default function Header() {
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
  } = useHeaderProviderContext();

  const handleModal: () => void = () => {
    if (!menu) {
      setMenu(true);
      setSettings(true);
    } else {
      setMenu(false);
      setSettings(false);
      setSettingClicked(false);
    }
  };

  const handleSettings = (setting: string) => {
    if (settings) {
      setActiveSetting(setting);
      setSettingClicked(true);
    }
  };

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
          <Image src="/favicon.ico" width={48} height={48} alt="logo" />
        </Link>
        <ul className="hidden sm:flex gap-5 list-none">
          {links.map((link, index) => (
            <li className="hover:text-gray-300">
              <Link
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && <span></span>}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
      >
        <HamburgerIcon menu={menu} handleModal={handleModal} />
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
            className={`flex rounded-md absolute top-[5.5rem] right-[1rem] p-[2rem] dark:bg-gray-700/75 bg-gray-100/65 backdrop-blur-sm shadow-lg`}
          >
            {settingClicked && (
              <SettingsModal
                activeSetting={activeSetting}
                setActiveSetting={setActiveSetting}
              />
            )}
            <div className="flex flex-col gap-3 items-center rounded-md font-semibold w-100% mb-5 last:mb-0">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer w-100% flex flex-row-reverse items-center gap-1 transition ${
                    classes[item.color]
                  } hover:scale-110 active:scale-105`}
                  onClick={() => handleSettings(item.name)}
                >
                  <span>{item.name}</span>
                  {item.icon}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

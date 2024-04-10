import React from "react";
import { linkSettings, links } from "@/lib/data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useHeaderProviderContext } from "@/context/HeaderProvider";

export default function SettingsModal() {
  const { activeSetting, handleModal } = useHeaderProviderContext();
  return (
    <div className="rounded-md flex gap-3 -z-10 pr-10">
      {activeSetting === "Links" && (
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            You can find me on:
          </motion.h3>
          <div className="flex flex-wrap gap-5 justify-center">
            {linkSettings.map((link, index) => (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.1 * index,
                }}
                key={index}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 w-full flex justify-center gap-2 items-center hover:scale-110 active:scale-105 transition hover:bg-grey-150"
                  href={link.href}
                >
                  {link.icon}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {activeSetting === "About" && (
        <div className="max-w-[25rem] w-full text-center">
          <motion.div
            initial={{
              y: -50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
          >
            <h3 className="mb-4">Hello! I am Evan!</h3>
            <p className="flex justify-center mb-8">
              I made this website to act as a resume, but also as a site I will
              use daily for my work. Take a look around!
            </p>
          </motion.div>
        </div>
      )}
      {activeSetting === "Settings" && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="max-w-[10rem]">No settings to show for now.</div>
        </motion.div>
      )}
      {activeSetting === "Help" && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => handleModal()}
        >
          <div className="max-w-[10rem] text-wrap">
            Email{" "}
            <a href="#contact">
              <span className="font-semibold">mikrutevan@gmail.com</span>
            </a>{" "}
            for any assistance needs.
          </div>
        </motion.div>
      )}
      {activeSetting === "Pages" && (
        <div className="flex flex-col gap-3">
          {links.map((link, index) => (
            <motion.div
              onClick={() => handleModal()}
              key={link.name}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                className="flex gap-1 items-center hover:scale-110 active:scale-105 transition"
                href={link.hash}
              >
                {link.icon}
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

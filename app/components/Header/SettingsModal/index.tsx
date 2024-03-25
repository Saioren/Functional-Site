import React from "react";
import { linkSettings, links } from "@/lib/data";
import { languages } from "@/lib/data";
import classes from "./index.module.scss";
import { motion } from "framer-motion";

type SettingsModalProps = {
  activeSetting: string;
  setActiveSetting: React.Dispatch<React.SetStateAction<string>>;
};

export default function SettingsModal({ activeSetting }: SettingsModalProps) {
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
              I'm a 22 year old developer who uses the following languages and
              frameworks to develop websites:
            </p>
          </motion.div>
          <div className="flex flex-wrap gap-2 justify-center">
            {languages.map((language, index) => (
              <motion.div
                initial={{
                  y: -50,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{ delay: 0.1 * index }}
                key={index}
              >
                <a
                  className={`flex items-center bg-gray-300/70 dark:bg-gray-800/60 py-2 px-3 rounded-full hover:scale-110 active:scale-105 transition gap-1 text-sm cursor-pointer 
                  ${classes[language.color]}
                  `}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${language.href}`}
                >
                  <h4>{language.name}</h4>
                  {typeof language.icon === "string" ? (
                    <React.Fragment>
                      <img
                        src={language.icon}
                        alt={`${language.name} icon`}
                        width={16}
                        height={16}
                      />
                    </React.Fragment>
                  ) : (
                    <React.Fragment>{language.icon}</React.Fragment>
                  )}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      {activeSetting === "Settings" && <div></div>}
      {activeSetting === "Help" && <div></div>}
      {activeSetting === "Pages" && (
        <div className="flex flex-col gap-3">
          {links.map((link, index) => (
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <a
                className="flex gap-1 items-center hover:scale-110 active:scale-105 transition"
                href={link.hash}
              >
                {link.icon}
                {link.name}
              </a>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

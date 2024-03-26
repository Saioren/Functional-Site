import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { NotepadProps } from "../types";
import classes from "./index.module.scss";
import { useTheme } from "@/context/ThemeContext";
import { RiSearch2Line } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

export default function NotepadMenu({
  handleNoteSwap,
  openNotes,
}: NotepadProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? classes.darkNotepad : classes.lightNotepad
      } flex border dark:border-white/5 border-black/10 overflow-hidden flex-col max-w-[50rem] w-full`}
    >
      <FaAngleRight
        onClick={handleNoteSwap}
        className="cursor-pointer absolute top-[1.45rem] right-[1rem] text-black dark:text-white w-8 h-8 hover:scale-125 active:scale-110 transition z-10"
      />

      <div
        className={`${
          theme === "dark" ? classes.darkPaper : classes.lightPaper
        } flex flex-col relative outline-none h-full py-0 pl-[4rem] text-wrap w-full`}
      >
        <div
          className={`${
            theme == "dark" ? classes.darkWrap : classes.lightWrap
          } absolute top-0 left-0 w-full h-full overflow-scroll no-scrollbar`}
        >
          <section className="z-5 p-[1rem] fixed flex items-center gap-2 dark:bg-gray-800/95 bg-gray-300/80 w-full backdrop-blur-sm">
            <div>
              <div className="cursor-pointer hover:scale-105 transition flex items-center w-100% h-full rounded-full">
                <RiSearch2Line className="absolute z-10 ml-3 transition" />
                <input
                  className="pl-[2rem] transition rounded-full px-[1rem] py-[0.5rem] outline-none dark:bg-gray-700"
                  placeholder="Search notes"
                ></input>
              </div>
            </div>
          </section>
          <section className=" p-[1rem] pt-[6rem] flex justify-center flex-wrap gap-8">
            {/*openNotes
              ? notepad.map((note, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.25 }}
                  >
                    <div className="flex flex-col hover:scale-110 transition active:scale-105 cursor-pointer hover:bg-slate-400/30 bg-slate-300/30 w-100% h-full rounded-md p-[1rem]">
                      <div>
                        <h2>{note.title}</h2>
                        <p>{note.body}</p>
                      </div>
                      <div className="flex justify-between">
                        <h3>{note.date}</h3>
                        <h4>{note.time}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))
              : notesObject.map((note, index) => (
                  <div key={index}>
                    <div className="flex flex-col hover:scale-110 transition active:scale-105 cursor-pointer hover:bg-slate-400/30 bg-slate-300/30 w-100% h-full rounded-md p-[1rem]">
                      <div>
                        <h2>{note.title}</h2>
                        <p>{note.body}</p>
                      </div>
                      <div className="flex justify-between">
                        <h3>{note.date}</h3>
                        <h4>{note.time}</h4>
                      </div>
                    </div>
                  </div>
              ))*/}
          </section>
        </div>
      </div>
    </div>
  );
}

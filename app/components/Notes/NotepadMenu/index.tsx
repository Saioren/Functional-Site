import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { GeneralNotepadProps } from "../types";
import classes from "./index.module.scss";
import { useTheme } from "@/context/ThemeContext";
import { RiSearch2Line } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import IndividualNote from "./IndividualNote";
import toast, { Toaster } from "react-hot-toast";

export default function NotepadMenu({
  handleNoteSwap,
  openNotes,
  notes,
  loading,
}: GeneralNotepadProps) {
  const { theme } = useTheme();
  const [readNote, setReadNote] = useState(false);

  return (
    <div
      className={`${
        theme === "dark" ? classes.darkNotepad : classes.lightNotepad
      } flex overflow-hidden flex-col max-w-[50rem] w-full`}
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
          <section className="p-[1rem] pt-[6rem]">
            <div className="flex flex-wrap gap-4">
              {notes &&
                notes.map((note, index) => (
                  <div
                    className="flex max-w-[11.22rem] w-full"
                    style={{ width: "calc(25% - [1rem])" }}
                  >
                    <IndividualNote
                      readNote={readNote}
                      setReadNote={setReadNote}
                      openNotes={openNotes}
                      note={note}
                      index={index}
                    />
                  </div>
                ))}
              {loading && (
                <div>
                  <h2>Loading notes...</h2>
                </div>
              )}
              {!loading && notes.length === 0 && (
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full">
                  <motion.div className="flex items-center justify-center h-full w-full">
                    <div className="flex flex-col gap-2 text-center bg-gray-400/30 dark:bg-gray-600/60 px-[1rem] py-[2rem] rounded-md">
                      <h2 className="text-xl">
                        Your notes are{" "}
                        <span className="font-semibold">empty</span>.
                      </h2>
                      <p>Write a note to see them displayed here!</p>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

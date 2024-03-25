import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { NotepadProps } from "../types";
import classes from "./index.module.scss";
import { useTheme } from "@/context/ThemeContext";
import { RiSearch2Line } from "react-icons/ri";

export default function NotepadMenu({ handleNoteSwap }: NotepadProps) {
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
          } absolute top-0 left-0 w-full h-full `}
        >
          <section className="p-[1rem] flex items-center gap-2 bg-green-300">
            <RiSearch2Line className="absolute left-6" />
            <input
              className="pl-[2rem] rounded-full px-[1rem] py-[0.5rem] outline-none"
              placeholder="Search notes"
            ></input>
          </section>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import classes from "./index.module.scss";
import { useTheme } from "@/context/ThemeContext";
import { FaAngleRight } from "react-icons/fa";
import { NotepadProps } from "../types";

export default function Notepad({ handleNoteSwap }: NotepadProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? classes.darkNotepad : classes.lightNotepad
      } shadow-md overflow-hidden w-full flex flex-col`}
      style={{ maxHeight: "calc(100vh - 2rem)" }} // Limit height to the viewport height minus a small buffer
    >
      <div
        className={`${
          theme === "dark" ? classes.darkHeader : classes.lightHeader
        } p-3 w-full bg-gray-800 text-center relative`}
      >
        <FaAngleRight
          onClick={handleNoteSwap}
          className="cursor-pointer absolute top-[1.45rem] right-[1rem] text-white w-8 h-8 hover:scale-125 active:scale-110 transition"
        />
        <h2 className="text-2xl">Write something!</h2>
        <p>Track your notes here.</p>
      </div>
      <div
        className={`${
          theme === "dark" ? classes.darkPaper : classes.lightPaper
        } flex-grow relative outline-none py-0 pl-[4rem] text-wrap overflow-auto w-full`}
        contentEditable={true}
      ></div>
    </div>
  );
}

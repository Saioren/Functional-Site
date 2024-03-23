"use client";

import React from "react";
import classes from "./index.module.scss";
import { useTheme } from "@/context/ThemeContext";

export default function Notepad() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "dark" ? classes.darkNotepad : classes.lightNotepad
      } flex shadow-md overflow-hidden flex-col max-w-[50rem] w-full`}
    >
      <div
        className={`${
          theme === "dark" ? classes.darkHeader : classes.lightHeader
        } p-3 w-full bg-gray-800 text-center`}
      >
        <h2 className="text-2xl">Write something!</h2>
        <p>Track your notes here.</p>
      </div>
      <div
        className={`${
          theme === "dark" ? classes.darkPaper : classes.lightPaper
        } flex flex-col relative outline-none py-0 pl-[4rem] text-wrap h-[25rem] w-full`}
        contentEditable={true}
      ></div>
    </div>
  );
}

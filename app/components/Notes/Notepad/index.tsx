import React, { useState } from "react";
import classes from "./index.module.scss";
import { useTheme } from "@/context/ThemeContext";
import { FaAngleRight } from "react-icons/fa";
import { NotepadProps } from "../types";

export default function Notepad({ handleNoteSwap }: NotepadProps) {
  const { theme } = useTheme();

  // State variable to hold the content of the content editable div
  const [noteContent, setNoteContent] = useState("");

  // Event handler to update the noteContent state variable when content changes
  const handleContentChange = (event) => {
    setNoteContent(event.target.innerText);
  };

  console.log(noteContent);

  return (
    <div
      className={`${
        theme === "dark" ? classes.darkNotepad : classes.lightNotepad
      } shadow-md overflow-hidden w-full flex flex-col`}
      style={{ maxHeight: "calc(100vh - 2rem)" }}
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
      {/* Content editable div with event handler */}
      <div
        className={`${
          theme === "dark" ? classes.darkPaper : classes.lightPaper
        } flex-grow relative outline-none py-0 pl-[4rem] text-wrap overflow-auto w-full`}
        contentEditable={true}
        onInput={handleContentChange} // Attach event handler
      ></div>
      {/* Optional: You can store or use the noteContent state variable elsewhere in your component */}
    </div>
  );
}

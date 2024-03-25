import React, { useState } from "react";
import classes from "./index.module.scss";
import { useTheme } from "@/context/ThemeContext";
import { FaAngleRight, FaPaperPlane } from "react-icons/fa";
import { NotepadProps } from "../types";
import { AnimatePresence, motion } from "framer-motion";

export default function Notepad({ handleNoteSwap }: NotepadProps) {
  const { theme } = useTheme();
  const [save, setSave] = useState(false);
  const [error, setError] = useState(false);

  const [noteContent, setNoteContent] = useState("");

  const handleContentChange = (event) => {
    setNoteContent(event.target.innerText);
  };

  function initSaveNote() {
    if (noteContent === "") {
      setError(true);
      return;
    } else {
      setError(false);
      setSave(true);
    }
  }

  function handleSaveNote() {
    //localStorage.setItem('noteContent', 'noteContent')
  }
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
        onInput={handleContentChange}
      ></div>
      <div className="group absolute bottom-2 right-2 rounded-full">
        <button
          onClick={initSaveNote}
          className="flex items-center gap-2 bg-gray-800 py-3 px-4 rounded-full group-hover:scale-110 group-active:scale-105 transition"
        >
          Submit
          <FaPaperPlane className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </button>
      </div>
      <AnimatePresence>
        {save && (
          <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full flex justify-center transition items-center backdrop-blur-sm">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-center flex-col p-[1rem] gap-5 bg-grey-100/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-md border dark:border-white/10 shadow-lg">
                <h2>What would you like to name your entry?</h2>
                <input
                  className="outline-none bg-white dark:bg-gray-800 rounded-md py-2 px-3"
                  placeholder="Note title"
                ></input>
                <div className="flex px-4 w-full items-center justify-between">
                  <button
                    onClick={() => setSave(false)}
                    className="bg-transparent hover:bg-gray-800 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleSaveNote()}
                    className="bg-transparent hover:bg-gray-800 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                  >
                    Save
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {error && <div>Error! Note cannot be empty!</div>}
      {/* Optional: You can store or use the noteContent state variable elsewhere in your component */}
    </div>
  );
}

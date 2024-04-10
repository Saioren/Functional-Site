"use client";

import React from "react";
import Notepad from "./Notepad";
import NotepadMenu from "./NotepadMenu";
import classes from "./index.module.scss";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { useNotepadProviderContext } from "@/context/NotepadProvider";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";

const NotesComponent = () => {
  const { theme } = useTheme();
  const router = useRouter();

  const {
    notes,
    loading,
    openNotes,
    setOpenNotes,
    handleNoteSwap,
    noteSwap,
    setNoteSwap,
  } = useNotepadProviderContext();

  return (
    <main className="flex w-full h-full">
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full h-full"
      >
        <div
          className={`${classes.notePadInner} ${
            openNotes ? classes.isFlipped : ""
          }  items-center flex w-full justify-center max-h-[50rem]  pt-[3rem]`}
        >
          {!noteSwap && (
            <section
              className={`${classes.cardFaceFront} ${classes.cardFace} flex w-full max-w-[50rem] h-full sm:mb-[3rem] mb-[1rem] min-h-[7rem]`}
            >
              <Notepad />
            </section>
          )}

          {noteSwap && (
            <section
              className={`${classes.cardFaceBack} ${classes.cardFace} flex w-full max-w-[50rem] h-full sm:mb-[3rem] mb-[1rem] min-h-[7rem]`}
            >
              <NotepadMenu />
            </section>
          )}
        </div>
      </motion.div>
    </main>
  );
};

export default NotesComponent;

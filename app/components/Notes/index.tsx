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

  const { notes, loading, openNotes, setOpenNotes, handleNoteSwap } =
    useNotepadProviderContext();

  return (
    <main className="p-[2rem] pt-[5rem] flex justify-center">
      <div>
        <Toaster position="top-center" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div
          className={`${classes.notePadInner} ${
            openNotes ? classes.isFlipped : ""
          } flex justify-center items-center`}
        >
          <section
            className={`${classes.cardFaceFront} ${classes.cardFace} max-h-[39.75rem] flex justify-center w-[50rem] min-h-[15rem] max-w-[50rem] top-0`}
          >
            <Notepad />
          </section>
          <section
            className={`max-h-[39.75rem] flex justify-center w-[50rem] max-w-[50rem] top-0 ${classes.cardFaceBack} ${classes.cardFace}`}
          >
            <NotepadMenu />
          </section>
        </div>
      </motion.div>
    </main>
  );
};

export default NotesComponent;

"use client";

import React, { useState } from "react";
import Notepad from "./Notepad";
import NotepadMenu from "./NotepadMenu";
import classes from "./index.module.scss";
import { motion } from "framer-motion";

export default function NotesComponent() {
  const [openNotes, setOpenNotes] = useState(false);
  function handleNoteSwap() {
    if (!openNotes) {
      setOpenNotes(true);
    } else {
      setOpenNotes(false);
    }
  }
  return (
    <main className="p-[2rem]">
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
            className={`${classes.cardFaceFront} ${classes.cardFace} max-h-[39.75rem] flex justify-center w-full max-w-[50rem] top-0`}
          >
            <Notepad handleNoteSwap={handleNoteSwap} />
          </section>
          <section
            className={`max-h-[39.75rem] flex justify-center w-full max-w-[50rem] top-0 ${classes.cardFaceBack} ${classes.cardFace}`}
          >
            <NotepadMenu handleNoteSwap={handleNoteSwap} />
          </section>
        </div>
      </motion.div>
    </main>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Notepad from "./Notepad";
import NotepadMenu from "./NotepadMenu";
import classes from "./index.module.scss";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const NotesComponent = () => {
  const [notes, setNotes] = useState([]);
  const [errorState, setErrorState] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/notes", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch notes");
        }
        const data = await res.json();
        setNotes(data.notes);
      } catch (error) {
        console.log("Error loading notes: ", error);
        setErrorState(true);
      }
    };

    fetchNotes();
  }, []);

  function handleNoteSwap() {
    setOpenNotes((prevState) => !prevState);
  }

  return (
    <main className="p-[2rem]">
      {errorState && (
        <div>
          <Toaster position="top-center" />
        </div>
      )}
      <div className="absolute -top-[5rem]">
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
            className={`${classes.cardFaceFront} ${classes.cardFace} max-h-[39.75rem] flex justify-center w-full max-w-[50rem] top-0`}
          >
            <Notepad
              setErrorState={setErrorState}
              openNotes={openNotes}
              handleNoteSwap={handleNoteSwap}
            />
          </section>
          <section
            className={`max-h-[39.75rem] flex justify-center w-full max-w-[50rem] top-0 ${classes.cardFaceBack} ${classes.cardFace}`}
          >
            <NotepadMenu
              notes={notes}
              setErrorState={setErrorState}
              openNotes={openNotes}
              handleNoteSwap={handleNoteSwap}
            />
          </section>
        </div>
      </motion.div>
    </main>
  );
};

export default NotesComponent;

"use client";

import React, { useState } from "react";
import Notepad from "./Notepad";
import NotepadMenu from "./NotepadMenu";
import classes from "./index.module.scss";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/notes", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function NotesComponent() {
  const { topics } = await getTopics();
  const [error, setError] = useState(false);
  const [openNotes, setOpenNotes] = useState(false);
  function handleNoteSwap() {
    if (!openNotes) {
      setOpenNotes(true);
    } else {
      setOpenNotes(false);
    }
  }
  console.log(topics);
  return (
    <main className="p-[2rem]">
      {topics.map((topic) => (
        <div key={topic._id}>
          <h1>{topic.title}</h1>
          <h2>{topic.body}</h2>
        </div>
      ))}
      {error && (
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
              topics={topics}
              setError={setError}
              openNotes={openNotes}
              handleNoteSwap={handleNoteSwap}
            />
          </section>
          <section
            className={`max-h-[39.75rem] flex justify-center w-full max-w-[50rem] top-0 ${classes.cardFaceBack} ${classes.cardFace}`}
          >
            <NotepadMenu
              topics={topics}
              setError={setError}
              openNotes={openNotes}
              handleNoteSwap={handleNoteSwap}
            />
          </section>
        </div>
      </motion.div>
    </main>
  );
}

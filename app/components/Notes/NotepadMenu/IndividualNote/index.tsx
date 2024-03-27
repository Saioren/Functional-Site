import React, { useState } from "react";
import { Note } from "../../types";
import { motion } from "framer-motion";
import Link from "next/link";
import ReadNote from "./ReadNote";

interface IndividualNoteProps {
  note: Note;
  index: number;
  openNotes: boolean;
  setReadNote: React.Dispatch<React.SetStateAction<boolean>>;
  readNote: boolean;
}

export default function IndividualNote({
  note,
  index,
  openNotes,
  setReadNote,
  readNote,
}: IndividualNoteProps) {
  const [clickedNoteId, setClickedNoteId] = useState("");

  const createdAtDate = new Date(note.createdAt);
  const createdAtDateString = createdAtDate.toLocaleDateString();
  const createdAtTimeString = createdAtDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const updatedAtDate = new Date(note.updatedAt);
  const updatedAtDateString = updatedAtDate.toLocaleDateString();
  const updatedAtTimeString = updatedAtDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  function handleNoteRead() {
    if (!readNote) {
      setClickedNoteId(note._id);
      setReadNote(true);
    } else {
      setClickedNoteId("");
      setReadNote(false);
    }
  }

  return openNotes ? (
    <motion.div
      key={note._id}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index + 0.25 }}
      className={`flex w-full`}
    >
      {clickedNoteId === note._id ? (
        <ReadNote handleNoteRead={handleNoteRead} note={note} />
      ) : (
        !readNote && (
          <div
            onClick={handleNoteRead}
            className="flex flex-col hover:scale-110 transition active:scale-105 cursor-pointer hover:bg-slate-300/80 bg-slate-400/40 w-full h-full rounded-md p-[1rem]"
          >
            <div>
              <h2 className={`${readNote ? "" : "truncate overflow-hidden"}`}>
                {note.title}
              </h2>
              <p className={`${readNote ? "" : "truncate overflow-hidden"}`}>
                {note.body}
              </p>
            </div>
            <div className="flex justify-between gap-4">
              <h3>{createdAtDateString}</h3>
              <h4>{createdAtTimeString}</h4>
            </div>
          </div>
        )
      )}
    </motion.div>
  ) : (
    <div key={note._id} className={`flex w-full`}>
      <div className="flex flex-col hover:scale-110 transition active:scale-105 cursor-pointer hover:bg-slate-300/80 bg-slate-300/60 w-full h-full rounded-md p-[1rem]">
        <div>
          <h2 className={`${readNote ? "" : "truncate overflow-hidden"}`}>
            {note.title}
          </h2>
          <p className={`${readNote ? "" : "truncate overflow-hidden"}`}>
            {note.body}
          </p>
        </div>
        <div className="flex justify-between gap-4">
          <h3>{createdAtDateString}</h3>
          <h4>{createdAtTimeString}</h4>
        </div>
      </div>
    </div>
  );
}

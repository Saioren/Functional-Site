import React from "react";
import { Note } from "../../types";
import { motion } from "framer-motion";

interface IndividualNoteProps {
  note: Note;
  index: number;
  openNotes: boolean;
}

export default function IndividualNote({
  note,
  index,
  openNotes,
}: IndividualNoteProps) {
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

  return openNotes ? (
    <motion.div
      key={note._id}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index + 0.25 }}
      className="flex flex-1"
    >
      <div className="flex flex-col hover:scale-110 transition active:scale-105 cursor-pointer hover:bg-slate-300/80 bg-slate-300/60 w-full h-full rounded-md p-[1rem]">
        <div>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
        <div className="flex justify-between">
          <h3>{createdAtDateString}</h3>
          <h4>{createdAtTimeString}</h4>
        </div>
      </div>
    </motion.div>
  ) : (
    <div key={index} className="flex flex-1">
      <div className="flex flex-col hover:scale-110 transition active:scale-105 cursor-pointer hover:bg-slate-300/80 bg-slate-300/60 w-full h-full rounded-md p-[1rem]">
        <div>
          <h2>{note.title}</h2>
          <p>{note.body}</p>
        </div>
        <div className="flex justify-between">
          <h3>{createdAtDateString}</h3>
          <h4>{createdAtTimeString}</h4>
        </div>
      </div>
    </div>
  );
}

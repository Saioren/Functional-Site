"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ReadNote from "./ReadNote";
import { Note, useNotepadProviderContext } from "@/context/NotepadProvider";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface IndividualNoteProps {
  note: Note;
  index: number;
}

export default function IndividualNote({ note, index }: IndividualNoteProps) {
  const router = useRouter();
  const {
    openNotes,
    noteSwitch,
    readNote,
    setOpenNotes,
    setInitRemove,
    setReadNote,
  } = useNotepadProviderContext();

  const [clickedNoteId, setClickedNoteId] = useState("");

  const removeNote = async () => {
    toast.loading("Deleting note...");
    const res = await fetch(
      `http://localhost:3000/api/notes?id=${clickedNoteId}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      toast.dismiss();
      setInitRemove(false);
      handleNoteRead();
      router.refresh();
      toast.success("Note deleted.");
      setTimeout(() => {
        toast.dismiss();
      }, 4000);
    }
  };

  const handleNoteRead = () => {
    if (!readNote) {
      setClickedNoteId(note._id);
      setReadNote(true);
    } else {
      setClickedNoteId("");
      setReadNote(false);
    }
  };

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

  {
    console.log("clickedNoteId:", clickedNoteId);
  }
  {
    console.log("note._id:", note._id);
  }

  return noteSwitch ? (
    <motion.div
      key={note._id}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index + 0.25 }}
      className={`flex w-full`}
    >
      {clickedNoteId === note._id ? (
        <ReadNote
          removeNote={removeNote}
          handleNoteRead={handleNoteRead}
          note={note}
        />
      ) : (
        !readNote && (
          <div
            onClick={handleNoteRead}
            className="flex flex-col hover:scale-110 transition active:scale-105 cursor-pointer bg-white backdrop-blur-sm dark:bg-slate-400/40  w-full h-full rounded-md p-[1rem] shadow-md"
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
    !readNote && (
      <div
        onClick={handleNoteRead}
        className="flex flex-col hover:scale-110 transition active:scale-105 cursor-pointer bg-white backdrop-blur-sm dark:bg-slate-400/40  w-full h-full rounded-md p-[1rem] shadow-md"
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
  );
}

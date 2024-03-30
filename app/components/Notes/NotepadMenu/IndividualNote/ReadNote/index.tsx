import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Note, useNotepadProviderContext } from "@/context/NotepadProvider";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type ReadNoteProps = {
  note: Note;
  handleNoteRead: () => void;
  removeNote: () => void;
  resetNote: () => void;
};

export default function ReadNote({
  note,
  handleNoteRead,
  removeNote,
  resetNote,
}: ReadNoteProps) {
  const router = useRouter();

  const {
    setOpenNotes,
    setNoteSwitch,
    setUpdateNote,
    initRemove,
    setInitRemove,
  } = useNotepadProviderContext();
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

  function handleEdit() {
    setOpenNotes(false);
    setUpdateNote(true);
    setTimeout(() => {
      handleNoteRead();
      setNoteSwitch(false);
    }, 1000);
  }

  return (
    <div className="absolute z-10 w-full h-full top-0 bottom-0 left-0 right-0 bg-gray-150">
      <div className=" border-none flex justify-between gap-4 w-full py-[1rem] px-[2rem] items-center">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div
            className="cursor-pointer hover:scale-110 active:scale-105 transition"
            onClick={handleNoteRead}
          >
            <BsXLg size={24} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-2"
        >
          <h3>{createdAtDateString}</h3>
          <h3>{createdAtTimeString}</h3>
        </motion.div>
      </div>
      <section className="p-[2rem] flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-semibold text-xl">{note.title}</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p>{note.body}</p>
        </motion.div>
      </section>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute bottom-0 left-0 right-0 w-full"
      >
        <div className="flex justify-between w-full px-[2rem] py-[1rem]">
          <FaEdit
            onClick={handleEdit}
            className="cursor-pointer hover:scale-110 active:scale-105 transition"
            size={24}
          />
          <FaTrashAlt
            onClick={() => setInitRemove(true)}
            className="cursor-pointer hover:scale-110 active:scale-105 transition hover:text-red-400"
            size={24}
          />
        </div>
      </motion.div>
      {initRemove && (
        <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full flex justify-center transition items-center backdrop-blur-sm">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-center flex-col p-[1rem] gap-5 bg-gray-100/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-md border dark:border-white/10 shadow-lg">
              <h2>Are you sure you want to delete this note?</h2>

              <div className="flex px-4 w-full items-center justify-between">
                <button
                  onClick={() => setInitRemove(false)}
                  className=" hover:scale-110 dark:bg-gray-700/80 bg-gray-300/80 transition active:scale-105 py-1 px-3 rounded-full"
                >
                  Go back
                </button>
                <button
                  onClick={removeNote}
                  className=" hover:text-red-500 dark:bg-gray-700/80 bg-gray-300/80 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

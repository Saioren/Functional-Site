import React, { useEffect, useState } from "react";
import { FaAngleRight, FaPaperPlane } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Note, useNotepadProviderContext } from "@/context/NotepadProvider";
import classes from "./index.module.scss";
import { useTheme } from "@/context/ThemeContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function UpdateNote() {
  const router = useRouter();
  const { theme } = useTheme();
  const {
    handleNoteSwap,
    handleContentChange,
    setTitle,
    setBody,
    initUpdateNote,
    handleResetUpdateNote,
    clickedNoteId,
    handleCancelNote,
    initCancelUpdate,
    setCancelUpdateNote,
    cancelUpdateNote,
    handleCancelUpdateNote,
    notes,
    save,
    setNewTitle,
    resetNote,
    setNewBody,
    setUpdateNote,
    title: newTitle, // Renamed to avoid conflict
    body: newBody, // Renamed to avoid conflict
  } = useNotepadProviderContext();

  useEffect(() => {
    if (notes) {
      // Find the note with the matching ID
      const note = notes.find((note) => note._id === clickedNoteId);

      if (note) {
        setTitle(note.title);
        setBody(note.body);
      }
    }
  }, [notes, setTitle, setBody]);

  const handleUpdateNote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!note || !note._id || !newTitle) {
      // Ensure note._id and newTitle exist
      toast.error("Give your note a title!");
      return;
    }

    try {
      toast.loading("Updating note...");
      const res = await fetch(
        `http://localhost:3000/api/notes/${clickedNoteId}`,
        {
          // Include note ID in the URL
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newTitle, newBody }), // Use newTitle directly
        }
      );
      if (res.ok) {
        toast.dismiss();
        router.refresh();
        toast.success("Note updated successfully!");
      } else {
        throw new Error("Failed to update note");
      }
    } catch (error) {
      console.log(error);
    } finally {
      resetNote();
      handleResetUpdateNote();
      setTimeout(() => {
        toast.dismiss();
      }, 4000);
    }
  };

  const note = notes.find((note) => note._id === clickedNoteId);

  console.log("title:", newTitle, "body:", newBody, note?._id);

  return (
    <form
      onSubmit={handleUpdateNote}
      className={`${
        theme === "dark" ? classes.darkNotepad : classes.lightNotepad
      } overflow-hidden w-full flex flex-col`}
    >
      <div
        className={`${
          theme === "dark" ? classes.darkHeader : classes.lightHeader
        } p-3 w-full bg-gray-800 text-center relative`}
      >
        <FaAngleRight
          onClick={initCancelUpdate}
          className="cursor-pointer absolute top-[1.45rem] right-[1rem] text-white w-8 h-8 hover:scale-125 active:scale-110 transition"
        />
        <h2 className="text-2xl">Write something!</h2>
        <p>Update your note here.</p>
      </div>
      {/* Content editable div with event handler */}
      <div
        id="writingSpace"
        className={`${
          theme === "dark" ? classes.darkPaper : classes.lightPaper
        } flex-grow relative outline-none py-0 pl-[4rem] text-wrap overflow-auto w-full`}
        contentEditable={true}
        suppressContentEditableWarning={true}
        onInput={handleContentChange}
      >
        {note ? note.body : ""}
      </div>
      <div className={classes.darkLine} />
      <div className={classes.lightLine} />

      <div className="group absolute bottom-2 right-2 rounded-full">
        <button
          onClick={(e) => initUpdateNote(e)}
          type="submit"
          className="flex items-center bg-white backdrop-blur-sm shadow-md border border-black/10 dark:border-white/10 gap-2 dark:bg-gray-800/80 py-3 px-4 rounded-full group-hover:scale-110 group-active:scale-105 transition"
        >
          Update
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
              <div className="flex items-center justify-center flex-col p-[1rem] gap-5 bg-gray-100/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-md border dark:border-white/10 shadow-lg">
                <h2>Update entry title?</h2>
                <input
                  className="outline-none bg-white dark:bg-gray-800 rounded-md py-2 px-3"
                  placeholder="Note title"
                  type="text"
                  value={newTitle}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <div className="flex px-4 w-full items-center justify-between">
                  <button
                    onClick={handleCancelNote}
                    className="bg-transparent hover:bg-gray-300/60 dark-hover:bg-gray-800 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={() => handleUpdateNote}
                    className="bg-transparent hover:bg-gray-300/60 dark-hover:bg-gray-800 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                  >
                    Update
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {cancelUpdateNote && (
          <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full flex justify-center transition items-center backdrop-blur-sm">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex items-center justify-center flex-col p-[1rem] gap-5 bg-gray-100/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-md border dark:border-white/10 shadow-lg">
                <h2>Discard update?</h2>

                <div className="flex px-4 w-full items-center justify-between">
                  <button
                    onClick={handleCancelNote}
                    className="bg-transparent hover:bg-gray-300/60 dark-hover:bg-gray-800 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleCancelUpdateNote}
                    className="bg-transparent hover:bg-gray-300/60 dark-hover:bg-gray-800 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                  >
                    Discard
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Optional: You can store or use the noteContent state variable elsewhere in your component */}
    </form>
  );
}

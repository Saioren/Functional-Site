import React, { useState } from "react";
import classes from "./index.module.scss";
import { useTheme } from "@/context/ThemeContext";
import { FaAngleRight, FaPaperPlane } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type NotepadProps = {
  handleNoteSwap?: () => void;
  openNotes: boolean;
  loading: boolean;
};

export default function Notepad({ handleNoteSwap, loading }: NotepadProps) {
  const router = useRouter();

  const { theme } = useTheme();
  const [save, setSave] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({});

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleContentChange = (event) => {
    setBody(event.target.innerText);
  };

  function initSaveNote(event) {
    event.preventDefault();
    if (body === "") {
      if (theme === "dark") {
        toast.error("Note cannot be empty!", {
          style: {
            background: "#1D1D26",
            color: "#fff",
          },
        });
      } else {
        toast.error("Note cannot be empty!");
      }

      return;
    } else {
      setSave(true);
    }
  }

  const handleCancelNote = (e) => {
    e.preventDefault();
    setSave(false);
  };

  const handleSaveNote = async (e) => {
    e.preventDefault();

    if (!title || !body) {
      toast.error("Give your note a title!");
      return;
    }

    try {
      toast.loading("Saving note...");
      const res = await fetch("http://localhost:3000/api/notes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, body }),
      });
      if (res.ok) {
        toast.dismiss();
        toast.success("Note saved successfully!");
      } else {
        throw new Error("Failed to create note");
      }
    } catch (error) {
      console.log(error);
    } finally {
      resetNote();
      setTimeout(() => {
        toast.dismiss();
      }, 4000);
    }
  };

  function eraseWriting() {
    const writingSpace = document.getElementById("writingSpace");
    if (writingSpace !== null) {
      writingSpace.innerHTML = "";
    } else {
      return;
    }
  }

  function resetNote() {
    setSave(false);
    setTitle("");
    setBody("");
    eraseWriting();
  }

  return (
    <form
      onSubmit={handleSaveNote}
      className={`${
        theme === "dark" ? classes.darkNotepad : classes.lightNotepad
      } shadow-md overflow-hidden w-full flex flex-col`}
      style={{ maxHeight: "calc(100vh - 2rem)" }}
    >
      <div
        className={`${
          theme === "dark" ? classes.darkHeader : classes.lightHeader
        } p-3 w-full bg-gray-800 text-center relative`}
      >
        <FaAngleRight
          onClick={handleNoteSwap}
          className="cursor-pointer absolute top-[1.45rem] right-[1rem] text-white w-8 h-8 hover:scale-125 active:scale-110 transition"
        />
        <h2 className="text-2xl">Write something!</h2>
        <p>Track your notes here.</p>
      </div>
      {/* Content editable div with event handler */}
      <div
        id="writingSpace"
        className={`${
          theme === "dark" ? classes.darkPaper : classes.lightPaper
        } flex-grow relative outline-none py-0 pl-[4rem] text-wrap overflow-auto w-full`}
        contentEditable={true}
        onInput={handleContentChange}
        defaultValue={body}
      ></div>
      <div className="group absolute bottom-2 right-2 rounded-full">
        <button
          onClick={initSaveNote}
          type="submit"
          className="flex items-center bg-slate-200/60 backdrop-blur-sm shadow-md border border-black/10 dark:border-white/10 gap-2 dark:bg-gray-800/80 py-3 px-4 rounded-full group-hover:scale-110 group-active:scale-105 transition"
        >
          Submit
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
                <h2>What would you like to name your entry?</h2>
                <input
                  className="outline-none bg-white dark:bg-gray-800 rounded-md py-2 px-3"
                  placeholder="Note title"
                  value={title}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
                <div className="flex px-4 w-full items-center justify-between">
                  <button
                    onClick={handleCancelNote}
                    className="bg-transparent hover:bg-gray-300/60 dark-hover:bg-gray-800 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    onClick={handleSaveNote}
                    className="bg-transparent hover:bg-gray-300/60 dark-hover:bg-gray-800 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                  >
                    Save
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

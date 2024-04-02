import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  TimerType,
  useTimetableContextProvider,
} from "@/context/TimetableProvider";
import { format } from "date-fns";

type TimersDisplayProps = {
  timer: TimerType;
  index: number;
};

export default function TimersDisplay({ timer, index }: TimersDisplayProps) {
  const createdAtDate = new Date(timer.createdAt);
  const createdAtDateString = createdAtDate.toLocaleDateString();
  const createdAtTimeString = createdAtDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const formattedDate = format(new Date(timer.createdAt), "EEEE, MMMM d");

  const {
    deleteEntry,
    clickedEntryId,
    setDeleteEntry,
    setClickedEntryId,
    handleDeleteEntry,
  } = useTimetableContextProvider();

  const router = useRouter();

  const [previousSettings, setPreviousSettings] = useState(false);

  function handlePreviousSettings() {
    setPreviousSettings((prevState) => !prevState);
  }

  const removeEntry = async () => {
    try {
      toast.loading("Deleting entry...");
      const res = await fetch(
        `http://localhost:3000/api/timers?id=${clickedEntryId}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        toast.dismiss();
        setDeleteEntry(false);
        toast.success("Entry deleted.");
        router.refresh();
        setTimeout(() => {
          toast.dismiss();
        }, 4000);
      } else {
        throw new Error("Failed to delete entry.");
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
      toast.error("Failed to delete entry.");
    }
  };

  return timer ? (
    <div className="flex border border-black/10 rounded-md transition w-full mb-4 last:ml-4">
      <div className="flex relative justify-between rounded-md transition bg-white dark:bg-gray-700/60 h-full w-full  p-[1rem] shadow-lg ">
        <div className="flex gap-4">
          {timer.entryName && (
            <div>{timer.entryName ? timer.entryName : ""}</div>
          )}
          <div>{formattedDate}</div>
          <div>{createdAtTimeString}</div>
        </div>
        <section className=" flex gap-4 items-center">
          <div>
            <h2>{timer.hours === 0 ? "" : timer.hours + " hours"}</h2>
          </div>

          <div>
            <h2>{timer.minutes === 0 ? "" : timer.minutes + " minutes"}</h2>
          </div>
          <div>
            <h2>{timer.seconds} seconds</h2>
          </div>
          <BiDotsHorizontalRounded
            size={24}
            className="hover:scale-110 cursor-pointer transition"
            onClick={handlePreviousSettings}
          />
          <FaTrash
            onClick={() => handleDeleteEntry(timer._id)}
            className="hover:scale-110 cursor-pointer transition"
            aria-label="Delete entry"
          />
          {deleteEntry && clickedEntryId === timer._id ? (
            <div className="absolute left-0 right-0 top-0 bottom-0 w-full h-full flex justify-center transition items-center ">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="flex items-center justify-center flex-col p-[1rem] gap-5 bg-gray-100/60 dark:bg-gray-800/60 rounded-md border dark:border-white/10 shadow-lg">
                  <h2>Delete entry?</h2>
                  <div className="flex px-4 w-full items-center justify-between">
                    <button
                      onClick={() => setDeleteEntry(false)}
                      className="bg-transparent hover:bg-gray-300/60 dark-hover:bg-gray-800 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      onClick={removeEntry}
                      className="bg-transparent hover:bg-gray-300/60 dark-hover:bg-gray-800 hover:scale-110 transition active:scale-105 py-1 px-3 rounded-full"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            ""
          )}
          {previousSettings && (
            <div className="absolute flex items-center gap-2 right-0 -bottom-[3.25rem] dark:bg-gray-700 p-[1rem] z-10">
              <h3>Settings</h3>
            </div>
          )}
        </section>
      </div>
    </div>
  ) : (
    <div>
      <h2>Loading entries...</h2>
    </div>
  );
}

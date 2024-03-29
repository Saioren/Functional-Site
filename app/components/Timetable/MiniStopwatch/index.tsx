"use client";

import React from "react";
import { useTimetableContextProvider } from "@/context/TimetableProvider";
import { motion } from "framer-motion";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";

export default function MiniStopwatch() {
  const {
    hours,
    minutes,
    seconds,
    started,
    handleStart,
    handlePause,
    handleStop,
    miniStopwatch,
    handleSaveTimer,
    timers,
    setTimers,
  } = useTimetableContextProvider();

  function handleSeconds() {}

  return (
    miniStopwatch && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="fixed bottom-[1rem] right-[1rem]">
          <section className="dark:bg-gray-700/60 bg-white/70 backdrop-blur-sm rounded-md flex gap-2 flex-col p-[1rem] justify-center items-center shadow-lg">
            <div className="flex">
              {hours >= 1 && (
                <>
                  <span>{hours < 10 ? "0" + hours : hours}</span>
                  <span>:</span>
                </>
              )}
              {minutes >= 1 && (
                <>
                  {hours === 0 ? (
                    <span>{minutes < 10 ? "0" + minutes : minutes}</span>
                  ) : (
                    <span>{minutes < 10 ? "0" + minutes : minutes}</span>
                  )}

                  <span>:</span>
                </>
              )}
              <>
                {minutes === 0 ? (
                  <span>{seconds + " sec"}</span>
                ) : (
                  <span>{seconds < 10 ? "0" + seconds : seconds}</span>
                )}
              </>
              {hours === 0 && minutes > 0 ? " min" : ""}
            </div>
            <div className="flex gap-4">
              <button
                className="dark:bg-gray-700/80 group cursor-pointer bg-slate-300/60 rounded-full shadow-sm p-[0.5rem] hover:scale-110 active:scale-105 transition"
                onClick={handleStart}
              >
                <FaPlay className="group-hover:text-green-500 transition" />
              </button>
              <button
                className="dark:bg-gray-700/80 group cursor-pointer bg-slate-300/60 rounded-full shadow-sm p-[0.5rem] hover:scale-110 active:scale-105 transition"
                onClick={handlePause}
              >
                <FaPause className="group-hover:text-blue-500 transition" />
              </button>
              <button
                className="dark:bg-gray-700/80 group cursor-pointer bg-slate-300/60 rounded-full shadow-sm p-[0.5rem] hover:scale-110 active:scale-105 transition"
                onClick={handleSaveTimer}
              >
                <FaStop className="group-hover:text-red-500 transition" />
              </button>
            </div>
          </section>
        </div>
      </motion.div>
    )
  );
}

import React from "react";
import { motion } from "framer-motion";
import { useTimetableContextProvider } from "@/context/TimetableProvider";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";

export default function Stopwatch({}) {
  const {
    hours,
    minutes,
    seconds,
    setWeeklyHours,
    handlePause,
    handleStart,
    handleSaveTimer,
  } = useTimetableContextProvider();

  return (
    <section className="flex w-full h-full justify-between gap-4">
      <section className="flex w-full items-center">
        <input
          className="pl-4 bg-white shadow-lg dark:bg-gray-600/20 p-[0.5rem] rounded-full outline-none hover:scale-110 active:scale-105 transition border border-black/10"
          placeholder="Name your task"
        ></input>
      </section>
      <section className="flex h-full items-center gap-8">
        <div className="flex gap-4 justify-center items-center text-lg">
          <div>
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
              }}
            >
              <span className="">
                <h2>{hours < 10 ? "0" + hours : hours}</h2>
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
            }}
          >
            <span>:</span>
          </motion.div>
          <div>
            <motion.div
              initial={{
                y: 50,
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
              }}
            >
              <span>
                <h2>{minutes < 10 ? "0" + minutes : minutes}</h2>
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
            }}
          >
            <span>:</span>
          </motion.div>
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
            }}
          >
            <span>
              <h2>{seconds < 10 ? "0" + seconds : seconds}</h2>
            </span>
          </motion.div>
        </div>
        <section className="flex justify-center h-full">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="flex gap-4 w-full max-w-[32rem] "
          >
            <button
              onClick={handleStart}
              className="border transition border-black/10 dark:bg-gray-900 dark:text-white shadow-md rounded-full hover:scale-110 bg-white p-[1rem] text-gray-900"
            >
              <FaPlay />
            </button>
            <button
              onClick={handlePause}
              className="border transition border-black/10 dark:bg-gray-900 dark:text-white shadow-md rounded-full hover:scale-110 bg-white p-[1rem] text-gray-900"
            >
              <FaPause />
            </button>
            <button
              onClick={handleSaveTimer}
              className="border transition border-black/10 dark:bg-gray-900 dark:text-white shadow-md rounded-full hover:scale-110 bg-white p-[1rem] text-gray-900"
            >
              <FaStop />
            </button>
          </motion.div>
        </section>
      </section>
    </section>
  );
}

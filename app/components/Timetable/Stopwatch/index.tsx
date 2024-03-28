import React from "react";
import { motion } from "framer-motion";
import { useTimetableContextProvider } from "@/context/TimetableProvider";

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
    <section>
      <div className="flex gap-10 justify-center pb-[5rem] text-3xl">
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
      <section className="flex justify-center">
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
          className="flex justify-between w-full max-w-[32rem] "
        >
          <button
            onClick={handleStart}
            className="border transition border-black/10 dark:bg-gray-900 dark:text-white shadow-md sm:px-5 sm:py-3 px-4 py-3 rounded-full hover:scale-110 bg-gray-200  text-gray-900"
          >
            Clock in
          </button>
          <button
            onClick={handlePause}
            className="border transition border-black/10 dark:bg-gray-900 dark:text-white shadow-md sm:px-5 sm:py-3 px-4 py-3 rounded-full hover:scale-110 bg-gray-200  text-gray-900"
          >
            Pause
          </button>
          <button
            onClick={handleSaveTimer}
            className="border transition border-black/10 dark:bg-gray-900 dark:text-white shadow-md sm:px-5 sm:py-3 px-4 py-3 rounded-full hover:scale-110 bg-gray-200  text-gray-900"
          >
            Clock out
          </button>
        </motion.div>
      </section>
    </section>
  );
}

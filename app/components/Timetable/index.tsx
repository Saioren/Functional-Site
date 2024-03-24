"use client";

import React from "react";
import Stopwatch from "./Stopwatch";
import { motion } from "framer-motion";

export default function Timetable() {
  const weeklyHours = 0;
  return (
    <div className="p-[2rem] justify-center items-center">
      <section className="flex flex-col relative w-full">
        <motion.section
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
          }}
          className="text-center pb-[5rem]"
        >
          <h1 className="text-2xl">Clock in!</h1>
          <p>Track your work hours here.</p>
        </motion.section>
        <section>
          <div>
            <Stopwatch />
          </div>
        </section>
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
            <button className="border transition border-black/10 dark:bg-gray-900 dark:text-white shadow-md sm:px-5 sm:py-3 px-4 py-3 rounded-full hover:scale-110 bg-gray-200  text-gray-900">
              Clock in
            </button>
            <button className="border transition border-black/10 dark:bg-gray-900 dark:text-white shadow-md sm:px-5 sm:py-3 px-4 py-3 rounded-full hover:scale-110 bg-gray-200  text-gray-900">
              Pause
            </button>
            <button className="border transition border-black/10 dark:bg-gray-900 dark:text-white shadow-md sm:px-5 sm:py-3 px-4 py-3 rounded-full hover:scale-110 bg-gray-200  text-gray-900">
              Clock out
            </button>
          </motion.div>
        </section>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.1,
          }}
          className="hidden md:block md:absolute md:top-0 md:right-0  "
        >
          Hours worked this week: {weeklyHours}
        </motion.div>
      </section>
    </div>
  );
}

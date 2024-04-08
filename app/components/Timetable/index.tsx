"use client";

import React, { useEffect, useState } from "react";
import Stopwatch from "./Stopwatch";
import { motion } from "framer-motion";
import {
  TimerType,
  useTimetableContextProvider,
} from "@/context/TimetableProvider";
import TimersDisplay from "./TimersDisplay";
import { Toaster } from "react-hot-toast";

export default function Timetable() {
  const { weeklyHours, setWeeklyHours, timers, setTimers } =
    useTimetableContextProvider();
  const [orderedTimers, setOrderedTimers] = useState<TimerType[]>([]);

  return (
    <div className="p-[2rem] pt-[5rem] flex w-full flex-col gap-4 justify-center items-center ">
      <Toaster />
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="text-center">
          <h2 className="text-2xl">Clock In!</h2>
          <p>Track your work hours here.</p>
        </div>
      </motion.div>
      <section className="flex flex-col w-full relative  rounded-md">
        <motion.section
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          className="text-center p-[2rem] bg-white dark:bg-gray-600/20 shadow-lg"
        >
          {" "}
          <div>
            <Stopwatch />
          </div>
        </motion.section>
        <section className="absolute right-0 -bottom-[2rem]">
          {/*<div>{timer.weeklyHours} hours this week!</div>*/}
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
        ></motion.div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ y: 0, opacity: 1 }}
        className=" bg-white shadow-lg dark:bg-gray-600/20 rounded-md p-[2rem] flex gap-4 w-full flex-col"
      >
        <div>
          <h2>Previous time periods:</h2>
        </div>
        <div className="flex flex-wrap w-full">
          {timers.length > 0
            ? timers.map((timer, index) => (
                <motion.div
                  key={index}
                  className="flex w-1/2"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <TimersDisplay timer={timer} index={index} />
                </motion.div>
              ))
            : timers.length === 0 && <h2>None to display</h2>}
        </div>
      </motion.section>
    </div>
  );
}

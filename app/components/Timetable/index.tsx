"use client";

import React, { useState } from "react";
import Stopwatch from "./Stopwatch";
import { motion } from "framer-motion";

export default function Timetable() {
  const [weeklyHours, setWeeklyHours] = useState(0);
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
            <Stopwatch
              weeklyHours={weeklyHours}
              setWeeklyHours={setWeeklyHours}
            />
          </div>
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

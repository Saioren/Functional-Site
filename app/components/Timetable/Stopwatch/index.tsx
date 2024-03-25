import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StopwatchProps } from "../types";

export default function Stopwatch({
  weeklyHours,
  setWeeklyHours,
}: StopwatchProps) {
  const [started, setStarted] = useState(false);
  const [pause, setPause] = useState(true);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let intervalId: any;
    if (!pause && started) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => {
          let newSeconds = prevSeconds + 1;
          if (newSeconds >= 60) {
            setMinutes((prevMinutes) => {
              let newMinutes = prevMinutes + 1;
              if (newMinutes >= 60) {
                setHours((prevHours) => prevHours + 1);
                newMinutes = 0;
              }
              return newMinutes;
            });
            newSeconds = 0;
          }
          return newSeconds;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [pause, started]);

  function handleStart() {
    setPause(false);
    setStarted(true);
  }

  function handlePause() {
    setPause(true);
  }

  function handleStop() {
    setPause(false);
    setStarted(false);
    setMinutes(0);
    setSeconds(0);
    setHours(0);
  }

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
            onClick={handleStop}
            className="border transition border-black/10 dark:bg-gray-900 dark:text-white shadow-md sm:px-5 sm:py-3 px-4 py-3 rounded-full hover:scale-110 bg-gray-200  text-gray-900"
          >
            Clock out
          </button>
        </motion.div>
      </section>
    </section>
  );
}

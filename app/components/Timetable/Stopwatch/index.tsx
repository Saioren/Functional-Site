import React from "react";
import { motion } from "framer-motion";

export default function Stopwatch() {
  const hours = 1;
  const minutes = 27;
  const seconds = 14;
  return (
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
            <h2>{hours}</h2>
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
            <h2>{minutes}</h2>
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
          <h2>{seconds}</h2>
        </span>
      </motion.div>
    </div>
  );
}

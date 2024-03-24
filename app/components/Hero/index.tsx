import React from "react";
import classes from "./index.module.scss";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.1,
      }}
      className="flex flex-col justify-center text-center items-center mb-10"
    >
      <p className="mb-3">Welcome to</p>
      <h1 className="text-3xl mb-3">
        <span className={classes.saioren}>Saioren's</span> Work Website
      </h1>
      <p>- Below is a list of my functions -</p>
    </motion.div>
  );
}

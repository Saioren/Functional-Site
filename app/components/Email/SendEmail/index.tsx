"use client";

import { sendEmail } from "@/lib/sendEmail";
import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function SendEmailComponent() {
  function handleSubmit() {}
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
      <section className="relative dark:bg-gray-600/20 backdrop-blur-sm bg-white w-[40rem] border border-black/10 shadow-lg rounded-md pb-[4rem]">
        <form
          className=" flex flex-col justify-center items-center p-[1rem] gap-4"
          action={async (formData) => {
            await sendEmail(formData);
          }}
        >
          <motion.div
            className=" border border-black/10 rounded-md w-full shadow-md"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <input
              className="dark:bg-gray-700/60   outline-none w-full py-2 px-3"
              name="senderEmail"
              required
              type="email"
              maxLength={500}
              placeholder="Your email"
            />
          </motion.div>
          <motion.div
            className="border border-black/10 rounded-md w-full shadow-md"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <input
              className="dark:bg-gray-700/60  outline-none w-full py-2 px-3"
              name="recieverEmail"
              required
              type="email"
              maxLength={500}
              placeholder="Recipient"
            />
          </motion.div>
          <motion.div
            className=" border border-black/10 rounded-md w-full max-h-[10rem] overflow-y-auto h-[15rem] shadow-md"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <textarea
              className="dark:bg-gray-700/60 resize-none outline-none w-full py-2 px-3 h-full"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
          </motion.div>
          <motion.div
            className="group absolute bottom-4 right-2 rounded-full"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={(e) => handleSubmit}
              type="submit"
              className="flex items-center bg-white backdrop-blur-sm shadow-md border border-black/10 dark:border-white/10 gap-2 dark:bg-slate-700/60 py-3 px-4 rounded-full group-hover:scale-110 dark:text-bg-gray-100 dark:group-hover:text-bg-white group-active:scale-105 transition"
            >
              Submit
              <FaPaperPlane className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
            </button>
          </motion.div>
        </form>
      </section>
    </motion.div>
  );
}

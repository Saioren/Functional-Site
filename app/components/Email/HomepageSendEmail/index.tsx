"use client";

import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";
import { sendEmail } from "@/lib/sendEmail";
import { motion } from "framer-motion";

export default function HomepageSendEmailComponent() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    senderEmail: "",
    recipient: "mikrutevan@gmail.com",
    subjectData: "",
    message: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();

    try {
      toast.loading("Sending...");
      setLoading(true);
      const formDataToSend = new FormData();
      formDataToSend.append("senderEmail", formData.senderEmail);
      formDataToSend.append("recipient", formData.recipient);
      formDataToSend.append("subjectData", formData.subjectData);
      formDataToSend.append("message", formData.message);

      await sendEmail(formDataToSend);
      toast.dismiss();
      toast.success("Email sent!");
      clearFormData();
    } catch (error) {
      setLoading(false);
      toast.dismiss();
      toast.error("Uh oh! Email was not sent!");
    } finally {
      setLoading(false);
      setTimeout(() => {
        toast.dismiss();
      }, 4000);
    }
  }

  function clearFormData() {
    setFormData({
      senderEmail: "",
      recipient: "",
      subjectData: "",
      message: "",
    });
  }

  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <section className="relative w-full flex flex-col dark:bg-gray-600/20 backdrop-blur-sm bg-white border border-black/10 shadow-lg rounded-md pb-[4rem]">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
        }}
      ></motion.div>
      <form
        className=" flex flex-col justify-center items-center p-[1rem] gap-4"
        onSubmit={handleSubmit}
      >
        <section className="flex flex-col gap-4 w-full h-1/2">
          <motion.div
            className=" border border-black/10 rounded-md w-full shadow-md"
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{
              once: true,
            }}
          >
            <input
              className="dark:bg-gray-700/60  outline-none w-full py-2 px-3"
              name="senderEmail"
              value={formData.senderEmail}
              onChange={(e) => handleInputChange(e)}
              required
              type="email"
              maxLength={500}
              placeholder="Your email"
            />
          </motion.div>

          <motion.div
            className="border border-black/10 rounded-md w-full shadow-md"
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{
              once: true,
            }}
          >
            <input
              className="dark:bg-gray-700/60 outline-none w-full py-2 px-3"
              name="subjectData"
              required
              value={formData.subjectData}
              onChange={(e) => handleInputChange(e)}
              type="text"
              maxLength={500}
              placeholder="Subject"
              disabled={loading}
            />
          </motion.div>
        </section>
        <section className="flex w-full h-full">
          <motion.div
            className="flex border border-black/10 w-full"
            initial={{ opacity: 0, y: -25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{
              once: true,
            }}
          >
            <textarea
              className="dark:bg-gray-700/60 shadow-md resize-none outline-none w-full py-2 px-3 h-full pb-[5rem]"
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange(e)}
              placeholder="Your message"
              required
              maxLength={5000}
            />
          </motion.div>
        </section>
        <motion.div
          className="group absolute bottom-4 right-2 rounded-full"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{
            once: true,
          }}
        >
          <button
            type="submit"
            className="flex items-center bg-white backdrop-blur-sm shadow-md border border-black/10 dark:border-white/10 gap-2 dark:bg-slate-700/60 py-3 px-4 rounded-full group-hover:scale-110 dark:text-bg-gray-100 dark:group-hover:text-bg-white group-active:scale-105 transition"
          >
            Submit
            <FaPaperPlane className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </button>
        </motion.div>
      </form>
    </section>
  );
}

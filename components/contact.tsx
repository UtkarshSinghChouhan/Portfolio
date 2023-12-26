"use client";
import React from "react";
import Sectionheading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Contact = () => {
  const { ref, inView } = useSectionInView(0.3, "Contact");
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      ref={ref}
      id="contact"
      className="text-center mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <Sectionheading heading={`Contact Me`} />
      <p className="text-gray-700 -mt-5">
        Please contact me directly at{" "}
        <a
          className="font-semibold underline italic"
          href="mailto:email.utkarshsinghchouhan@gmail.com"
        >
          email.utkarshsinghchouhan@gmail.com
        </a>{" "}
        {/* or through this form */}
      </p>

      {/* <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          console.log(formData);
        }}
      >
        <input
          type="email"
          className="h-14 rounded-lg borderBlack px-4"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          required
          maxLength={500}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 hover:bg-gray-950 text-white rounded-full outline-none transition-all active:scale-95 "
        >
          Submit{" "}
          <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition text-sm opacity-70" />
        </button>
      </form> */}
    </motion.section>
  );
};

export default Contact;

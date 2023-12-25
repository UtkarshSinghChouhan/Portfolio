"use client";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.3 } }}
      className="bg-gray-200 my-24 h-16 w-1 rounded-full  sm:block"
    />
  );
};

export default SectionDivider;

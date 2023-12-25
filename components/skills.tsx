"use client";
import { skillsData } from "@/lib/data";
import Sectionheading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
const variants = {
  initial: { opacity: 0, y: 100 },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * idx },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView(0.1, "Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <Sectionheading heading={`My Skills`} />

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skills, idx: number) => (
          <motion.li
            variants={variants}
            custom={idx}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white border border-black/10 rounded-xl shadow-xl px-5 py-3"
            key={idx}
          >
            {skills}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

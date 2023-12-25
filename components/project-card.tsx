"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ProjectCardProps = (typeof projectsData)[number];

const ProjectCard = ({
  title,
  githubLink,
  link,
  description,
  tags,
  imageUrl,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["0 1", "1.33 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <>
      <motion.div
        style={{ scale: scale, opacity: opacity }}
        ref={cardRef}
        className="group max-w-[42rem] h-full "
      >
        <article className="rounded-lg group h-full shadow-2xl bg-gray-100 hover:bg-gray-200 transition  border border-black/5 overflow-hidden sm:pr-8 relative">
          <div className="group-even:ml-[19.5rem]  pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
            <div className="flex  gap-2 items-center justify-start">
              <a
                href={link}
                target="_blank"
                className="w-fit text-2xl font-semibold group-hover:underline transition"
              >
                {title}
              </a>
              {!!githubLink && (
                <a href={githubLink} target="_blank">
                  <FaGithubSquare className="cursor-pointer text-gray-700 text-2xl hover:text-gray-950" />
                </a>
              )}
            </div>
            <p className="mt-2 leading-relaxed text-gray-700 pb-6">
              {description}
            </p>
            <ul className="sm:mt-auto flex flex-wrap mt-4 gap-2">
              {tags.map((tag, idx) => (
                <li
                  key={idx}
                  className=" bg-black/[0.7] hover:bg-black cursor-pointer px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            priority
            loading="eager"
            className="group-hover:-translate-x-3
          group-hover:translate-y-3 
          group-hover:-rotate-2 
          group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 
          group-hover:scale-[1.01] 
          transition group-even:right-[initial] group-even:-left-40 absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl"
          />
        </article>
      </motion.div>
    </>
  );
};

export default ProjectCard;

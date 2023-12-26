"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
  const { ref } = useSectionInView(0.5, "Home");

  const { setActiveSection, setTimeOfLastClicked } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] cursor-default mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      {/* Images */}
      <div className="flex item-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { type: "tween", duration: 0.2 },
            }}
          >
            <Image
              src={`/my-photo.png`}
              alt="myphoto"
              width={192}
              height={192}
              quality={`95`}
              priority
              objectFit="cover"
              className="h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              },
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Intro Text */}
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
        className=" mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
      >
        <span className="font-bold">Hello, I&apos;m Utkarsh.</span> I&apos;m a{" "}
        <span className="font-bold">front-end developer</span> with{" "}
        <span className="font-bold">1 year</span> of experience. I have passion
        for creating visually appealing, user-friendly building{" "}
        <span className="italic">web application</span>. My focus is JavaScript,
        and modern frontend framework like{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        className="flex flex-col sm:flex-row justify-center gap-4 px-4 text-lg font-medium"
      >
        {/* Contact me */}
        <Link
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClicked(Date.now());
          }}
          href={`#contact`}
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full group outline-none focus:scale-110 hover:bg-gray-950 active:scale-95 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {/* CV */}
        <a
          href="/CV.pdf"
          target="_blank"
          download
          className="bg-white border border-black/10 px-7 py-3 flex items-center rounded-full outline-none focus:scale-110 hover:bg-white/60 hover:outline-[#fff]  active:scale-95 transition cursor-pointer"
        >
          Download CV{" "}
          <Image
            src={`/download-gif.gif`}
            alt={`download-gif`}
            width={40}
            objectFit="cover"
            height={40}
            quality={95}
            priority
            className="opacity-60"
          />
        </a>

        {/* Linkedin */}
        <a
          href={`https://www.linkedin.com/in/utkarsh-singh-chouhan-424551217/`}
          target="_blank"
          className="group w-[4.25rem] h-[4.25rem] bg-white p-4 rounded-full flex items-center justify-center outline-none focus:scale-110 hover:bg-white/60 hover:outline-[#fff]  active:scale-95 transition cursor-pointer border border-black/10"
        >
          <BsLinkedin className="text-gray-700 group-hover:text-gray-950" />
        </a>

        {/* Github */}
        <a
          href={`https://github.com/UtkarshSinghChouhan`}
          target="_blank"
          className="group w-[4.25rem] h-[4.25rem] bg-white p-4 rounded-full flex items-center justify-center outline-none focus:scale-110 hover:bg-white/60 hover:outline-[#fff]  active:scale-95 transition cursor-pointer border border-black/10"
        >
          <FaGithubSquare className="text-gray-700 text-[1.35rem] group-hover:text-gray-950" />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;

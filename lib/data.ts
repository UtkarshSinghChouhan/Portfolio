import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import forescribe_web from "@/public/forescribe-web.png";
import camp_web from "@/public/camp-web.png";
import crypto_web from "@/public/crypto-web.png";
import gym_web from "@/public/gym-web.png";
import nike_web from "@/public/nike-web.png";
import youtube_web from "@/public/youtube-web.png";
import codepen_web from "@/public/codepen-web.png";
import travel_web from "@/public/travel-web.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  // {
  //   title: "Forescribe.ai (Front-End Engineer)",
  //   location: "Remote",
  //   description:
  //     "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
  //   icon: React.createElement(FaReact),
  //   date: "Jan 2024 - Present",
  // },
  {
    title: "Forescribe.ai (Front-End Engineer Intern)",
    location: "Remote",
    description:
      "I am currently employed as an Intern here, part of the team working on building the SAAS product for the company. Next.js(14), Typescript, Tailwind.",

    icon: React.createElement(FaReact),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "LTIMindtree (Graduate Engineer Trainee)",
    location: "Remote",
    description:
      "I was trained in .NET FullStack Development under the IGNITE Training Program.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - May 2023",
  },
  {
    title: "Lovely Professional University (MCA)",
    location: "Jalandhar, Punjab",
    description:
      "Graduated with Masters in Computer Application with 8.86 c.g.p.a, with Specialization in Web-Development.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2021 - May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Forescribe Website",
    link: `https://forescribe-website.vercel.app/`,
    githubLink: "",
    description:
      "I am working as a frontend engineer on this startup project. It is the main website of the company which is soley developed by myself.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind",
      "Framer Motion",
      "Vercel",
    ],
    imageUrl: forescribe_web,
  },
  {
    title: "Camp Website",
    link: "https://camp-website-dusky.vercel.app/",
    githubLink: "https://github.com/UtkarshSinghChouhan/Camp_Website",
    description:
      "It is the landing page of a Camp Website made with the latest T3 stack (Tailwind, Typescritp and Next.js)",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Vercel"],
    imageUrl: camp_web,
  },
  {
    title: "Gym Website",
    link: "https://fitness-gym-web-app.netlify.app/",
    githubLink: "https://github.com/UtkarshSinghChouhan/Gym_Website",
    description:
      "It is a website for any gym. I have implemented functionalities like searching a particular exercise via exercise name or body part or equiptment name. i have also included the pagination functionality and a dynamic route page for each and every website",
    tags: ["React", "React-Router", "React-player", "Material UI", "Netlify"],
    imageUrl: gym_web,
  },
  {
    title: "Crypto Website",
    link: "https://crytpo-web-app.netlify.app/",
    githubLink: "https://github.com/UtkarshSinghChouhan/Crypto_Coin_Web_App",
    description:
      "I have made this crypto website which shows all the trending crypto-currencies and I have a dedicated dynamic-route for each currency where I have use Graphs to visualize the data related to that particular currency.",
    tags: ["React", "React-Router", "React-player", "Material UI", "Netlify"],
    imageUrl: crypto_web,
  },
  {
    title: "Youtube Clone Website",
    link: "https://video-web-app.netlify.app/",
    githubLink:
      "https://github.com/UtkarshSinghChouhan/Video_Streaming_Web_App",
    description:
      "I have made this youtube clone and tried to implement functionality like filtering using the side bar and a search functionality. It has a dedicated dynamic-route for each video and a dynamic-route for a channel-page as well.",
    tags: ["React", "React-Router", "React-player", "Material UI", "Netlify"],
    imageUrl: youtube_web,
  },
  {
    title: "Nike Landing Page",
    link: "https://nike-landing-page-web-app.vercel.app/",
    githubLink: "https://github.com/UtkarshSinghChouhan/Nike_Landing_Page",
    description:
      "It is a Simple Landing Page of Nike Website styled using Tailwind CSS. Implemented as modern websites designs. Dynamic Content to mimic a real Nike Landing Page. Fully responsive design for various screen sizes.",
    tags: ["React", "Tailwind CSS", "Netlify"],
    imageUrl: nike_web,
  },
  {
    title: "Travel Website",
    link: "https://travel-website-app.vercel.app/",
    githubLink: "https://github.com/UtkarshSinghChouhan/Travel_Website",
    description:
      "It is a travel website containing stunning hero section, fully responsive design for mobile and tablet devices and smooth navigation with React-Router.",
    tags: ["React", "React Router", "Material UI", "Vercel"],
    imageUrl: travel_web,
  },
  {
    title: "Frontend Code Editor",
    link: "https://frontend-code-editor-web-app.netlify.app/",
    githubLink: "https://github.com/UtkarshSinghChouhan/Frontend_Code_Editor",
    description:
      "In this project I have tried to replicate the editor of the codepen.io website. It is a fully functional frontend code-editor. User Friendly interface usign Material-UI and code edition feature using package react-code-mirror.",
    tags: ["React", "Material UI", "Netlify"],
    imageUrl: codepen_web,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Framer Motion",
  "C++",
  "Java",
] as const;

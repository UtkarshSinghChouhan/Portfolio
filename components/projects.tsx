"use client";
import { useSectionInView } from "@/lib/hooks";
import ProjectCard from "./project-card";
import Sectionheading from "./section-heading";
import { projectsData } from "@/lib/data";

const Projects = () => {
  const { ref } = useSectionInView(0.2, "Projects");
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <Sectionheading heading={`My Projects`} />

      <div className="grid  grid-cols-1  lg:grid-cols-2 lg:gap-x-10 gap-y-10 ">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

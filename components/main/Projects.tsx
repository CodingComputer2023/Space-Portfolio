import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Portfolio"
          description="Cool website made with Next.js, TypeScript, and Three.js. Currently trying to get better at full-stack web development!"
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="TBD"
          description="Maybe a website for a club. (Ignore the image)"
        />
        <ProjectCard
          src="/CardImage.png"
          title="TBD"
          description="Maybe something related to data science or artificial intelligence. (Ignore the image)"
        />
      </div>
    </div>
  );
};

export default Projects;
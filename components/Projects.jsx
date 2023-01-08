import React from "react";
import dualImg from "../public/assets/projects/DualNet.png";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Tournament Builder"
            backgroundImg={dualImg}
            projectUrl="/dualnet"
          />
          <ProjectItem
            title="Tournament Builder"
            backgroundImg={dualImg}
            projectUrl="/dualnet"
          />
          <ProjectItem
            title="Tournament Builder"
            backgroundImg={dualImg}
            projectUrl="/dualnet"
          />
          <ProjectItem
            title="Tournament Builder"
            backgroundImg={dualImg}
            projectUrl="/dualnet"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

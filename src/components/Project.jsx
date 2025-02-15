import React, { useState } from "react";
import { projects } from "../Data/index";

const Project = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <div id="projects" name="project" className="w-full md:h-auto text-[#272626] bg-white md:pt-24">
      <div className="w-full sm:w-10/12 mx-auto p-4 flex flex-col justify-center h-full">
        <div className="pb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#267D49]">
              Project
            </p>
            {/* Tab buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1 rounded-md text-sm ${activeTab === "all"
                  ? "bg-[#267D49] text-white"
                  : "bg-gray-200 text-gray-700"
                  }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("ui/ux")}
                className={`px-4 py-1 rounded-md text-sm ${activeTab === "ui/ux"
                  ? "bg-[#267D49] text-white"
                  : "bg-gray-200 text-gray-700"
                  }`}
              >
                UI/UX
              </button>
              <button
                onClick={() => setActiveTab("frontend")}
                className={`px-4 py-1 rounded-md text-sm ${activeTab === "frontend"
                  ? "bg-[#267D49] text-white"
                  : "bg-gray-200 text-gray-700"
                  }`}
              >
                Frontend
              </button>
            </div>
          </div>
          <p className="py-6">
            What I have done so far, check out some of my recent work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.name}
              className="shadow-lg shadow-[#C2EFD4] rounded-md overflow-hidden bg-white"
            >
              <div
                style={{ backgroundImage: `url(${project.image})` }}
                className="w-full h-[200px] bg-cover bg-center bg-no-repeat"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-3">{project.category}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.url_demo}
                    target="_blank"
                    className="flex-1"
                  >
                    <button className="w-full rounded-lg py-2 bg-[#267D49] text-white font-bold text-sm hover:bg-[#1c5d35]">
                      Demo
                    </button>
                  </a>
                  <a
                    href={project.url_github}
                    target="_blank"
                    className="flex-1"
                  >
                    <button className="w-full rounded-lg py-2 bg-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-300">
                      {project.category === "ui/ux" ? "Design" : "Code"}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
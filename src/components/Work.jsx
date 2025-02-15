import React from "react";
import { workExperience } from "../Data/index";

const Work = () => {
  return (
    <div name="work" className="w-full h-auto text-gray-300 bg-[#0a192f] py-8">
      <div className="w-full sm:w-10/12 mx-auto p-4 flex flex-col justify-center text-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Work Experience
          </p>
          <p className="py-6">
            What I have done so far, check out some of my recent work
          </p>
        </div>

        <div className="relative">
          {workExperience.map((experience, index) => (
            <div
              key={experience.company}
              className={`flex items-center gap-4 mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
            >
              {/* Timeline dot */}
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center shrink-0">
                <img
                  src={experience.icon}
                  alt={experience.company}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Content */}
              <div className="bg-[#0a0d37] p-4 rounded-lg flex-1">
                <h3 className="text-white text-[20px] sm:text-[24px] font-bold">
                  {experience.jobtitle}
                </h3>
                <h4 className="text-secondary text-[12px] sm:text-[16px] font-semibold">
                  {experience.company}
                </h4>
                <p className="text-gray-400 text-sm">
                  {experience.startYear} - {experience.endYear}
                </p>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                  {experience.description.map((desc, index) => (
                    <li
                      key={index}
                      className="text-white-100 text-[12px] sm:text-[14px] pl-1 tracking-wider"
                    >
                      {desc.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-600 -translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};

export default Work;
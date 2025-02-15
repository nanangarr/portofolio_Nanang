import React from "react";
import StackIcon from "tech-stack-icons";

export const Skills = () => {
  return (
    <div id="skills" name="skills" className="bg-white text-[#272626] mt-12"> {/* Changed to negative margin to pull it up */}
      <div className="w-full sm:w-10/12 mx-auto p-4 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#267D49]">
            Skills
          </p>
          <p className="py-4">These are the technologies Ive worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-6 text-center py-8">
          <div className="shadow-md shadow-[#C2EFD4] hover:scale-110 duration-500">
            <StackIcon name="html5" className="p-4" />
            <p className="my-2 sm:my-4">Html</p>
          </div>
          <div className="shadow-md shadow-[#C2EFD4] hover:scale-110 duration-500">
            <StackIcon name="css3" className="p-4" />
            <p className="my-2 sm:my-4">Css</p>
          </div>
          <div className="shadow-md shadow-[#C2EFD4] hover:scale-110 duration-500">
            <StackIcon name="js" className="p-4" />
            <p className="my-2 sm:my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#C2EFD4] hover:scale-110 duration-500">
            <StackIcon name="reactjs" className="p-4" />
            <p className="my-2 sm:my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#C2EFD4] hover:scale-110 duration-500">
            <StackIcon name="tailwindcss" className="p-4" />
            <p className="my-2 sm:my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#C2EFD4] hover:scale-110 duration-500">
            <StackIcon name="bootstrap5" className="p-4" />
            <p className="my-2 sm:my-4">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#C2EFD4] hover:scale-110 duration-500">
            <StackIcon name="laravel" className="p-4" />
            <p className="my-2 sm:my-4">Laravel</p>
          </div>
          <div className="shadow-md shadow-[#C2EFD4] hover:scale-110 duration-500">
            <StackIcon name="git" className="p-4" />
            <p className="my-2 sm:my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#C2EFD4] hover:scale-110 duration-500">
            <StackIcon name="figma" className="p-4" />
            <p className="my-2 sm:my-4">Figma</p>
          </div>
          <div className="shadow-md shadow-[#C2EFD4] hover:scale-110 duration-500">
            <StackIcon name="canva" className="p-4" />
            <p className="my-2 sm:my-4">Canva</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
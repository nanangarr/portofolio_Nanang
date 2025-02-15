import React from "react";
import { linkEmail } from "../Data";

const About = () => {
  return (
    <div id="about"
      name="#about"
      className="w-full h-auto bg-white text-[#272626] mt-12"
    >
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <div className="mb-8">
          <p className="text-center text-4xl font-bold inline border-b-4 border-[#267D49]">
            About
          </p>
        </div>
        <div className="max-w-[1000px] w-full grid grid-rows-auto sm:grid-cols-2 sm:gap-8 px-4"> {/* Removed grid-rows-2, added grid-rows-auto */}
          <div className="sm:text-right text-3xl md:text-4xl font-bold mb-4 sm:mb-0"> {/* Added margin bottom for mobile only */}
            <p>
              Hi, <span className="text-[#267D49]">I&apos;m Nanang</span>, nice to
              meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am a <b className="text-[#267D49]">D3 Informatics Engineering</b> student at Sebelas Maret University who has a strong interest in <b className="text-[#267D49]">UI/UX Design, Front-End Development, and Data Analysis</b>. Currently, I am honing my skills in these fields and have completed several projects, including <b className="text-[#267D49]">e-commerce websites, company landing pages, and mobile and desktop application designs</b>.
              <br /><br />
              I am known as a communicative, disciplined, and responsible person, as evidenced by my experience as an MC at various events and my role as a Project Manager in ongoing large projects. I am very enthusiastic to continue learning and contributing to the development of creative and innovative digital solutions.
              <br /><br />
              Any offerings, collaborations, and opportunities? Contact me through{" "}
              <a
                href={linkEmail}
                className="text-[#267D49] hover:underline"
              >
                ardiansyahnanang984@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
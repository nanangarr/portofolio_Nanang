import React from "react";
import { linkEmail } from "../Data/index";

const Footer = () => {
  return (
    <div className="w-full md:h-auto text-[#272626] bg-white pt-8 md:pt-24">
      <div className="w-full sm:w-10/12 mx-auto p-4 flex flex-col justify-center h-full">
        <div>
          <p className="text-3xl md:text-4xl font-bold inline border-b-4 border-[#267D49]">
            Interest for Collaboration?
          </p>
          <p className="py-4 text-[13pt] md:text-[16pt]">
            Lets have a conversation, Im always open to new opportunities and
            collaborations.
          </p>
          <div className="mt-6 mx-auto">
            <a
              href={linkEmail}
              className="py-3 px-16 md:py-4 md:px-16 text-[12pt] md:text-[14pt] bg-[#267D49] rounded-full text-white hover:bg-[#C2EFD4] hover:text-[#272626] border-dotted border-[#272626] border-2"
            >
              Send Message
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-10/12 mx-auto flex justify-between mt-10 md:mt-28 pt-6 p-5 text-[10pt] md:text-[12pt]">
        <p>Copyright ©2025 All rights reserved</p>
        <div className="flex items-center text-right">
          <span>
            Nanang Ardiansyah
            <span className="mx-1">❤</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
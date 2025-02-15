import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { HiOutlineDownload, HiCheckCircle } from "react-icons/hi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  linkCv,
  linkGit,
  linkLinkedin,
  linkEmail,
  linkInstagram,
  numberPortofolio,
} from "../Data/index";
import { useSpring, animated } from "react-spring";

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

Number.propTypes = {
  n: PropTypes.number.isRequired,
};

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["UI/UX Designer", "Front End Developer", "Data Analyst Enthusiast"];

  useEffect(() => {
    let timeout;
    if (text.length < roles[roleIndex].length) {
      timeout = setTimeout(() => {
        setText(roles[roleIndex].slice(0, text.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [text, roleIndex]);

  return (
    <div id="home" name="home" className="section w-full min-h-screen bg-white flex items-center justify-center">
      <div className="container px-4 md:px-8 mx-auto py-28">
        <div className="grid grid-cols-1 place-items-center w-full max-w-6xl mx-auto mb-20">
          <div className="w-full flex flex-col items-center justify-center space-y-4">
            <p className="flex items-center">
              <HiCheckCircle className="mr-2 text-[#267D49]" />
              <span className="text-[#272626]">Available for work</span>
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#272626] text-center">
              Hi, I&apos;m Nanang Ardiansyah
            </h1>
            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#267D49] text-center">
              I&apos;m a {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                |
              </motion.span>
            </motion.h2>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-4 mt-6">
              <a
                href={linkCv}
                className="text-[16px] font-medium bg-primary ring-1 ring-primary px-6 py-2.5 rounded-full transition-all duration-300 flex items-center hover:bg-secondary hover:text-white"
              >
                Download CV
                <span className="group-hover:animate-bounce duration-300">
                  <HiOutlineDownload className="ml-3" />
                </span>
              </a>
              <div className="flex gap-4">
                <a
                  href={linkGit}
                  alt="Github"
                  className="border-2 border-[#267D49] hover:animate-bounce duration-300 rounded-full"
                >
                  <span className="group-hover:scale-100 duration-300">
                    <FaGithub className="m-3 text-[#267D49]" />
                  </span>
                </a>
                <a
                  href={linkLinkedin}
                  alt="LinkedIn"
                  className="border-2 border-[#267D49] hover:animate-bounce duration-300 rounded-full"
                >
                  <span className="group-hover:scale-100 duration-300">
                    <FaLinkedinIn className="m-3 text-[#267D49]" />
                  </span>
                </a>
                <a
                  href={linkInstagram}
                  alt="Instagram"
                  className="border-2 border-[#267D49] hover:animate-bounce duration-300 rounded-full"
                >
                  <span className="group-hover:scale-100 duration-300">
                    <FaInstagram className="m-3 text-[#267D49]" />
                  </span>
                </a>
                <a
                  href={linkEmail}
                  alt="Email"
                  className="border-2 border-[#267D49] hover:animate-bounce duration-300 rounded-full"
                >
                  <span className="group-hover:scale-100 duration-300">
                    <HiOutlineMail className="m-3 text-[#267D49]" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 mt-36">
          {numberPortofolio.map((portfolio) => (
            <div key={portfolio.title} className="flex flex-col items-center text-center gap-2 p-4">
              <div className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#272626] flex">
                <Number n={portfolio.number} />+
              </div>
              <p className="text-[#272626] text-base sm:text-lg md:text-xl">
                {portfolio.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center mx-auto px-6">
      <div className="main-container h-4/5 w-full max-w-[1280px] bg-zinc-400 dark:bg-zinc-500 flex flex-row overflow-hidden" style={{ borderRadius: "35px" }}>
        {/* Left Section */}
        <div className="w-1/3 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col items-center py-16">
            {/* Image, Name, and Designation */}
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Placeholder"
              className="rounded-full min-w-44 border-4 border-white overflow-hidden"
            />
            <h1 className="text-4xl font-bold mt-7">Sujal Maharjan</h1>
            <p className="text-lg text-gray-800 dark:text-gray-300 mt-2">Software Engineer</p>

            {/* Links */}
            <div className="flex mt-4 space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className='text-black dark:text-white'
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className='text-black dark:text-white'
              >
                <FaGithubSquare size={24} />
              </a>
            </div>

            <button className='text-sm text-black dark:text-white border border-black dark:border-white px-9 py-3 rounded-full mt-12'>
              Download CV
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-zinc-200 rounded-l-3xl w-2/3 text-black dark:bg-zinc-700 dark:text-white">
          <div className="px-10 py-16 w-full h-full flex flex-col items-center justify-center">
            <h1 className='text-5xl font-bold'>Sujal Maharjan</h1>
            <p className='text-gray-600 dark:text-gray-300 text-xl mt-4'>Software Engineer</p>
            Use owl carousel to put 2-3 title like software engineer, full stack developer, etc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";


const Home: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center mx-auto max-w-[1300px] px-6">
      <div className="main-container h-4/5 rounded-3xl bg-zinc-600 flex flex-row overflow-hidden">
        {/* Left Section */}
        <div className="w-1/3">
          <div className="flex flex-col items-center py-16">
            {/* Image, Name, and Designation */}
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Placeholder"
              className="rounded-full min-w-44 border-4 border-white overflow-hidden"
            />
            <h1 className="text-4xl font-bold text-white mt-7">Sujal Maharjan</h1>
            <p className="text-lg text-gray-300 mt-2">Software Engineer</p>

            {/* Links */}
            <div className="flex mt-4 space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} color="white" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithubSquare size={24} color="white" />
              </a>
            </div>

            <button className='text-sm text-white border border-white px-9 py-3 rounded-full mt-12'>
              Download CV
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-zinc-900 rounded-l-3xl w-2/3 text-white">
          <div className="px-10 py-16 w-full h-full flex flex-col items-center justify-center">
            <h1 className='text-5xl font-bold'>Sujal Maharjan</h1>
            <p className='text-gray-300 text-xl mt-4'>Software Engineer</p>
            Use owl carousel to put 2-3 title like software engineer, full stack developer, etc.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

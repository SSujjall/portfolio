import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";


const Home: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center mx-auto max-w-[1300px] px-5">
      <div className="main-container h-4/5 rounded-3xl bg-zinc-700 flex flex-row overflow-hidden">
        {/* Left Section */}
        <div className="border border-red-600 w-1/3">
          <div className="flex flex-col items-center py-14">
            {/* Image, Name, and Designation */}
            <img
              src="https://via.placeholder.com/150"
              alt="Profile Placeholder"
              className="rounded-full w-40 h-40 border-4 border-white overflow-hidden"
            />
            <h1 className="text-3xl font-bold text-white mt-7">Sujal Maharjan</h1>
            <p className="text-base text-gray-300 mt-2">Software Engineer</p>

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

            <button className='text-sm text-white border border-white px-5 py-3 rounded-full mt-4'>
              Download CV
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="border border-green-600 w-2/3">
          <div className="flex flex-col items-center py-14">
            ads
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

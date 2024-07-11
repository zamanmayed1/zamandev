import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 text-wh">
      <div className="max-w-6xl w-full bg-glass rounded-lg shadow-lg p-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <div className="text-center lg:text-left pt-4 ">
            <h1 className="text-5xl font-bold  mb-2">Kamruzzaman Mayed</h1>
            <p className="text-lg text-gr  mb-4">Web Developer | Web Extension Developer</p>
            <p className="text-justify">Passionate and dedicated developer with expertise in JavaScript. Proven track record of delivering high-quality projects that blend design and functionality. Committed to continuous learning and improvement, I thrive in dynamic environments and tackle complex challenges. Always available to collaborate and drive projects to success.</p>
          </div>
          <div className="flex mt-6 lg:mt-0">
                     <a href="https://github.com/zamanmayed1" className="hover: mx-2">
              <FaGithub size={30} />
            </a>
            <a href="mailto:zamanmayed02@gmail.com" className="hover: mx-2">
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg max-h-max">
            <h2 className="text-2xl font-bold  mb-4 text-gr">Training & Certifications</h2>
            <ul className="space-y-4 text-wh">
              <li className='p-2 bg-black bg-opacity-50 rounded-lg shadow-lg '>
                <strong>Complete Web Development Course </strong> - Programming Hero
                <p className='text-sm'>Connect front-end and back-end seamlessly for a smooth user experience.</p>
              </li>
              <li className='p-2 bg-black bg-opacity-50 rounded-lg shadow-lg '> 
                <strong>React JS- Complete Guide for Frontend Web Development</strong> - Udemy
               <p className='text-sm'>Mastered fundamental and advanced React concepts.</p>
              </li>
              <li className='p-2 bg-black bg-opacity-50 rounded-lg shadow-lg '>
                <strong>Responsive Web Design</strong> - freeCodeCamp
               <p className='text-sm'>Learned to create responsive web applications with modern CSS techniques.</p>
              </li>
              <li className='p-2 bg-black bg-opacity-50 rounded-lg shadow-lg '>
                <strong>React JS Frontend Web Development for Beginners</strong> - Udemy
               <p className='text-sm'>Developed proficiency in building dynamic web applications using React.</p>
              </li>
            </ul>
          </div>

          <div className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
  <h2 className="text-2xl font-bold mb-4 text-gr">Skills</h2>
  <ul className=" flex flex-wrap gap-2">
    <li className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>JavaScript</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >WordPress Development</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Browser Extension Development</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >React</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Vite</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >HTML & CSS</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Tailwind CSS</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Web Performance Optimization</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >API Integration</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Responsive Web Design</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >UI/UX Design</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Version Control (Git)</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >RESTful Services</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Node.js</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Express.js</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >MongoDB</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Testing and Debugging</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Cross-Browser Compatibility</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Project Management</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >SEO Optimization</li>
    <li  className='border p-2 max-w-max inline hover:bg-black duration-300 ease-in-out transform hover:scale-105 cursor-pointer' >Continuous Integration/Continuous Deployment (CI/CD)</li>
  </ul>
</div>
        </div>
      </div>
      <div className="w-[228px] h-[48px] rounded-full  mx-auto right-0 left-0 bg-black  absolute top-[9px] flex justify-between items-center p-1"></div>
    </div>
  );
};

export default About;

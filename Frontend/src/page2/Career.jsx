import React from "react";
import { BsArrowDown, BsFillCaretRightFill } from "react-icons/bs";

const Career = () => {
  return (
    <>
      
      <div className="bg-black text-white min-h-80 flex justify-center items-center px-4 py-10 sm:py-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Careers</h1>
          <p className="mt-4 text-sm sm:text-base">
            <a href="#" className=" hover:underline">Home</a> / 
            <a href="#" className=" hover:underline ml-1">Careers</a>
          </p>
        </div>
      </div>

      
      <div className="bg-black/90 min-h-screen text-white pt-20 pb-10 md:pb-0 px-6 md:px-20 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="flex gap-5 items-start">
            <div className="w-2 md:w-5 h-20 md:h-34 bg-gradient-to-b from-red-500 to-black" />
            <div className="font-extrabold">
              <p className="flex items-center gap-2 font-extralight text-sm tracking-widest">
                JOIN US <BsArrowDown />
              </p>
              <h1 className="md:text-3xl text-xl mt-3 font-serif">
                Dream Big. Work Smart. <br className="hidden md:block" />
                Shape the Future of <br className="hidden md:block"/>
                <span className="text-red-400">Entertainment.</span>
              </h1>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?semt=ais_hybrid&w=740"
            alt="career"
            className="w-full max-w-md h-auto rounded-2xl shadow mt-10"
          />
        </div>

        <div className="flex-1">
          <p className="text-sm mt-6 font-serif leading-relaxed">
            At <strong>ShivSubStar</strong>, we believe in pushing boundaries, telling stories that matter,
            and building technology that inspires. If you're passionate about entertainment,
            creativity, and innovation, join our growing team of storytellers, engineers,
            marketers, and dreamers. Whether you're a fresh talent or an experienced pro,
            there's a place for you here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-sm font-serif">
            <div className="p-4 border border-red-500 rounded-xl">
              <h2 className="text-red-400 font-semibold mb-2">Open Roles</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Frontend Developer</li>
                <li>Backend Engineer</li>
                <li>UI/UX Designer</li>
                <li>Content Curator</li>
              </ul>
            </div>
            <div className="p-4 border border-red-500 rounded-xl">
              <h2 className="text-red-400 font-semibold mb-2">Why Join Us?</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Creative freedom</li>
                <li>Flexible work culture</li>
                <li>Cutting-edge tech</li>
                <li>Passionate team</li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <a href="#apply" className="bg-red-500 rounded-full px-6 py-2 inline-block text-white">
              Apply Now
            </a>
          </div>
        </div>
      </div>

      
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYIbLfatgQHwdZhg6AK1ZyGEUXtRCalq6A-zG4QqGCJq0Yqfn_w2zAfLDuWnUs1eAI6gg&usqp=CAU')",
        }}
      >
        <div className="backdrop-blur-sm bg-black/70 w-full h-full px-6 md:px-20 py-10 flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="text-white flex-1">
            <p className="flex items-center gap-2 font-extralight text-sm tracking-widest">
              EXPLORE OPPORTUNITIES <BsArrowDown />
            </p>
            <h1 className="text-2xl md:text-4xl mt-3 font-serif font-extrabold">
              Build Your Career in{" "}
              <span className="text-red-500 block">Digital Entertainment</span> at ShivSubStar.
            </h1>
            <p className="text-sm font-serif mt-6 leading-relaxed">
              Whether you're into tech, storytelling, marketing, or design, we have a place
              for you. Join a team that values passion, collaboration, and forward-thinking
              ideas. Let’s redefine OTT together.
            </p>

            <div className="mt-6">
              <a href="/myspace" className="bg-red-500 rounded-full px-6 py-2 inline-block text-white">
                Log in
              </a>
            </div>

            <div className="flex gap-6 items-center mt-10 flex-wrap">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PK1oGgLJ_XCsZv9CMyq41Us8qG3kd7lFl9OmWvpgvB9JaRVw_oO1w1hWycnWd16kNPU&usqp=CAU"
                alt="team"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
              />
              <a
                href="/Home"
                className="flex items-center font-serif gap-3 text-white transition"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-red-500 flex items-center justify-center">
                  <BsFillCaretRightFill className="md:w-6 md:h-6 w-5 h-5" />
                </div>
                Watch Movies
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="career.png"
              alt="career team"
              className="w-full hidden md:block mx-auto mt-10 lg:mt-0 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;

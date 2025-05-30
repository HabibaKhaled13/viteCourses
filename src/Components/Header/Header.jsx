import React from "react";

import { Typewriter } from "react-simple-typewriter";
import style from "../Header/Header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className={`lg:h-screen md:h-[50vh] h-[70vh] bg-[#F1F5F9]  ${style.header}`}>
      <div className="container flex items-center justify-center flex-col lg:h-screen  md:h-[50vh] h-[70vh] ">
        <p className="mb-7 md:text-lg text-base text-center text-gray-600"><i className="fa-solid fa-rocket  me-1  text-emerald-600"></i> Learn a new skill, launch a project, land your dream career.</p>
    
    <div className="md:mb-10 mb-6">  <span className="md:text-6xl text-4xl font-bold me-3">1-on-1</span>
        
        <span  className="md:text-6xl text-4xl font-bold me-3 text-[#6C45D1]"><Typewriter
          words={["JavaScript", "Startup", "Marketing", "Branding","Raect","Node.js"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
        </span></div>
      <p className="md:text-xl text-lg lg:w-[60%] md:w-[85%] w-full text-center font-medium">Start your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
          <div className="btn flex gap-x-2 mt-12">
        <Link to ="/sign-up"
          className="bg-[#754ffe] px-6 py-3 border rounded-lg border-[#754ffe] text-white text-sm lg:text-base font-semibold hover:bg-[#6343D8] duration-300 transition-all"
        >
          Join For Free
        </Link>
        <Link to ="/courses"
          className=" px-6 py-3 border border-gray-800 rounded-lg text-gray-800 text-sm lg:text-base font-semibold hover:bg-[#64748B] hover:text-white duration-300 transition-all"
        >
          Explore Courses
        </Link>
      </div> 
      </div>
     
    </section>
  );
}

import React from "react";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import { Link } from "react-router-dom";

export default function Practice() {
  return (
    <>
      <section>
        <div className="container mx-auto md:px-14 my-28">
          <div className="title text-center md:mb-16">
            <h2 className="text-3xl font-bold mb-4 md:w-2/5 mx-auto ">
              Practice Coding & Hiring Assessments
            </h2>
            <p className="text-slate-600 mx-auto md:w-1/2 mb-9">
              Regular coding practice sharpens your problem-solving and logical
              thinking skills. The more code you write, the better you become at
              spotting and fixing errors.
            </p>
          </div>
          <div className="row gap-y-14">
            <div className="md:w-1/2 w-full">
              <div className="box1 flex ">
                <div className="img-box">
                  <img src={icon3} alt="icon pc" className="w-2/5 mx-auto" />
                </div>
                <div className="details">
                  <h2 className="text-xl font-semibold mb-2">
                    Coding Practice
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Working on projects helps you apply what you've learned in
                    real-world scenarios. Projects showcase your skills and make
                    your portfolio stand out to employers.
                  </p>
                  <Link className="text-[#754ffe] font-medium">
                    Start Practice
                    <i className=" ms-2 fa-solid fa-arrow-right text-[11px]"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="box1 flex ">
                <div className="img-box">
                  <img src={icon2} alt="icon pc" className="w-2/5 mx-auto" />
                </div>
                <div className="details">
                  <h2 className="text-xl font-semibold mb-2">
                    Skill Assessment
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Skill assessments help you identify your strengths and areas
                    for improvement. They provide a clear measure of your
                    progress and readiness for real-world tasks.
                  </p>
                  <Link className="text-[#754ffe] font-medium">
                    Start Assessment
                    <i className=" ms-2 fa-solid fa-arrow-right text-[11px]"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="box1 flex ">
                <div className="img-box">
                  <img src={icon2} alt="icon pc" className="w-2/5 mx-auto" />
                </div>
                <div className="details">
                  <h2 className="text-xl font-semibold mb-2">Projects</h2>
                  <p className="text-slate-600 mb-4">
                    Working on projects helps you apply what you've learned in real-world scenarios.
Projects showcase your skills and make your portfolio stand out to employers.
                  </p>
                  <Link className="text-[#754ffe] font-medium">
                    Start Projects
                    <i className=" ms-2 fa-solid fa-arrow-right text-[11px]"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="box1 flex ">
                <div className="img-box">
                  <img src={icon4} alt="icon pc" className="w-2/5 mx-auto" />
                </div>
                <div className="details">
                  <h2 className="text-xl font-semibold mb-2">
                    Interview Preparation
                  </h2>
                  <p className="text-slate-600 mb-4">
                   Interview preparation builds your confidence and improves your communication skills.
It helps you structure your thoughts and answer questions clearly.
                  </p>
                  <Link className="text-[#754ffe] font-medium">
                    Start Interview
                    <i className=" ms-2  fa-solid fa-arrow-right text-[11px]"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

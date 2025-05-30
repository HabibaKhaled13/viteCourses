import React from "react";
import icon1 from "../../assets/icon10.png";
import icon2 from "../../assets/icon20.png";
import icon3 from "../../assets/icon30.png";
import icon4 from "../../assets/icon40.png";
import icon5 from "../../assets/icon50.png";
import icon6 from "../../assets/icon60.png";
import icon7 from "../../assets/icon70.png";
import icon8 from "../../assets/icon80.png";

export default function Category() {
  return (
    <>
      <section>
        <div className="container mx-auto md:px-24 my-14">
          <div className="title text-center">
            <h2 className="text-3xl font-bold mb-4">
              Explore Courses Categories
            </h2>
            <p className="text-slate-600 mx-auto md:w-1/2 mb-9">
              Discover a world of knowledge through our diverse range of
              courses.
            </p>
          </div>
          <div className="row gap-6">
            <div className="lg:w-[23%] md:w-[48%] w-full border rounded-md p-5  shadow-md hover:shadow-lg duration-300 transition-all transform- hover:-translate-y-1 ">
              <img
                src={icon2}
                className="lg:w-[30%] w-[20%] inline-block mt-1"
                alt="data science icon"
              />
              <div className="details mt-5">
                <h2 className="text-xl font-semibold ">Data Science </h2>
                <p className="text-slate-500">
                  <span className="font-semibold text-slate-500">10 </span>
                  Courses
                </p>
              </div>
            </div>
            <div className="  lg:w-[23%] md:w-[48%] w-full border rounded-md p-5 shadow-md hover:shadow-lg duration-300 transition-all transform- hover:-translate-y-1 ">
              <img
                src={icon7}
                className="lg:w-[30%] w-[20%]  inline-block mt-1"
                alt="programming icon"
              />
              <div className="details mt-4">
                <h2 className="text-xl font-semibold ">Programming</h2>
                <p className="text-slate-500">
                  <span className="font-semibold text-slate-500">23 </span>
                  Courses
                </p>
              </div>
            </div>
            <div className="  lg:w-[23%] md:w-[48%] w-full border rounded-md p-5 shadow-md hover:shadow-lg duration-300 transition-all transform- hover:-translate-y-1">
              <img
                src={icon6}
                className="lg:w-[30%] w-[20%] inline-block mt-1"
                alt="programming icon"
              />
              <div className="details mt-4">
                <h2 className="text-xl font-semibold ">Web Development</h2>
                <p className="text-slate-500">
                  <span className="font-semibold text-slate-500">21 </span>
                  Courses
                </p>
              </div>
            </div>
            <div className="  lg:w-[23%] md:w-[48%] w-full border rounded-md p-5 shadow-md hover:shadow-lg duration-300 transition-all transform- hover:-translate-y-1">
              <img
                src={icon5}
                className="lg:w-[30%] w-[20%] inline-block mt-1"
                alt="programming icon"
              />
              <div className="details mt-4">
                <h2 className="text-xl font-semibold ">
                  Artificial Intelligence
                </h2>
                <p className="text-slate-500">
                  <span className="font-semibold text-slate-500">8 </span>
                  Courses
                </p>
              </div>
            </div>
            <div className="  lg:w-[23%] md:w-[48%] w-full border rounded-md p-5 shadow-md hover:shadow-lg duration-300 transition-all transform- hover:-translate-y-1">
              <img
                src={icon4}
                className="lg:w-[30%] w-[20%] inline-block mt-1"
                alt="programming icon"
              />
              <div className="details mt-4">
                <h2 className="text-xl font-semibold ">UI / UX Design</h2>
                <p className="text-slate-500">
                  <span className="font-semibold text-slate-500">21 </span>
                  Courses
                </p>
              </div>
            </div>
            <div className="  lg:w-[23%] md:w-[48%] w-full border rounded-md p-5 shadow-md hover:shadow-lg duration-300 transition-all transform- hover:-translate-y-1">
              <img
                src={icon3}
                className="lg:w-[30%] w-[20%] inline-block mt-1"
                alt="programming icon"
              />
              <div className="details mt-4">
                <h2 className="text-xl font-semibold ">Cloud Computing</h2>
                <p className="text-slate-500">
                  <span className="font-semibold text-slate-500">18 </span>
                  Courses
                </p>
              </div>
            </div>
            <div className="  lg:w-[23%] md:w-[48%] w-full border rounded-md p-5 shadow-md hover:shadow-lg duration-300 transition-all transform- hover:-translate-y-1">
              <img
                src={icon1}
                className="lg:w-[30%] w-[20%] inline-block mt-1"
                alt="programming icon"
              />
              <div className="details mt-4">
                <h2 className="text-xl font-semibold ">Business</h2>
                <p className="text-slate-500">
                  <span className="font-semibold text-slate-500">28 </span>
                  Courses
                </p>
              </div>
            </div>
            <div className="  lg:w-[23%] md:w-[48%] w-full border rounded-md p-5 shadow-md hover:shadow-lg duration-300 transition-all transform- hover:-translate-y-1">
              <img
                src={icon8}
                className="lg:w-[30%] w-[20%] inline-block mt-1"
                alt="programming icon"
              />
              <div className="details mt-4">
                <h2 className="text-xl font-semibold ">Cyber Security</h2>
                <p className="text-slate-500">
                  <span className="font-semibold text-slate-500">7 </span>
                  Courses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

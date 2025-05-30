import React, { useEffect, useState } from "react";
import img1 from "../../assets/avatar-1.jpg";
import img2 from "../../assets/avatar-5.jpg";
import img3 from "../../assets/instructor-img.jpg";
import style from "../Instructor/instructor.module.css";
import { initFlowbite } from "flowbite";

export default function Instructor() {
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return () => clearTimeout(timer);
}, []);

useEffect(() => {
  if (!isLoading) {
    initFlowbite();
  }
}, [isLoading]);
  const [isExpand, setExpand] = useState(false);
  let text = `An award-winning designer with 7+ years of experience in UX design, product design and branding. I've mentored and placed students in design jobs in the US, Europe, Japan and India. I'm on a mission to unleash design maestros, fueling their creative superpowers, unlocking awesome full-time gigs, and igniting their industry influence through mind-blowing creative adventures! I've helped businesses in US, Europe and Japan generate 200M+ in revenue, through my product design and branding skills. My top 3 industries are web3, AI and edtech.`;

  let shortText = text.split(" ").slice(0, 40).join(" ");

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <div className="sk-cube-grid ">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
        </div>
      ) : (
        <section className="bg-[#F1F5F9]">
          <div className="container mx-auto md:px-24 md:py-16 pt-14 ">
            <div className="flex justify-between flex-wrap">
              <div className="lg:w-[65%] w-full">
                <div className="bg-white shadow-lg rounded-lg mb-7 border">
                  <div className={`${style.img} bg-slate-100`}></div>
                  <div className=" md:p-10 p-7">
                    <img src={img3} alt="" className="-mt-32 rounded-md" />
                    <h2 className="text-3xl font-semibold mt-6 mb-3">
                      Jitu Chauhan
                    </h2>
                    <p className="text-sm font-semibold ">
                      Software Engineer at Apple
                      <span className="text-emerald-600">
                        {" "}
                        7+ years in UX Design & Brand Design.
                      </span>
                    </p>
                    <div className="icons my-3">
                      <span className="text-gray-600 font-semibold">
                        <i className="fa-solid fa-star text-yellow-400 me-1"></i>
                        5.0 (16 Reviews)
                      </span>
                    </div>
                    <h2 className="text-2xl font-semibold mt-5 mb-3">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 text-sm font-semibold hover:bg-[#E2E8F0] transation-all duration-200 text-gray-600  border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                        Frontend
                      </span>

                      <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                        HTMl
                      </span>

                      <span className="px-3 py-1.5 text-sm font-semibold text-gray-600   hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                        CSS
                      </span>
                      <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                        JavaScript
                      </span>
                      <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                        React
                      </span>
                      <span className="px-3 py-1.5 text-sm font-semibold text-gray-600   hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                        Vuejs
                      </span>
                      <span className="px-3 py-1.5 text-sm font-semibold text-gray-600   hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                        Next.js
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg  md:p-10 p-7 mb-7 border">
                  <h2 className="text-2xl font-semibold mb-4">About</h2>
                  <p className="text-gray-700">{isExpand ? text : shortText}</p>
                  <button
                    className="transation-all duration-200 underline font-semibold mt-2 text-[#754FFE]"
                    onClick={() => {
                      setExpand(!isExpand);
                    }}
                  >
                    {isExpand ? "Read less" : "Read more"}
                  </button>
                </div>

                <div className="bg-white shadow-lg rounded-lg md:p-10 p-7  mb-7 border">
                  <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 text-sm font-semibold hover:bg-[#E2E8F0] transation-all duration-200 text-gray-600  border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      Frontend
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600   hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      UX Desgin
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      HTMl
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      Ul Desgin
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600   hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      CSS
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      Landing page design
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      Figma
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      eCommecre Desgin
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      React
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      Vuejs
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      Javascript
                    </span>
                    <span className="px-3 py-1.5 text-sm font-semibold text-gray-600  hover:bg-[#E2E8F0] transation-all duration-200 border border-gray-200 rounded-2xl :hover dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                      Next.js
                    </span>
                  </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg  md:p-10 p-7  mb-7 border">
                  <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
                  <div className="review border-b pb-7 my-10">
                    <div className="flex justify-between">
                      <div className="md:w-[9%] w-[12%]">
                        <img
                          src={img1}
                          alt=""
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="md:w-[88%] w-[85%]">
                        <h4 className="text-gray-800 font-medium text-[15px]">
                          Shankar Subbaraman
                        </h4>
                        <p className="text-slate-400 text-xs font-medium mt-1 mb-4">
                          16 March 2025
                        </p>
                        <span className="text-yellow-400 text-xs me-2">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>

                        <p className="text-gray-700 mt-3  text-[15px] ">
                          I appreciate Jitu Chauhan patience to listen all the
                          doubts and provided honest suggestions and roadmap
                          according to my current situation. Thank you.
                        </p>
                        <div className="icons text-slate-400 flex justify-end mt-7 text-sm">
                          <span className="me-5 font-medium ">
                            <i className="fa-solid fa-thumbs-up me-2"></i>
                            Helpful
                          </span>
                          <span className="font-medium">
                            <i className="fa-solid fa-flag me-2"></i>Report
                            abuse
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review border-b  pb-7 ">
                    <div className="flex justify-between">
                      <div className="md:w-[9%] w-[12%]">
                        <img
                          src={img2}
                          alt=""
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="md:w-[88%] w-[85%]">
                        <h4 className="text-gray-800 font-medium text-[15px]">
                          Robert Thomas
                        </h4>
                        <p className="text-slate-400 text-xs font-medium mt-1 mb-4">
                          30 December 2024
                        </p>
                        <span className="text-yellow-400 text-xs me-2">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>

                        <p className="text-gray-700 mt-3  text-[15px] ">
                          Very good session with Jitu Chauhan. He listens to
                          mentee clearly, note down things and device a proper
                          plan to achieve those goals
                        </p>
                        <div className="icons text-slate-400 flex justify-end mt-7 text-sm">
                          <span className="me-5 font-medium ">
                            <i className="fa-solid fa-thumbs-up me-2"></i>
                            Helpful
                          </span>
                          <span className="font-medium">
                            <i className="fa-solid fa-flag me-2"></i>Report
                            abuse
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[31%] w-full bg-white shadow-lg rounded-lg py-4 px-7  h-fit mb-7 border">
                <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                  <ul
                    className="flex flex-wrap -mb-px text-sm font-medium justify-between text-center"
                    id="default-tab"
                    data-tabs-toggle="#default-tab-content"
                    role="tablist"
                  >
                    <li role="presentation">
                      <button
                        className="inline-block py-4  text-base border-b-2 rounded-t-lg"
                        id="profile-tab"
                        data-tabs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Membership Plan
                      </button>
                    </li>
                    <li className="me-7" role="presentation">
                      <button
                        className="inline-block py-4 text-base border-b-2   text-[17px] rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="dashboard-tab"
                        data-tabs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
                      >
                        Sessions
                      </button>
                    </li>
                  </ul>
                </div>
                <div id="default-tab-content">
                  <div
                    className=" hidden dark:bg-gray-800"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <p className="text-xl mb-5 text-gray-900 font-semibold dark:text-gray-400">
                      Book a Free 1:1 Trial : To Plan Your Mentorship with Jitu
                      Chauhan
                    </p>
                    <p className="text-gray-700 mb-2">Starting from</p>
                    <span className="text-gray-800 text-2xl font-semibold ">
                      125 EGP
                      <span className="text-gray-800 ms-1 text-sm ">
                        / Month
                      </span>
                    </span>
                    <p className="text-gray-800 mt-4 font-semibold mb-3">
                      Every Month Of Mentorship
                    </p>
                    <ul>
                      <li className="mb-2 text-slate-700">
                        <i className="fa-solid fa-user me-2  text-sm text-[#593CC1]"></i>
                        1 session/week (1:1 Sessions)
                      </li>
                      <li className="mb-2 text-slate-700">
                        <i className="fa-solid fa-comment me-2 text-sm text-[#593CC1]"></i>
                        Within 12hours (Chat Support)
                      </li>

                      <li className="mb-2 text-slate-700">
                        <i className="fa-solid fa-list-ul me-2 text-sm text-[#593CC1]"></i>
                        Everyday (Tasks & Followup)
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="bg-[#754FFE] py-2 border border-[#754FFE] text-sm rounded-md mt-4 font-bold hover:bg-[#6343D8] w-full text-white duration-300 transition-all text-center"
                    >
                      Book a free Trail
                    </button>
                    <p className="text-emerald-600 font-semibold mt-4 mb-2">
                      Next Available: Tuesday June 05 2025
                    </p>
                  </div>
                  <div
                    className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                    id="dashboard"
                    role="tabpanel"
                    aria-labelledby="dashboard-tab"
                  >
                    <div className="radio-one">
                      <div className="flex items-center ">
                        <input
                          checked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 accent-[#754FFE] "
                        />
                        <label
                          for="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Introductory Call
                        </label>
                      </div>
                      <p className="ms-5 text-slate-500">
                        20 minutes, 39 EGP per session
                      </p>
                    </div>
                    <div className="radio-one mt-5">
                      <div className="flex items-center ">
                        <input
                          checked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 accent-[#754FFE] "
                        />
                        <label
                          for="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Session Name with Call
                        </label>
                      </div>
                      <p className="ms-5 text-slate-500">
                        30 minutes, 89 EGP per session
                      </p>
                    </div>
                    <div className="radio-one mt-5">
                      <div className="flex items-center ">
                        <input
                          checked
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 accent-[#754FFE] "
                        />
                        <label
                          for="default-radio-2"
                          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Session Name with Call
                        </label>
                      </div>
                      <p className="ms-5 text-slate-500">
                        30 minutes, 89 EGP per session
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#754FFE] py-2 border border-[#754FFE] text-sm rounded-md mt-5 mb-3 font-bold hover:bg-[#6343D8] w-full text-white duration-300 transition-all text-center"
                    >
                      Book a free Trail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

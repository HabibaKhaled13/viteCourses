import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/avatar-1.jpg";
import img2 from "../../assets/avatar-5.jpg";
import img3 from "../../assets/course-javascript.jpg";
import Slider from "react-slick";
import { useSelector } from "react-redux";

import { initFlowbite } from 'flowbite';


export default function VideoData() {
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
    let courses  = useSelector((state)=>state.apiProvider)
      var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
      ) : (<>
      <section className="bg-[#754FFE] lg:h-[50vh] md:h-[30vh] h-[55vh]  flex items-center justify-between ">
        <div className="container ">
          <div className="title text-white text-center">
            <h1 className="lg:text-4xl text-3xl font-bold mb-4 ">
              Getting Started with JavaScript
            </h1>
            <p className="lg:w-3/5 mb-9 text-lg mx-auto ">
              JavaScript is the popular programming language which powers web
              pages and web applications. This course will get you started
              coding in JavaScript.
            </p>
            <ul className="flex justify-center gap-x-5 ">
              <li className="text-sm">
                <i className="fa-regular fa-bookmark"></i>
                <span className="ms-1"> Bookmark</span>
              </li>
              <li className="text-sm">
                <i className="fa-solid fa-user"></i>
                <span className="ms-1">1200 Enrolled</span>
              </li>
              <li className="text-sm text-yellow-500">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span className="ms-1 text-white">(140)</span>
              </li>
              <li className="text-sm">
                {" "}
                <span className="">
                  <i className="fa-solid fa-signal me-1"></i>
                  Intermediate
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F5F9] py-14">
        <div className="container  mx-auto md:px-24">
          <div className="flex flex-wrap justify-between md:gap-y-0 gap-y-6">
            <div className="lg:w-[65%] w-full ">
              <div className="border-b border-gray-200 ">
                <ul
                  className="rounded-t-md flex flex-wrap px-4 py-2 -mb-px text-base font-medium text-center bg-white"
                  id="default-tab"
                  data-tabs-toggle="#default-tab-content"
                  role="tablist"
                >
                  <li className="me-2" role="presentation">
                    <button
                      className="inline-block p-4 border-b-2 "
                      id="profile-styled-tab"
                      data-tabs-target="#styled-profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Contents
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="inline-block p-4 border-b-2 rounded-t-lg  hover:border-gray-300 dark:hover:text-gray-300"
                      id="dashboard-styled-tab"
                      data-tabs-target="#styled-dashboard"
                      type="button"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected="false"
                    >
                      Description
                    </button>
                  </li>
                  <li className="me-2" role="presentation">
                    <button
                      className="inline-block p-4 border-b-2 rounded-t-lg  hover:border-gray-300 dark:hover:text-gray-300"
                      id="settings-styled-tab"
                      data-tabs-target="#styled-settings"
                      type="button"
                      role="tab"
                      aria-controls="settings"
                      aria-selected="false"
                    >
                      Reviews
                    </button>
                  </li>
                  <li role="presentation">
                    <button
                      className="inline-block p-4 border-b-2 rounded-t-lg  hover:border-gray-300 dark:hover:text-gray-300"
                      id="contacts-styled-tab"
                      data-tabs-target="#styled-contacts"
                      type="button"
                      role="tab"
                      aria-controls="contacts"
                      aria-selected="false"
                    >
                      FAQ
                    </button>
                  </li>
                </ul>
              </div>
              <div id="default-styled-tab-content ">
                <div
                  className="hidden p-4 rounded-b-md  bg-white "
                  id="styled-profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div id="accordion-open" data-accordion="open">
                    <h2 id="accordion-open-heading-1">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full  py-3 px-2 font-medium focus:bg-white  text-gray-500  border-b border-gray-200 rounded-t-xl   "
                        data-accordion-target="#accordion-open-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-open-body-1"
                      >
                        <span className="flex items-center">
                          Introduction to JavaScript
                        </span>
                        <svg
                          data-accordion-icon
                          className="w-3 h-3 rotate-180 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-open-body-1"
                      className="hidden"
                      aria-labelledby="accordion-open-heading-1"
                    >
                      <div className="md:p-5 py-5    border-gray-200  ">
                        <div className="py-1 border-b border-gray-200 ">
                          <Link
                            to=""
                            className="flex justify-between  mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Introduction
                            </span>
                            <span>1m 7s</span>
                          </Link>
                          <Link
                            to=""
                            className="flex justify-between mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Installing Development Software
                            </span>
                            <span>3m 11s</span>
                          </Link>
                          <Link
                            to=""
                            className="flex justify-between mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Hello World Project from GitHub
                            </span>
                            <span>2m 33s</span>
                          </Link>
                          <Link
                            to=""
                            className="flex justify-between mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Our Sample Website
                            </span>
                            <span>2m 15s</span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <h2 id="accordion-open-heading-2">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full py-3 px-2 focus:bg-white font-medium  text-gray-500  border-b border-gray-200  "
                        data-accordion-target="#accordion-open-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-open-body-2"
                      >
                        <span className="flex items-center">
                          JavaScript Beginning
                        </span>
                        <svg
                          data-accordion-icon
                          className="w-3 h-3 rotate-180 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-open-body-2"
                      className="hidden"
                      aria-labelledby="accordion-open-heading-2"
                    >
                      <div className="md:p-5 py-5     border-b border-gray-200  ">
                        <div className="py-3 border-b border-gray-200 ">
                          <Link
                            to=""
                            className="flex justify-between  mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Introduction
                            </span>
                            <span>1m 7s</span>
                          </Link>
                          <Link
                            to=""
                            className="flex justify-between mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Installing Development Software
                            </span>
                            <span>3m 11s</span>
                          </Link>
                          <Link
                            to=""
                            className="flex justify-between mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Hello World Project from GitHub
                            </span>
                            <span>2m 33s</span>
                          </Link>
                          <Link
                            to=""
                            className="flex justify-between mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Our Sample Website
                            </span>
                            <span>2m 15s</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <h2 id="accordion-open-heading-3">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full py-3 px-2 focus:bg-white font-medium  text-gray-500 border-b border-gray-200  "
                        data-accordion-target="#accordion-open-body-3"
                        aria-expanded="false"
                        aria-controls="accordion-open-body-3"
                      >
                        <span className="flex items-center">
                          {" "}
                          Variables and Constants
                        </span>
                        <svg
                          data-accordion-icon
                          className="w-3 h-3 rotate-180 shrink-0"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </button>
                    </h2>
                    <div
                      id="accordion-open-body-3"
                      className="hidden"
                      aria-labelledby="accordion-open-heading-3"
                    >
                      <div className="md:p-5 py-5    border-t-0 border-gray-200 ">
                        <div className="py-3 border-b border-gray-200 ">
                          <Link
                            to=""
                            className="flex justify-between  mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Introduction
                            </span>
                            <span>1m 7s</span>
                          </Link>
                          <Link
                            to=""
                            className="flex justify-between mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Installing Development Software
                            </span>
                            <span>3m 11s</span>
                          </Link>
                          <Link
                            to=""
                            className="flex justify-between mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Hello World Project from GitHub
                            </span>
                            <span>2m 33s</span>
                          </Link>
                          <Link
                            to=""
                            className="flex justify-between mb-3 hover:text-[#754FFE] duration-200 transation-all"
                          >
                            <span>
                              <span className=" w-7 h-7 inline-block bg-slate-100 rounded-full text-center ps-2  me-2">
                                <i className="fa-solid fa-play me-2 text-[9px] text-gray-900"></i>
                              </span>
                              Our Sample Website
                            </span>
                            <span>2m 15s</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden p-8 rounded-lg bg-white  "
                  id="styled-dashboard"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                >
                  <h2 className="text-xl font-semibold">Course Descriptions</h2>
                  <p className="my-4 text-gray-600">
                    If you’re learning to program for the first time, or if
                    you’re coming from a different language, this course,
                    JavaScript: Getting Started, will give you the basics for
                    coding in JavaScript. First, you'll discover the types of
                    applications that can be built with JavaScript, and the
                    platforms they’ll run on.
                  </p>
                  <p className="text-gray-600">
                    Next, you’ll explore the basics of the language, giving
                    plenty of examples. Lastly, you’ll put your JavaScript
                    knowledge to work and modify a modern, responsive web page.
                    When you’re finished with this course, you’ll have the
                    skills and knowledge in JavaScript to create simple
                    programs, create simple web applications, and modify web
                    pages.
                  </p>
                </div>
                <div
                  className="hidden px-8 py-4 rounded-lg bg-white   "
                  id="styled-settings"
                  role="tabpanel"
                  aria-labelledby="settings-tab"
                >
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
                            <i className="fa-solid fa-thumbs-up me-2"></i>Helpful
                          </span>
                          <span className="font-medium">
                            <i className="fa-solid fa-flag me-2"></i>Report abuse
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
                            <i className="fa-solid fa-thumbs-up me-2"></i>Helpful
                          </span>
                          <span className="font-medium">
                            <i className="fa-solid fa-flag me-2"></i>Report abuse
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="hidden p-7 rounded-lg bg-white  "
                  id="styled-contacts"
                  role="tabpanel"
                  aria-labelledby="contacts-tab"
                >
                  <h2 className="text-xl font-medium mb-4">
                    Course - Frequently Asked Questions
                  </h2>
                  <div className="ask1">
                    <h2 className="text-lg font-medium my-2 text-gray-800">
                      How this course help me to design layout?
                    </h2>
                    <p className="text-gray-700">
                      My name is Jason Woo and I work as human duct tape at
                      Gatsby, that means that I do a lot of different things.
                      Everything from dev roll to writing content to writing
                      code. And I used to work as an architect at IBM. I live in
                      Portland, Oregon.
                    </p>
                  </div>
                  <div className="ask2 mt-6">
                    <h2 className="text-lg font-medium my-2 text-gray-800">
                      What is important of this course?
                    </h2>
                    <p className="text-gray-700">
                      We'll dive into GraphQL, the fundamentals of GraphQL.
                      We're only gonna use the pieces of it that we need to
                      build in Gatsby. We're not gonna be doing a deep dive into
                      what GraphQL is or the language specifics. We're also
                      gonna get into MDX. MDX is a way to write React components
                      in your markdown.
                    </p>
                  </div>
                  <div className="ask3 mt-6">
                    <h2 className="text-lg font-medium my-2 text-gray-800">
                      Why Take This Course?
                    </h2>
                    <p className="text-gray-700">
                      We'll dive into GraphQL, the fundamentals of GraphQL.
                      We're only gonna use the pieces of it that we need to
                      build in Gatsby. We're not gonna be doing a deep dive into
                      what GraphQL is or the language specifics. We're also
                      gonna get into MDX. MDX is a way to write React components
                      in your markdown.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full ">
              <div className="video border p-3  bg-white rounded-md mb-4">
                <div className="img relative">
                  <img src={img3} className="w-full  rounded-md" />
             <div className="play absolute top-1/2 left-1/2 shadow-md shadow-gray-500 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 flex justify-center items-center rounded-full bg-white">
                 <i className="text-[#754FFE] text-[20px] fa-solid fa-play "></i>
                  </div>
                </div>
                <div className="button px-3 py-8">
                  <span className="text-2xl font-bold me-2">750 EGP</span>
                  <span className="line-through ">1100 EGP</span>
                  <button className="hover:bg-[#6343D8] px-5 py-2 border text-[15px] text-center w-full mt-4 border-[#754FFE]  rounded-md hover:text-[#] font-semibold bg-[#754FFE]  text-white duration-300 transition-all;">
                  Start Free Month
                  </button>
                    <button className="bg-[#FFFFF] px-5 py-2 border text-[15px]  text-center w-full mt-2 border-[#754FFE]  rounded-md text-[#754FFE] font-semibold hover:bg-[#754FFE]  hover:text-white duration-300 transition-all;">
                    Get Full Access
                  </button>
                </div>
              </div>

              <div className="data border p-3 relative bg-white rounded-md">
 <div className="bg-white  rounded-lg mb-7 ">
           
                <div className=" p-7">
                 
                  <img src={img1} alt="" className="rounded-full lg:w-1/3 md:w-[20%] w-1/3" />
                  <h2 className="text-2xl font-semibold mt-5 mb-3">
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
                    <i className="fa-solid fa-star text-yellow-400 me-1"></i>5.0
                    (16 Reviews)
                    </span>
                  </div>
            

              

                    <span className=" text-sm  text-gray-700">
                     I am an Innovation designer focussing on UX/UI based in Berlin. As a creative resident at Figma explored the city of the future and how new technologies.
                    </span>

                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="bg-[#F1F5F9] pb-14">
        <div className="container mx-auto md:px-24 ">
          <div className="title mb-7">
            <h2 className="text-2xl font-semibold ">Related Courses</h2>
                </div>
             <Slider {...settings}>
                  {courses.map((items) => (
                    <div key={items.id} className="px-2">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                        <img className="rounded-t-lg" src={items.img} />
                        <div className="p-5">
                          <span className="text-[12px] px-2 py-1 bg-slate-50 text-gray-600 font-semibold border rounded-2xl">
                            {items.category}
                          </span>
                          <h5 className="mb-4  text-lg font-semibold tracking-tight text-gray-900 mt-5 leading-snug">
                            {items.title}
                          </h5>
                          <p className="text-slate-500 text-[13px] ">
                            {items.name}
                          </p>
                          <div className="level my-3 text-sm text-slate-700">
                            <span className="me-5">
                              <i className="fa-regular fa-clock me-1  text-slate-500"></i>
                              {items.time}
                            </span>{" "}
                            <span className="">
                              <i className="fa-solid fa-signal me-1"></i>
                              {items.level}
                            </span>
                          </div>
                          <div className="rating mt-2">
                            <span className="text-slate-600 font-medium">
                              {items.rating}{" "}
                              <i className="fa-solid fa-star text-[11px] text-yellow-500"></i>
                              <i className="fa-solid fa-star text-[11px] text-yellow-500"></i>
                              <i className="fa-solid fa-star text-[11px] text-yellow-500"></i>
                              <i className="fa-solid fa-star text-[12px] text-yellow-500"></i>
                              <i className="fa-solid fa-star text-[11px] text-yellow-500"></i>
                            </span>
                            <span className="text-slate-500 font-medium">
                              {" "}
                              ({items.review})
                            </span>
                            <div className="flex justify-between  text-xl  items-end mt-2">
                              <p className="font-semibold mt-3 text-lg ">
                                {items.price} EGP
                              </p>
                              <span> <i className="fa-solid fa-cart-plus text-[#754FFE]"></i></span>
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
   
   
        </div>
      </section>
    </>)}</>
  );
}

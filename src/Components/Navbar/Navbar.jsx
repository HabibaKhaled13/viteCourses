import React, { useContext, useDebugValue, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo3.png";
import cart from "../../assets/shopping-cart.png";
import { DataUser } from "../../UserLogin/UserLogin";

export default function Navbar() {
  let { userLogin, setuserLogin } = useContext(DataUser);
  let navigate = useNavigate();

  function logout() {
    localStorage.removeItem("userData");
    setuserLogin(null);
    navigate("/login");
  }
  return (
    <>
      <nav className="bg-white  shadow-md">
        <div className="container mx-auto md:px-16 ">
          <div className="max-w-screen-xl flex items-center lg:justify-normal justify-between mx-auto py-4">
            <NavLink
              to=""
              className="flex items-center w-1/3 "
            >
              <img src={logo} className="w-24" alt="I Courses" />
            </NavLink>

            <div className="text-center">
              <button
                className=" flex lg:hidden"
                type="button"
                data-drawer-target="drawer-navigation"
                data-drawer-show="drawer-navigation"
                aria-controls="drawer-navigation"
              >
                {userLogin == null  ?   <span className="me-5 hidden relative cursor-pointer self-end">
                  <i className=" text-[22px]  fa-solid fa-cart-shopping  "></i>
                  <span className=" flex items-center justify-center text-white font-semibold   w-4 h-4 rounded-full -top-2 -right-2 absolute bg-[#6C45D1] text-[10px] ">
                    2
                  </span>
                </span> :   <span className="me-5 relative cursor-pointer self-end">
                  <i className=" text-[22px]  fa-solid fa-cart-shopping  "></i>
                  <span className=" flex items-center justify-center text-white font-semibold   w-4 h-4 rounded-full -top-2 -right-2 absolute bg-[#6C45D1] text-[10px] ">
                    2
                  </span>
                </span> }
              
                <i className="fa-solid fa-bars text-[26px] mt-2 me-2 "></i>
              </button>
            </div>

            {/* <!-- drawer component --> */}
            <div
              id="drawer-navigation"
              className="fixed top-0 left-0 z-40 w-full h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white "
              tabndex="-1"
              aria-labelledby="drawer-navigation-label"
            >
              <h5
                id="drawer-navigation-label"
                className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
              >
                <img
                  src={logo}
                  alt=""
                  className="lg:w-[35%] md:w-[15%] w-[25%] my-3"
                />
              </h5>
              <button
                type="button"
                data-drawer-hide="drawer-navigation"
                aria-controls="drawer-navigation"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close menu</span>
              </button>
              <div className="py-4 overflow-y-auto">
                <ul className="space-y-2 font-medium text-lg">
                  <li>
                    <NavLink
                      to=""
                      className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg  group hover:bg-gray-100"
                      aria-current="page"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg  group hover:bg-gray-100 "
                    >
                      About
                    </NavLink>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
                      aria-controls="dropdown-example"
                      data-collapse-toggle="dropdown-example"
                    >
                      <span className="flex-1 text-left  whitespace-nowrap text-lg">
                        Categories
                      </span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <ul
                      id="dropdown-example"
                      className="hidden  py-2 space-y-2 text-lg"
                    >
                      <li>
                        <button
                          type="button"
                          className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
                          aria-controls="dropdown-example"
                          data-collapse-toggle="dropdown-webdev"
                        >
                          <span className="flex-1 ms-3 text-left text-lg whitespace-nowrap hover:text-[#6C45D1]">
                            Web Development
                          </span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                        <ul
                          id="dropdown-webdev"
                          className="hidden text-lgpy-2 space-y-2 text-lg"
                        >
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              Angular
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              React
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              Bootstrap
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              HTML 5
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              CSS 3
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              Java Script
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              Saas
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              JQuery
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <button
                          type="button"
                          className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
                          aria-controls="dropdown-example"
                          data-collapse-toggle="dropdown-webdevw"
                        >
                          <span className="flex-1 text-left ms-3 text-lg  whitespace-nowrap hover:text-[#6C45D1]">
                            Design
                          </span>
                          <svg
                            className="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                        <ul
                          id="dropdown-webdevw"
                          className="hidden py-2 space-y-2 text-lg"
                        >
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              Graphic Desginer
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              IIIustrator
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              UI / UX
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              Figma
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/course-category"
                              className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                            >
                              Adobe XD
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          to="/course-category"
                          className=" ms-3 hover:text-[#6C45D1]  flex items-center w-full p-2  text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
                        >
                          Mobile App
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/course-category"
                          className=" ms-3 hover:text-[#6C45D1]  flex items-center w-full p-2  text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
                        >
                          IT Software
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/course-category"
                          className="  ms-3 hover:text-[#6C45D1]   flex items-center w-full p-2  text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
                        >
                          Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/course-category"
                          className=" ms-3 hover:text-[#6C45D1]   flex items-center w-full p-2  text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
                        >
                          Cyber Security
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/course-category"
                          className=" ms-3 hover:text-[#6C45D1]  flex items-center w-full p-2  text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white"
                        >
                          Business
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <NavLink
                      to="/course-category"
                      className="   hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg  group hover:bg-gray-100 "
                    >
                      Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/instructors"
                      className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg  group hover:bg-gray-100 "
                      aria-current="page"
                    >
                      Instructors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/pricing"
                      className="  hover:text-[#6C45D1]   flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg  group hover:bg-gray-100 "
                    >
                      Pricing
                    </NavLink>
                  </li>
                </ul>
                <div className="mt-5">
                    {userLogin == null ? 
     
                  <Link to="/login">
                    <button className="w-full border border-gray-950 px-4 py-2.5 text-sm font-semibold rounded-md text-white hover:text-gray-950 hover:bg-white bg-gray-950 duration-300 transition-all">
                       Login
                    </button>
                  </Link>
:
                  <button
                    onClick={()=>logout()}
                    className="border w-full me-2 border-gray-950 px-4 py-2.5 text-sm font-semibold rounded-md hover:text-white hover:bg-gray-950 duration-300 transition-all"
                  >
                    Logout
                  </button>
}
              
                </div>
              </div>
            </div>

            <div
              className="hidden w-full lg:block  w-1/3 md:w-auto"
              id="navbar-default"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:space-x-7 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  md">
                <li>
                  <NavLink
                    to=""
                    className="  block py-2 px-3  text-gray-700 rounded-sm md:bg-transparent  md:p-0 "
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="  block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0  md:p-0  "
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center  justify-between w-full py-2 px-3 text-gray-900 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto  dark:focus:text-white  md:dark:hover:bg-transparent"
                  >
                    Categories
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdownNavbar"
                    className="z-10 hidden  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li aria-labelledby="dropdownNavbarLink">
                        <button
                          id="doubleDropdownButton"
                          data-dropdown-toggle="doubleDropdown"
                          data-dropdown-placement="right-start"
                          type="button"
                          className="flex items-center justify-between w-full px-4 py-2 dark:hover:text-white"
                        >
                          <span className=" font-semibold block text-gray-900">
                            Web Development
                          </span>
                          <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                        <div
                          id="doubleDropdown"
                          className="z-10 hidden  bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 "
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="doubleDropdownButton"
                          >
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900 "
                              >
                                Angular
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                React
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className=" hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                Bootstrap
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                HTML 5
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                CSS 3
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                JavaScript
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                Sass
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                JQuery
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li aria-labelledby="dropdownNavbarLink">
                        <button
                          id="doubleDropdownButton"
                          data-dropdown-toggle="doubleDropdown1"
                          data-dropdown-placement="right-start"
                          type="button"
                          className="flex items-center justify-between w-full px-4 py-2 dark:hover:text-white"
                        >
                          <span className=" font-semibold block text-gray-900">
                            Design
                          </span>
                          <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                        <div
                          id="doubleDropdown1"
                          className="z-10 hidden  bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 "
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="doubleDropdownButton"
                          >
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                Graphic Desginer
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                IIIustrator
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                UI / UX
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                Figma
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/course-category"
                                className="  hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900"
                              >
                                Adobe XD
                              </Link>
                            </li>
                            =
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900font-semibold  text-gray-900"
                        >
                          Mobile App
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900font-semibold  text-gray-900"
                        >
                          IT Software
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900font-semibold  text-gray-900"
                        >
                          Marketing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900font-semibold  text-gray-900"
                        >
                          Cyber Security
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="hover:text-[#6C45D1]  px-4 py-2  font-semibold block text-gray-900font-semibold  text-gray-900"
                        >
                          Business
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li>
                  <NavLink
                    to="/courses"
                    className="  block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0  md:p-0 "
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/instructors"
                    className="  block py-2 px-3  text-gray-700 rounded-sm md:bg-transparent  md:p-0 "
                    aria-current="page"
                  >
                    Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pricing"
                    className="  block py-2 px-3 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0  md:p-0  "
                  >
                    Pricing
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="hidden w-1/3 lg:flex justify-end">
              {userLogin == null ? (
                <>
          
                  
               <Link to="/login">
                    <button className=" border border-gray-950 px-6 py-2.5 text-sm font-semibold rounded-md text-white hover:text-gray-950 hover:bg-white bg-gray-950 duration-300 transition-all">
                       Login
                    </button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/cart" className="lg:self-center">
                    <span className="me-4 cursor-pointer  relative">
                      <i className=" text-xl fa-solid fa-cart-shopping  "></i>
                      <span className=" flex items-center justify-center text-white font-semibold   w-4 h-4 rounded-full -top-2 -right-2 absolute bg-[#6C45D1] text-[10px] ">
                        2
                      </span>
                    </span>
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="border me-2 border-gray-950 px-7 py-2.5 text-sm font-semibold rounded-md hover:text-white hover:bg-gray-950 duration-300 transition-all"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

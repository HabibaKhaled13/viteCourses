import React from "react";
import logo from "../../assets/logo4.png";

export default function Footer() {
  return (
    <>
      <section className="bg-[#0F172A] pt-6 pb-2">
        <div className="container mx-auto md:px-24 md:mt-12 md:mb-7 mt-14">
          <div className="flex flex-wrap justify-between text-slate-500 text-[15px] gap-y-7">
            <div className="lg:w-[32%] w-full">
              <img src={logo} className="w-28" alt="Flowbite Logo" />
              <p className="mt-4">
                Empowering learners with practical knowledge and real-world
                skills Your future starts here — learn, grow, and achieve your
                goals
              </p>
              <div className="flex">
                <ul className="flex gap-x-4 mt-6 cursor-pointer">
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-x-twitter"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-youtube"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-[15%] md:w-1/5  w-1/2">
              <h2 className=" mb-2 text-gray-400 font-bold uppercase">
                Platform
              </h2>
              <ul className="cursor-pointer">
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Leadership
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Emotional Intelligence
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Personal Productivity
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Project Management
                </li>
              </ul>
            </div>
            <div className="lg:w-[15%] md:w-1/5 w-1/2">
              <h2 className=" mb-2 text-gray-400 font-bold uppercase">
                Resources
              </h2>
              <ul className="cursor-pointer">
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Newsletter
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Case Studies
                </li>

                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Books
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Templates
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Blog
                </li>
              </ul>
            </div>
            <div className="lg:w-[15%] md:w-1/5 w-1/2">
              <h2 className=" mb-2 text-gray-400 font-bold uppercase">
                Company
              </h2>
              <ul className="cursor-pointer">
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  About
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Partner Program
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Privacy Policy
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Meet the Team
                </li>
              </ul>
            </div>
            <div className="lg:w-[15%] md:w-1/5 w-1/2">
              <h2 className=" mb-2 text-gray-400 font-bold uppercase">
                Support
              </h2>
              <ul className="cursor-pointer">
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  FAQ
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Contact
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Help centre
                </li>
                <li className="mb-2 hover:text-[#754FFE] transition-all duration-250">
                  Join Community
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center  text-slate-500 mt-10 text-[15px]">
            © 2025 I-Course. All Rights Reserved
          </div>
        </div>
      </section>
    </>
  );
}

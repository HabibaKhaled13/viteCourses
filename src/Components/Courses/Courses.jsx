import React, { useEffect, useState } from "react";
import 'flowbite';
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { initFlowbite } from 'flowbite';

export default function Courses() {
  let courses  = useSelector((state)=>state.apiProvider)
  
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
      <section>
        <div className="container mx-auto md:px-24 py-14 ">
        <nav
        className="flex pb-3  text-gray-700  mb-8"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center font-medium text-[#6B45D1] "
            >
              Home
            </Link>
          </li>
          <li className="inline-flex items-center">
          <div className="flex items-center">
          <span><i className="fa-solid fa-angle-right text-[11px]"></i></span> 
  
            <Link
              to="/courses"
              className="ms-2 inline-flex items-center font-medium text-gray-600"
            >
              Courses
            </Link>
            </div>
          </li>
       
        </ol>
      </nav>
          <div className="title-details">
            <h2 className="text-3xl font-semibold mb-2 ">Courses Grid</h2>
            <p className="text-gray-700">Explore courses from experienced, real-world experts.</p>
          </div>
          <div className="row md:justify-between md:py-14">
            <div className="md:w-[30%] w-full">
             

            
                  <div className="p-5 lg:block hidden border rounded-lg mb-5 border-gray-200">
                     <h2 className="text-lg items-center font-medium mb-4">Topic</h2>
                    <div className="topic">
                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox1"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox1"
                          className="ms-2 font-medium text-gray-500"
                        >
                          React
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox33"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox33"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Figma
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox34"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox34"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Bootstrap
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox35"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox35"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Mongo DB
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox36"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox36"
                          className="ms-2 font-medium text-gray-500"
                        >
                          AWS
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox37"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox37"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Java Script
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox38"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox38"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Nuxt.js
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox39"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox39"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Python
                        </label>
                      </div>
                    </div>
           
              
              </div>

                 <div className="p-5 border lg:block hidden rounded-lg mb-5 border-gray-200">
                     <h2 className="text-lg items-center font-medium mb-4">Price</h2>
                            <div className="flex items-center mb-1 ">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-radio-1-checkbox"
                          className="ms-2 font-medium text-gray-500"
                        >
                          All
                        </label>
                      </div>
                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-radio-1-checkbox"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Free
                        </label>
                      </div>
                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-radio-1-checkbox"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Paid
                        </label>
                      </div>
           
              
              </div>

     <div className="p-5 border lg:block hidden rounded-lg mb-5 border-gray-200">
                     <h2 className="text-lg items-center font-medium mb-4">Level</h2>
                     <div className="skills">
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox2"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox2"
                          className="ms-2 font-medium text-gray-500"
                        >
                          All Level
                        </label>
                      </div>
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox3"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox3"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Beginner
                        </label>
                      </div>
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox4"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox4"
                          className="ms-2 font-medium  text-gray-500"
                        >
                          Intermediate
                        </label>
                      </div>
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox5"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox5"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Expert
                        </label>
                      </div>
                    </div>
              </div>

                <div className="p-5  lg:block hidden border rounded-lg mb-5 border-gray-200">
                     <h2 className="text-lg items-center font-medium mb-4">Rating</h2>
                    <div className="ratnig">
                      <div className="flex items-center mb-2 text-xs">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                      </div>
                      <div className="flex items-center mb-2 text-xs">
                        <input
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                      </div>
                      <div className="flex items-center mb-2 text-xs">
                        <input
                          id="default-radio-3"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                      </div>
                      <div className="flex items-center mb-2 text-xs">
                        <input
                          id="default-radio-4"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                      </div>
                      <div className="flex items-center mb-2 text-xs">
                        <input
                          id="default-radio-5"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                      </div>
                    </div>
              </div>

                  <div className="p-5 lg:block hidden border rounded-lg mb-5 border-gray-200">
                     <h2 className="text-lg items-center font-medium mb-4">Video Duration</h2>
                    <div className="video">
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox6"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox6"
                          className="ms-2 font-medium text-gray-500"
                        >
                          0 - 1 Hour
                        </label>
                      </div>
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox7"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox7"
                          className="ms-2 font-medium text-gray-500"
                        >
                          1 - 3 Hour
                        </label>
                      </div>
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox8"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox8"
                          className="ms-2 font-medium  text-gray-500"
                        >
                          3 - 6 Hour
                        </label>
                      </div>
                    
                    </div>
              </div>

          
            </div>
            <div className="md:w-[66%] w-full">


              <div className="flex justify-between items-center px-1">
                <h2 className="font-semibold">20 result</h2>
             <form>
  <div className="relative flex gap-x-2">
                           {/* navbar */}
              <div className="text-center md:hidden block">
   <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigationn" data-drawer-show="drawer-navigationn" aria-controls="drawer-navigationn">
   Filter
   </button>
</div>

<div id="drawer-navigationn" className="fixed top-0 left-0 z-40 w-full h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabndex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" className="text-xl p-1 font-semibold text-[#593CC1]  uppercase dark:text-gray-400"><i className="fa-solid fa-filter me-2"></i>Filter</h5>
    <button type="button" data-drawer-hide="drawer-navigationn" aria-controls="drawer-navigationn" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium px-3">
         <li className="border-b pb-4">  
             <div className="topic">
              <h2 className="mb-4 text-xl">Topic</h2>
                      <div className="flex items-center mb-1 ">
                        <input
                        
                          id="default-checkbox9"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox9"
                          className="ms-2 font-medium text-gray-500"
                        >
                          React
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox10"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox10"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Figma
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox12"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox12"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Bootstrap
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox13"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox13"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Mongo DB
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox14"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox14"
                          className="ms-2 font-medium text-gray-500"
                        >
                          AWS
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox15"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox15"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Java Script
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox16"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox16"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Nuxt.js
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox17"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox17"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Python
                        </label>
                      </div>
                    </div>
         </li>
         <li className="border-b pb-4">  
          
        
                 <div className="Price">
                        <h2 className="my-4 text-xl">Price</h2>
                      <div className="flex items-center mb-1 ">
                        <input
                      
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-radio-1-checkbox"
                          className="ms-2 font-medium text-gray-500"
                        >
                          All
                        </label>
                      </div>
                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-radio-1-checkbox"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Free
                        </label>
                      </div>
                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-radio-1-checkbox"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Paid
                        </label>
                      </div>
                    </div>  

                      <div className="flex items-center mb-1 ">
                        <input
                        
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 font-medium text-gray-500"
                        >
                          AWS
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                        
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Java Script
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Nuxt.js
                        </label>
                      </div>

                      <div className="flex items-center mb-1 ">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Python
                        </label>
                      </div>
                    
         </li>
         <li  className="border-b pb-4">
              <div className="skills">
                 <h2 className="my-4 text-xl">Level</h2>
                      <div className="flex items-center mb-2 ">
                        <input
                        
                          id="default-checkbox21"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox21"
                          className="ms-2 font-medium text-gray-500"
                        >
                          All Level
                        </label>
                      </div>
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox22"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox22"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Beginner
                        </label>
                      </div>
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox23"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox23"
                          className="ms-2 font-medium  text-gray-500"
                        >
                          Intermediate
                        </label>
                      </div>
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox24"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox24"
                          className="ms-2 font-medium text-gray-500"
                        >
                          Expert
                        </label>
                      </div>
                    </div>
         </li>
         <li className="border-b pb-4">
            <div className="ratnig">
               <h2 className="my-4 text-xl">Rating</h2>
                      <div className="flex items-center mb-2 text-xs">
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                      </div>
                      <div className="flex items-center mb-2 text-xs">
                        <input
                        
                          id="default-radio-2"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                      </div>
                      <div className="flex items-center mb-2 text-xs">
                        <input
                          id="default-radio-3"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                      </div>
                      <div className="flex items-center mb-2 text-xs">
                        <input
                          id="default-radio-4"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                        <i className="fa-solid fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                      </div>
                      <div className="flex items-center mb-2 text-xs">
                        <input
                          id="default-radio-5"
                          type="radio"
                          value=""
                          name="rating"
                          className="w-[16px] h-[16px] accent-[#593CC1]    border-gray-300 rounded-xl"
                        />
                        <i className="fa-solid fa-star ms-2 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                        <i className="fa-regular fa-star ms-1 text-yellow-500"></i>
                      </div>
                    </div>
         </li>
         <li className="border-b pb-4">
          <div className="video">
                    <h2 className="my-4 text-xl">Video Duration</h2>
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox25"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox25"
                          className="ms-2 font-medium text-gray-500"
                        >
                          0 - 1 Hour
                        </label>
                      </div>
                      <div className="flex items-center mb-2 ">
                        <input
                        
                          id="default-checkbox26"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox26"
                          className="ms-2 font-medium text-gray-500"
                        >
                          1 - 3 Hour
                        </label>
                      </div>
                      <div className="flex items-center mb-2 ">
                        <input
                          id="default-checkbox27"
                          type="checkbox"
                          value=""
                          className="w-[16px] h-[16px] accent-[#593CC1]  border-gray-300 rounded-xl"
                        />
                        <label
                          htmlFor="default-checkbox27"
                          className="ms-2 font-medium  text-gray-500"
                        >
                          3 - 6 Hour
                        </label>
                      </div>
                
                    </div>
      </li>
      </ul>
   </div>
</div>
    <select
      id="countries"
      className="appearance-none border border-gray-300 text-slate-500 text-sm rounded-md px-3 py-2 pr-8 focus:border-[#754FFE] w-full"
    >
      <option value="">Shorting</option>
      <option value="Free">Free</option>
      <option value="Highest Rated">Highest Rated</option>
      <option value="Most Popular">Most Popular</option>
      <option value="Newest">Newest</option>
      <option value="Shorting">Shorting</option>
    </select>
  
  </div>
</form>

              </div>
              <div className="row gap-6">
                {courses.map((items) => (
                  <Link
                    to="/video"
                    key={items.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm md:w-[31%] w-full"
                  >
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
                 
                  </Link>
              
                ))}
     
              </div>

              <nav aria-label="Page navigation example" className="mt-5">
                <ul className="flex items-center justify-center -space-x-px h-10 text-base">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover: hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="w-3 h-3 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover: hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover: hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover: hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="w-3 h-3 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      )}</>
  );
}

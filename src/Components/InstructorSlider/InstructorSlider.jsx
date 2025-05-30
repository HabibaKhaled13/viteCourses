import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function InstructorSlider() {
  let inst  = useSelector((state)=>state.instructorsProvider)
  
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    spaceBetween:20,
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
      <section className="my-24">
        <div className="container mx-auto md:px-24 ">
          <div className="title text-center">
            <h2 className="text-3xl font-bold mb-4">Choose Your Instructor Now </h2>
            <p className="text-slate-600 mx-auto md:w-1/2 mb-9">
              Whether you want to advance your career, learn a new skill, or
              explore a passion, we have the right course for you.
            </p>
          </div>
          <Slider {...settings}>
           {inst.map((items) => (
                       <div className="md:w-[32%] w-full px-2" key={items.id} >
                         <Link to="/instructor">
                           <div className="card bg-white p-5 rounded-xl border  hover:shadow-lg transition-all duration-300 ease-in-out">
                             <div className="img">
                               <img
                                 src={items.img}
                                 alt=""
                                 className="w-full rounded-xl"
                               />
                             </div>
                             <h2 className="text-[21px] mt-5 mb-2 font-semibold">
                               {items.name}
                             </h2>
                             <p>{items.position}</p>
                             <div className="title flex justify-between text-[13px] text-slate-600 my-3">
                               <div className="exp mb-3">
                                 <span>{items.company}</span> <span>|</span>{" "}
                                 <span>{items.exp} yrs Exp.</span>
                               </div>
                               <div className="rev ">
                                 <span className=" font-medium text-gray-900">
                                   <i className="fa-solid fa-star text-[11px] text-yellow-500 me-1"></i>
                                   {items.rating}{" "}
                                 </span>
                                 <span className="font-medium">
                                   ({items.review} Reviews)
                                 </span>
                               </div>
                             </div>
                             <div className="flex justify-between items-center">
                               <div className="price">
                                 <p>Starting from</p>
                                 <p className="text-gray-900 font-semibold">
                                   {items.price} EGP{" "}
                                   <span className="text-[13px] text-slate-600">
                                     / Month
                                   </span>
                                 </p>
                               </div>
                               <div className="btn">
                                 <button className="hover:bg-slate-500 hover:text-white font-medium text-slate-500 text-sm  border-slate-500 border lg:px-4 px-3 py-2 rounded-md duration-300">
                                   Book Sessions
                                 </button>
                               </div>
                             </div>
                           </div>
                         </Link>
                       </div>
                     ))}
          </Slider>
          <div className="text-center md:mt-16 mt-12">
            <Link
              to="/instructors"
              className="bg-[#FFFFF] px-5 py-2 border border-[#754FFE]  rounded-md text-[#754FFE] font-semibold hover:bg-[#754FFE]  hover:text-white duration-300 transition-all;"
            >
              Show All Instructors
              <i className=" ms-2 fa-solid fa-arrow-right text-[11px]"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default InstructorSlider;

import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function SliderCourses() {
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
      <section className="my-24">
        <div className="container mx-auto md:px-24 ">
          <div className="title text-center">
            <h2 className="text-3xl font-bold mb-4">Trending Now Courses</h2>
            <p className="text-slate-600 mx-auto md:w-1/2 mb-9">
              Whether you want to advance your career, learn a new skill, or
              explore a passion, we have the right course for you.
            </p>
          </div>
             <Slider {...settings}>
                  {courses.map((items) => (
                    <Link to="/video" key={items.id}>
                    <div  className="px-2">
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
                    </Link>
                  ))}
                </Slider>
          <div className="text-center md:mt-16 mt-12">
            <Link
              to="/courses"
              className="bg-[#FFFFF] px-5 py-2 border border-[#754FFE]  rounded-md text-[#754FFE] font-semibold hover:bg-[#754FFE]  hover:text-white duration-300 transition-all;"
            >
              Show All Courses
              <i className=" ms-2 fa-solid fa-arrow-right text-[11px]"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default SliderCourses;

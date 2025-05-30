import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";


export default function CourseCategory() {
  let api = useSelector((state) => state.apiProvider);
  let courses = useSelector((state) => state.courseProvider);
  let inst = useSelector((state) => state.instructorsProvider);

const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  var insTsettings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    spaceBetween: 20,
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

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    infinite: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
  {isLoading? 
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
</div>:(<>
    <section className="bg-[#754FFE] lg:h-[50vh] h-[30vh]  flex items-center justify-between ">
        <div className="container ">
          <div className="title text-white text-center">
            <h1 className="lg:text-4xl text-3xl font-bold mb-4 ">
             JavaScript Courses
            </h1>
                 <p className="  mb-9">
              6,979,934 students are learning JavaScript.
            </p>
          </div>
        </div>
      </section>
   
      <section className="bg-[#F1F5F9]">
        <div className="container mx-auto md:px-24 ">
          <div className="java py-5">
            <div className="title my-7">
              <h2 className="text-2xl font-semibold ">Most Popular Courses</h2>
            </div>
            <Slider {...settings}>
           
              {courses.map((items) => (
                   <Link to= "/video" key={items.id} >
                <div className="px-2">
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
                        <p className="font-semibold mt-3">{items.price} EGP</p>
                      </div>
                    </div>
                  </div>
                </div>
                   </Link>
              ))}
           
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F5F9]">
        <div className="container mx-auto  md:px-24 ">
          <div className="java py-5">
            <div className="title my-8">
              <h2 className="text-2xl font-semibold mb-3">
             Popular Instructors
              </h2>
              <p className="text-gray-700">
             Popular instructor in JavaScript Courses..
              </p>
            </div>
            <Slider {...insTsettings}>
              {inst.map((items) => (
                <div className="md:w-[32%] w-full px-2" key={items.id}>
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
                          <button className="hover:bg-slate-500 hover:text-white font-medium text-slate-500 text-sm  border-slate-500 border lg:px-4 md:px-3 px-3 py-2 rounded-md duration-300">
                            Book Sessions
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section className="bg-[#F1F5F9] pb-14">
        <div className="container mx-auto md:px-24 ">
          <div className="java py-5">
            <div className="title my-7">
                    <h2 className="text-2xl font-semibold mb-3">
                All JavaScript courses
              </h2>
              <p className="text-gray-700">
                I Courses instructors specialize in teaching the whole scope of
                JavaScript—beginner to advanced. Whether you’re interested in
                back-end development, or app and website building, Udemy has a
                JavaScript course for you.
              </p>
            </div>
               <Slider {...settings}>
                  {api.map((items) => (
                    <Link to="/video" key={items.id} >
                    <div className="px-2">
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
          </div>
        </div>
      </section>   
    </>)}</>
  );
}

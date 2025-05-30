import React  from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Testmonial() {
let test = useSelector((state)=>state.testProvider
)

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    infinite: true,
    Default: true,
    arrows: false,
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
      <section className=" bg-slate-200 py-14">
        <div className="container mx-auto md:px-24">
          <div className="title text-center">
            <span className="font-semibold inline-block mb-4">
              4.5/5.0
              <span className="text-yellow-500 text-[12px] item mx-1">
                <i className="fa-solid fa-star "></i>
                <i className="fa-solid fa-star ms-[2px] "></i>
                <i className="fa-solid fa-star ms-[2px]"></i>
                <i className="fa-solid fa-star ms-[2px]"></i>
                <i className="fa-solid fa-star ms-[2px]"></i>
              </span>
            </span>

            <span className="text-slate-600">(Based on 3265 ratings)</span>
            <h2 className="text-3xl font-bold mb-4">What our customers say</h2>
            <p className="text-slate-600 mx-auto md:w-1/2 mb-14">
              Hear from teachers , trainers , and leaders in the learning space
              about how Geeks empowers them to provide quality online learning
              experiences. slide 9 to 11 of 6
            </p>
          </div>
          <Slider {...settings}>
            {test.map((testmonial) => (
              <div key={testmonial.id} className="px-3">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                  <img
                    className="rounded-full mx-auto w-1/6 mt-8"
                    src={testmonial.img}
                  />
                  <div className="p-5 text-center">
                    <p className="px-2 text-slate-700">{testmonial.des}</p>

                    <div className="rating my-4">
                      <span className="text-yellow-500 text-[12px] item ">
                        <i className="fa-solid fa-star ms-[2px] "></i>
                        <i className="fa-solid fa-star  ms-[2px] "></i>
                        <i className="fa-solid fa-star ms-[2px]"></i>
                        <i className="fa-solid fa-star ms-[2px] "></i>
                        <i className="fa-solid fa-star ms-[2px] "></i>
                      </span>
                    </div>
                    <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 mt-3 leading-snug">
                      {testmonial.name}
                    </h5>
                    <p className="text-slate-500 text-sm mb-2">
                      {testmonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="text-center md:mt-16 mt-12">
            <Link className="bg-[#754ffe]  px-5 py-2 border border-[#754FFE]  rounded-md text-white font-semibold hover:bg-[#6343D8]  duration-300 transition-all;">
              View Reviews
               <i className=" ms-2 fa-solid fa-arrow-right text-[11px]"></i>
     
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

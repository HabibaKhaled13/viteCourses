import React, { useEffect, useState } from 'react'
import img6 from "../../assets/meeting1.png";
import img7 from "../../assets/meeting2.png";
import Slider from "react-slick";
import img1 from "../../assets/office.svg";
import img2 from "../../assets/linkedin-logo.svg";
import img3 from "../../assets/facebook.svg";
import img4 from "../../assets/google.svg";
import img5 from "../../assets/microsoft.svg";
import img8 from "../../assets/owner1.png";
import img9 from "../../assets/owner2.png";
import img10 from "../../assets/owner3.png";
import img11 from "../../assets/owner4.png";

export default function About() {
  const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer); 
    }, []);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    
  };
  return (
    <>
    {isLoading ? 
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
      <section className="bg-[#754FFE] lg:h-[50vh] h-[30vh] flex flex-col justify-center ">
        <div className="container mx-auto md:px-24  ">
          <div className="title text-center text-white">
            <h1 className="lg:text-4xl text-3xl font-bold mb-4">About Us</h1>
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="container mx-auto md:px-24">
          <div className="flex flex-wrap justify-between lg:gap-y-0 gap-y-10 items-center">
            <div className="lg:w-[46%]   w-full">
              <div className="img">
                <img src={img6} className="w-full " />
              </div>
            </div>
            <div className="lg:w-[46%] w-full">
              <div className="text">
                <h2 className="text-3xl font-bold mb-5">
                  Upskilling talent for the
                  <span className="text-[#6B45D1] ms-2">
                    careers of the future
                  </span>
                </h2>
                <p className="text-gray-800 mb-3">
                  I Courses began when Stanford instructors Sebastian Thrun and
                  Peter Norvig had a revolutionary idea to offer their
                  "Introduction to Artificial Intelligence" course online—to
                  anyone, for free.
                </p>
                <p className="text-gray-800">
                  Over 160,000 students in more than 190 countries enrolled,
                  demanding a new way to deliver education. A startling
                  discovery emerged: The top 400 students weren’t from Stanford.
                  This revelation sparked a mission to make lifelong learning
                  more equitable and inclusive. I Courses has been expanding
                  opportunities ever since. Udacity is now part of Accenture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#6B45D1] md:py-10 py-5 my-10">
        <div className="container mx-auto md:px-24  ">
          <div className="flex flex-wrap">
            <div className="md:w-1/4 w-full md:border-e border-b  md:border-b-0  p-5  text-center text-white">
              <h2 className=" lg:text-5xl text-3xl font-bold">26751+</h2>
              <p className="lg:text-[15px] text-base mt-3 ">
                registered users in more than 240 countries
              </p>
            </div>
            <div className="md:w-1/4 w-full md:border-e  md:border-b-0 p-5  border-b text-center text-white">
              <h2 className=" lg:text-5xl text-3xl font-bold">355+</h2>
              <p className="lg:text-[15px] text-base mt-3">
                projects submitted
              </p>
            </div>
            <div className="md:w-1/4 w-full md:border-e border-b  md:border-b-0 p-5  text-center text-white">
              <h2 className="lg:text-5xl text-3xl font-bold">785+</h2>
              <p className="lg:text-[15px] text-base mt-3 ">
                Nanodegree certificates earned
              </p>
            </div>
            <div className="md:w-1/4 w-full  p-5 text-center  text-white">
              <h2 className="lg:text-5xl text-3xl font-bold">80%</h2>
              <p className="lg:text-[15px] text-base mt-3">
                of graduates reported a favorable career change
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="container mx-auto md:px-24">
          <div className="flex flex-wrap justify-between lg:gap-y-0 gap-y-10  items-center lg:flex-row flex-col-reverse">
            <div className="lg:w-[46%]  w-full">
              <div className="text">
                <h2 className="text-3xl font-bold mb-5">
                  Driving outcomes that
                  <span className="text-[#6B45D1] ms-2">
                    empower learners, organizations and nations
                  </span>
                </h2>
                <p className="text-gray-800 mb-3">
                  I Courses proven playbook is globally scalable, addressing the
                  widespread digital talent shortages that impact growth,
                  productivity, and innovation. We collaborate with enterprises
                  and highly motivated individuals to design a tailored talent
                  transformation journey enabled by our Digital Competency
                  Platform.
                </p>
                <p className="text-gray-800">
                  Our exclusive content is co-created and continually refined
                  with industry leaders. Each I Courses program is deeply
                  focused—eliminating guesswork in selecting the right course.
                  Projects go far beyond step-by-step guides, cultivating the
                  critical thinking required for workplace relevance. Expert
                  mentors unblock learning with personalized support, and verify
                  complete mastery of competencies.
                </p>
              </div>
            </div>
            <div className="lg:w-[46%] w-full ">
              <div className="img">
                <img src={img7} className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 py-10 bg-[#F6F6F6]">
        <div className="container mx-auto md:px-24 ">
          <div className="title text-center mb-14">
            <h2 className=" text-slate-400 font-medium">
              Trusted by over 12,500 great teams
            </h2>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="">
                <img src={img1} alt="office" className="mx-auto" />
              </div>
              <div className="">
                <img src={img2} alt="linkedin" className="mx-auto" />
              </div>
              <div className="">
                <img src={img3} alt="facebook" className="mx-auto" />
              </div>
              <div className="">
                <img src={img4} alt="google " className="mx-auto" />
              </div>
              <div className="md:w-1/5 w-full">
                <img src={img5} alt="microsoft" className="mx-auto" />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="my-16 py-10">
        <div className="container mx-auto md:px-24 ">
          <div className="title text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Our Team</h2>
            <p className="md:w-[75%]  w-full text-gray-700 mx-auto">
              Our leadership team comes together with one goal: to help
              learners, organizations, and nations prepare for and strengthen
              the digital workforce of the next generation.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-y-8 lg:gap-y-0">
            <div className="lg:w-[23%] md:w-[47%] ">
              <div className="cart  ">
                <div className="img ">
                  <img src={img8} alt="" className=" rounded-t-[4px] " />
                </div>
                <div className="details text-center  bg-[#f0efef] rounded-b-[4px] py-5">
                  <h2 className="text-2xl font-medium mb-2">Michael Conway</h2>
                  <p className="text-[17px] pb-1">VP, Content</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[23%] md:w-[47%] ">
              <div className="cart  ">
                <div className="img ">
                  <img src={img9} alt="" className=" rounded-t-[4px] " />
                </div>
                <div className="details text-center  bg-[#f0efef] rounded-b-[4px] py-5">
                  <h2 className="text-2xl font-medium mb-2">Hisham Elaraby</h2>
                  <p className="text-[17px] pb-1">Chief Financial Officer</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[23%] md:w-[47%] ">
              <div className="cart  ">
                <div className="img ">
                  <img src={img10} alt="" className=" rounded-t-[4px] " />
                </div>
                <div className="details text-center  bg-[#f0efef] rounded-b-[4px] py-5">
                  <h2 className="text-2xl font-medium mb-2">Kai Roemmelt</h2>
                  <p className="text-[17px] pb-1">Chief Executive Officer</p>
                </div>
              </div>
            </div>
            <div className="lg:w-[23%] md:w-[47%] ">
              <div className="cart  ">
                <div className="img ">
                  <img src={img11} alt="" className=" rounded-t-[4px] " />
                </div>
                <div className="details text-center  bg-[#f0efef] rounded-b-[4px] py-5">
                  <h2 className="text-2xl font-medium mb-2">Matthew Franks</h2>
                  <p className="text-[17px] pb-1">Chief Revenue Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></>)}
    </>
  );
}

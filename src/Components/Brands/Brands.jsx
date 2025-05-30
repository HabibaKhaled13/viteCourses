import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/office.svg"
import img2 from "../../assets/linkedin-logo.svg"
import img3 from "../../assets/facebook.svg"
import img4 from "../../assets/google.svg"
import img5 from "../../assets/microsoft.svg"


export default function Brands() {
    const settings = {
    dots: false,
    infinite: true,
  autoplay: true,
  
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
             <section className="my-20">
           <div className="container mx-auto md:px-24 ">
            <div className="title text-center mb-14">
                <h2 className=" text-slate-400 font-medium">Trusted by over 12,500 great teams</h2>
            </div>
    <div className="slider-container">
      <Slider {...settings}>
    
               <div className="" >
               <img src={img1} alt="office" className="mx-auto" />
               </div>
               <div className="">
               <img src={img2} alt="linkedin" className="mx-auto" />
               </div> <div className="">
               <img src={img3} alt="facebook" className="mx-auto" />
               </div> <div className="">
               <img src={img4} alt="google " className="mx-auto"/>
               </div> <div className="md:w-1/5 w-full">
               <img src={img5} alt="microsoft" className="mx-auto" />
               </div>
      </Slider>
      </div>
       </div>
 </section>
 
 

    </>
  );
}

import React from "react";
import img from "../../assets/404.svg";
import { Link } from "react-router-dom";
export default function NotFound() {
    
  return (
    <>
      <section>
        <div className="container mx-auto md:py-0 py-3  lg:w-[70%]">
          <div className="flex flex-wrap justify-around items-center lg:h-[90vh] md:h-[65vh] h-[90vh] md:gap-y-0 gap-y-5">
     
            <div className="lg:w-[50%] text-center lg:text-left ">
            
            <h1 className="text-7xl font-semibold text-gray-700">404</h1>
            <p className="lg:w-[80%]  mt-7 text-xl text-gray-700 font-semibold">Oops! Sorry, we couldn’t find the page you were looking for. If you think this is a problem with us, please <span className=" text-[#6B45D1] underline">Contact us</span>

</p>
<Link to="/">
<button className="py-2.5 px-4 font-semibold rounded-md mt-8 text-[15px] text-white bg-[#6B45D1] hover:bg-[#6b49e7] transition-all duration-300">Back to Safety</button>
</Link>

            
            </div>
                   <div className="lg:w-[50%]">
            <img src={img} alt="" className="w-full"/>
            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Link} from "react-router-dom";

export default function Instrcutors() {
  const [isLoading, setIsLoading] = useState(true)
  let instructors = useSelector((state) => state.instructorsProvider);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer); 
    }, []);
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
      ) : (<>
      <section className="bg-[#754FFE] lg:h-[50vh] h-[27vh]  flex items-center justify-between ">
        <div className="container ">
          <div className="title text-white text-center">
            <h1 className="lg:text-4xl text-3xl font-bold mb-4 ">
             Instructors
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-[#F0F4F8] py-16">
        <div className="container mx-auto md:px-20  ">
          <div className="title text-center">
             <h2 className=" md:text-3xl text-2xl font-bold mb-4 ">
              1,600+ mentors are just a Free Trial Session away
            </h2>
            <p className="mb-14">
              Choose your ideal mentor and get started with a FREE trial session
            </p>
          </div>
          <div className="flex flex-wrap  gap-5">
            {instructors.map((items) => (
              <div className="lg:w-[32%] md:w-[47%] w-full " key={items.id}>
                <Link to="instructor">
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
                        <button className="hover:bg-slate-500 hover:text-white font-medium text-slate-500 text-[15px]  border-slate-500 border px-4 py-2 rounded-md duration-300">
                          Book Sessions
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
     </>)}
    </>
  );
}

import React, { useEffect, useState } from 'react'

export default function Pricing() {
  
    const [isLoading, setIsLoading] = useState(true);
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
      <section className="bg-[#754FFE] lg:h-[50vh]   h-[30vh]  flex flex-col justify-center ">
        <div className="container mx-auto md:px-24  ">
          <div className="title text-center text-white">
            <h1 className="lg:text-4xl text-3xl font-bold mb-4">
             Pricing
            </h1>
          
          </div>
        </div>
      </section>
      <section className="bg-[#F1F5F9]">
        <div className="container mx-auto md:px-24 py-14 ">
               <div className="title text-center ">
            <h2 className=" md:text-3xl text-2xl font-bold mb-4 ">
              Simple pricing that scales with your business
            </h2>
            <p className=" mx-auto lg:w-1/2 mb-9">
            Whether you're just getting started or looking for advanced features, we have a plan that fits your needs.
            </p>
          </div>
          <div className="row gap-x-5 lg:gap-y-0 gap-y-9 ">
            <div className="lg:w-[32%] w-full border  rounded-lg shadow-sm  bg-white">
              <div className="border-t-[6px] border-amber-700 rounded-lg">
                <div className="info py-5 px-8">
                  <h2 className="text-2xl font-bold my-4">Free</h2>
                  <p className="text-gray-800 ">
                    To start your learning to day you will get only
                    <span className="text-black font-medium">
                      {" "}
                      free Course{" "}
                    </span>
                    access.
                  </p>

                  <div className="border-b pb-7">
                    <h3 className="text-2xl font-semibold mt-7">It's Free</h3>
                    <button className="text-amber-700 mt-5 text-sm hover:bg-amber-700 hover:text-white transaition-all duration-300 border-amber-700 border px-4 py-2 rounded-md  font-medium">
                      Get Started for Free
                    </button>
                  </div>
                  <div className="items pt-5">
                    <h4 className="text-lg font-semibold mb-4 ">
                      All core features, including:
                    </h4>
                    <ul className=" text-gray-600">
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm  me-3 mt-1 text-emerald-600"></i>
                        Only free courses
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        <span className="text-black font-medium">Free </span>
                        learning paths
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        <span className="text-black  font-medium">5GB </span>
                        storage
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        Analytics
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        Free mobile app
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        Access to support forums
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full border  rounded-lg shadow-sm bg-white ">
              <div className="border-t-[6px] border-[#593CC1] rounded-lg">
                <div className="info py-5 px-8">
                  <h2 className="text-2xl font-bold my-4">Growth</h2>
                  <p className="text-gray-800 ">
                    Access all
                    <span className="text-black font-medium">
                      
                      premium courses, workshops, and mobile apps.{" "}
                    </span>
                    Renewed monthly.
                  </p>

                  <div className="border-b pb-7">
                    <h3 className="text-2xl font-semibold mt-7">
                     39 EGP<span className="text-sm font-normal">/Monthly</span>
                    </h3>
                    <button className="text-white mt-5 hover:bg-[#6343D8] text-sm transaition-all duration-300 border-[#593CC1] border px-4 py-2 rounded-md bg-[#593CC1]  font-medium">
                      Start Today
                    </button>
                  </div>
                  <div className="items pt-5">
                    <h4 className="text-lg font-semibold mb-4 ">
                      Everything in Starter, plus:
                    </h4>
                    <ul className=" text-gray-600">
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm  me-3 mt-1 text-emerald-600"></i>
                        Offline viewing
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        <span className="text-black font-medium">Offline </span>
                        projects
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        <span className="text-black  font-medium">
                          Unlimited{" "}
                        </span>
                        storage
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        Custom domain support
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        Bulk editing
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        12 / 5 support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[32%] w-full border  rounded-lg shadow-sm bg-white ">
              <div className="border-t-[6px] border-[#56A3C4] rounded-lg">
                <div className="info py-5 px-8">
                  <h2 className="text-2xl font-bold my-4">Enterprise</h2>
                  <p className="text-gray-800 ">
                    Upto 10 member access everything. Save{" "}
                    <span className="text-[#56A3C4] font-medium">78 EGP</span> per
                    year! Renewed yearly.
                  </p>

                  <div className="border-b pb-7">
                    <h3 className="text-2xl font-semibold mt-7">
                      139 EGP <span className="text-sm font-normal">/Monthly</span>
                    </h3>
                    <button className="text-[#56A3C4] mt-5 hover:bg-[#56A3C4] hover:text-white transaition-all duration-300 border-[#56A3C4] border px-4 py-2 rounded-md  text-sm font-medium">
                      Contact Sales
                    </button>
                  </div>
                  <div className="items pt-5">
                    <h4 className="text-lg font-semibold mb-4 ">
                      All core features, including:
                    </h4>
                    <ul className=" text-gray-600">
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm  me-3 mt-1 text-emerald-600"></i>
                        Only free courses
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        <span className="text-black font-medium">Free </span>
                        learning paths
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        <span className="text-black  font-medium">5GB </span>
                        storage
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        Analytics
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        Free mobile app
                      </li>
                      <li className="mb-1">
                        <i className="fa-solid fa-arrow-right text-sm me-3 mt-1  text-emerald-600"></i>
                        Access to support forums
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>)}
    </>
  );
}

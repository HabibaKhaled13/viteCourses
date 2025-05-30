import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function ShoppingCart() {
  let api = useSelector((state) => state.apiProvider);
  let data = api.slice(0, 2);
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
      <section className="bg-[#754FFE] lg:h-[50vh]   h-[30vh]  flex flex-col justify-center ">
        <div className="container mx-auto md:px-24  ">
          <div className="title text-center text-white">
            <h1 className="lg:text-4xl text-3xl font-bold mb-4">Cart</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto md:px-10 lg:px-24 py-14 mt-5 ">
          <div className="flex flex-wrap justify-between">
            <div className="lg:w-[70%] w-full">
         <div className="space-y-4 md:hidden">
  {data.map((items) => (
    <div className="bg-white border border-gray-200 p-4 rounded-md grid grid-cols-2 gap-4">
      <div className="col-span-1">
        <img src={items.img} alt={items.title} className="w-full h-auto rounded" />
      </div>
      <div className="col-span-1">
        <h2 className="text-gray-900 font-medium text-base">{items.title}</h2>
        <p className="text-xs text-slate-600 mt-1 mb-2">By {items.name}</p>
        <span className="text-yellow-500 font-semibold">
          {items.rating}
          <i className="fa-solid fa-star text-[11px] text-yellow-500 ml-1"></i>
          <i className="fa-solid fa-star text-[11px] text-yellow-500"></i>
          <i className="fa-solid fa-star text-[11px] text-yellow-500"></i>
          <i className="fa-solid fa-star text-[12px] text-yellow-500"></i>
          <i className="fa-solid fa-star text-[11px] text-yellow-500"></i>
        </span>{" "}
        ({items.review}) rating
        <ul className="flex gap-x-2 mt-2 text-xs">
          <li>{items.time}</li>
          <li>{items.level}</li>
        </ul>
      </div>
      <div className="col-span-1 ps-1">
        <button className="text-[#6B45D1] block mb-2">Remove</button>
        <button className="text-[#6B45D1] block mb-2">Save for Later</button>
        <button className="text-[#6B45D1] block">Move to Wishlist</button>
      </div>
      <div className="col-span-1 pe-1 pt-6 text-right text-gray-700 font-semibold">
        {items.price} EGP
      </div>
    </div>
  ))}
</div>


<div className="relative overflow-x-auto hidden md:block">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <tbody className="border-t">
      {data.map((items) => (
        <tr className="bg-white border-b border-gray-200" key={items.id}>
          <td className="px-6 py-4 md:w-[16%] w-[100%]">
            <img src={items.img} />
          </td>
          <td className="py-4">
            <h2 className="text-gray-900 font-medium text-base">{items.title}</h2>
            <p className="text-xs text-slate-600 mt-1 mb-2">By {items.name}</p>
            <span className="text-yellow-500 font-semibold">
              {items.rating}
              <i className="fa-solid fa-star text-[11px] text-yellow-500 ml-1"></i>
              <i className="fa-solid fa-star text-[11px] text-yellow-500"></i>
              <i className="fa-solid fa-star text-[11px] text-yellow-500"></i>
              <i className="fa-solid fa-star text-[12px] text-yellow-500"></i>
              <i className="fa-solid fa-star text-[11px] text-yellow-500"></i>
            </span>{" "}
            ({items.review}) rating
            <ul className="flex gap-x-2 mt-2">
              <li>{items.time}</li>
              <li>{items.level}</li>
            </ul>
          </td>
          <td className="px-6 py-4">
            <button className="text-[#6B45D1] block mb-2">Remove</button>
            <button className="text-[#6B45D1] block mb-2">Save for Later</button>
            <button className="text-[#6B45D1] block">Move to Wishlist</button>
          </td>
          <td className="px-6 py-4 text-gray-700 font-medium">{items.price} EGP</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

            </div>

            <div className="lg:w-[23%] w-full mt-12 mb-6">
              <div className="title border-b pb-3">
                <h2 className="text-[17px] font-semibold text-slate-500">
                  Total:
                </h2>
                <p className="text-3xl font-bold text-gray-700 mt-1">998 EGP</p>
                <Link className="bg-[#754ffe] text-sm w-full mt-5 mb-2  px-5 py-2.5 border block text-center border-[#754FFE]  rounded-[4px] text-white font-bold hover:bg-[#6343D8]  duration-300 transition-all;">
                  Proceed to Checkout
                  <i className=" ms-2 fa-solid fa-arrow-right text-[12px]"></i>
                </Link>
                <span className="text-xs text-slate-500">
                  You won't be charged yet
                </span>
              </div>
              <div className="pormotion mt-3">
                <h2 className="text-base mb-3 font-bold text-gray-70">
                  Promotions
                </h2>
                <div className="apply flex gap-x-2">
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px]  block w-full p-1.5 "
                    placeholder="Enter Coupon"
                    required
                  />
                  <button className="bg-[#754ffe] px-4  border text-white font-semibold text-sm rounded-[4px] text-center border-[#754FFE]">
                    Apply
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

         <section className=" mb-16  ">
        <div className="container mx-auto md:px-24 ">
          <div className="title mb-7">
            <h2 className="text-2xl font-semibold ">You might also like</h2>
                </div>
             <Slider {...settings}>
                  {api.map((items) => (
                    <div key={items.id} className="px-2">
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
                  ))}
                </Slider>
   
   
        </div>
      </section>
    </>
  );
}

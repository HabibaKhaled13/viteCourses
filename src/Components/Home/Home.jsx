import React, { useEffect, useState } from 'react'
import Header from "../Header/Header";
import SliderCourses from '../SliderCourses/SliderCourses';
import Testmonial from '../Testmonial/Testmonial';
import Practice from '../Practice/Practice';
import Brands from '../Brands/Brands';
import Category from '../Category/Category';
import InstructorSlider from '../InstructorSlider/InstructorSlider';

export default function Home() {
const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

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
  <Header/>
  <div className='container mx-auto md:px-24  mt-14'>
    <hr />
  </div>
  <Category/>
  <SliderCourses/>
  <Practice/>
 <InstructorSlider/>
   <Testmonial/>
  <Brands/>
</>
 
      )}
    </>
  );
}

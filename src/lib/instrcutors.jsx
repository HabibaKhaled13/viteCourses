import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/mentor-img-1.jpg"
import img2 from "../assets/mentor-img-2.jpg"
import img3 from "../assets/mentor-img-3.jpg"
import img4 from "../assets/mentor-img-4.jpg"
import img5 from "../assets/mentor-img-5.jpg"
import img6 from "../assets/mentor-img-6.jpg"
import img7 from "../assets/mentor-img-7.jpg"
import img8 from "../assets/mentor-img-8.jpg"
let z = [
  {
    id: 1,
    img: img1,
    name: "Andrew Lupien",
    position: "Software Engineer",
    rating: 4.5,
    review: 12,
    price: 500,
    exp: "5",
    company: "@ Microsoft ",
  },

  {
    id: 12,
    img: img2,
    name: "Akshay Sharma",
    position: "Quality Assurance Engr",
    rating: 0,
    review: 0,
    price: 300,
    exp: "5",
    company: "@ Amazon ",
  },

  {
    id: 13,
    img: img3,
    name: "Bernice Perry",
    position: "Senior Business Analyst",
    rating: 5,
    review: 12,
    price: 300,
    exp: "5",
    company: "@ InstaCart",
  },
  {
    id: 14,
    img: img4,
    name: "Patrice Long",
    position: "Senior Data Engineer",
    rating: 5,
    review: 22,
    price: 900,
    exp: "7",
    company: "@ Zoom",
  },
  {
    id: 15,
    img: img5,
    name: "Cathy Diehl",
    position: "Frontend Engineer",
    rating: 4.5,
    review: 3,
    price: 500,
    exp: "3",
    company: "@ Figma",
  },
  {
    id: 16,
    img: img6,
    name: "Cathy Diehl",
    position: "Frontend Engineer",
    rating:5,
    review: 34,
    price: 800,
    exp: "2",
    company: "@ Target ",
  },
   {
    id: 17,
    img: img7,
    name: "Cathy Diehl",
    position: "Software Engineer",
    rating:5,
    review: 122,
    price: 100,
    exp: "5",
    company: "@ Microsoft",
  },
     {
    id: 18,
    img: img8,
    name: "Patrice Long",
    position: "Software Engineer",
    rating:5,
    review: 452,
    price: 1500,
    exp: "5",
    company: "@ Microsoft",
  },
];
export let instrcutors = createSlice({
  name: "instructor",
  initialState: z,
  reducers: {},
});

export let instrcutorsReducer = instrcutors.reducer
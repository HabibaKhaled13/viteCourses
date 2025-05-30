import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/course-javascript.jpg";

let z = [
  {
    id: 10,
    img: img1,
    title: "Creating a Custom Event in Javascript",
    des: "“The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.”",
    name: "Gladys Colbert",
    category: "Web Development",
    time: "1h 26m",
    level: "Beginner",
    rating: 4.5,
    review: 3124,
    price: 399,
  },

  {
    id: 20,
    img: img1,
    title: "Morden JavaScript Beginner Tutorial - Simple",
    des: "“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin nec justo risus. Quisque ornare nisl eu mi fermentum”",
    name: "Lisa D. Roloff",
    category: "Web Development",
    time: "3h 56m",
    level: "Intermediate",

    rating: 4.5,
    review: 948,
    price: 199,
  },
  {
    id: 30,
    img: img1,
    category: "Web Development",
    title: "Applying JavaScript and using the console.",
    des: "“Praesent aliquet diam a ligula imperdiet commodo. Donec eleifend, orci et accumsan interdum, ipsum leo porta velit, a placerat neque ex id est.”",
    name: "Leigh F. Keller",
    time: "2h 16m",
    level: "Advance",
    rating: 4.0,

    review: 278,
    price: 899,
  },
  {
    id: 40,
    img: img1,
    title: "Creating functions, using them, passing data in and",
    des: "“The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.”",
    name: "Anita Parmar",
    category: "Web Development",
    price: 300,
    time: "1h 30m",
    review: 278,
    level: "Beginner",
    rating: 4.5,
  },
  {
    id: 50,
    img: img1,
    title: "OPP Javascript, prototype, class function ",
    des: "“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin nec justo risus. Quisque ornare nisl eu mi fermentum”",
    name: "Gladys Colbert",
    category: "Web Development",
    time: "1h 20m",
    level: "Intermediate",
    rating: 5.0,
    price: 599,
    review: 245,
  },
];
export let courseCategory = createSlice({
  name: "courseCategory",
  initialState: z,
  reducers: {},
});

export let courseReducer = courseCategory.reducer;

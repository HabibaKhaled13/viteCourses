import { createSlice } from "@reduxjs/toolkit";
import aws from "../assets/aws.jpg";
import python from "../assets/python.jpg";
import bootstrap from "../assets/bootstrap.jpg";
import figma from "../assets/figma.jpg";
import nuxt from "../assets/nuxt.jpg";
import mongodb from "../assets/mongodb.jpg";
import supabase from "../assets/supabase.jpg";

let x = [
  {
    id: 1,
    img: figma,
    category: "Design",
    title: "Figma UI UX Design Course for the Beginner",
    name: "Jitu Chauhan",
    rating: 4.5,
    review: 245,
    price: 599,
      time: "3h 49m",
    level: "Advance",
  },
  {
    id: 2,
    img: python,
    category: "Web Development",
    title: "Master the basics of data analysis with Python",
    name: "Sandip Chauhan",
    rating: 4.5,
    review: 3124,
    price: 399,
      time: "2h 26m",
    level: "Beginner",
  },
  {
    id: 3,
    img: nuxt,
    category: "Design",
    title: "About the Nuxt.js Fundamentals course",
    name: "Manasvi Suthar",
    rating: 4.5,
    review: 121,
    price: 899,
      time: "5h 20m",
    level: "Intermediate",
  },
  {
    id: 4,
    img: bootstrap,
    category: "Programming",
    title: "Create Modern Website Using Bootstrap",
    name: "Anita Parmar",
    rating: 4.5,
    review: 948,
    price: 199,
      time: "1h 30m",
    level: "Beginner",
  },
  {
    id: 5,
    img: aws,
    category: "Web Development",
    title: "AWS Fundamentals Specialization",
    name: "Anita Parmar",
    rating: 4.5,
    review: 878,
    price: 199,
      time: "6h 06m",
    level: "Intermediate",
  },
  {
    id: 6,
    img: mongodb,
    category: "Design",
    title: "MongoDB - The Complete Developer's Guide 2024",
    name: "Manasvi Suthar",
    rating: 4.5,
    review: 278,
    price: 899,
    time: "1h 26m",
    level: "Advance",
    
  },

  {
    id: 7,
    img: supabase,
    category: "Programming",
    title: "Supabase From Scratch: Serverless Database",
    name: "Anita Parmar",
    rating: 4.5,
    review: 568,
    price: 199,
      time: "4h 08m",
    level: "Advance",
  },

  {
    id: 8,
    img: nuxt,
    category: "Design",
    title: "About the Nuxt.js Fundamentals course",
    name: "Manasvi Suthar",
    rating: 4.5,
    review: 348,
    price: 899,
      time: "2h 33m",
    level: "Intermediate",
  },
];

let api = createSlice({
  name: "api",
  initialState: x,
  reducers: {},
});

export let apiReducuer = api.reducer;

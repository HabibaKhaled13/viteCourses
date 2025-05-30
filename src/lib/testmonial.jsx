import {  createSlice } from "@reduxjs/toolkit";
import avatar1 from "../assets/avatar-1.jpg";
import avatar2 from "../assets/avatar-2.jpg";
import avatar3 from "../assets/avatar-3.jpg";
import avatar4 from "../assets/avatar-4.jpg";
import avatar5 from "../assets/avatar-5.jpg";
import avatar6 from "../assets/avatar-6.jpg";


let y = [
  {
    id: 10,
    img: avatar1,
    title: "Software Engineer at Palantir",
    des: "“The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.”",
    name: "Gladys Colbert",
    rating: 4.0,
  },

  {
    id: 20,
    img: avatar2,
    title: "Web Developer at Codescandy",
    des: "“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin nec justo risus. Quisque ornare nisl eu mi fermentum”",
    name: "Lisa D. Roloff",
    rating: 3,
  },
  {
    id: 30,
    img: avatar3,
    title: "Marketing Manager at EaseTemplate",
    des: "“Praesent aliquet diam a ligula imperdiet commodo. Donec eleifend, orci et accumsan interdum, ipsum leo porta velit, a placerat neque ex id est.”",
    name: "Leigh F. Keller",
    rating: 4.0,
  },
  {
    id: 40,
    img: avatar4,
    title: "Web Developer at Codescandy",
    des: "“The generated lorem Ipsum is therefore always free from repetition, injected humour, or words etc generate lorem Ipsum which looks racteristic reasonable.”",
    name: "Anita Parmar",
    rating: 4.5,
  },
  {
    id: 50,
    img: avatar5,
    title: "Web Developer at Codescandy",
    des: "“Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin nec justo risus. Quisque ornare nisl eu mi fermentum”",
    name: "Gladys Colbert",
    rating: 5.0,
  },
  {
    id: 60,
    img: avatar6,
    title: "Marketing Manager at EaseTemplate",
    des: "“Praesent aliquet diam a ligula imperdiet commodo. Donec eleifend, orci et accumsan interdum, ipsum leo porta velit, a placerat neque ex id est.”",
    name: "Leigh F. Keller",
    rating: 4.5,
  },
];

export let test = createSlice({
  name: "test",
  initialState: y,
  reducers: {},
});

export let testReducer = test.reducer
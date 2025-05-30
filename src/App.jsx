import React from "react";
import "./App.css";
import "flowbite";
import Layout from "../src/Components/Layout/Layout";
import Home from "../src/Components/Home/Home";
import About from "../src/Components/About/About";
import Categories from "../src/Components/Categories/Categories";
import Courses from "./Components/Courses/Courses";
import Pricing from "./Components/Pricing/Pricing";
import VideoData from "./Components/VideoData/VideoData";
import Instructor from "./Components/Instructor/Instructor";
import { store } from "./lib/store";
import { Provider } from "react-redux";
import CourseCategory from "./Components/CourseCategory/CourseCategory";
import Instructors from "./Components/Instructors/Instructors";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Register from "./Components/Register/Register";
import UserLoginProvider from "./UserLogin/UserLogin";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import{ Toaster } from 'react-hot-toast';
import { createHashRouter, RouterProvider } from "react-router-dom";

function App() {
  let router = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "categories", element: <Categories /> },
        { path: "courses", element: <Courses /> },
        { path: "pricing", element: <Pricing /> },
        { path: "video", element: <ProtectedRoute><VideoData /></ProtectedRoute> },
        { path: "instructor", element: <ProtectedRoute><Instructor /></ProtectedRoute> },
        { path: "course-category", element: <CourseCategory /> },
        { path: "instructors", element: <ProtectedRoute><Instructors /></ProtectedRoute> },
        { path: "login", element: <Login /> },
        { path: "cart", element: <ProtectedRoute><ShoppingCart /></ProtectedRoute> },
        { path: "sign-up", element: <Register /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster />
      <UserLoginProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </UserLoginProvider>
    </>
  );
}

export default App;

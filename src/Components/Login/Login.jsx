import logo from "../../assets/login.webp";
import React, {useEffect, useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import img1 from "../../assets/facebook.png";
import img2 from "../../assets/apple-logo.png";
import img3 from "../../assets/google.png";
import {DataUser} from "../../UserLogin/UserLogin";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [isLoadingPage, setIsLoadingPage] = useState(true)
    let {setuserLogin, userLogin} = useContext(DataUser)
  let navigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState("");
  function handleLogin() {
    const storedData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedData &&
      storedData.email === formik.values.email &&
      storedData.password === formik.values.password
    ) {
      navigate("/");
      setError("");
      setisLoading(false);
      setuserLogin(localStorage.getxItem("userData"))
    } else {
      setError("Email or password is incorrect");
    }
  }

  let validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("not valid email")
      .min(3)
      .required("email is required"),
    password: yup.string().min(6).required("password is required"),
  });
  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: () => handleLogin(),
  });


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadingPage(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
  <>
  {isLoadingPage? 
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
    <section className="my-2">
      <div className="container my-2">
        <div className="flex flex-col-reverse md:flex-row  items-center ">
          <div className="md:w-1/2">
            <img src={logo} alt="Sign Up image" className="mx-auto" />
          </div>

          <div className="md:w-1/2 md:py-8">
            <form
              className="max-w-md mx-auto px-7 py-10  mt-4 rounded-md md:mb-0 mb-8"
              onSubmit={formik.handleSubmit}
            >
              <div className="title mb-8">
                <h2 className="text-3xl bold  font-bold text-center">
                  Log in to continue your learning journey
                </h2>
              </div>

              <div className="relative z-0 w-full mb-5  group">
                <input
                  value={formik.values.email}
                  type="email"
                  name="email"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#6C45D1] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#6C45D1] peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter your email
                </label>
                {formik.errors.email && formik.touched.email ? (
                  <div
                    className="p-4  mb-4 text-sm text-red-800 rounded-sm bg-red-50 "
                    role="alert"
                  >
                    <span className="font-medium">{formik.errors.email}</span>
                  </div>
                ) : null}
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  value={formik.values.password}
                  type="password"
                  name="password"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-[#6C45D1] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#6C45D1] peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Enter your password
                </label>

                {formik.errors.password && formik.touched.password ? (
                  <div
                    className="p-4  mb-4 text-sm text-red-800 rounded-sm bg-red-50 "
                    role="alert"
                  >
                    <span className="font-medium">
                      {formik.errors.password}
                    </span>
                  </div>
                ) : null}
              </div>

              <div className="flex items-center justify-between font-semibold mt-8 mb-4 text-sm">
                <div className="flex items-center">
                  <input
                    checked
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-[14px] h-[14px] accent-[#6C45D1]   bg-gray-100 border-gray-300 rounded-xl"
                  />
                  <label
                    htmlFor="checked-checkbox"
                    className="ms-2 font-medium text-slate-500"
                  >
                    Remember me
                  </label>
                </div>

                <div className="">
                  <span
                    className=" cursor-pointer block text-center text-slate-500 "
                    to={"/forget-password"}
                  >
                    Forgot password?
                    <span className="text-[#6C45D1] "> Reset It </span>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="text-white mt-3 bg-[#6C45D1] hover:bg-[#6440c2] focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-[#6C45D1] dark:hover:bg-[#6C45D1] dark:focus:ring-emerald-800"
              >
                {isLoading ? (
                  <i className="fa-solid fa-circle-notch fa-spin text-white text-xl"></i>
                ) : (
                  "Submit"
                )}
              </button>

              {error && (
                <div
                  className="p-4 mb-4 text-center mt-4 font-semibold text-sm text-red-800 rounded-sm bg-red-50"
                  role="alert"
                >
                  {error}
                </div>
              )}

              <div className="other-sign">
                <h3 className="text-center text-slate-600 text-sm font-semibold my-7">
                  Other sign up options
                </h3>
                <ul className="icons flex justify-center gap-x-4 cours3">
                  <li className="md:w-[12%] w-[15%]">
                    <img
                      src={img3}
                      alt=""
                      className="w-full  p-2.5  border border-[#6C45D1] rounded-md"
                    />
                  </li>

                  <li className="md:w-[12%] w-[15%]">
                    <img
                      src={img1}
                      alt=""
                      className="w-full  p-2.5  border border-[#6C45D1] rounded-md"
                    />
                  </li>
                  <li className="md:w-[12%] w-[15%]">
                    <img
                      src={img2}
                      alt=""
                      className="w-full  p-2.5 border border-[#6C45D1] rounded-md"
                    />
                  </li>
                </ul>
              </div>
              <p className="text-slate-600 text-xs text-center font-meduim my-7">
                By signing up, you agree to{" "}
                <span className="text-[#6C45D1] cursor-pointer underline">our Terms </span>of
                Use and{" "}
                <span className="text-[#6C45D1]  cursor-pointer underline">
                  Privacy Policy.
                </span>
              </p>

              <Link
                className=" block text-center mt-4 p-4 rounded-sm bg-slate-100  "
                to={"/sign-up"}
              >
                Don't have an account?
                <span className="text-[#6C45D1] font-semibold underline">
                  {" "}
                  Sign Up{" "}
                </span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>)}
</>)}

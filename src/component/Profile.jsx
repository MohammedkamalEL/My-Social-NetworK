import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import img from "../../public/OIP.webp";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Profile() {
  const userInfo = JSON.parse(localStorage.getItem("user-info")) || {};
  
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Navbar />
      <section className="flex items-center justify-center min-h-screen p-4    bg-linear-to-r from-blue-500 to-purple-500">
        <div className="max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
          {/* <!-- Cover Image --> */}
          <div className="h-32  bg-linear-to-r from-purple-500 to-indigo-600 relative">
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <img
                className="h-24 w-24 rounded-full border-4 border-white object-cover"
                src={`${Object.keys(userInfo.profile_image).length === 0 ? img : userInfo.profile_image}`}
                alt="Profile picture"
              />
            </div>
          </div>

          {/* <!-- Profile Info --> */}
          <div className="pt-16 pb-8 px-6 text-center">
            <h3 className="text-xl font-bold text-gray-800">
              {userInfo?.username || "your Nmae"}
            </h3>
            <p className="text-indigo-600 font-medium">
              {userInfo?.email || "youremail@gmail.com"}
            </p>
            <p className="text-gray-500 mt-2">
              Creating user-centered designs that solve real problems.
              Passionate about accessibility and inclusive design.
            </p>

            {/* <!-- Stats --> */}
            <div className="flex justify-center space-x-6 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                  {userInfo?.posts_count || "0"}
                </p>
                <p className="text-sm text-gray-500">posts Count</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">
                  {userInfo?.comments_count || "0"}
                </p>
                <p className="text-sm text-gray-500">comments Count</p>
              </div>
            </div>

            <div className="text-center my-4">
              <p className="text-2xl font-bold text-gray-800">
                {userInfo?.username || "Name"}
              </p>
              <p className="text-sm text-gray-500">User Name</p>
            </div>
            {/* <!-- Contact Buttons --> */}
            <div className="mt-8 flex justify-center space-x-3">
              <Link
                to="/Posts"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
              >
                Go To Home Page
              </Link>
              {/* <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
              Message
            </button> */}
            </div>

            {/* <!-- Social Links --> */}
            <div className="mt-8 flex justify-center space-x-5">
              <a
                href="#"
                className=" text-blue-600 transition-colors duration-200"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="#"
                className=" text-blue-500 transition-colors duration-200"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="#"
                className=" text-green-400 transition-colors duration-200"
              >
                <FaSquareWhatsapp className="text-2xl" />
              </a>
              <a
                href="#"
                className=" text-black transition-colors duration-200"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>

          {/* <!-- Skills --> */}
          {/* <div className="px-6 pb-8">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
              UI/UX
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
              Figma
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
              Prototyping
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
              Wireframing
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
              User Research
            </span>
          </div>
        </div> */}
          {/* <!-- +++++++Skills+++++++ --> */}
        </div>
      </section>
    </>
  );
}

import { FaHashtag } from "react-icons/fa";
import { BiHomeHeart } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { MdDeveloperBoard } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { FaAsterisk } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img from "../../public/OIP.webp";
import { useState } from "react";

export default function Navbar() {
  const naveigate = useNavigate();

  const [isError, setisError] = useState(false);
  const user = JSON.parse(localStorage.getItem("user-info"));
  // console.log(user?.profile_image );
  // console.log(Object.keys(user.profile_image).length === 0);
  function handelImg() {
    setisError(true);
    console.log("error");
  }

  return (
    <section className=" mb-14">
      <nav className="bg-white shadow-lg fixed top-0 w-screen  z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex  justify-between h-16">
            {/* <!-- Left Section - Logo/Brand --> */}
            <div className="flex items-center">
              <Link to="/Posts" className="flex items-center group">
                <div className="bg-blue-600 group-hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300">
                  <i className="fas fa-cube text-white text-xl"></i>
                </div>
                <span className="ml-3 text-xl font-bold text-gray-800 group-hover:text-blue-600  transition-colors duration-300">
                  Moh Kamal
                </span>
              </Link>
            </div>

            {/* <!-- Center Section - Main Navigation (Desktop) --> */}
            <div className="hidden md:flex   items-center space-x-1">
              <div className="dropdown relative">
                <Link to="/Posts">
                  <button className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200">
                    <BiHomeHeart className="mr-2" />
                    Home
                  </button>
                </Link>
              </div>
              {/* dropDown Prodect عشان تشوفو العمل uncomment */}
              {/* <div className="dropdown relative">
                <button className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <i className="fas fa-briefcase mr-2"></i>
                  Products
                  <i className="fas fa-chevron-down ml-1 text-xs transition-transform duration-200"></i>
                </button>
                <div className="dropdown-menu absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-50 opacity-0 invisible transition-all duration-300 transform -translate-y-2 border border-gray-100">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Solutions
                  </div>
                  <a
                    href="#"
                    className="  px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <i className="fas fa-laptop text-blue-500 mr-3 w-5 text-center"></i>
                    Software Suite
                  </a>
                  <a
                    href="#"
                    className="  px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <i className="fas fa-server text-blue-500 mr-3 w-5 text-center"></i>
                    Cloud Services
                  </a>
                  <a
                    href="#"
                    className="  px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <i className="fas fa-mobile-screen text-blue-500 mr-3 w-5 text-center"></i>
                    Mobile Apps
                  </a>
                  <div className="border-t border-gray-100 my-1"></div>
                  <a
                    href="#"
                    className="  px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <i className="fas fa-star text-yellow-400 mr-3 w-5 text-center"></i>
                    Featured Products
                  </a>
                </div>
              </div> */}

              <Link
                to="/Profile"
                className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <CgProfile className="mr-2" />
                Profile
              </Link>

              <div className="dropdown relative">
                <button className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  <FaAsterisk className="mr-2" />
                  Resources
                  <i className="fas fa-chevron-down ml-1 text-xs transition-transform duration-200"></i>
                </button>
                <div className="dropdown-menu absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-1 z-50 opacity-0 invisible transition-all duration-300 transform -translate-y-2 border border-gray-100">
                  {/* <div className="grid grid-cols-2 gap-1 p-2">
                    <a
                      href="#"
                      className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <i className="fas fa-book text-blue-600"></i>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Docs</div>
                        <div className="text-xs text-gray-500">
                          Technical documentation
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="bg-purple-100 p-2 rounded-lg mr-3">
                        <i className="fas fa-video text-purple-600"></i>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">
                          Tutorials
                        </div>
                        <div className="text-xs text-gray-500">
                          Step-by-step guides
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <i className="fas fa-blog text-green-600"></i>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Blog</div>
                        <div className="text-xs text-gray-500">
                          Latest updates
                        </div>
                      </div>
                    </a>
                    <a
                      href="#"
                      className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    >
                      <div className="bg-red-100 p-2 rounded-lg mr-3">
                        <i className="fas fa-headset text-red-600"></i>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">Support</div>
                        <div className="text-xs text-gray-500">Help center</div>
                      </div>
                    </a>
                  </div> */}
                  <h2 className=" grid place-items-center py-6 hover:cursor-pointer hover:bg-gray-300 transition-all duration-200 ">
                    Comming sone
                  </h2>
                </div>
              </div>

              <Link
                to="/Devoloper"
                className="nav-link text-gray-700 hover:text-blue-600 px-4 py-2 flex items-center rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                <RiContactsLine className="mr-2" />
                Developer
                <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  New
                </span>
              </Link>
            </div>

            {/* <!-- Right Section - Actions --> */}
            <div className="flex items-center  space-x-3">
              {/* <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                <i className="fas fa-search"></i>
                <span className="sr-only">Search</span>
              </button>

              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                <i className="fas fa-bell"></i>
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white"></span>
              </button>

              <div className="hidden md:  h-6 w-px bg-gray-200"></div> */}

              <div className="dropdown relative">
                <button className="flex items-center space-x-2 focus:outline-none  group">
                  <div className="relative">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden avatar-ring">
                      <img
                        src={
                          Object.keys(user.profile_image).length === 0 ||
                          isError
                            ? img
                            : user.profile_image
                        }
                        alt="User"
                        className="h-full w-full object-cover"
                        onError={handelImg}
                      />
                    </div>
                    {/* <span className="absolute bottom-0 right-0   h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white"></span> */}
                    <FaAngleDown className=" absolute -bottom-2 right-0   h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
                  </div>
                  <div className="hidden lg:flex flex-col items-start">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                      {user?.name ?? "Your Name"}
                    </span>
                    <span className="text-xs text-gray-500">User</span>
                  </div>
                  <i className="fas fa-chevron-down text-xs text-gray-500 hidden lg:inline transition-transform duration-200 group-hover:text-blue-600"></i>
                </button>
                <div className="dropdown-menu absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-1 z-50 opacity-0 invisible transition-all duration-300 transform -translate-y-2 border border-gray-100">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden mr-3">
                        <img
                          src={
                            Object.keys(user.profile_image).length === 0 ||
                            isError
                              ? img
                              : user.profile_image
                          }
                          alt="User"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {user?.name ?? "Your Name"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {/* john@example.com */}
                          {user?.email ?? "Your Name"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/Profile"
                    className="  px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <CgProfile className="mr-2" />
                    My Profile
                  </Link>
                  <Link
                    to={`/UserProfile/${user?.id}`}
                    className="  px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <AiOutlineSetting className="mr-2" />
                    Account Settings
                  </Link>
                  <Link
                    to='/Posts'
                    className="  px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <HiHome className="mr-2" />
                    Home
                  </Link>
                   <Link
                    to='/Devoloper'
                    className="  px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <MdDeveloperBoard className="mr-2" />
                    Developer
                  </Link>
                  <span className="  px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200">
                    <FaHashtag className="mr-2" />
                    Tags
                    <span className="ml-auto bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      0
                    </span>
                  </span>
                  <div className="border-t border-gray-100 my-1"></div>
                  <div
                    onClick={() => {
                      localStorage.removeItem("user-info");
                      localStorage.removeItem("token");
                      naveigate("/Register", { replace: true });
                    }}
                    className="  px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <PiSignOutBold className="mr-2" />
                    Sign out
                  </div>
                </div>
              </div>

              <button
                id="mobile-menu-button"
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <i className="fas fa-bars text-xl"></i>
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div
          id="mobile-menu"
          className="mobile-menu md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            <a
              href="#"
              className="  px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
            >
              <i className="fas fa-home text-blue-500 mr-3 w-5 text-center"></i>
              Home
            </a>
            <div className="group">
              <button className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                <div className="flex items-center">
                  <i className="fas fa-briefcase text-blue-500 mr-3 w-5 text-center"></i>
                  Products
                </div>
                <i className="fas fa-chevron-down text-xs transition-transform duration-200 group-focus:rotate-180"></i>
              </button>
              <div className="pl-4 mt-1 space-y-1 hidden group-focus: ">
                <a
                  href="#"
                  className="  px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-laptop text-blue-400 mr-3 w-5 text-center"></i>
                  Software
                </a>
                <a
                  href="#"
                  className="  px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-server text-blue-400 mr-3 w-5 text-center"></i>
                  Services
                </a>
                <a
                  href="#"
                  className="  px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-mobile-screen text-blue-400 mr-3 w-5 text-center"></i>
                  Apps
                </a>
              </div>
            </div>
            <a
              href="#"
              className="  px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
            >
              <i className="fas fa-building text-blue-500 mr-3 w-5 text-center"></i>
              Company
            </a>
            <div className="group">
              <button className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                <div className="flex items-center">
                  <i className="fas fa-file-alt text-blue-500 mr-3 w-5 text-center"></i>
                  Resources
                </div>
                <i className="fas fa-chevron-down text-xs transition-transform duration-200 group-focus:rotate-180"></i>
              </button>
              <div className="pl-4 mt-1 space-y-1 hidden group-focus: ">
                <a
                  href="#"
                  className="  px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-book text-blue-400 mr-3 w-5 text-center"></i>
                  Documentation
                </a>
                <a
                  href="#"
                  className="  px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-video text-blue-400 mr-3 w-5 text-center"></i>
                  Tutorials
                </a>
                <a
                  href="#"
                  className="  px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-blog text-blue-400 mr-3 w-5 text-center"></i>
                  Blog
                </a>
              </div>
            </div>
            <a
              href="#"
              className="  px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
            >
              <i className="fas fa-envelope text-blue-500 mr-3 w-5 text-center"></i>
              Contact
              <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                New
              </span>
            </a>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <a
                href="#"
                className="  px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
              >
                <i className="fas fa-user-circle text-blue-500 mr-3 w-5 text-center"></i>
                Profile
              </a>
              <a
                href="#"
                className="  px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
              >
                <i className="fas fa-cog text-blue-500 mr-3 w-5 text-center"></i>
                Settings
              </a>
              <a
                href="#"
                className="  px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
              >
                <i className="fas fa-sign-out-alt text-blue-500 mr-3 w-5 text-center"></i>
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

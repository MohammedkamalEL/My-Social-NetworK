import Navbar from "./Navbar";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { userInfo } from "../api/api";
import { userAllPosts } from "../api/userPosts";
// import img from "../assets/name.png";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Post from "./Post";
import { useCallback } from "react";
import { Helmet } from "react-helmet";
import img from "../../public/OIP.webp";


export default function UserProfile() {
  const { userId } = useParams();
  const [userInf, setuserInf] = useState("");
  const [allPostsUsers, setuserAllPosts] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState("");

  const handelUserInfo = useCallback(async () => {
    setisLoading(true);
    const response = await userInfo(userId);
    const userPosts = await userAllPosts(userId);
    // console.log(response);
    // 8041
    try {
      setisLoading(true);
      if (response.success && userPosts.success) {
        setuserInf(response.data);
        setuserAllPosts(userPosts.data);
      } else {
        throw new Error(response.message || "Plase Reload Page");
      }
    } catch (error) {
      seterror(error.message || "Plase Reload Page");
    } finally {
      setisLoading(false);
    }
  }, [userId]);

  // console.log(userInf.profile_image);
  

  // const handelUserInfo = async () => {
  //   setisLoading(true);
  //   const response = await userInfo(userId);
  //   const userPosts = await userAllPosts(userId);
  //   // console.log(response);
  //   // 8041
  //   try {
  //     setisLoading(true);
  //     if (response.success && userPosts.success) {
  //       setuserInf(response.data);
  //       setuserAllPosts(userPosts.data);
  //     } else {
  //       throw new Error(response.message || "Plase Reload Page");
  //     }
  //   } catch (error) {
  //     seterror(error.message || "Plase Reload Page");
  //   } finally {
  //     setisLoading(false);
  //   }
  // };
  // console.log(allPostsUsers);

  useEffect(() => {
    handelUserInfo();
  }, [handelUserInfo]);
  console.log(error);
  
  

  function ShowAllPost() {
    // console.log(allPostsUsers);
    return allPostsUsers.map((items) => <Post key={items.id} items={items} />);
  }

  return (
    <section>
      <Helmet>
        <title>User Profile</title>
      </Helmet>
      <Navbar />
      {isLoading ? (
        <div className=" w-screen grid place-items-center h-screen bg-linear-to-r from-purple-500 to-indigo-600 relative ">
          {/* <Loeader/> */}
          {/* <div className="w-20 h-20  border-2 border-b-white rounded-full m-5 loading-anmation" /> */}
          <div className="loader ">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      ) : (
        <article className="  bg-linear-to-r flex flex-col items-center from-blue-500 to-purple-500">
          <section className=" p-4 ">
            <div className="max-w-md w-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              {/* <!-- Cover Image --> */}
              <div className="h-32   bg-linear-to-r from-purple-500 to-indigo-600 relative">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <img
                    className="h-24 w-24 rounded-full border-4 border-white object-cover"
                    // src={`${userInf.profile_image}`}
                    src={userInf?.profile_image || img}
                    alt="Profile picture"
                  />
                </div>
              </div>

              {/* <!-- Profile Info --> */}
              <div className="pt-16 pb-8 px-6 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {userInf.username || "your Nmae"}
                </h3>
                <p className="text-indigo-600 font-medium">
                  {userInf.email || "youremail@gmail.com"}
                </p>
                <p className="text-gray-500 mt-2">
                  this is your acount and you will see your post below
                </p>

                {/* <!-- Stats --> */}
                <div className="flex justify-center space-x-6 mt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">
                      {userInf.posts_count || "0"}
                    </p>
                    <p className="text-sm text-gray-500">posts Count</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-800">
                      {userInf.comments_count || "0"}
                    </p>
                    <p className="text-sm text-gray-500">comments Count</p>
                  </div>
                </div>

                <div className="text-center my-4">
                  <p className="text-2xl font-bold text-gray-800">
                    {userInf.username || ""}
                  </p>
                  <p className="text-sm text-gray-500">User Name</p>
                </div>
                {/* <!-- Contact Buttons --> */}
                <div className="mt-8 flex justify-center space-x-3">
                  <Link to="/Posts">
                    <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                      Go To Home Page
                    </button>
                  </Link>
                  {/* <button className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out">
                  Message
                </button> */}
                </div>

                {/* <!-- Social Links --> */}
                <div className="mt-8 flex justify-center space-x-5">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                  >
                    <FaLinkedin className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200"
                  >
                    <FaSquareWhatsapp className="text-2xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-black transition-colors duration-200"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className=" text-white w-[95vw] md:w-[80vw]  lg:w-[70vw] flex flex-col items-center">
            <ShowAllPost />
          </section>
        </article>
      )}
    </section>
  );
}

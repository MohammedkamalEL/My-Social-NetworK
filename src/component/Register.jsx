import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Register() {
  const naveigate = useNavigate();
  const [isLoading, setisLoading] = useState(false);
  const [message, setmessage] = useState("");
  const [iserror, setiserror] = useState(false);

  function formAction(formData) {
    setmessage("");
    setisLoading(true);
    setiserror(false);
    // const data = {
    //   username: formData.get("username"),
    //   password: formData.get("password"),
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   image: formData.get("image"),
    // };
    // console.log(data);
    // console.log(data.image);

    axios
      .post("https://tarmeezacademy.com/api/v1/register", formData)
      .then((response) => {
        console.log("+++++ Response ", response.data);
        setmessage("Register Success");
        setiserror(false);
        localStorage.removeItem("token");
        localStorage.removeItem("user-info");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user-info", JSON.stringify(response.data.user));
        naveigate("/Posts", { replace: true });
      })
      .catch((error) => {
        console.log("++++ Error", error);
        setiserror(true);
        setmessage(error.response.data.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }

  return (
    <main>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 relative">
          <div className="flex justify-center">
            {/* <img
              alt="logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s"
              className="h-12  mb-4"
            /> */}
          </div>
          <h2 className="text-center text-gray-700 text-lg font-medium mb-2">
            Best Comunication website
          </h2>
          <div className="flex justify-center items-center relative mb-6">
            <span
              className="absolute inset-x-0 top-0 h-1 bg-blue-500"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            ></span>
            <h3 className="text-center bg-white px-4 text-gray-500 font-medium mt-2">
              Register
            </h3>
          </div>

          <form action={formAction}>
            <div className="mb-4">
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="email"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="username"
                name="username"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="imgprofile"
              >
                Profile Image
              </label>
              <input
                type="file"
                id="imgprofile"
                className="w-full  rounded px-0 py-2 focus:outline-none focus:ring focus:ring-blue-200"
                name="image"
                accept=".png, .jpeg, .jpg"
              />
            </div>

            <div className="mb-4 relative">
              <label
                className="block text-sm text-gray-600 mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Type your password"
                name="password"
              />

              <div className="mb-4">
                <label
                  className="block text-sm text-gray-600 mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="name"
                  name="name"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm text-gray-600 mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                  placeholder="email"
                  name="email"
                />
              </div>

              <button
                type="button"
                className="absolute top-8 right-3 flex items-center text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.53A10.967 10.967 0 0112 6c2.64 0 5.064.947 6.983 2.53M21 12.04a10.967 10.967 0 01-2.535 6.984M8.475 19.527A10.967 10.967 0 0112 18a10.967 10.967 0 013.525-.527M9 12l2.5 2.5L15 9"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between mb-4">
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password
              </a>
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className={`w-full ${
                isLoading ? "bg-gray-500" : "bg-linear-to-r"
              }   from-blue-500 to-blue-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring focus:ring-blue-300`}
            >
              {isLoading ? (
                <span className="">Loading...</span>
              ) : (
                "start Comunication"
              )}
            </button>
          </form>
          {
            <h1
              className={`text-center my-2 font-bold ${
                iserror ? "text-red-700" : "text-green-700"
              }`}
            >
              {message || ""}
            </h1>
          }
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 border-gray-300 rounded text-blue-500 focus:ring-blue-200"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me for 30 days
            </label>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            You have account?
            <Link to="/Login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

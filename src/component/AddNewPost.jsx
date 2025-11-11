import { Link } from "react-router-dom";
import { handelAddNewPosts } from "../api/handelAddNewPosts";
import { useState } from "react";

export default function AddNewPost({ open, setOpen }) {
  const [isLoading, setisLoading] = useState(false);
  const [postId, setpostId] = useState(null);
  const [error, seterror] = useState("");

  const addingNewPosts = async (formData) => {
    setisLoading(true);
    try {
      const status = await handelAddNewPosts(formData);
      console.log("statues", status);
      setpostId(status.data.data.id);
      // window.location.reload()
    } catch (erroe) {
      console.log(erroe);
      seterror(erroe.message);
    } finally {
      setTimeout(() => {
        setisLoading(false);
      }, 1000);
    }
  };

  return (
    <section
      className={`${
        open ? "opacity-100" : "opacity-0 "
      } font-poppins  items-center  flex transition-opacity duration-500 justify-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
    >
      <div className="w-screen h-screen absolute bg-gray-700 z-0 opacity-90" />
      <div className="grid gap-8 w-screen  md:w-[70vw] lg:w-[50vw]  z-30">
        <div
          id="back-div"
          className=" bg-linear-to-r from-blue-500 to-purple-500 rounded-[26px] m-4 "
        >
          <div className="border-20px p-4 border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-1 m-1">
            <div className="pt-6 pb-6 font-bold items-center flex justify-between text-2xl lg:text-5xl text-white text-center cursor-default">
              <h1>Creat New Post</h1>
              <h1
                className=" text-gray-500 text-4xl rotate-45 hover:text-white hover:text-5xl duration-500 transition-all"
                onClick={() => {
                  setOpen(false);
                }}
              >
                +
              </h1>
            </div>
            {/* method="post" */}
            <form className="space-y-4" action={addingNewPosts}>
              <div>
                <input
                  id="title"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  name="title"
                  placeholder="title"
                />
              </div>
              <div>
                <input
                  id="body"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  name="body"
                  placeholder="body"
                  required
                />
              </div>
              <div>
                <input
                  type="file"
                  id="imgprofile"
                  className="w-full border rounded px-0 py-2 text-white focus:outline-none focus:ring focus:ring-blue-200 cursor-pointer"
                  name="image"
                  accept=".png, .jpeg, .jpg"
                />
              </div>

              <button
                disabled={isLoading}
                type="submit"
                className={`w-full ${
                  isLoading ? "bg-gray-500" : "bg-linear-to-r"
                }   from-purple-500 cursor-pointer to-blue-500 text-white py-2 rounded-lg hover:from-blue-500 hover:to-purple-500 hover:scale-105 transition-all duration-500 focus:outline-none focus:ring focus:ring-blue-300`}
              >
                {isLoading ? <span className="">Cerate...</span> : "Post"}
              </button>
            </form>
            {/* <h1 className=" w-4 h-4  border-2 border-b-white rounded-full m-5 loading-anmation"></h1> */}
            {error ? (
              <div className=" text-center font-bold text-sm text-red-500 p-4">
                Error : {error}
              </div>
            ) : isLoading ? (
              <h1>Loading....</h1>
            ) : (
              <>
                <Link to={`/PostDetails/${postId}`}>
                  <h1
                    className={`${
                      postId === null ? "hidden" : " block text-white"
                    } my-4 bg-green-600 hover:bg-green-800 hover:p-4 transition-all duration-200  p-3 text-center rounded-lg`}
                  >
                    View Post You add 😊
                  </h1>
                </Link>{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

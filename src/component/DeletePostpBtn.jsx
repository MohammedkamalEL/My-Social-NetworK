import { useState } from "react";
import { handelDeletPost } from "../api/handelDeletPost";
export default function DeletePostpBtn({ items }) {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const [isLoading, setisLoading] = useState(false);

  async function handelDeletPosts(id) {
    // console.log(id);
    try {
      setisLoading(true);
      const response = await handelDeletPost(id);
      console.log(response);
      if (response.success) {
        console.log("done");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        console.log(false);
        throw new Error("Error Loding");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  }

  return (
    <>
      {items?.author?.id === user?.id ? (
        <button
          disabled={isLoading}
          onClick={() => handelDeletPosts(items.id)}
          aria-label="More options"
          // className="text-gray-500 cursor-pointer  dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-1.5 -mt-1 -mr-1.5"
          className="cursor-pointer rounded-lg p-1.5 -mt-1 -mr-1.5 "
        >
          {isLoading ? (
            <h1 className=" w-4 h-4  border-2  border-b-white rounded-full  loading-anmation"></h1>
          ) : (
            <h1 className="bg-red-500 px-4 py-1 text-white">Delete</h1>
          )}
        </button>
      ) : (
        ""
      )}
    </>
  );
}

import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AllComment from "./AllComment";
import img from "../../public/OIP.webp";
import Navbar from "./Navbar";
import { addNewComment } from "../api/AddNewComments";
import { postDetails } from "../api/PostDetails";
import Loeader from "./Loeader";

export default function PostDetails() {
  const { postId } = useParams();

  const [allComments, setallComments] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [allData, setallData] = useState({});
  const [commentValue, setcommentValue] = useState("");
  const [isAddNewCommentLoading, setisAddNewCommentLoading] = useState(false);
  const [error, seterror] = useState("");
  const [isImgError, setisImgError] = useState(false);

  // const [postid, setpostid] = useState(postId)
  const handelpostDetails = useCallback(async () => {
    setisLoading(true);
    try {
      const postResponse = await postDetails(postId);
      if (postResponse.success) {
        // console.log(postResponse);
        setallComments(postResponse.data.comments);
        setallData(postResponse.data);
      } else {
        throw new Error(postResponse.message || "Plase Reload Page");
      }
    } catch (error) {
      console.log(error);
      seterror(error?.message ?? '"Plase Reload Page"');
    } finally {
      setTimeout(() => {
        setisLoading(false);
      }, 2000);
    }
  }, [postId]);

  useEffect(() => {
    handelpostDetails();
  }, [handelpostDetails]);

  const addNewCommentCliked = async () => {
    setisAddNewCommentLoading(true);
    const co = await addNewComment(commentValue, postId);
    try {
      if (co?.data?.data === undefined) {
        return;
      } else {
        setallComments((prevComment) => [...prevComment, co.data.data]);
        setcommentValue("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisAddNewCommentLoading(false);
    }
  };

  function Show() {
    return <AllComment comments={allComments} />;
  }
  // console.log(allData);
  // console.log(allComments);

  // console.log(allData?.author?.profile_image);

  function handelErrorImg() {
    console.log("error");
    setisImgError(true);
  }
  return (
    <>
      <Navbar />
      {error ? (
        <h1 className="">Error : {error}</h1>
      ) : isLoading ? (
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen  p-4  ">
          <div className="p-4 bg-white dark:bg-gray-800 my-6 rounded-lg shadow-xl overflow-hidden w-full md:max-w-[70%] mx-auto ">
            <Loeader />
          </div>
        </div>
      ) : (
        <section className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen  p-4  ">
          <div className="p-4 bg-white dark:bg-gray-800 my-6 rounded-lg shadow-xl overflow-hidden w-full md:max-w-[70%] mx-auto ">
            {/* <!-- Post Header --> */}

            <div className="flex justify-between items-start mb-3">
              <div className="flex  items-center space-x-3">
                <img
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                  src={isImgError ? img : allData.author?.profile_image}
                  // src={`${Object.keys(allData.author.profile_image).length === 0 ? img : allData.author.profile_image}`}
                  alt="Avatar"
                  onError={handelErrorImg}
                />
                <div className="text-sm min-w-0">
                  <a
                    href="#"
                    className="font-semibold text-primary hover:underline hover:text-blue-700 dark:hover:text-blue-400 "
                  >
                    {allData?.author?.username ?? "Name"}
                  </a>
                  <p className="text-xs text-secondary ">
                    {allData?.author?.email ?? "Email"}
                  </p>
                  <p className="text-xs text-secondary flex items-center ">
                    {allData?.author?.updated_at.split("T")[0] ?? "time"}•
                    <svg
                      className="ml-2 w-3 h-3 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm8-6.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zM6 8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8zm5.472.088a1.144 1.144 0 0 0-1.944-.972 1.144 1.144 0 1 0 1.944.972zM4.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </p>
                </div>
              </div>
              <button
                aria-label="More options"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1.5 -mt-1 -mr-1.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </button>
            </div>
            {/* <!-- Post Content --> */}
            <div className="text-sm text-primary mb-3 wrap-break-word">
              <p>{allData?.body ?? "body Post"}</p>
            </div>

            {/* Media Optional - Example Image */}
            <div className="mb-3 max-h-[500px] p-2 -mx-4 sm:mx-0 sm:rounded-lg overflow-hidden">
              {!isImgError && allData.image &&(
                <img
                  loading="lazy"
                  // src={allData?.image ?? img}
                  src={allData.image}
                  alt="Image Post media content"
                  className="w-full object-cover h-full rounded-lg"
                  onError={handelErrorImg}
                />
              )}
            </div>

            {/* <!-- Engagement Stats --> */}
            <div className="flex items-center justify-between text-xs text-secondary mb-2">
              <div className="flex items-center space-x-1">
                <span className="hover:text-blue-600 hover:underline cursor-pointer">
                  {allData?.created_at ?? "Tpdate Time"}
                </span>
              </div>

              <div className="space-x-2">
                <span className="hover:text-blue-600 hover:underline cursor-pointer">
                  {allData?.comments_count ?? ""} Comments
                </span>
              </div>
            </div>

            {/* Action Bar  */}
            <div className="border-t linkedin-border pt-2 justify-around text-sm font-medium text-gray-600 dark:text-gray-300">
              <div className="mt-4  ">
                <Show />
              </div>

              <div className=" flex justify-between my-4">
                <input
                  name="text"
                  type="text"
                  placeholder="Your Comment Here"
                  className="px-4 py-2 rounded-l-lg bg-slate-700  focus:text-slate-300 flex-1   text-slate-400 placeholder-slate-400 focus:ring-0 focus:outline-none"
                  required
                  value={commentValue}
                  onChange={(e) => {
                    setcommentValue(e.target.value);
                  }}
                  disabled={isAddNewCommentLoading}
                />
                <button
                  onClick={() => {
                    addNewCommentCliked();
                  }}
                  className={`${
                    isAddNewCommentLoading
                      ? "bg-gray-400 text-black"
                      : "bg-blue-600 text-slate-300"
                  } cursor-pointer px-4 py-2 text-sm font-bold uppercase  rounded-r-lg   active:bg-blue-800`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// {isLoading ? (
//         // <div className=" w-screen grid place-items-center h-screen bg-linear-to-r from-purple-500 to-indigo-600 relative ">
//         //   <div className="loader ">
//         //     <span className="bar"></span>
//         //     <span className="bar"></span>
//         //     <span className="bar"></span>
//         //   </div>
//         // </div>
//         <div className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen  p-4  ">
//           <div className="p-4 bg-white dark:bg-gray-800 my-6 rounded-lg shadow-xl overflow-hidden w-full md:max-w-[70%] mx-auto ">
//             <Loeader />
//           </div>
//         </div>
//       ) : (
//         <section className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen  p-4  ">
//           <div className="p-4 bg-white dark:bg-gray-800 my-6 rounded-lg shadow-xl overflow-hidden w-full md:max-w-[70%] mx-auto ">
//             {/* <!-- Post Header --> */}

//             <div className="flex justify-between items-start mb-3">
//               <div className="flex  items-center space-x-3">
//                 <img
//                   className="w-12 h-12 rounded-full object-cover shrink-0"
//                   src={allData?.author?.profile_image || img}
//                   alt="Avatar"
//                 />
//                 <div className="text-sm min-w-0">
//                   <a
//                     href="#"
//                     className="font-semibold text-primary hover:underline hover:text-blue-700 dark:hover:text-blue-400 "
//                   >
//                     {allData?.author?.username ?? "Name"}
//                   </a>
//                   <p className="text-xs text-secondary ">
//                     {allData?.author?.email ?? "Email"}
//                   </p>
//                   <p className="text-xs text-secondary flex items-center ">
//                     {allData?.author?.updated_at.split("T")[0] ?? "time"}•
//                     <svg
//                       className="ml-2 w-3 h-3 text-secondary"
//                       fill="currentColor"
//                       viewBox="0 0 16 16"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm8-6.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zM6 8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8zm5.472.088a1.144 1.144 0 0 0-1.944-.972 1.144 1.144 0 1 0 1.944.972zM4.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
//                     </svg>
//                   </p>
//                 </div>
//               </div>
//               <button
//                 aria-label="More options"
//                 className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-1.5 -mt-1 -mr-1.5"
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
//                 </svg>
//               </button>
//             </div>
//             {/* <!-- Post Content --> */}
//             <div className="text-sm text-primary mb-3 wrap-break-word">
//               <p>{allData?.body ?? "body Post"}</p>
//             </div>

//             {/* Media Optional - Example Image */}
//             <div className="mb-3 max-h-[500px] p-2 -mx-4 sm:mx-0 sm:rounded-lg overflow-hidden">
//               <img
//                 src={allData?.image ?? img}
//                 alt="Image Post media content"
//                 className="w-full object-cover h-full rounded-lg"
//               />
//             </div>

//             {/* <!-- Engagement Stats --> */}
//             <div className="flex items-center justify-between text-xs text-secondary mb-2">
//               <div className="flex items-center space-x-1">
//                 <span className="hover:text-blue-600 hover:underline cursor-pointer">
//                   {allData?.created_at ?? "Tpdate Time"}
//                 </span>
//               </div>

//               <div className="space-x-2">
//                 <span className="hover:text-blue-600 hover:underline cursor-pointer">
//                   {allData?.comments_count ?? ""} Comments
//                 </span>
//               </div>
//             </div>

//             {/* Action Bar  */}
//             <div className="border-t linkedin-border pt-2 justify-around text-sm font-medium text-gray-600 dark:text-gray-300">
//               <div className="mt-4  ">
//                 <Show />
//               </div>

//               <div className=" flex justify-between my-4">
//                 <input
//                   name="text"
//                   type="text"
//                   placeholder="Your Comment Here"
//                   className="px-4 py-2 rounded-l-lg bg-slate-700  focus:text-slate-300 flex-1   text-slate-400 placeholder-slate-400 focus:ring-0 focus:outline-none"
//                   required
//                   value={commentValue}
//                   onChange={(e) => {
//                     setcommentValue(e.target.value);
//                   }}
//                   disabled={isAddNewCommentLoading}
//                 />
//                 <button
//                   onClick={() => {
//                     addNewCommentCliked();
//                   }}
//                   className={`${
//                     isAddNewCommentLoading
//                       ? "bg-gray-400 text-black"
//                       : "bg-blue-600 text-slate-300"
//                   } cursor-pointer px-4 py-2 text-sm font-bold uppercase  rounded-r-lg   active:bg-blue-800`}
//                 >
//                   Send
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

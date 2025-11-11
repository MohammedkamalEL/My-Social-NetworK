import { Link } from "react-router-dom";
import LikeBtn from "./LikeBtn";
import DeletePostpBtn from "./DeletePostpBtn";
import img from "../../public/OIP.webp";
import { useState } from "react";
export default function Post({ items }) {
  // console.log(items);
  // console.log(items.author.email);

  const [imageError, setimageError] = useState(false);
  let timeEdit = items.author.updated_at.split("T")[0];
  // console.log(items?.image);

  function handelImgError() {
    // console.log("error");
    setimageError(true);
  }
  return (
    <div className="p-4 bg-white dark:bg-gray-800 my-6 rounded-lg shadow-xl overflow-hidden max-w-full w-full">
      {/* <!-- Post Header --> */}
      <div className="flex justify-between items-start mb-3">
        <Link to={`/UserProfile/${items.author.id}`}>
          <div className="flex items-center space-x-3">
            <img
              className="w-12 h-12 rounded-full object-cover shrink-0"
              src={`${
                Object.keys(items.author.profile_image).length === 0
                  ? img
                  : items?.author?.profile_image
              }`}
              alt="User Avatar"
            />
            <div className="text-sm min-w-0">
              <span className="font-semibold text-primary hover:underline hover:text-blue-700 dark:hover:text-blue-400 ">
                {items.author.username || "Nmae"}
              </span>
              <p className="text-xs text-secondary ">
                {items.author.email || "You Dont Have Email"}
              </p>
              <p className="text-xs text-secondary flex items-center ">
                {/* 1d • Edited • */}
                {timeEdit || "Time"}
              </p>
            </div>
          </div>
        </Link>
        <DeletePostpBtn items={items} />
      </div>
      {/* <!-- Post Content --> */}
      <div className="text-sm text-primary mb-3 wrap-break-word ">
        <p>{items.body}</p>
      </div>

      {/* Media Optional - Example Image */}
      {!imageError && items.image && (
        <div className="mb-3 p-2 max-h-[700px] object-cover -mx-4 sm:mx-0 sm:rounded-lg overflow-hidden">
          <img
            loading="lazy"
            src={items.image}
            alt="Image Post media content"
            className="w-full h-full object-cover rounded-lg"
            onError={handelImgError}
          />
        </div>
      )}

      {/* <!-- Engagement Stats --> */}
      <div className="flex items-center justify-between text-xs text-secondary mb-2">
        <div className="flex items-center space-x-1">
          <svg
            className="w-4 h-4 text-blue-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M19.2412 4.48567C19.4084 4.45613 19.9017 4.38771 20.2409 4.80362C20.58 5.21954 20.4137 5.68895 20.3511 5.84684C20.2781 6.03091 20.1551 6.24781 20.0394 6.45186L14.2096 16.7397C13.7833 17.492 13.4223 18.1292 13.0837 18.5655C12.7444 19.0026 12.2569 19.4636 11.5438 19.4106C10.8307 19.3576 10.4168 18.8296 10.1458 18.3471C9.87545 17.8656 9.61259 17.1821 9.30222 16.375L8.57848 14.4932C8.50596 14.3047 8.46511 14.1997 8.42906 14.1229C8.41301 14.0887 8.40261 14.0706 8.39685 14.0614C8.39411 14.0571 8.39245 14.0548 8.39182 14.0539L8.39101 14.0529L8.39007 14.052L8.38679 14.0492L8.38312 14.0463C8.37454 14.0397 8.35748 14.0276 8.325 14.0083C8.25203 13.965 8.1515 13.9143 7.97081 13.8239L6.98271 13.3299C6.10066 12.8889 5.36544 12.5213 4.86354 12.1752C4.37714 11.8398 3.83065 11.3379 3.88886 10.5671C3.94707 9.7963 4.56273 9.38216 5.09398 9.12362C5.64217 8.85684 6.42424 8.60385 7.36252 8.30033L18.5857 4.66928C18.8089 4.59697 19.0462 4.52011 19.2412 4.48567Z"
              fill="#000000"
            />
          </svg>
          <span className="hover:text-blue-600 hover:underline cursor-pointer">
            {items.created_at}
          </span>
        </div>

        <Link to={`/PostDetails/${items.id}`}>
          <div className="space-x-2">
            <span className="hover:text-blue-600 hover:underline cursor-pointer">
              {items.comments_count} comments
            </span>
            <span>•</span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">
              id: {items.id}
            </span>
          </div>
        </Link>
      </div>

      {/* Action Bar  */}
      <div className="border-t linkedin-border flex justify-center pt-2  text-sm font-medium text-gray-600 dark:text-gray-300">
        <LikeBtn />
        <Link to={`/PostDetails/${items.id}`} className="flex">
          <button
            aria-label="Comment"
            className="flex items-center space-x-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded w-full justify-center transition-colors duration-150"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <span>Comment</span>
          </button>
        </Link>
        <button
          aria-label="Repost"
          className="flex items-center space-x-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded w-full justify-center transition-colors duration-150"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              id="primary"
              d="M6,14V9A6,6,0,0,1,16.89,5.54"
              style={{
                fill: "none",
                stroke: " rgb(0, 0, 0)",
                strokeLinecap: " round",
                strokeLinejoin: " round",
                strokeWidth: "2",
              }}
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              id="primary-2"
              data-name="primary"
              d="M18,10v5A6,6,0,0,1,7.11,18.46"
              style={{
                fill: "none",
                stroke: " rgb(0, 0, 0)",
                strokeLinecap: " round",
                strokeLinejoin: " round",
                strokeWidth: "2",
              }}
            />
            <polyline
              xmlns="http://www.w3.org/2000/svg"
              id="primary-3"
              data-name="primary"
              points="8 12 6 14 4 12"
              style={{
                fill: "none",
                stroke: " rgb(0, 0, 0)",
                strokeLinecap: " round",
                strokeLinejoin: " round",
                strokeWidth: "2",
              }}
            />
            <polyline
              xmlns="http://www.w3.org/2000/svg"
              id="primary-4"
              data-name="primary"
              points="16 12 18 10 20 12"
              style={{
                fill: "none",
                stroke: " rgb(0, 0, 0)",
                strokeLinecap: " round",
                strokeLinejoin: " round",
                strokeWidth: "2",
              }}
            />
          </svg>
          <span>Repost</span>
        </button>
      </div>
    </div>
  );
}

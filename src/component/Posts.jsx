import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import Navbar from "./Navbar";
import AddNewPost from "./AddNewPost";
import Loeader from "./Loeader";
import { Helmet } from "react-helmet";
// import { v4 as uuidv4 } from "uuid";

export default function Posts() {
  // const uniqueId = uuidv4();
  const [allPost, setallPost] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isInitialLoading, setisInitialLoading] = useState(false);
  const [error, seterror] = useState("");
  const [openAddNewPost, setopenAddNewPost] = useState(false);
  const [page, setpage] = useState(1);

  useEffect(() => {
    const fetchPost = async () => {
      if (page === 1) {
        setisInitialLoading(true);
      } else {
        setisLoading(true);
      }

      axios
        .get(`https://tarmeezacademy.com/api/v1/posts?limit=10&page=${page}`)
        .then((response) => {
          // console.log(response.data.data);
          const data = response.data.data;
          // console.log(typeof data);
          setallPost((prevpost) => [...prevpost, ...data]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
          seterror(error.message);
        })
        .finally(() => {
          setisLoading(false);
          setisInitialLoading(false);
        });
    };
    fetchPost();
  }, [page]);
  // console.log(uniqueId);

  function ShowAllPost() {
    return allPost.map((items) => <Post key={items.id} items={items} />);
  }

  useEffect(() => {
    const handleScroll = () => {
      const isButton =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (isButton && !isLoading) {
        console.log("User reached the bottom of the page!");
        setpage((page) => page + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  return (
    <>
      <Helmet>
        <title>All Posts</title>
      </Helmet>
      {openAddNewPost && (
        <AddNewPost open={openAddNewPost} setOpen={setopenAddNewPost} />
      )}

      <Navbar />
      <section className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen  flex items-center justify-center p-4 gap-y-8 ">
        {/* <section
        className={`bg-gray-100 dark:bg-gray-900 dark:text-white h-[${height}!important] flex items-center justify-center p-4 gap-y-8 `}
      > */}

        {error ? (
          <div className="whitespace-pre-wrap text-center">{`Error fetching data: \n ${error} `}</div>
        ) : isInitialLoading ? (
          <div className="w-[95vw] md:w-[80vw] lg:w-[70vw] flex flex-col  items-center">
            <Loeader />
            <Loeader />
            <Loeader />
            <Loeader />
          </div>
        ) : (
          <article className=" w-[95vw] md:w-[80vw] lg:w-[70vw] flex flex-col items-center">
            <ShowAllPost />
          </article>
        )}

        <button
          onClick={() => setopenAddNewPost((prev) => !prev)}
          className=" fixed bottom-[5%] right-[10%] bg-blue-500  w-12 h-12 md:w-14 md:h-14 rounded-full text-2xl"
        >
          <h1>{openAddNewPost ? "-" : "+"}</h1>
        </button>
      </section>
      {isLoading && (
        <h1 className=" bg-gray-900 text-center text-2xl text-red-600">
          Loading....
        </h1>
      )}
    </>
  );
}

// import axios from "axios";
// import { useEffect, useState } from "react";
// import Post from "./Post";
// import Navbar from "./Navbar";
// import { handelAddNewPosts } from "../api/handelAddNewPosts";

// export default function Posts() {
//   const [allPosts, setAllPosts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [openAddNewPost, setOpenAddNewPost] = useState(false);

//   // Fetch posts when page changes
//   useEffect(() => {
//     const fetchPosts = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get(
//           `https://tarmeezacademy.com/api/v1/posts?limit=7&page=${page}`
//         );
//         const newData = response.data.data;

//         // Remove duplicates
//         setAllPosts((prevPosts) => {
//           const existingIds = new Set(prevPosts.map((p) => p.id));
//           const filteredData = newData.filter((post) => !existingIds.has(post.id));
//           return [...prevPosts, ...filteredData];
//         });
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [page]);

//   // Infinite scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const nearBottom =
//         window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
//       if (nearBottom && !isLoading) {
//         setPage((prev) => prev + 1);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isLoading]);

//   const toggleAddPost = () => setOpenAddNewPost((prev) => !prev);

//   const renderPosts = () =>
//     allPosts.map((post) => <Post key={post.id} items={post} />);

//   return (
//     <>
//       {openAddNewPost && (
//         <section className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center font-poppins">
//           <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] grid gap-8">
//             <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">
//               <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg p-10 m-2">
//                 <h1 className="text-2xl lg:text-5xl font-bold text-center dark:text-gray-400">
//                   Create New Post
//                 </h1>
//                 <form className="space-y-4" action={handelAddNewPosts}>
//                   <input
//                     id="title"
//                     name="title"
//                     type="text"
//                     placeholder="Title"
//                     className="w-full p-3 border rounded-lg shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700"
//                   />
//                   <input
//                     id="body"
//                     name="body"
//                     type="text"
//                     required
//                     placeholder="Body"
//                     className="w-full p-3 border rounded-lg shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700"
//                   />
//                   <input
//                     type="file"
//                     name="image"
//                     accept=".png, .jpeg, .jpg"
//                     className="w-full rounded py-2 text-white"
//                   />
//                   <button
//                     className="w-full p-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition"
//                   >
//                     Post
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       <Navbar />
//       <section className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white flex flex-col items-center p-4">
//         {error ? (
//           <p className="text-red-500">Error fetching data: {error}</p>
//         ) : (
//           <article className="w-[95vw] md:w-[80vw] lg:w-[70vw]">
//             {renderPosts()}
//           </article>
//         )}
//         <button
//           onClick={toggleAddPost}
//           className="fixed bottom-[5%] right-[10%] bg-blue-500 w-12 h-12 md:w-14 md:h-14 rounded-full text-2xl"
//         >
//           {openAddNewPost ? "-" : "+"}
//         </button>
//         {isLoading && <h1 className="mt-4">Loading…</h1>}
//       </section>
//     </>
//   );
// }

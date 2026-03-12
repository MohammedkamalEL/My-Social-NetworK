import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostDetails from "./component/PostDetails.jsx";
import Login from "./component/Login.jsx";
import Register from "./component/Register.jsx";
import Posts from "./component/Posts.jsx";
import Profile from "./component/Profile.jsx";
import UserProfile from "./component/UserProfile.jsx";
import Devoloper from "./component/Devoloper.jsx";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import ErrorPage from "./component/ErrorPage.jsx";
import ErrorElment from "./component/ErrorElment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElment />,
  },
  {
    path: "/PostDetails/:postId",
    element: <PostDetails />,
  },
  { path: "/Login", element: <Login /> },
  { path: "/Register", element: <Register />, errorElement: <ErrorElment /> },
  { path: "/Posts", element: <Posts />,errorElement: <ErrorElment />  },
  { path: "/Profile", element: <Profile /> },
  { path: "/UserProfile/:userId", element: <UserProfile /> },
  { path: "/Devoloper", element: <Devoloper /> },
  { path: "*", element: <ErrorPage /> },
]);

createRoot(document.getElementById("root")).render(
  <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </SkeletonTheme>
);

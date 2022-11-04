import React, { useEffect, useState } from "react";
import {
  createRoutesFromElements,
  RouterProvider,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import { fetchingPosts } from "../api";
import {
  Navbar,
  SinglePost,
  Posts,
  CreatePost,
  LogInOut,
  Register,
  Search,
} from "./";

const Main = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
console.log(userPosts)
  useEffect(() => {
    const fetchPosts = async () => {
      const returnedPosts = await fetchingPosts();
      setUserPosts(returnedPosts);
    };
    fetchPosts();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route
          path="/"
          element={
            <Search
              userPosts={userPosts}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          }
        />
        <Route path="addPost" element={<CreatePost userPosts={userPosts} />} />
        <Route path="login" element={<LogInOut />} />
        <Route path="register" element={<Register />} />
      </Route>
    )
  );

  return (
    <div id="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Main;

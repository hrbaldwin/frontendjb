import React, { useEffect, useState } from "react";
import { createRoutesFromElements, RouterProvider, createBrowserRouter, Route} from "react-router-dom";
import { fetchingPosts } from "../api";
import { Navbar, SinglePost, Posts } from "./";

const Main = () => {
  const [userPosts, setUserPosts] = useState([]);

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
            path="posts"
            element={<Posts userPosts={userPosts} setUserPosts={setUserPosts}/>}
            />
          </Route>
           
    )
    // continue here :)
  );

  return (
  <div id='main'>
      <RouterProvider router={router} ></RouterProvider>
</div>
  );
};

export default Main;

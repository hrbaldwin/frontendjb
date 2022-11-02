import React, { useEffect, useState } from "react";
import { createRoutesFromElements } from "react-router-dom";
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
    createRoutesFromElements()
    // continue here :)
  );

  return (
    <div id="main">
      <Navbar />
      <Posts userPosts={userPosts} />
    </div>
  );
};

export default Main;

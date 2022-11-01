import React, { useEffect, useState } from "react";
import { fetchingPosts } from "../api";
import { Navbar, SinglePost } from "./";

const Main = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const returnedPosts = await fetchingPosts();
      setUserPosts(returnedPosts)
    };
    fetchPosts()
  },[])


  return (
    <div id="main">
      <Navbar />
      <SinglePost />
    </div>
  );
};

export default Main;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPost } from "../api";

const CreatePosts = (props) => {
  const { userPosts, setUserPosts } = props;

  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const newPost = await createPost(userPosts, setUserPosts, token);
    console.log(newPost);
  }
  return (
    <>
      <div>
        <h3>Create Post</h3>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input type="text" required />
          <label>Content:</label>
          <input type='text' required />
          <label>Hashtags:</label>
          <input type='text' required />
          <button>Submit</button>
          <Link to='/'>  <button>Go back</button></Link>
        
        </form>
      </div>
    </>
  );
};

export default CreatePosts;

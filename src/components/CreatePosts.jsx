import React, { useState } from "react";
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
        </form>
      </div>
    </>
  );
};

export default CreatePosts;

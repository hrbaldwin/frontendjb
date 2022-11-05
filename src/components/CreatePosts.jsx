import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPost } from "../api";

const CreatePosts = (props) => {
  const { userPosts, setUserPosts } = props;
  const navigate = useNavigate();

  async function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    const title = e.target[0].value;
    const content = e.target[1].value;
    const tags = e.target[2].value;
    console.log(title, content, tags);
    const token = localStorage.getItem("token");
    const newPost = await createPost(token, title, content, tags);
    console.log("this is newPost console log", newPost);
    navigate("/");
    location.reload();
  }
  return (
    <>
      <div className="formBoxDiv">
        <h3 className="headerThree">share your dream</h3>
        <form onSubmit={handleSubmit} className="formBox">
          <label className="labels">Title:</label>
          <input id="title" className="inputs" type="text" required />
          <label className="labels">Content:</label>
          <textarea
            id="content"
            className="inputs"
            name="text"
            rows="6"
            cols="50"
          ></textarea>
          <label className="labels">Hashtags:</label>
          <input
            id="tags"
            className="inputs"
            type="text"
            placeholder="‧₊˚✧     please make sure to include your # symbol     ✧˚₊‧"
            required
          />
          <button className="submitButton">submit</button>
        </form>
      </div>
    </>
  );
};

export default CreatePosts;

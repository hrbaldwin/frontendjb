import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DeletePost } from "../api";

const SinglePost = (props) => {
  const post = props.post;
  const { userPosts, setUserPosts } = props;
  console.log(post);
  const navigate = useNavigate();

  async function handleDelete(e) {
    e.preventDefault();
    console.log(userPosts, "USERPOST");
    const toDelete = e.target.id;
    const token = localStorage.getItem("token");
    const deleted = await DeletePost(toDelete, token);
    if (deleted) {
      location.reload();
    }
  }

  return (
    <div className="singlePostBody">
      <h3 className="postTitle">{post.title}</h3>
      <div className="postContentDiv">
        <p className="postContent">{post.content}</p>
        <p className="postContent">{post.active}</p>
        <p className="postContent">{post.tags[0].name}</p>
        {/* ^^come back to get all hashtags to display!! */}
      </div>
      <button
        className="trashBin"
        id={post.id ? `${post.id}` : null}
        onClick={(e) => {
          handleDelete(e);
        }}
      >
        <img id="trash" src="../trash.png"></img>
      </button>
    </div>
  );
};
export default SinglePost;

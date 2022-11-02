import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DeletePost } from "../api";

const PostDetails = (props) => {
  const navigate = useNavigate();
  const post = props.post;
  const { userPosts, setUserPosts } = props;
  const [postDetails, setPostDetails] = useState({
    title: "",
    content: "",
    tags: "",
  });

  function filterPostsDetails() {
    let filteredPosts = userPosts.filter((found) => {
      return found.id == postId;
    });
    console.log(filteredPosts, "IAM FILTERED POSTS");
    return filteredPosts;
  }

  useEffect(() => {
    const post = filterPostsDetails()[0];

    setPostDetails(postDetails);
  }, []);

  async function handleDelete(e) {
    e.preventDefault();
    console.log(userPosts, "USERPOST");
    const toDelete = e.target.id;
    const token = localStorage.getItem("token");
    const deleted = await DeletePost(toDelete, token);
    if (deleted) {
      const newPosts = userPosts.filter((post) => post.id != toDelete);
      setUserPosts(newPosts);
      navigate("/");
    }
  }

  return (
    <>
      <div className="box">
        <div>{post.title}</div>
        <div>{post.description}</div>
        <div>{post.price}</div>
        <div>{post.location}</div>
        <button
          className="postDetailsButton"
          id={post.id ? `${post.id}` : null}
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default PostDetails;

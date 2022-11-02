import React from "react";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const post = props.post;
  console.log(post);
  return (
    <div className="singlePostBody">
      <h3 className="postTitle">{post.title}</h3>
      <p>{post.content}</p>
      <p>{post.active}</p>
      <p>{post.tags[0].name}</p>
      {/* ^^come back to get all hashtags to display!! */}
    </div>
  );
};
export default SinglePost;

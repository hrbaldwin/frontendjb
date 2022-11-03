import React from "react";
import { Link, useNavigate } from "react-router-dom";

const SinglePost = (props) => {
  const post = props.post;
  const { userPosts, setUserPosts } = props;
  console.log(post);
  const navigate = useNavigate();

  return (
    <div className="singlePostBody">
      <h3 className="postTitle">{post.title}</h3>
      <p>{post.content}</p>
      <p>{post.active}</p>
      <p>{post.tags[0].name}</p>
      <Link to={`postDetails`}><button className="backButton">See Post</button></Link>
      {/* ^^come back to get all hashtags to display!! */}
    </div>
  );
};
export default SinglePost;

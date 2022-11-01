import React from "react";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  const post = props.post;
  console.log(post);
  return (
    <div className="singlePostBody">
      <h3 className="postTitle">{post}</h3>
      {/* <p>{post.description}</p>
      <p>Listed Price: {post.price}</p> */}
      {/* <Link to={`/newEdit/${post._id}`}>
        <button className="postDetailsButton">Post Details</button>
      </Link>
      <Link to={`/message`}>
        <button className="postDetailsButton">Message</button>
      </Link> */}
    </div>
  );
};
export default SinglePost;

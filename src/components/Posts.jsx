import React from "react";
import { Outlet } from "react-router-dom";
import { SinglePost, CreatePosts } from "./";

const Posts = (props) => {
  const userPosts = props.userPosts;
  const setUserPosts = props.setUserPosts;

  return (
    <>
      <div className="postsColumn">
        {userPosts.length ? (
          userPosts.map((post) => {
            return <SinglePost key={`post-id-${post.id}`} post={post} />;
          })
        ) : (
          <div> Loading posts...</div>
        )}
      </div>
    </>
  );
};

export default Posts;

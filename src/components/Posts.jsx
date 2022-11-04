import React from "react";
import { SinglePost } from "./";

const Posts = (props) => {
  const userPosts = props.userPosts;

  return (
    <>
      <div className="postsColumn">
        {userPosts.length ? (
          userPosts.map((post) => {
            return <SinglePost key={`post-id-${post.id}`} post={post} />;
          })
        ) : (
          <div className="loadingDiv">
            {" "}
            loading posts... (from posts component)
          </div>
        )}
      </div>
    </>
  );
};

export default Posts;

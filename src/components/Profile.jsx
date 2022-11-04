import React from "react";

const Profile = (props) => {
  const post = props.post;
  const { userPosts, setUserPosts } = props;

  return (
    <>
      <h2>{post.author.username}</h2>
    </>
  );
};

export default Profile;

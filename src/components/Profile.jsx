import React, { useState } from "react";

const Profile = (props) => {
  const post = props.post;
  console.log(post)
  const { userPosts, setUserPosts } = props;
  const [filteredUserPosts, setFilteredUserPosts] = useState([]);


    function filterUserPosts(author) {
      if (!author) {
        setFilteredUserPosts([]);
      } else {
        let postsByAuthor = userPosts.filter((post) => {
          console.log(post);
          if (post.author.username.includes(author)) {
            return true;
          } else {
            return false;
          }
        });
        console.log(postsByAuthor);
        setFilteredUserPosts(postsByAuthor);
      }
    }


userPosts.filter((post, i) => {
  console.log(post.author.username)
      if(post.author.username)
        return <p>{post.author.username}</p>
      })


  return (
    <div>
      <div>{userPosts[0].author.username}</div>
      <div>{userPosts[0].title}</div>
      <div>{userPosts[0].content}</div>
    </div>
  )
};


export default Profile;

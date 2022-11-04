import React, { useState } from "react";

const Profile = (props) => {
  const { userPosts, setUserPosts } = props;
const [filteredUserPosts, setFilteredUserPosts] = useState([]);

function filterUserPosts(author){
if(!author){
setFilteredUserPosts([])
}else {
  let postsByAuthor = userPosts.filter((post)=>{
    console.log(post)
    if(post.author.username.includes(author)){
      return true
    }else{
      return false
    };
  });
  console.log(postsByAuthor)
  setFilteredUserPosts(postsByAuthor)
}
}


  return (
    <> 
      <h2>Posts by</h2>
    </>
  );
};

export default Profile;

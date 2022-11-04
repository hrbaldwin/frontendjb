import React, { useState } from "react";
import { Posts } from "./";

const Search = (props) => {
  const userPosts = props.userPosts;
  const setUserPosts = props.setUserPosts;
  const searchInput = props.searchInput;
  const setSearchInput = props.setSearchInput;
  const [searchedPost, setSearchedPost] = useState(userPosts);

  // userPosts.map((post, i) => {
  //   filterTags(post);
  //   return post;
  // });

    function filterTags(posts) {
      if (!searchInput) {
        setSearchedPost(posts);
      } else {
        console.log(posts)
        console.log(userPosts, "this is userPosts console.log")
        let filteredTags = posts.tags.map((tag, i) => {
          console.log(tag, "this is tag console log")
          let hashtags = tag.name 
          if(searchInput === hashtags){
            setSearchedPost(searchedPost) 
          }
        });
        console.log(filteredTags);
      }
      
    }

  // function filterTags(post) {
  //   if (!searchInput) {
  //     return post;
  //   } else {
  //     {
  //       post && post.tags.length
  //         ? post.tags.filter((tag, i) => {
  //             return <p key={`tag-singlePost${i}`}>{tag.name}</p>;
  //           })
  //         : null;
  //     }
  //     return;
  //   }
  // }

  const handleChange = (e) => {
    e.preventDefault();
    filterTags(userPosts);
    console.log("you can't handle the truth");
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div>
        <div className="searchBarDiv">
          <input
            className="searchBarInputBar"
            type="search"
            placeholder="search tags here"
            onChange={handleChange}
          />
        </div>
        {userPosts ? (
          <Posts userPosts={searchedPost} setUserPosts={setUserPosts} />
        ) : (
          <div>loading...</div>
        )}
      </div>
    </>
  );
};

export default Search;

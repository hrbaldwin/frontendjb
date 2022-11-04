import React, { useState } from "react";
import { Posts } from "./";

const Search = (props) => {
  const userPosts = props.userPosts;
  const setUserPosts = props.setUserPosts;
  const searchInput = props.searchInput;
  const setSearchInput = props.setSearchInput;
  const [filteredPost, setFilteredPost] = useState([]);

  function filterTags(str) {
    console.log(str, "STRING");
    if (!str) {
      setFilteredPost([]);
    } else {
      let filteredPostsArray = userPosts.filter((post) => {
        console.log(post, "AAA");
        if (post.title.toLowerCase().includes(str)) {
          return true;
        } else {
          return false;
        }
      });
      console.log(filteredPostsArray, "GGG");
      setFilteredPost(filteredPostsArray);
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    console.log("you can't handle the truth");
    filterTags(e.target.value);
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
        {filteredPost.length ? (
          <Posts userPosts={filteredPost} />
        ) : (
          <Posts userPosts={userPosts} />
        )}
      </div>
    </>
  );
};

export default Search;

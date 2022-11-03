import React from "react";
import { Posts } from "./";

const Search = (props) => {
  const userPosts = props.userPosts;
  const setUserPosts = props.setUserPosts;
  const searchInput = props.searchInput;
  const setSearchInput = props.setSearchInput;

  function filterTags() {
    if (!searchInput) {
      return userPosts;
    } else {
      let filteredTags = userPosts.filter((found) => {
        return found.tags.toLowerCase().includes(searchInput.toLowerCase());
      });
      console.log(filteredTags);
      return filteredTags;
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
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
          <Posts userPosts={filterTags()} setUserPosts={setUserPosts} />
        ) : (
          <div>loading...</div>
        )}
      </div>
    </>
  );
};

export default Search;

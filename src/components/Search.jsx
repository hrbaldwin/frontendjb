import React, { useState } from "react";
import { Posts } from "./";

const Search = (props) => {
  const userPosts = props.userPosts;
  const setUserPosts = props.setUserPosts;
  const searchInput = props.searchInput;
  const setSearchInput = props.setSearchInput;
  const [searchedPost, setSearchedPost] = useState(userPosts);

  userPosts.map((post, i) => {
    filterTags(post);
    return post;
  });

  //   function filterTags() {
  //     if (!searchInput) {
  //       return userPosts;
  //     } else {
  //       let filteredTags = userPosts.filter((found, i) => {
  //         console.log("USERPOSTS", userPosts);
  //         return found.tags[i].toLowerCase().includes(searchInput.toLowerCase());
  //       });
  //       console.log(filteredTags, "this is filtered tags console log");
  //       return filteredTags;
  //     }
  //   }

  function filterTags(post) {
    if (!searchInput) {
      return post;
    } else {
      {
        post && post.tags.length
          ? post.tags.map((tag, i) => {
              return <p key={`tag-singlePost${i}`}>{tag.name}</p>;
            })
          : null;
      }
      return;
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    filterTags();
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
          <Posts userPosts={userPosts} setUserPosts={setUserPosts} />
        ) : (
          <div>loading...</div>
        )}
      </div>
    </>
  );
};

export default Search;

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

    function filterTags(post) {
      let hashtags
      if (!searchInput) {
        return post;
      } else {
        let filteredTags = post.tags.map((tag, i) => {
          hashtags = tag.name 
          return hashtags
        });
        //left off here
        //line 71, searchedPost should be set for param value, but will not show posts if the state isn't set.
        console.log(hashtags)

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

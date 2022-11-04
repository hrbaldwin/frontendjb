import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DeletePost } from "../api";

const SinglePost = (props) => {
  const post = props.post;
  console.log(post)
  const { userPosts, setUserPosts } = props;
  const navigate = useNavigate();
  const [filteredUserPosts, setFilteredUserPosts] = useState([]);

  async function handleDelete(e) {
    e.preventDefault();
    console.log(userPosts, "USERPOST");
    const toDelete = e.target.id;
    const token = localStorage.getItem("token");
    const deleted = await DeletePost(toDelete, token);
    if (deleted) {
      location.reload();
    }
  }

  function handleChange(e) {
    e.preventDefault();
    console.log("you can't handle the truth");
    filterUserPosts(e.target.value);
    setSearchInput(e.target.value);
  }

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

  return (
    <div className="singlePostBody">
      <div className="titleAndUsername">
        <h3 className="postTitle">{post.title}</h3>
        <Link to={"/profile/:id"} onChange={handleChange}>
          <h4 className="username">👤 {post.author.username}</h4>
        </Link>
      </div>
      <div className="postContentDiv">
        <p className="postContent">{post.content}</p>
        <p className="postContent">{post.active}</p>
        <div className="hashtagDisplay">
          {post && post.tags.length
            ? post.tags.map((tag, i) => {
                return <p key={`tag-singlePost${i}`}>{tag.name}</p>;
              })
            : null}
        </div>
      </div>
      <div className="trashBinButtonDiv">
        <button
          className="trashBin"
          id={post.id ? `${post.id}` : null}
          onClick={(e) => {
            handleDelete(e);
          }}
        >
          <img id="trash" src="../trash.png"></img>
        </button>
      </div>
    </div>
  );
};
export default SinglePost;

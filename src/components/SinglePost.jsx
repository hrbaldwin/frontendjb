import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { DeletePost } from "../api";

const SinglePost = (props) => {
  const post = props.post;
  const { userPosts, setUserPosts } = props;
  const navigate = useNavigate();

  async function handleDelete(e) {
    e.preventDefault();
    console.log(e, "D");
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
    setSearchInput(e.target.value);
  }

  return (
    <div className="singlePostBody">
      <div className="titleAndUsername">
        <h3 className="postTitle">{post.title}</h3>
        <Link
          to={`/profile/${post.author.id}`}
          onChange={handleChange}
          className="usernameLink"
        >
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
          onClick={handleDelete}
        >
          <img id={`${post.id}`} className="trash" src="../trash.png"></img>
        </button>
      </div>
    </div>
  );
};
export default SinglePost;

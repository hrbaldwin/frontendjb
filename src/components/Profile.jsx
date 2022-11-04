import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Profile = (props) => {
  const { userPosts, setUserPosts } = props;
  const { id } = useParams();
  const [filteredUserPosts, setFilteredUserPosts] = useState(
    userPosts.filter((post) => {
      return post.author.id == id;
    })
  );

  return (
    <>
      <div className="postsColumn">
        {filteredUserPosts.map((post, i) => {
          return (
            <div key={`tag-userPost${i}`} className="singlePostBody">
              <div className="titleAndUsername">
                <h3 className="postTitle">{post.title}</h3>
                <h4 className="username">👤 {post.author.username}</h4>{" "}
              </div>
              <div>{post.content}</div>
              <div className="hashtagDisplay">
                {post && post.tags.length
                  ? post.tags.map((tag, i) => {
                      return <p key={`tag-singlePost${i}`}>{tag.name}</p>;
                    })
                  : null}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Profile;

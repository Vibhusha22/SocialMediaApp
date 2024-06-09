import React from "react";
import { AiFillLike } from "react-icons/ai";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useContext } from "react";
import { PostStore } from "../store/PostStore";

function Post({ post }) {
  const { deletePost } = useContext(PostStore);
  const handleDeletePost = () => {
    deletePost(post.id);
  };
  return (
    <div className="card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="badge bg-secondary me-1">
              {tag}
            </span>
          ))}
        </div>
        <div className="bottomContainer">
          <a href="#" className="btn btn-primary" style={{ margin: "5px" }}>
            <AiFillLike />
            {post.likes}
          </a>
          <RiDeleteBin4Fill
            className="deleteButton"
            onClick={handleDeletePost}
          />
        </div>
      </div>
    </div>
  );
}

export default Post;

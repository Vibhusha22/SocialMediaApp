import React, { useContext } from "react";
import { PostStore } from "../store/PostStore";
import Post from "./Post";

function PostList() {
  const { postList } = useContext(PostStore);
  return (
    <>
      <div className="classList">
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default PostList;

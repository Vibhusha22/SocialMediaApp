import React, { useContext, useEffect, useState } from "react";
import { PostStore } from "../store/PostStore";
import Post from "./Post";
import DefaultMessage from "./DefaultMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList } = useContext(PostStore);
  const { addPosts } = useContext(PostStore);
  const [fetching, setFetching] = useState();

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <DefaultMessage></DefaultMessage>}
      <div className="classList">
        {!fetching &&
          postList.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
}

export default PostList;

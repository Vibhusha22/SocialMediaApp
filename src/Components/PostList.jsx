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
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("cleaning useEffect");
      controller.abort();
    };
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

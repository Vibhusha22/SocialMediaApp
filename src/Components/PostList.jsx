import React, { useContext } from "react";
import { PostStore } from "../store/PostStore";
import Post from "./Post";
import DefaultMessage from "./DefaultMessage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  //const data = useLoader();
  const { postList } = useContext(PostStore);
  const { fetching } = useContext(PostStore);

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
//loader func useLoader to fetch data directly here
//export const loader = () => //fetch
export default PostList;

import { createContext, useReducer, useState, useEffect } from "react";
export const PostStore = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const handleActionReducer = (postList, action) => {
  let newPostList = postList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...postList];
  } else if (action.type === "DELETE_POST") {
    newPostList = postList.filter(
      (item) => action.payload.deleteid !== item.id
    );
  } else if (action.type === "ADD_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  // const initialPostList = [
  //   {
  //     id: "25",
  //     user_ID: "Vibhusha",
  //     title: "Learning React",
  //     body: "React is a powerful library for building user interfaces. The component-based architecture and virtual DOM make development efficient and fun.",
  //     likes: "520",
  //     tags: ["React", "JavaScript", "Web Development", "UI"],
  //   },
  //   {
  //     id: "9",
  //     user_ID: "Rhutika",
  //     title: "Vacation at Goa",
  //     body: "I had an amazing time with my friends in Goa. The beaches, clubs, and overall vibes were fantastic.",
  //     likes: "372",
  //     tags: ["Vacation", "Goa", "Beaches", "Party"],
  //   },
  //   {
  //     id: "15",
  //     user_ID: "Divisha",
  //     title: "Living in Pune",
  //     body: "Pune is the city I love. Its people and culture are what I cherish most about my state.",
  //     likes: "432",
  //     tags: ["Pune", "Home", "Family", "Peace"],
  //   },
  // ];

  const [postList, DispatchList] = useReducer(handleActionReducer, []);

  const addPost = (post) => {
    let newDispatch = {
      type: "ADD_POST",
      payload: post,
    };
    return DispatchList(newDispatch);
  };

  const deletePost = (deleteid) => {
    let newDispatch = {
      type: "DELETE_POST",
      payload: { deleteid },
    };
    return DispatchList(newDispatch);
  };

  const addPosts = (posts) => {
    let newDispatch = {
      type: "ADD_POSTS",
      payload: { posts },
    };
    return DispatchList(newDispatch);
  };

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
      <PostStore.Provider value={{ postList, addPost, deletePost, fetching }}>
        {children}
      </PostStore.Provider>
    </>
  );
};
export default PostListProvider;

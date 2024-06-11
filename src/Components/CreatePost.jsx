import { useRef, useContext } from "react";
import { PostStore } from "../store/PostStore";

function CreatePost() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const hashtagsRef = useRef();
  const likesRef = useRef();
  const userIDRef = useRef();
  const { addPost } = useContext(PostStore);

  const handleAddClick = () => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleRef.current.value,
        body: bodyRef.current.value,
        reactions: likesRef.current.value,
        userId: userIDRef.current.value,
        tags: hashtagsRef.current.value.split(/\s+/),
      }),
    })
      .then((res) => res.json())
      .then((data) => addPost(data));
    titleRef.current.value = "";
    bodyRef.current.value = "";
    hashtagsRef.current.value = "";
    likesRef.current.value = "";
    userIDRef.current.value = "";
  };

  return (
    <>
      <div className="createContainer">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            ref={userIDRef}
            placeholder="Enter ID"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            ref={titleRef}
            placeholder="Enter title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            ref={bodyRef}
            placeholder="What's on your mind?"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
          ></label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Add Hashtags using space"
            ref={hashtagsRef}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
          ></label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Add Reactions"
            ref={likesRef}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddClick}
        >
          Share
        </button>
      </div>
    </>
  );
}

export default CreatePost;

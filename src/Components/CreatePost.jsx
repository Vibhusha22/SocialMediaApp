import { useRef, useContext } from "react";
import { PostStore } from "../store/PostStore";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();

  const titleRef = useRef();
  const bodyRef = useRef();
  const hashtagsRef = useRef();
  const likesRef = useRef();
  const dislikesRef = useRef();
  const userIDRef = useRef();
  const { addPost } = useContext(PostStore);

  const handleAddClick = () => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleRef.current.value,
        body: bodyRef.current.value,
        reactions: {
          likes: parseInt(likesRef.current.value),
          dislikes: parseInt(dislikesRef.current.value),
        },
        userId: parseInt(userIDRef.current.value),
        tags: hashtagsRef.current.value.split(/\s+/),
      }),
    })
      .then((res) => res.json())
      .then((data) => addPost(data));
    titleRef.current.value = "";
    bodyRef.current.value = "";
    hashtagsRef.current.value = "";
    likesRef.current.value = "";
    dislikesRef.current.value = "";
    userIDRef.current.value = "";

    navigate("/");
  };

  return (
    <>
      <div className="createContainer">
        <div className="mb-3">
          <label htmlFor="userID" className="form-label">
            User ID
          </label>
          <input
            type="text"
            className="form-control"
            id="userID"
            ref={userIDRef}
            placeholder="Enter ID"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={titleRef}
            placeholder="Enter title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="body"
            ref={bodyRef}
            placeholder="What's on your mind?"
            rows="3"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="hashtags" className="form-label">
            Hashtags
          </label>
          <input
            type="text"
            className="form-control"
            id="hashtags"
            placeholder="Add Hashtags using space"
            ref={hashtagsRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="likes" className="form-label">
            Likes
          </label>
          <input
            type="number"
            className="form-control"
            id="likes"
            placeholder="Add Likes"
            ref={likesRef}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dislikes" className="form-label">
            Dislikes
          </label>
          <input
            type="number"
            className="form-control"
            id="dislikes"
            placeholder="Add Dislikes"
            ref={dislikesRef}
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

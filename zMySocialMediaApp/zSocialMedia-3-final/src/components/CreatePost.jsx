import { useRef } from "react";
import { useContext } from "react";
import { PostListContext } from "../store/post-store";

const CreatePost = () => {
  const { addNewPost } = useContext(PostListContext);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmitButtonClicked = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addNewPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmitButtonClicked}>
      <div className="mb-3">
        <label className="form-label">Enter your User id here</label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your Used id"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Number of Reactions</label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="Please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;

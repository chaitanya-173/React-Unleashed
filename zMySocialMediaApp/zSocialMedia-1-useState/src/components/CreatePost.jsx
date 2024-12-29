import { useRef } from "react";

const CreatePost = ({ onNewPost }) => {
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
    const tags = tagsElement.current.value;

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    onNewPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form onSubmit={handleSubmitButtonClicked}>
      <div className="mb-3">
        <label className="form-label">Enter your User id here</label>
        <input
          type="text"
          className="form-control"
          placeholder="Your Used id"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Title</label>
        <input
          type="text"
          className="form-control"
          placeholder="How are you feeling today..."
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Post Content</label>
        <input
          type="text"
          className="form-control"
          placeholder="Tell us more about it"
          ref={postBodyElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Number of Reactions</label>
        <input
          type="text"
          className="form-control"
          placeholder="How many reactions you got"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Enter your tags</label>
        <input
          type="text"
          className="form-control"
          placeholder="Please enter your tags"
          ref={tagsElement}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;

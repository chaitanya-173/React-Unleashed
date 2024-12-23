import { useContext } from "react";
import { PostListContext } from "../store/post-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <p className="card-text reactions">
          {`This post was reacted by ${post.reactions} people`}
        </p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <br />
        <button
          onClick={() => {
            deletePost(post.id);
          }}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;

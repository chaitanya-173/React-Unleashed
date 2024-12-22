const Post = ({ post, onDeleteClick }) => {
  return (
    <div className="card" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <p className="card-text">
          {`This post was reacted by ${post.reactions} people`}
        </p>
        <p className="card-text">{post.tags}</p>
        <button onClick={() => {onDeleteClick(post.id)}}>Delete</button>
      </div>
    </div>
  );
};

export default Post;

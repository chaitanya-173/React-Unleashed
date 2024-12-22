import Post from "./Post";

const PostList = ({ posts, onDeleteClick }) => {
  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.userId} 
          post={post}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
};

export default PostList;

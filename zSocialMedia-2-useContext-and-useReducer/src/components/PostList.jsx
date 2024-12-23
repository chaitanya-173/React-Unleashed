import Post from "./Post";
import { useContext } from "react";
import { PostListContext } from "../store/post-store";

const PostList = () => {
  const { posts } = useContext(PostListContext);

  return (
    <>
      {posts.map((post) => (
        <Post key={post.userId} post={post} />
      ))}
    </>
  );
};

export default PostList;

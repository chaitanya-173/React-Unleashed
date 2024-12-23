import { createContext } from "react";

export const PostListContext = createContext({
  posts: [],
  addNewPost: () => {},
  deletePost: () => {},
});

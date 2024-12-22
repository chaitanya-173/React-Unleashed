// import { createContext } from "react";
// import { useReducer } from "react";

// const PostList = createContext({
//   postList: [],
//   addPost: () => {},
//   deletePost: () => {},
// });

// const postListReducer = (currPostList, action) => {
//   return currPostList;
// };

// const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

//   const addPost = () => {};

//   const deletePost = () => {};

//   return (
//     <PostList.Provider
//       value={{
//         postList,
//         addPost,
//         deletePost,
//       }}
//     >
//       {children}
//     </PostList.Provider>
//   );
// };

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi Friends, I am going to Vaishnodevi for my vacations. Hope to enjoy a lot. Peace out.",
//     reactions: 2,
//     userId: "user-10",
//     tags: ["Vacation", "Jammu", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Paas hogye bhai",
//     body: "4 saal ki masti ke baad bhi ho gaye hain paas. Hard to believe.",
//     reactions: 15,
//     userId: "user-20",
//     tags: ["Graduating", "Unbelievable"],
//   },
// ];

// export default PostListProvider;

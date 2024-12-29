import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState, useReducer } from "react";
import { PostListContext } from "./store/post-store";

const initialPostList = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Vaishnodevi for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-10",
    tags: ["Vacation", "Jammu", "Enjoying"],
  },
  {
    id: "2",
    title: "Paas hogye bhai",
    body: "4 saal ki masti ke baad bhi ho gaye hain paas. Hard to believe.",
    reactions: 15,
    userId: "user-20",
    tags: ["Graduating", "Unbelievable"],
  },
];

const postListReducer = (posts, action) => {
  let newPostList = posts;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...posts];
  } else if (action.type === "DELETE_POST") {
    newPostList = posts.filter((post) => post.id !== action.payload.id);
  }
  return newPostList;
};

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const [posts, dispatchPosts] = useReducer(postListReducer, initialPostList);

  const addNewPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPosts({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: postTitle,
        body: postBody,
        reactions: reactions,
        tags: tags,
      },
    });
  };

  const deletePost = (id) => {
    dispatchPosts({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        posts,
        addNewPost,
        deletePost,
      }}
    >
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListContext.Provider>
  );
}

export default App;

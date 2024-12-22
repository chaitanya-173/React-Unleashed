import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";

// const initialPostList = [
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

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      ></Sidebar>
      <div className="content">
        <Header></Header>
        {selectedTab === "Home" ? (
          <PostList></PostList>
        ) : (
          <CreatePost></CreatePost>
        )}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

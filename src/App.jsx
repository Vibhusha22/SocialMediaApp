import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListProvider from "./store/PostStore";

function App() {
  const [currTab, setCurrTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="Container">
        <Sidebar currTab={currTab} setCurrTab={setCurrTab}></Sidebar>
        <div className="Main">
          <Header></Header>
          {currTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

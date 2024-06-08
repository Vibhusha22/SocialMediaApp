import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import { useState } from "react";

function App() {
  const [currTab, setCurrTab] = useState("Home");
  return (
    <div className="Container">
      <Sidebar currTab={currTab} setCurrTab={setCurrTab}></Sidebar>
      <div className="Main">
        <Header></Header>
        {currTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

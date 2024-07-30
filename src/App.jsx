import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import PostListProvider from "./store/PostStore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="Container">
        <Sidebar></Sidebar>
        <div className="Main">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

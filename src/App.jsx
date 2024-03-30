import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import PostContainer from "./components/PostContainer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";
import TopUsers from "./components/TopUsers.jsx";
import OnlineUsers from "./components/OnlineUsers.jsx";
import Chat from "./components/Chat.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [isChatActive, setIsChatActive] = useState(true);

  return (
    <>
      <Navbar />
      {console.log(sortOption)}
      <SearchBar searchChange={setSearch} sortChange={setSortOption} />
      <div className="d-flex justify-content-between">
        <OnlineUsers posts={posts} setIsChatActive={setIsChatActive} />
        {isChatActive ? (
          <PostContainer
            searchWord={search}
            posts={posts}
            setPosts={setPosts}
            sortOption={sortOption}
          />
        ) : (
          <Chat setIsChatActive={setIsChatActive} />
        )}
        <TopUsers posts={posts} />
      </div>
    </>
  );
}

export default App;

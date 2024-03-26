import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import PostContainer from "./components/PostContainer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";
import TopUsers from "./components/TopUsers.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [sortOption, setSortOption] = useState("");

  return (
    <>
      <Navbar />
      {console.log(sortOption)}
      <SearchBar searchChange={setSearch} sortChange={setSortOption} />
      <div className="d-flex justify-content-between">
        <div className="w-25"></div>
        <PostContainer
          searchWord={search}
          posts={posts}
          setPosts={setPosts}
          sortOption={sortOption}
        />
        <TopUsers posts={posts} />
      </div>
    </>
  );
}

export default App;

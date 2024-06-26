import { useState } from "react";
import PostContainer from "../components/PostContainer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import TopUsers from "../components/TopUsers.jsx";
import OnlineUsers from "../components/OnlineUsers.jsx";

function HomePage() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [isChatActive, setIsChatActive] = useState(true);
  const [filterValues, setFilterValues] = useState({ min: 0, max: 1000 });

  return (
    <>
      <SearchBar
        searchChange={setSearch}
        sortChange={setSortOption}
        filterChange={setFilterValues}
        filterValues={filterValues}
      />
      <div className="d-flex justify-content-between">
        <OnlineUsers posts={posts} setIsChatActive={setIsChatActive} />
        <PostContainer
          searchWord={search}
          posts={posts}
          setPosts={setPosts}
          sortOption={sortOption}
          filterValues={filterValues}
        />
        <TopUsers posts={posts} />
      </div>
    </>
  );
}

export default HomePage;

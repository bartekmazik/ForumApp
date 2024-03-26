import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import PostContainer from "./components/PostContainer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <SearchBar searchChange={setSearch} />
      <PostContainer searchWord={search} />
    </>
  );
}

export default App;

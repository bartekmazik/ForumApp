import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbars from "./components/Navbar.jsx";
import PostContainer from "./components/PostContainer.jsx";
import SearchBar from "./components/SearchBar.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbars />
      <SearchBar />
      <PostContainer />
    </>
  );
}

export default App;

import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import Profile from "./pages/Profile.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar isLogged={isLogged} />
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="login"
              element={
                <LoginPage setIsLogged={setIsLogged} isLogged={isLogged} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

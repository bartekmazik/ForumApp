import React from "react";
import { Link } from "react-router-dom";

function ProfileDropdown() {
  return (
    <>
      <div className="dropdown my-2">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="src/assets/avatar.svg"
            width={"32px"}
            height={"32px"}
            alt="Avatar"
          />
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <div className="dropdown-item ">
              <Link to="/profile" className="text-decoration-none text-dark">
                Profile
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
function LoginButton() {
  return (
    <>
      <Link to="/login" className="btn btn-light">
        Login
      </Link>
    </>
  );
}
function Navbar(props) {
  const isLogged = props.isLogged;
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            ForumApp
          </Link>
          {isLogged ? <ProfileDropdown /> : <LoginButton />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

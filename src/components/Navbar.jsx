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
          <img src="src/assets/avatar.svg" width={"32px"} height={"32px"} />
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className="dropdown-item">
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

function Navbar() {
  return (
    <>
      <div className="d-flex justify-content-between px-2 align-items-center w-10 bg-secondary">
        <h2>
          <Link to="/" className="text-decoration-none text-light">
            ForumApp
          </Link>
        </h2>
        <ProfileDropdown />
      </div>
    </>
  );
}

export default Navbar;

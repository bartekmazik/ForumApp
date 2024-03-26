import React from "react";
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
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Login
            </a>
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
        <img
          src="src/assets/logo.svg"
          height={"32px"}
          className="mx-2"
          onClick={() => {
            console.log("im logo");
          }}
          //fill={"transparent"}
        />
        <ProfileDropdown />
      </div>
    </>
  );
}

export default Navbar;

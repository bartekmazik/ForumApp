import React from "react";

function SearchBar(prop) {
  const searchChange = prop.searchChange;
  const sortChange = prop.sortChange;
  const handleChange = (event) => {
    searchChange(event.target.value);
  };
  const setMax = () => {
    sortChange("max");
  };
  const setMin = () => {
    sortChange("min");
  };
  const setDefault = () => {
    sortChange("");
  };

  return (
    <div className="w-50 container ">
      <form className=" d-flex justify-content-center m-5 p-1">
        <input
          placeholder="Search"
          className="w-50 rounded"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle border border-secondary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sort
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" role="button" onClick={setMax}>
                By most characters
              </a>
            </li>
            <li>
              <a className="dropdown-item" role="button" onClick={setMin}>
                By least characters
              </a>
            </li>
            <li>
              <a className="dropdown-item" role="button" onClick={setDefault}>
                Default
              </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle border border-secondary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

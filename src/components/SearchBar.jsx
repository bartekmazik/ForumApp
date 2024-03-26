import React from "react";

function SearchBar(prop) {
  const searchChange = prop.searchChange;
  const handleChange = (event) => {
    searchChange(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="w-50 container">
      <form className=" d-flex justify-content-center m-5 p-1">
        <input
          placeholder="Search"
          className=" rounded"
          onChange={handleChange}
        ></input>
        <button className=" rounded">filter</button>
      </form>
    </div>
  );
}

export default SearchBar;

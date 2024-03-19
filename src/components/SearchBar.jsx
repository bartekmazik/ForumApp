import React from "react";

function SearchBar() {
  return (
    <div>
      <form className="rounded">
        <input placeholder="Search" className="mt-3 rounded"></input>
        <button>filter</button>
      </form>
    </div>
  );
}

export default SearchBar;

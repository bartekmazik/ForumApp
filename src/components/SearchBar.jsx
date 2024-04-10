import React, { useState } from "react";

function SearchBar(props) {
  const { searchChange, sortChange, filterChange, filterValues } = props;

  
  const defaultMinLength = 1;
  const defaultMaxLength = 1000;

  const [minLength, setMinLength] = useState(""); 
  const [maxLength, setMaxLength] = useState(""); 

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

  const handleApplyFilters = () => {
    // default if label is empty
    const min = minLength === "" ? defaultMinLength : minLength;
    const max = maxLength === "" ? defaultMaxLength : maxLength;

    filterChange({
      min,
      max,
    });
  };

  return (
    <div className="w-50 container">
      <form className="d-flex justify-content-center m-5 p-1 align-items-center">
        <div>
          <button className="w-50 bg-primary mx-3 rounded-circle text-light">
            +
          </button>
        </div>
        <input
          placeholder="Search"
          className="w-50 rounded"
          onChange={handleChange}
        />
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
            <li className="mx-1">
              <label className="form-label">Range of words</label>
              <div className="d-flex justify-content-around">
                <span>From</span>
                <input
                  type="number"
                  value={minLength}
                  onChange={(e) => setMinLength(e.target.value)}
                />
                <span>To</span>
                <input
                  type="number"
                  value={maxLength}
                  onChange={(e) => setMaxLength(e.target.value)}
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleApplyFilters}
                >
                  Apply
                </button>
              </div>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

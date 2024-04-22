import React, { useState } from "react";

function SearchBar({ searchChange, sortChange, filterChange }) {
  const defaultMinLength = 1;
  const defaultMaxLength = 1000;

  const [minLength, setMinLength] = useState(defaultMinLength);
  const [maxLength, setMaxLength] = useState(defaultMaxLength);

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
    const min = minLength >= 0 ? minLength : defaultMinLength;
    const max = maxLength >= 0 ? maxLength : defaultMaxLength;

    if (min <= max) {
      filterChange({
        min,
        max,
      });
    } else {
      alert("Max value must be greater than or equal to min value");
    }
  };

  return (
    <div className="w-50 container">
      <form className="d-flex justify-content-center m-4  align-items-center">
        <div>
          <button className="w-50 bg-secondary mx-3 rounded-circle text-light">
            +
          </button>
        </div>
        <input
          placeholder="Search"
          className="w-50 my-3 rounded"
          onChange={handleChange}
        />
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle border border-secondary"
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
            className="btn btn-light dropdown-toggle border border-secondary"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter
          </button>
          <ul className="dropdown-menu">
            <li className="mx-1">
              <label className="form-label" htmlFor="fromInput">
                From
              </label>
              <div>
                <input
                  id="fromInput"
                  type="number"
                  value={minLength}
                  min="0"
                  className="form-control"
                  onChange={(e) => setMinLength(parseInt(e.target.value))}
                />
              </div>
            </li>
            <li className="mx-1">
              <label className="form-label" htmlFor="toInput">
                To
              </label>
              <div className="d-flex justify-content-around">
                <input
                  id="toInput"
                  type="number"
                  value={maxLength}
                  min="0"
                  className="form-control"
                  onChange={(e) => setMaxLength(parseInt(e.target.value))}
                />
              </div>
              <button
                className="btn btn-secondary mt-2"
                type="button"
                onClick={handleApplyFilters}
              >
                Apply
              </button>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

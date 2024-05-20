import React, { useState } from "react";

function SearchBar({ searchChange, sortChange, filterChange }) {
  const defaultMinLength = 1;
  const defaultMaxLength = 1000;

  const [minLength, setMinLength] = useState(defaultMinLength);
  const [maxLength, setMaxLength] = useState(defaultMaxLength);
  const [error, setError] = useState("");

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
      setError("");
    } else {
      const errorMessage =
        "Max value must be greater than or equal to min value";
      console.error(errorMessage);
      setError(errorMessage);
    }
  };

  return (
    <div className="container mx-auto  d-md-flex justify-content-center ">
      <form className="d-flex justify-content-center my-4 align-items-center">
        <div>
          <button className="btn btn-secondary mx-2 rounded-circle text-light">
            +
          </button>
        </div>
        <input
          placeholder="Search"
          className="form-control "
          onChange={handleChange}
        />
        {/*Sort menu*/}
        <div className="d-none d-md-flex">
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
                <button className="dropdown-item" onClick={setMax}>
                  By most characters
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={setMin}>
                  By least characters
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={setDefault}>
                  Default
                </button>
              </li>
            </ul>
          </div>
          {/*Filter menu*/}
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
                {error && <p className="text-danger mt-2">{error}</p>}
              </li>
            </ul>
          </div>

          {/*Max posts menu*/}
          <div className="dropdown">
            <button
              className="btn btn-light dropdown-toggle border border-secondary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Max Per Page
            </button>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleMaxPerPageChange(5)}
                >
                  5
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleMaxPerPageChange(10)}
                >
                  10
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => handleMaxPerPageChange(15)}
                >
                  15
                </button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;

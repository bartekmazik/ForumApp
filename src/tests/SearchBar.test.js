import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar.jsx";

test("SearchBar renders correctly", () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  const searchInput = getByPlaceholderText("Search");
  expect(searchInput).toBeInTheDocument();
});

test("SearchBar sorts by most characters", () => {
  const sortChangeMock = jest.fn();
  const { getByText } = render(<SearchBar sortChange={sortChangeMock} />);
  const maxButton = getByText("By most characters");
  fireEvent.click(maxButton);
  expect(sortChangeMock).toHaveBeenCalledWith("max");
});

test("SearchBar filters by range of words", () => {
  const filterChangeMock = jest.fn();
  const { getByText, getByLabelText, getByRole } = render(
    <SearchBar filterChange={filterChangeMock} />
  );
  const fromInput = getByLabelText("From");
  const toInput = getByLabelText("To");
  const applyButton = getByRole("button", { name: "Apply" });

  fireEvent.change(fromInput, { target: { value: "3" } });
  fireEvent.change(toInput, { target: { value: "6" } });
  fireEvent.click(applyButton);

  expect(filterChangeMock).toHaveBeenCalledWith({ min: "3", max: "6" });
});

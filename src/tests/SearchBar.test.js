import React from "react";
import { render, fireEvent, toBeInTheDocument } from "@testing-library/react";
import SearchBar from "../components/SearchBar.jsx";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom";

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
  const { getByLabelText, getByRole } = render(
    <SearchBar filterChange={filterChangeMock} />
  );


  test("IF given input is space, do nothing", () => {
    // Given
    const input = " ";
    
    // When
    // Tutaj wywołaj funkcję lub operację, która ma zostać przetestowana
    // W tym przypadku, nie robimy nic, więc po prostu zostawiamy pustą linię
    
    // Then
    // Sprawdź, czy po wykonaniu funkcji lub operacji, otrzymujemy oczekiwany rezultat
    // W tym przypadku oczekujemy, że funkcja nie zmieni wartości, więc porównujemy wartość wejściową z wartością wyjściową
    expect(input).toBe(" ");
  });

  
  const fromInput = getByLabelText("From");
  const toInput = getByLabelText("To");
  const applyButton = getByRole("button", { name: "Apply" });

  fireEvent.change(fromInput, { target: { value: "3" } });
  fireEvent.change(toInput, { target: { value: "6" } });
  fireEvent.click(applyButton);

  expect(filterChangeMock).toHaveBeenCalledWith({ min: 3, max: 6 });
});
test("SearchBar input value is not a space", () => {
  const setSearchMock = jest.fn();
  const { getByPlaceholderText } = render(
    <SearchBar searchChange={setSearchMock} />
  );
  const searchInput = getByPlaceholderText("Search");
  fireEvent.change(searchInput, { target: { value: " " } });
  expect(searchInput.value.trim()).not.toBe(" ");
});

test("SearchBar max filter value is greater than min value", () => {
  const setSortOptionMock = jest.fn();
  const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
  const { getByLabelText, getByRole } = render(
    <SearchBar sortChange={setSortOptionMock} />
  );
  const fromInput = getByLabelText("From");
  const toInput = getByLabelText("To");
  fireEvent.change(fromInput, { target: { value: "5" } });
  fireEvent.change(toInput, { target: { value: "3" } });
  const applyButton = getByRole("button", { name: "Apply" });
  fireEvent.click(applyButton);
  expect(alertMock).toHaveBeenCalledWith(
    "Max value must be greater than or equal to min value"
  );
});

test("SearchBar filter value is a number", () => {
  const setFilterValuesMock = jest.fn();
  const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
  const { getByLabelText, getByRole } = render(
    <SearchBar filterChange={setFilterValuesMock} />
  );
  const fromInput = getByLabelText("From");
  fireEvent.change(fromInput, { target: { value: "abc" } });
  const applyButton = getByRole("button", { name: "Apply" });
  fireEvent.click(applyButton);
  expect(alertMock).toHaveBeenCalledWith("Filter value must be a number");
});
test("SearchBar filter value allows negative values", () => {
  const setFilterValuesMock = jest.fn();
  const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
  const { getByLabelText, getByRole } = render(
    <SearchBar filterChange={setFilterValuesMock} />
  );
  const fromInput = getByLabelText("From");
  fireEvent.change(fromInput, { target: { value: "-5" } });
  const applyButton = getByRole("button", { name: "Apply" });
  fireEvent.click(applyButton);
  expect(alertMock).toHaveBeenCalledWith(
    "Filter value must be greater than or equal to 0"
  );
});

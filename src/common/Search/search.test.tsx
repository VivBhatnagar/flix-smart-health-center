import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./search";

describe("Search Component", () => {
  const mockHandleSearch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders the search input and placeholder correctly", () => {
    render(<Search handleSearch={mockHandleSearch} />);

    // Checked if the input is rendered
    const input = screen.getByPlaceholderText("Search FAQ's...");
    expect(input).toBeInTheDocument();
  });

  it("updates the input value when the user types", () => {
    render(<Search handleSearch={mockHandleSearch} />);

    // Type in the input
    const input = screen.getByPlaceholderText("Search FAQ's...");
    fireEvent.change(input, { target: { value: "React" } });

    // Checked if the input value is updated
    expect(input).toHaveValue("React");
  });

  it("calls handleSearch after a delay when the user types", () => {
    render(<Search handleSearch={mockHandleSearch} />);

    // Type in the input
    const input = screen.getByPlaceholderText("Search FAQ's...");
    fireEvent.change(input, { target: { value: "React" } });

    // Fast-forward the timer
    jest.advanceTimersByTime(300);

    // Check if handleSearch is called
    expect(mockHandleSearch).toHaveBeenCalledWith("React");
  });

  it("clears the input when the clear button is clicked", () => {
    render(<Search handleSearch={mockHandleSearch} />);

    // Type in the input
    const input = screen.getByPlaceholderText("Search FAQ's...");
    fireEvent.change(input, { target: { value: "React" } });

    // Click the clear button
    const clearButton = screen.getByRole("button", { name: /Clear Search/ });
    fireEvent.click(clearButton);

    // Check if the input is cleared
    expect(input).toHaveValue("");
  });

  it("does not show the clear button when the input is empty", () => {
    render(<Search handleSearch={mockHandleSearch} />);

    // Check if the clear button is not present
    const clearButton = screen.queryByRole("button", { name: /Clear Search/ });
    expect(clearButton).not.toBeInTheDocument();
  });

  it("shows the clear button when the input is not empty", () => {
    render(<Search handleSearch={mockHandleSearch} />);

    // Type in the input
    const input = screen.getByPlaceholderText("Search FAQ's...");
    fireEvent.change(input, { target: { value: "React" } });

    // Check if the clear button is present
    const clearButton = screen.getByRole("button", { name: /Clear Search/ });
    expect(clearButton).toBeInTheDocument();
  });
});

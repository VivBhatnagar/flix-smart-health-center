import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FaqsList from "./faqs";
import { FaqType } from "@common/Interface/faq";

// Mocked data for testing
const mockFaqs: FaqType[] = [
  { id: '1', name: "How to use React?", icon: "Follow the documentation." },
  { id: '2', name: "What is Tailwind CSS?", icon: "A utility-first CSS framework." },
];

// Mocked Search component
jest.mock("@common/Search/search", () => ({
  __esModule: true,
  default: ({ handleSearch }: { handleSearch: (term: string) => void }) => (
    <input
      data-testid="search-input"
      type="text"
      onChange={(e) => handleSearch(e.target.value)}
      />
  ),
}));

// Mocked Card component
jest.mock("./card", () => ({
  __esModule: true,
  default: ({ faq }: { faq: FaqType }) => <div data-testid="faq-card">{faq.name}</div>,
}));

describe("FaqsList Component", () => {
  it("renders the list of FAQs correctly", () => {
    render(<FaqsList faqs={mockFaqs} />);
    const faqCards = screen.getAllByTestId("faq-card");
    expect(faqCards).toHaveLength(mockFaqs.length);
    expect(faqCards[0]).toHaveTextContent("How to use React?");
    expect(faqCards[1]).toHaveTextContent("What is Tailwind CSS?");
  });

  
  beforeEach(() => {
    // Reset the mock before each test
    jest.clearAllMocks();
  });

  it("filters FAQs based on search term", () => {
    render(<FaqsList faqs={mockFaqs} />);

    // Simulate typing in the search input
    const searchInput = screen.getByTestId("search-input");
    screen.debug();
    fireEvent.change(searchInput, { target: { value: "React" } });

    // Check if only the matching FAQ is rendered
    const faqCards = screen.getAllByTestId("faq-card");
    expect(faqCards).toHaveLength(1);
    expect(faqCards[0]).toHaveTextContent("How to use React?");
  });

  it("displays 'No FAQs found' when no FAQs match the search term", () => {
    render(<FaqsList faqs={mockFaqs} />);

    // Simulate typing a search term that doesn't match any FAQ
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Angular" } });

    // Check if the 'No FAQs found' message is displayed
    const noFaqsMessage = screen.getByText("No FAQs found");
    expect(noFaqsMessage).toBeInTheDocument();
  });

  it("resets the FAQ list when the search term is cleared", () => {
    render(<FaqsList faqs={mockFaqs} />);

    // Simulate typing and then clearing the search input
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "React" } });
    fireEvent.change(searchInput, { target: { value: "" } });

    // Check if all FAQs are rendered again
    const faqCards = screen.getAllByTestId("faq-card");
    expect(faqCards).toHaveLength(mockFaqs.length);
  });
});
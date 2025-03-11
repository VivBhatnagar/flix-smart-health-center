import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./card";
import { FaqType } from "@common/Interface/faq";

// Mocked the Button component
jest.mock("@components/Faqs/Button", () => ({
  __esModule: true,
  default: ({ faqId, name }: { faqId: string; name: string }) => (
    <button data-testid="learn-more-button">{name}</button>
  ),
}));

// Mocked the Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => (
    <img src={src} alt={alt} width={width} height={height} data-testid="faq-icon" />
  ),
}));

describe("Card Component", () => {
  const mockFaq: FaqType = {
    id: "1",
    name: "How to use React?",
    icon: "/path/to/icon.png",
  };

  
  beforeEach(() => {
    // Reset the mock implementation before each test
    jest.clearAllMocks();
  });

  it("renders the card with correct props", () => {
    render(<Card faq={mockFaq} faqsLength={4} />);

    // Check if the FAQ name is rendered
    const faqName = screen.getByText("How to use React?");
    expect(faqName).toBeInTheDocument();

    // Check if the icon is rendered with the correct props
    const faqIcon = screen.getByTestId("faq-icon");
    expect(faqIcon).toHaveAttribute("src", "/path/to/icon.png");
    expect(faqIcon).toHaveAttribute("alt", "How to use React?");
    expect(faqIcon).toHaveAttribute("width", "32");
    expect(faqIcon).toHaveAttribute("height", "32");

    // Check if the "Learn More" button is rendered
    const learnMoreButton = screen.getByTestId("learn-more-button");
    expect(learnMoreButton).toBeInTheDocument();
    expect(learnMoreButton).toHaveTextContent("Learn More");
  });

  it("applies correct styling when faqsLength is less than or equal to 3", () => {
    render(<Card faq={mockFaq} faqsLength={3} />);

    // Check if the card has the correct width class
    const card = screen.getByRole("listitem");
    expect(card).toHaveClass("w-[45%] md:w-[40%]");
  });

  it("applies correct styling when faqsLength is greater than 3", () => {
    render(<Card faq={mockFaq} faqsLength={4} />);

    // Check if the card has the correct width class
    const card = screen.getByRole("listitem");
    expect(card).toHaveClass("w-[70%] sm:w-[48%] md:w-[30%] lg:w-[25%] xl:w-[22%]");
  });

  it("adjusts width based on screen size and faqsLength", () => {
    // Simulate a small screen (mobile)
    window.resizeTo(375, 667); // Mobile screen size
    const { rerender } = render(<Card faq={mockFaq} faqsLength={4} />);
    let card = screen.getByRole("listitem");
    expect(card).toHaveClass("w-[70%]");

    // Simulate a medium screen (tablet)
    window.resizeTo(768, 1024); // Tablet screen size
    rerender(<Card faq={mockFaq} faqsLength={4} />);
    card = screen.getByRole("listitem");
    expect(card).toHaveClass("sm:w-[48%]");

    // Simulate a large screen (desktop)
    window.resizeTo(1200, 800); // Desktop screen size
    rerender(<Card faq={mockFaq} faqsLength={4} />);
    card = screen.getByRole("listitem");
    expect(card).toHaveClass("md:w-[30%] lg:w-[25%] xl:w-[22%]");
  });
});
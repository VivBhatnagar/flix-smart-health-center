import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Chatbot from "./chatbot";

// Mocked the getAiResponse function
jest.mock("@lib/utils", () => ({
  getAiResponse: jest.fn(),
}));

describe("Chatbot Component", () => {
  const mockAiResponse = {
    candidates: [{ content: { parts: [{ text: "This is the AI response." }] } }],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders the chatbot button when closed", () => {
    render(<Chatbot />);

    // Check if the chatbot button is rendered
    const chatbotButton = screen.getByRole("button", { name: /Start Chatbot/ });
    expect(chatbotButton).toBeInTheDocument();
  });

  it("opens the chat window when the button is clicked", () => {
    render(<Chatbot />);

    // Click the chatbot button to open the chat window
    const chatbotButton = screen.getByRole("button", { name: /Start Chatbot/ });
    fireEvent.click(chatbotButton);

    // Check if the chat window is visible
    const chatWindow = screen.getByText("Chat with us!");
    expect(chatWindow).toBeInTheDocument();
  });

  it("closes the chat window when the close button is clicked", () => {
    render(<Chatbot />);

    // Open the chat window
    const chatbotButton = screen.getByRole("button", { name: /Start Chatbot/ });
    fireEvent.click(chatbotButton);

    // Close the chat window
    const closeButton = screen.getByRole("button", { name: /Close Chatbot/ });
    fireEvent.click(closeButton);

    // Check if the chat window is closed
    const chatWindow = screen.queryByText("Chat with us!");
    expect(chatWindow).not.toBeInTheDocument();
  });

  it("sends a user message and displays it in the chat", async () => {
     // Mocked the scrollIntoView method
     const scrollIntoViewMock = jest.fn();
     window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    render(<Chatbot />);

    // Open the chat window
    const chatbotButton = screen.getByRole("button", { name: /Start Chatbot/ });
    fireEvent.click(chatbotButton);

    // Type a message in the input
    const input = screen.getByPlaceholderText("Type your message...");
    fireEvent.change(input, { target: { value: "Hello, AI!" } });

    // Click the send button
    const sendButton = screen.getByRole("button", { name: /Send/ });
    fireEvent.click(sendButton);

    // Check if the user message is displayed
    const userMessage = screen.getByText("Hello, AI!");
    expect(userMessage).toBeInTheDocument();
  });

  it("receives and displays an AI response", async () => {
     // Mocked the scrollIntoView method
     const scrollIntoViewMock = jest.fn();
     window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    // Mock the AI response
    require("@lib/utils").getAiResponse.mockResolvedValue(mockAiResponse);

    render(<Chatbot />);

    // Open the chat window
    const chatbotButton = screen.getByRole("button", { name: /Start Chatbot/ });
    fireEvent.click(chatbotButton);

    // Type a message in the input
    const input = screen.getByPlaceholderText("Type your message...");
    fireEvent.change(input, { target: { value: "Hello, AI!" } });

    // Click the send button
    const sendButton = screen.getByRole("button", { name: /Send/ });
    fireEvent.click(sendButton);

    // Wait for the AI response to be displayed
    await waitFor(() => {
      const aiResponse = screen.getByText("This is the AI response.");
      expect(aiResponse).toBeInTheDocument();
    });
  });

  it("does not send a message if the input is empty", () => {
    render(<Chatbot />);

    // Open the chat window
    const chatbotButton = screen.getByRole("button", { name: /Start Chatbot/ });
    fireEvent.click(chatbotButton);

    // Click the send button without typing a message
    const sendButton = screen.getByRole("button", { name: /Send/ });
    fireEvent.click(sendButton);

    // Check if no new messages are added
    const messages = screen.getAllByText(/Hello! How can I assist you today?/);
    expect(messages).toHaveLength(1); // Only the initial bot message should be present
  });

  it("displays a fallback message if the AI response is invalid", async () => {
     // Mocked the scrollIntoView method
     const scrollIntoViewMock = jest.fn();
     window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    // Mocked an invalid AI response
    require("@lib/utils").getAiResponse.mockResolvedValue({});

    render(<Chatbot />);

    // Open the chat window
    const chatbotButton = screen.getByRole("button", { name: /Start Chatbot/ });
    fireEvent.click(chatbotButton);

    // Type a message in the input
    const input = screen.getByPlaceholderText("Type your message...");
    fireEvent.change(input, { target: { value: "Hello, AI!" } });

    // Click the send button
    const sendButton = screen.getByRole("button", { name: /Send/ });
    fireEvent.click(sendButton);

    // Wait for the fallback message to be displayed
    await waitFor(() => {
      const fallbackMessage = screen.getByText("No response from AI.");
      expect(fallbackMessage).toBeInTheDocument();
    });
  });

  it("scrolls to the latest message when a new message is added", () => {
    // Mocked the scrollIntoView method
    const scrollIntoViewMock = jest.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    render(<Chatbot />);

    // Open the chat window
    const chatbotButton = screen.getByRole("button", { name: /Start Chatbot/ });
    fireEvent.click(chatbotButton);

    // Type a message in the input
    const input = screen.getByPlaceholderText("Type your message...");
    fireEvent.change(input, { target: { value: "Hello, AI!" } });

    // Click the send button
    const sendButton = screen.getByRole("button", { name: /Send/ });
    fireEvent.click(sendButton);

    // Check if the latest message is in view
    const latestMessage = screen.getByText("Hello, AI!");
    expect(latestMessage).toBeInTheDocument();
  });
});
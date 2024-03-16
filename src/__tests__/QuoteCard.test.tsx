import { render } from "@testing-library/react";
import { QuoteCard } from "../components";

const mockQuote = {
  _id: "1",
  author: "John Doe",
  dateAdded: "2023-01-01",
  length: 10,
  tags: ["tag1", "tag2"],
  dateModified: "2023-01-01",
  content: "Lorem ipsum dolor sit amet",
  authorSlug: "john-doe",
};

describe("QuoteCard", () => {
  test("renders quote details", () => {
    const { getByText } = render(<QuoteCard quote={mockQuote} />);
    expect(getByText("John Doe")).toBeInTheDocument();
  });
});

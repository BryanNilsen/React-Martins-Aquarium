import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders nav", () => {
  render(<App />);
  const navText = screen.getByText(/Martin's Aquarium/i);
  expect(navText).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import { Nav } from "./components/Nav";

test("renders nav", () => {
  render(<Nav />);
  const navText = screen.getByText(/Martin's Aquarium/i);
  expect(navText).toBeInTheDocument();
});

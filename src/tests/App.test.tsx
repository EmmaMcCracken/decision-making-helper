import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

test("renders title in header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Decision Making Helper/i);
  expect(linkElement).toBeInTheDocument();
});

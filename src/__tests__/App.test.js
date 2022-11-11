import { render, screen } from "@testing-library/react";
import App from "../js/components/App";

test("renders Weather App header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Dnipro/i);
  expect(headerElement).toBeInTheDocument();
});

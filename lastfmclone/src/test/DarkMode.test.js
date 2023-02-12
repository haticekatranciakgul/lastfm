import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";

const MockLogoHeader = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

test("Header have dark-ligth mode button", () => {
  render(<MockLogoHeader />);

  const darkModeBtn = screen.getByRole("button");
  expect(darkModeBtn).toBeInTheDocument();
});


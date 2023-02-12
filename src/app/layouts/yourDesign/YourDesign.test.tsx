import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import YourDesign from "./YourDesign";

test("test YourDesign component", () => {
  render(
    <MemoryRouter>
      <YourDesign />
    </MemoryRouter>
  );

  screen.getByTestId("your-design-page");
});

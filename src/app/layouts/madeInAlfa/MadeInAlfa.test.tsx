import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MadeInAlfa from "./MadeInAlfa";

test("test MadeInAlfa component", () => {
  render(
    <MemoryRouter>
      <MadeInAlfa />
    </MemoryRouter>
  );

  screen.getByTestId("made-in-alfa-page");
});

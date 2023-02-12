import { render, screen } from "@testing-library/react";
import MadeInAlfa from "../layouts/madeInAlfa/MadeInAlfa";
import { renderWithRouter } from "./helpers/renderWithRouter";

describe("Test App", () => {
  test("Router test", () => {
    render(renderWithRouter(null));

    expect(screen.getByTestId("your-design")).toBeInTheDocument();
  });

  test("Router test", () => {
    render(renderWithRouter(<MadeInAlfa />));

    expect(screen.getByTestId("made-in-alfa-page")).toBeInTheDocument();
  });
});

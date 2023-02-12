import { MemoryRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

export const renderWithRouter = (component: any, initialRoute = "/") => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};

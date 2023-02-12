import { useRoutes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import routes from "./routes";

const App = () => {
  const elements = useRoutes(routes());
  return (
    <>
      <Header />
      {elements}
      <Footer />
    </>
  );
};

export default App;

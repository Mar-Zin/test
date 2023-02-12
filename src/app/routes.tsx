import { Navigate } from "react-router-dom";
import Cart from "./layouts/cart/Cart";
import ContactUs from "./layouts/contactUs/ContactUs";
import MadeInAlfa from "./layouts/madeInAlfa/MadeInAlfa";
import Main from "./layouts/main/Main";
import YourDesign from "./layouts/yourDesign/YourDesign";
import ProductPage from "./components/pages/productPage/ProductPage";

const routes = () => [
  {
    path: "",
    element: <Main />,
  },
  {
    path: "madeInAlfa",
    element: <MadeInAlfa />,
  },
  {
    path: "catalog/:productId",
    element: <ProductPage />,
  },
  {
    path: "yourDedign",
    element: <YourDesign />,
  },
  {
    path: "contactUs",
    element: <ContactUs />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <Navigate to="" />,
  },
];

export default routes;

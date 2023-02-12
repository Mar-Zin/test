import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "../../components/pages/productPage/ProductPage";
import Cart from "../../layouts/cart/Cart";
import ContactUs from "../../layouts/contactUs/ContactUs";
import MadeInAlfa from "../../layouts/madeInAlfa/MadeInAlfa";
import Main from "../../layouts/main/Main";
import YourDesign from "../../layouts/yourDesign/YourDesign";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="/madeInAlfa" element={<MadeInAlfa />} />
      <Route path="catalog/:productId" element={<ProductPage />} />
      <Route path="/yourDedign" element={<YourDesign />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="" />} />
    </Routes>
  );
};

export default AppRouter;

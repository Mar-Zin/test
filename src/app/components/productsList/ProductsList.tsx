import Product from "../product/Product";
import api from "../../api/products.json";

const ProductsList = () => {
  return (
    <div className="mt-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      {api.products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsList;

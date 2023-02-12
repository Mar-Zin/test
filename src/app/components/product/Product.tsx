import { FC } from "react";
import { Link } from "react-router-dom";
import priceEdit from "../../utils/priceEdit/priceEdit";

export interface iProduct {
  id: number;
  preview: string;
  images?: string[];
  title: string;
  subtitle?: string;
  price: number;
  description?: string;
  colors?: string[];
  sizes?: string[];
  stickerNumbers?: number[];
  availability: boolean;
}

const Product: FC<iProduct> = ({ ...product }) => {
  return (
    <div>
      <Link to={`../catalog/${product.id}`}>
        <div
          className={`bg-center bg-no-repeat bg-cover h-[373px] `}
          style={{ backgroundImage: `url(${product.preview})` }}
        ></div>
        <div className="text-[20px] leading-7 font-medium">
          <div className="mt-5">{product.title}</div>
          <div className="text-alfa-grey text-xs pt-2">{product.subtitle}</div>
          <div className="mt-2 text-xl font-extrabold">
            {priceEdit(product.price)} <span className="rouble">g</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;

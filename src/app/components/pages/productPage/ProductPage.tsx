import { useParams } from "react-router-dom";
import ScreenWidthWrapper from "../../common/ScreenWidthWrapper";
import api from "../../../api/allProducts.json";
import priceEdit from "../../../utils/priceEdit/priceEdit";
import { useState } from "react";
import SelectForm from "../../common/selectForm/SelectForm";

const ProductPage = () => {
  const { productId } = useParams();
  const product = api.allProducts.find((item) => item.id === Number(productId));

  const [activeImg, setActiveImg] = useState<string | undefined>(
    product?.images[0]
  );

  const handleChangeImg = (img: string) => {
    setActiveImg(img);
  };

  return (
    <ScreenWidthWrapper>
      <div className="flex">
        <div className="basis-1/2 pr-4">
          <div
            className={`bg-center bg-no-repeat bg-cover h-[745px] w-[560px] transition-all duration-200 delay-100 ease-in-out`}
            style={{ backgroundImage: `url(${activeImg})` }}
          ></div>
          <div className="flex flex-wrap">
            {product?.images?.map((img) => (
              <div
                key={img}
                onClick={() => handleChangeImg(img)}
                className={`bg-center bg-no-repeat bg-cover h-[60px] w-[60px] m-1 hover:opacity-70 duration-200 ease-linear ${
                  img === activeImg ? "border-2 border-alfa-grey/50" : ""
                }`}
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            ))}
          </div>
        </div>
        <div className="basis-1/2 pl-4 pr-24">
          <div className="text-[20px] leading-7 font-medium">
            {product?.title}
          </div>
          <div className="text-xl font-extrabold py-4">
            {priceEdit(Number(product?.price))}{" "}
            <span className="rouble">g</span>
          </div>
          <SelectForm {...product} />
          <div className="text-[12px] leading-6 font-medium pt-8">
            {product?.description}
          </div>
        </div>
      </div>
    </ScreenWidthWrapper>
  );
};

export default ProductPage;

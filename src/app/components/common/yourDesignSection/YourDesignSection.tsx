import { FC } from "react";
import Product, { iProduct } from "../../product/Product";

interface GroupProps {
  group: {
    id: number;
    title: string;
    description: string;
    products: iProduct[];
  };
}

const YourDesignSection: FC<GroupProps> = ({ group }) => {
  return (
    <div className="pb-36">
      <div className="xl:text-[115px] xl:leading-[110px] lg:text-8xl md:text-6xl text-4xl text-alfa-red font-extrabold tracking-tight">
        {group.title}
      </div>
      <div className="pt-6 md:text-[20px] text-xl font-medium">
        {group.description}
      </div>
      <div className="pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {group.products.map((product: iProduct) => (
          <Product {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default YourDesignSection;

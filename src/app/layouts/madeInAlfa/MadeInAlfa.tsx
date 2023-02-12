import ProductsList from "../../components/productsList/ProductsList";
import ScreenWidthWrapper from "../../components/common/ScreenWidthWrapper";

const MadeInAlfa = () => {
  return (
    <ScreenWidthWrapper>
      <div
        className="xl:text-[110px] lg:text-8xl md:text-6xl text-4xl font-extrabold tracking-tight"
        data-testid="made-in-alfa-page"
      >
        Сделано в Альфе
      </div>
      <div className="md:text-xl text-lg font-medium mt-5">
        Хотим каждую из этих вещей! Себе, родным и друзьям
      </div>
      <ProductsList />
    </ScreenWidthWrapper>
  );
};

export default MadeInAlfa;

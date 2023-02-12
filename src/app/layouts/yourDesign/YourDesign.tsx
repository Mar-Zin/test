import ScreenWidthWrapper from "../../components/common/ScreenWidthWrapper";
import api from "../../api/groups.json";
import YourDesignSection from "../../components/common/yourDesignSection/YourDesignSection";

const YourDesign = () => {
  return (
    <ScreenWidthWrapper>
      <div
        className="xl:text-[110px] lg:text-8xl md:text-6xl text-4xl font-extrabold tracking-tight"
        data-testid="your-design-page"
      >
        Свой дизайн
      </div>
      <div className="md:text-xl font-medium mt-5 pb-20">
        Выберите вещь, а затем — цвет, размер и стикер. <br /> Перенесём стикер
        на вещь как на фото
      </div>
      {api.groups.map((group) => (
        <YourDesignSection group={group} key={group.id} />
      ))}
      <div className="text-black/25 font-medium text-[22px] leading-7 pt-32">
        Посмотреть и потрогать все стикеры можно в A-Store
        <br /> на Технопарке. А ещё там можно добавить сразу
        <br /> несколько стикеров на одну вещь.
      </div>
    </ScreenWidthWrapper>
  );
};

export default YourDesign;

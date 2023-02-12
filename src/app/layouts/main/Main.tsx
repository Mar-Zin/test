import { memo } from "react";
import img1 from "../../../images/1.jpeg";
import img2 from "../../../images/2.jpeg";
import MainBlock from "../../components/common/mainBlock/MainBlock";

const Main = memo(() => {
  return (
    <div className="md:flex min-w-[380px]">
      <MainBlock
        path="madeInAlfa"
        img={img1}
        title="Сделано в Альфе"
        testid="made-in-alfa"
      />
      <MainBlock
        path="yourDedign"
        img={img2}
        title="Свой дизайн"
        testid="your-design"
      />
    </div>
  );
});

export default Main;

import { FC } from "react";
import { Link } from "react-router-dom";

interface MainBlockProps {
  path: string;
  img: any;
  title: string;
  testid: string;
}

const MainBlock: FC<MainBlockProps> = ({ path, img, title, testid }) => {
  return (
    <div className="relative hover:brightness-75 duration-300 ease-linear">
      <Link to={path} data-testid={testid}>
        <img alt={path} src={img} />
        <span className="absolute md:top-24 md:left-9 top-20 left-6 xl:text-[32px] lg:text-3xl text-xl font-bold tracking-tight">
          {title}
        </span>
      </Link>
    </div>
  );
};

export default MainBlock;

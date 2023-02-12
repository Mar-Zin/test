import React, { FC } from "react";
import style from "../../App.module.scss";

interface ScreenWidthWrapperProps {
  children: React.ReactNode;
}

const ScreenWidthWrapper: FC<ScreenWidthWrapperProps> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default ScreenWidthWrapper;

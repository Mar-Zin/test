import { memo } from "react";
import style from "../../App.module.scss";

const Footer = memo(() => {
  return (
    <footer className={style.footer}>
      <span className={style.footer__text}>© ООО «Альфа Фьюче Пипл», 2022</span>
    </footer>
  );
});

export default Footer;

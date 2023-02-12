import { memo, useState } from "react";
import { Link } from "react-router-dom";
import style from "../../App.module.scss";
import MenuSidePanel from "../menuSidePanel/menuSidePanel";

const Header = memo(() => {
  const [open, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(!open);

  return (
    <header className={style.header}>
      <Link to="/" className={style.header__logo}>
        A-Store
      </Link>
      <div className={style.menu}>
        <img
          alt="menu"
          src="https://static.tildacdn.com/tild3833-3762-4238-b266-663861633565/menu.svg"
          className={style.menu__burger}
          onClick={handleModalOpen}
        />
        <span className={style.menu__text} onClick={handleModalOpen}>
          меню
        </span>
      </div>
      <MenuSidePanel open={open} handleModalOpen={handleModalOpen} />
    </header>
  );
});

export default Header;

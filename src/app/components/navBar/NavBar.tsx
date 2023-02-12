import { FC, memo } from "react";
import NavBarLinks from "./NavBarLinks";
import StyledNavLink from "./StyledNavLink";

type NavBarProps = {
  handleModalOpen: () => void;
};

const NavBar: FC<NavBarProps> = memo(({ handleModalOpen }) => {
  return (
    <NavBarLinks>
      <StyledNavLink to="/madeInAlfa" onClick={handleModalOpen}>
        Сделано в Альфе
      </StyledNavLink>
      <StyledNavLink to="/yourDedign" onClick={handleModalOpen}>
        Свой дизайн
      </StyledNavLink>
      <StyledNavLink to="/contactUs" onClick={handleModalOpen}>
        Контакты
      </StyledNavLink>
    </NavBarLinks>
  );
});

export default NavBar;

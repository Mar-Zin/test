import { FC } from "react";

interface NavBarLinksProps {
  children: React.ReactNode;
}

const NavBarLinks: FC<NavBarLinksProps> = ({ children }) => {
  return (
    <div>
      <nav>
        <ul className="flex flex-col">{children}</ul>
      </nav>
    </div>
  );
};

export default NavBarLinks;

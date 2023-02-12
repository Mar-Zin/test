import { FC } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const StyledNavLink: FC<any> = ({ children, className, ...rest }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          className || "",
          "text-4xl font-extrabold px-4 py-2",
          isActive && "opacity-70"
        )
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default StyledNavLink;

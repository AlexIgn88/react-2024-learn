import classNames from "classnames";
import { link, activeLink } from "./navigation-tab.module.scss";
import { NavLink } from "react-router-dom";

const NavigationTab = ({ path, styleClass, title }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        classNames(link, isActive && activeLink, styleClass)
      }
    >
      {title}
    </NavLink>
  );
};

export default NavigationTab;

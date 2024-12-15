import classNames from "classnames";
import { link, activeLink } from "./navigation-tab.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationTab = ({ path, styleClass, title }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={classNames(link, isActive && activeLink, styleClass)}
    >
      {title}
    </Link>
  );
};

export default NavigationTab;

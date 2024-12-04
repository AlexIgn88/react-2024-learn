import { header } from "./header.module.scss";
import SwitchPanel from "../topbar/switch-panel.jsx";
import { isDesktop } from "../../ui/ui-utils.js";

const Header = () => {
  return (
    <header className={header}>
      {isDesktop && <div>Лучшие рестораны</div>}
      <SwitchPanel />
    </header>
  );
};

export default Header;

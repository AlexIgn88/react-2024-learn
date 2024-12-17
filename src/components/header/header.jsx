import { header } from "./header.module.scss";
import SwitchPanel from "../topbar/switch-panel.jsx";
import { isDesktop } from "../../ui/ui-utils.js";

const Header = () => {
  const isDesktopMode = isDesktop();

  return (
    <header className={header}>
      {isDesktopMode && <div>Лучшие рестораны</div>}
      <SwitchPanel />
    </header>
  );
};

export default Header;

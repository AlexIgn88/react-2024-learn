import { header } from "./header.module.scss";
import SwitchPanel from "../topbar/switch-panel.jsx";

const Header = () => {
  return (
    <header className={header}>
      <div>Лучшие рестораны</div>
      <SwitchPanel />
    </header>
  );
};

export default Header;

import SwitchThemeButton from "../switch-theme/switch-theme-button.jsx";
import { switchPanel } from "./switch-panel.module.scss";
import AuthButton from "../auth-button/auth-button.jsx";

const SwitchPanel = () => {
  return (
    <div className={switchPanel}>
      <SwitchThemeButton />
      <AuthButton />
    </div>
  );
};

export default SwitchPanel;

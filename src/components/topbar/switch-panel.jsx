import SwitchThemeButton from "../switch-theme/switch-theme-button.jsx";
import { switchPanel } from "./switch-panel.module.scss";

const SwitchPanel = () => {
  return (
    <div className={switchPanel}>
      <SwitchThemeButton />
    </div>
  );
};

export default SwitchPanel;

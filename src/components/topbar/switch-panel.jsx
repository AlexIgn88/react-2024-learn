import SwitchThemeButton from "../switch-theme/switch-theme-button.jsx";
import { switchPanel } from "./switch-panel.module.scss";
import AuthButton from "../auth-button/auth-button.jsx";
import HomeButton from "../home-button/home-button.jsx";
import BackButton from "../back-button/back-button.jsx";
import ForwardButton from "../forward-button/forward-button.jsx";
import { isDesktop } from "../../ui/ui-utils.js";

const SwitchPanel = () => {
  const position = isDesktop
    ? { position: "absolute" }
    : { position: "static" };

  return (
    <div className={switchPanel} style={position}>
      <HomeButton />
      <BackButton />
      <ForwardButton />
      <SwitchThemeButton />
      <AuthButton />
    </div>
  );
};

export default SwitchPanel;

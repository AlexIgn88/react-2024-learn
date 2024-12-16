import { useTheme } from "../theme-context/use-theme";
import Button from "../Button/button.jsx";
import { themeName } from "../theme-context/theme-consts.js";
import { isDesktop } from "../../ui/ui-utils.js";
import { TiStarburst, TiStarburstOutline } from "react-icons/ti";

const SwitchThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const isDesktopMode = isDesktop();

  const toggleTheme = () => {
    theme === themeName.default
      ? setTheme(themeName.alternative)
      : setTheme(themeName.default);
  };

  const switchButtonText = (() => {
    switch (true) {
      case theme === themeName.default && isDesktopMode:
        return "Альтернативная тема";
      case theme === themeName.alternative && isDesktopMode:
        return "Стандартная тема";
      case theme === themeName.default && !isDesktopMode:
        return <TiStarburst />;
      case theme === themeName.alternative && !isDesktopMode:
        return <TiStarburstOutline />;
    }
  })();

  return <Button text={switchButtonText} handler={toggleTheme} />;
};

export default SwitchThemeButton;

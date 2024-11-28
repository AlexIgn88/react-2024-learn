import { useTheme } from "../theme-context/use-theme";
import { themeName } from "../theme-context/theme-consts.js";
import classNames from "classnames";
import { defaultTheme, alternativeTheme } from "./button.module.scss";

const Button = ({ text, handler, styleClass, disabled }) => {
  const { theme } = useTheme();
  //styleClass - если необходима дополнительная кастомизация конкретных кнопок

  const buttonThemeClass =
    theme === themeName.default ? defaultTheme : alternativeTheme;

  return (
    <button
      type="button"
      onClick={handler}
      className={classNames(styleClass, buttonThemeClass)}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;

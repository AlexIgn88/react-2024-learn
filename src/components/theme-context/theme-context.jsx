"use client";

import { useState } from "react";
import { ThemeContext } from ".";
import { themeName } from "./theme-consts.js";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeName.default);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

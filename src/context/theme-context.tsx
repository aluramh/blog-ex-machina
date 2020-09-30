import React, { createContext, useContext, useState, useMemo } from "react";
import { getCookie, setCookie } from "./utilities";
const THEME = "THEME";

export type Theme = "dark" | "light";

type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

// @ts-ignore
const ThemeContext = createContext<ThemeState | undefined>();

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }

  return context;
}

function ThemeProvider(props) {
  // Try to get the initial state from the cookies, or default to light
  const [theme, setTheme] = useState<Theme>(() => getCookie(THEME) || "light");

  const toggleTheme = () => {
    const newValue = theme === "dark" ? "light" : "dark";

    // Set in both the cookies and the State
    setCookie(THEME, newValue);
    setTheme(newValue);
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value} {...props} />;
}

export { ThemeProvider, useTheme };

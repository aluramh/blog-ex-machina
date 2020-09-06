import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";

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
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value} {...props} />;
}

export { ThemeProvider, useTheme };

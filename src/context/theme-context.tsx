import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import useSsrLocalStorage from "../hooks/useSsrLocalStorage";

const THEME = "THEME";

export type Theme = "dark" | "light";

type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
  bodyBackgroundClass: string;
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
  // const [theme, setTheme] = useState<Theme>("light");
  const [theme, setTheme] = useSsrLocalStorage<Theme>(THEME, "dark");

  const toggleTheme = () => {
    const newValue = theme === "dark" ? "light" : "dark";

    // ...and the State
    setTheme(newValue);
  };

  useEffect(() => {
    // Assign the selected theme as a class to the body, for styling the body
    // background color in order to match the page style, especially when
    // overscrolling.
    // The applied tailwind classes are detailed in src/index.css.
    document.documentElement.className = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value} {...props} />;
}

export { ThemeProvider, useTheme };

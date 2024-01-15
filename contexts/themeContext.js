"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  // check localstorage is available or not
  const isLocalStorageAvailable =
    typeof window !== "undefined" && typeof window.localStorage !== "undefined";

  const [isDarkMode, setIsDarkMode] = useState(
    isLocalStorageAvailable &&
      (localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)),
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [isDarkMode]);

  //toggle theme handler
  const handleThemeToggle = () => {
    if (!isDarkMode) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  };

  const info = {
    handleThemeToggle,
    isDarkMode,
  };

  return <ThemeContext.Provider value={info}>{children}</ThemeContext.Provider>;
}

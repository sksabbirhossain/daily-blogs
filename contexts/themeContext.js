"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export default function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const store = typeof localStorage !== "undefined" ? localStorage : [];
  const [isDarkMode, setIsDarkMode] = useState(
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("color-theme") === "dark") ||
      (!("color-theme" in store) &&
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
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
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  const info = {
    handleThemeToggle,
    isDarkMode,
  };

  return <ThemeContext.Provider value={info}>{children}</ThemeContext.Provider>;
}

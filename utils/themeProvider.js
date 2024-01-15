import { ThemeProvider } from "@/contexts/themeContext";

export default function ThemeProviderContext({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

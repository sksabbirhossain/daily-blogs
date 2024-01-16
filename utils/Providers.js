"use client";
import SessionProviders from "./SessionProviders";
import MobileMenu from "./mobileMenuContext";
import ThemeProviderContext from "./themeProvider";

export default function Providers({ children }) {
  return (
    <ThemeProviderContext>
      <MobileMenu>
        <SessionProviders>{children}</SessionProviders>
      </MobileMenu>
    </ThemeProviderContext>
  );
}

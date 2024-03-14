"use client";
import SessionProviders from "./SessionProviders";
import MobileMenu from "./mobileMenuContext";
import ProfileSidebarMenu from "./profileSidebarMenuContext";
import ThemeProviderContext from "./themeProvider";

export default function Providers({ children }) {
  return (
    <ThemeProviderContext>
      <MobileMenu>
        <ProfileSidebarMenu>
          <SessionProviders>{children}</SessionProviders>
        </ProfileSidebarMenu>
      </MobileMenu>
    </ThemeProviderContext>
  );
}

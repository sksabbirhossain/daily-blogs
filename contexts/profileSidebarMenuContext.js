"use client";
import { createContext, useContext, useState } from "react";

export const profileSidebarMenuContext = createContext();

export default function useProfileSidebarMenu() {
  return useContext(profileSidebarMenuContext);
}

export function ProfileSidebarMenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  //toggle mobile menu handler
  const profileSidebarMenuHandler = () => {
    return setMenuOpen(!menuOpen);
  };

  const info = {
    menuOpen,
    profileSidebarMenuHandler,
  };

  return (
    <profileSidebarMenuContext.Provider value={info}>
      {children}
    </profileSidebarMenuContext.Provider>
  );
}

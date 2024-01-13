"use client";
// import { cookies } from "next/headers";
import { createContext, useContext, useEffect, useState } from "react";

export const MobileMenuContext = createContext();

export default function useMobileMenu() {
  return useContext(MobileMenuContext);
}

export function MobileMenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileMenuHandler = () => {
    return setMenuOpen(!menuOpen);
  };

  const info = {
    menuOpen,
    mobileMenuHandler,
  };

  return (
    <MobileMenuContext.Provider value={info}>
      {children}
    </MobileMenuContext.Provider>
  );
}

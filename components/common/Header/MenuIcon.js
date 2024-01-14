"use client";

import useMobileMenu from "@/contexts/mobileMenuContext";

const MenuIcon = () => {
  const { mobileMenuHandler } = useMobileMenu();
  return (
    <div className="flex items-center ps-3 lg:hidden lg:ps-0">
      <button onClick={() => mobileMenuHandler()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7 rounded ring-2 ring-[#00AAA1]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </button>
    </div>
  );
};

export default MenuIcon;

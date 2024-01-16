"use client";

import useMobileMenu from "@/contexts/mobileMenuContext";

const MenuIcon = () => {
  const { mobileMenuHandler, menuOpen } = useMobileMenu();
  return (
    <div className="flex items-center ps-3 text-[#222] lg:hidden lg:ps-0 dark:text-gray-100">
      <button onClick={() => mobileMenuHandler()}>
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 rounded border border-[#00AAA1]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 rounded border border-[#00AAA1]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MenuIcon;

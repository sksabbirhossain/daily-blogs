"use client";

import useMobileMenu from "@/contexts/mobileMenuContext";

const MenuIcon = () => {
  const { mobileMenuHandler } = useMobileMenu();
  return (
    <div className="lg:hidden flex items-center ps-3 lg:ps-0">
      <button onClick={() => mobileMenuHandler()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 ring-2 rounded ring-[#00AAA1]"
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

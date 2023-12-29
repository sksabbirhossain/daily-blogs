"use client";
import Link from "next/link";
import navlink from "./navLink";

const MobileMenu = () => {
  const mobileMenu = false;
  return (
    <>
      {mobileMenu && (
        <div className="block lg:hidden py-5">
          <ul className="flex flex-col items-center space-y-3 text-base text-textBlack cursor-pointer">
            {navlink?.map((item, i) => (
              <li
                className="hover:text-primary duration-150 ease-linear"
                key={i}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
            <li className="hover:text-primary duration-150 ease-linear flex items-center">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </p>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

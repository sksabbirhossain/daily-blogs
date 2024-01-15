"use client";

import useTheme from "@/contexts/themeContext";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import navlink from "./navLink";

const HeaderItems = () => {
  const pathName = usePathname();
  const loginActive = pathName.endsWith("/login");
  const { data: session } = useSession();
  const router = useRouter();
  const { isDarkMode, handleThemeToggle } = useTheme();

  //user signout handler
  const signOutHandler = async () => {
    router.push("/");
    await signOut();
    toast.success("User Signout SuccessFull");
  };

  return (
    <ul className="text-textBlack flex cursor-pointer items-center space-x-5 text-sm">
      {navlink?.map((item, i) => {
        const isActive = pathName.endsWith(item.link);
        return (
          <li
            className={
              isActive
                ? "text-sm font-semibold text-[#00AAA1]  duration-150 ease-linear"
                : "text-sm font-semibold text-[#222] duration-150 ease-linear hover:text-[#00AAA1]"
            }
            key={i}
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        );
      })}
      {session?.user?.accessToken ? (
        <li
          className="text-sm font-semibold text-[#222]  duration-150 ease-linear hover:text-[#00AAA1]"
          onClick={() => signOutHandler()}
        >
          <button>LogOut</button>
        </li>
      ) : (
        <li
          className={
            loginActive
              ? "text-sm font-semibold text-[#00AAA1]  duration-150 ease-linear"
              : "text-sm font-semibold text-[#222] duration-150 ease-linear hover:text-[#00AAA1]"
          }
        >
          <Link href="/login">Login</Link>
        </li>
      )}

      <li
        className="flex items-center text-[#222] duration-150 ease-linear hover:text-[#00AAA1]"
        onClick={handleThemeToggle}
      >
        {isDarkMode ? (
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </p>
        ) : (
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </p>
        )}
      </li>
    </ul>
  );
};

export default HeaderItems;

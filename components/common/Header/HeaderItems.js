"use client";

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

  //user signout handler
  const signOutHandler = () => {
    signOut();
    router.push("/");
    toast.success("User Signout SuccessFull");
  };

  return (
    <ul className="flex items-center space-x-5 text-sm text-textBlack cursor-pointer">
      {navlink?.map((item, i) => {
        const isActive = pathName.endsWith(item.link);
        return (
          <li
            className={
              isActive
                ? "text-[#00AAA1] text-sm font-semibold  duration-150 ease-linear"
                : "text-[#222] text-sm font-semibold hover:text-[#00AAA1] duration-150 ease-linear"
            }
            key={i}
          >
            <Link href={item.link}>{item.name}</Link>
          </li>
        );
      })}
      {session?.user?.accessToken ? (
        <li
          className="text-[#222] text-sm font-semibold  hover:text-[#00AAA1] duration-150 ease-linear"
          onClick={() => signOutHandler()}
        >
          <button>LogOut</button>
        </li>
      ) : (
        <li
          className={
            loginActive
              ? "text-[#00AAA1] text-sm font-semibold  duration-150 ease-linear"
              : "text-[#222] text-sm font-semibold hover:text-[#00AAA1] duration-150 ease-linear"
          }
        >
          <Link href="/login">Login</Link>
        </li>
      )}
      <li className="text-[#222] hover:text-[#00AAA1] duration-150 ease-linear flex items-center">
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </p>
      </li>
    </ul>
  );
};

export default HeaderItems;

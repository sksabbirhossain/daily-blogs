"use client";

import defaultImage from "@/public/default.jpg";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ThemeIcons from "./ThemeIcons";
import navlink from "./navLink";

const HeaderItems = () => {
  const pathName = usePathname();
  const loginActive = pathName.endsWith("/login");
  const { data: session } = useSession();
  const router = useRouter();

  //user signout handler
  const signOutHandler = async () => {
    await signOut({ redirect: false, callbackUrl: "/login" });
    router.push("/login");
    toast.success("User Signout SuccessFull");
  };

  return (
    <div className="hidden lg:block">
      <ul className="text-textBlack flex cursor-pointer items-center space-x-5 text-sm">
        {navlink?.map((item, i) => {
          const isActive = pathName.endsWith(item.link);
          return (
            <li
              className={
                isActive
                  ? "text-sm font-semibold text-[#00AAA1] duration-150 ease-linear"
                  : "text-sm font-semibold text-[#222] duration-150 ease-linear hover:text-[#00AAA1] dark:text-gray-100"
              }
              key={i}
            >
              <Link href={item.link}>{item.name}</Link>
            </li>
          );
        })}
        {session?.user?.accessToken ? (
          <>
            <li className="group text-sm font-semibold text-[#222] duration-150 ease-linear hover:text-[#00AAA1] dark:text-gray-100">
              <div className="relative">
                <Image
                  src={
                    session?.user?.picture
                      ? session?.user?.picture
                      : defaultImage
                  }
                  width={100}
                  height={100}
                  alt="user"
                  className="h-7 w-7 rounded-full object-cover ring-2 ring-[#00AAA1]"
                />
                <div className="absolute -right-5 top-6 hidden min-w-[100px] rounded bg-gray-100 p-5 shadow-lg  group-hover:flex dark:bg-slate-900">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-x-1">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                      </span>
                      <Link href="/profile">Profile</Link>
                    </li>
                    <li
                      className="flex items-center gap-x-1 text-sm font-semibold text-[#222] duration-150 ease-linear hover:text-[#00AAA1] dark:text-gray-100"
                      onClick={() => signOutHandler()}
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                          />
                        </svg>
                      </span>
                      <button>LogOut</button>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </>
        ) : (
          <li
            className={
              loginActive
                ? "text-sm font-semibold text-[#00AAA1] duration-150  ease-linear dark:text-gray-100"
                : "text-sm font-semibold text-[#222] duration-150 ease-linear hover:text-[#00AAA1] dark:text-gray-100"
            }
          >
            <Link href="/login">Login</Link>
          </li>
        )}

        <ThemeIcons />
      </ul>
    </div>
  );
};

export default HeaderItems;

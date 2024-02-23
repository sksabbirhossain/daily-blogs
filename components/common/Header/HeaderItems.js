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

  console.log(session);

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
                  className="h-7 w-7 rounded-full ring-2 ring-[#00AAA1]"
                />
                <div className="absolute -right-5 top-6 hidden min-w-[100px] rounded bg-gray-100 p-2 shadow-lg  group-hover:flex dark:bg-slate-900">
                  <ul className="space-y-3">
                    <li>
                      <Link href="/profile">Profile</Link>
                    </li>
                    <li
                      className="text-sm font-semibold text-[#222] duration-150 ease-linear hover:text-[#00AAA1] dark:text-gray-100"
                      onClick={() => signOutHandler()}
                    >
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

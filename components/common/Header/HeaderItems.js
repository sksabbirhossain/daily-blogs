"use client";

import { signOut, useSession } from "next-auth/react";
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
    router.push("/");
    await signOut();
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
          <li
            className="text-sm font-semibold text-[#222] duration-150 ease-linear hover:text-[#00AAA1] dark:text-gray-100"
            onClick={() => signOutHandler()}
          >
            <button>LogOut</button>
          </li>
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

"use client";
import useMobileMenu from "@/contexts/mobileMenuContext";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ThemeIcons from "./ThemeIcons";
import navlink from "./navLink";

const MobileMenu = () => {
  const { menuOpen, mobileMenuHandler } = useMobileMenu();
  const { theme, setTheme } = useTheme();
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
    <>
      {menuOpen && (
        <div className="block py-5 lg:hidden">
          <ul className="flex cursor-pointer flex-col items-center space-y-3 text-base">
            {navlink?.map((item, i) => {
              const isActive = pathName.endsWith(item.link);
              return (
                <li
                  className={
                    isActive
                      ? "text-sm font-bold text-[#00AAA1] duration-150 ease-linear"
                      : "text-sm font-semibold text-[#222] duration-150 ease-linear hover:text-[#00AAA1] dark:text-gray-100"
                  }
                  key={i}
                  onClick={() => mobileMenuHandler()}
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
                <button onClick={() => mobileMenuHandler()}>LogOut</button>
              </li>
            ) : (
              <li
                className={
                  loginActive
                    ? "text-sm font-semibold text-[#00AAA1] duration-150 ease-linear"
                    : "text-sm font-semibold text-[#222] duration-150 ease-linear hover:text-[#00AAA1] dark:text-gray-100"
                }
                onClick={() => mobileMenuHandler()}
              >
                <Link href="/login">Login</Link>
              </li>
            )}

            <ThemeIcons />
          </ul>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LogoutBtn = () => {
  const router = useRouter();

  //user signout handler
  const signOutHandler = async () => {
    router.push("/");
    await signOut();
    toast.success("User Log Out SuccessFull");
  };
  return (
    <p
      class="group flex w-full cursor-pointer select-none items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      onClick={signOutHandler}
    >
      <svg
        class="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 16"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
        />
      </svg>
      <span class="ms-3 flex-1 whitespace-nowrap">Log Out</span>
    </p>
  );
};

export default LogoutBtn;

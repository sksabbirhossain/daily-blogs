import Link from "next/link";
import React from "react";
import LogoutBtn from "./LogoutBtn";

const Sidebar = () => {
  return (
    <aside class="sticky left-0 top-[60px] hidden w-full max-w-72 -translate-x-full transition-transform sm:col-span-3 sm:inline-block sm:translate-x-0">
      <div class="overflow-x-auto rounded-md bg-gray-100 px-3 py-4 dark:bg-gray-800">
        <ul class="space-y-2 font-medium">
          <li>
            <Link
              href="/profile"
              class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span class="ms-3 whitespace-nowrap">My Profile</span>
            </Link>
          </li>

          <li>
            <LogoutBtn/>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

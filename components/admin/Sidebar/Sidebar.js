"use client";

import useMobileMenu from "@/contexts/mobileMenuContext";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function Sidebar() {
  const [toggle, setToggle] = useState(null);
  const { menuOpen } = useMobileMenu();
  const router = useRouter();

  // open menu items
  const toggleHandler = (id) => {
    if (toggle === id) {
      // If the clicked menu is already open, close it
      setToggle(null);
    } else {
      // If a different menu is clicked, close the previous menu and open the new one
      setToggle(id);
    }
  };

  // signout handler
  const signOutHandler = () => {
    toast.success("Logout successfull");
    signOut();
    router.push("/login");
  };

  return (
    <aside
      className={`fixed left-0 top-[50px] z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0 ${menuOpen && "translate-x-0"}`}
    >
      <div className="h-full w-full overflow-y-auto bg-white px-3 py-4">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="/admin/dashboard"
              className="group flex items-center rounded-lg p-2 text-black hover:bg-gray-300"
            >
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <button
              type="button"
              className="group flex w-full items-center rounded-lg p-2 text-base text-black transition duration-1000 ease-linear hover:bg-gray-300"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={() => toggleHandler(1)}
            >
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 21"
              >
                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
              </svg>

              <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                Categories
              </span>
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <ul
              className={`space-y-1 rounded bg-gray-100 py-2 ${toggle === 1 ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  href="/admin/categories"
                  className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-1000 ease-linear hover:bg-gray-300"
                >
                  <span className="whitespace-nowrap">ALL Category</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/add-category"
                  className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-300"
                >
                  <span className="whitespace-nowrap">Add Category</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <button
              type="button"
              className="group flex w-full items-center rounded-lg p-2 text-base text-black transition duration-75 hover:bg-gray-300"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
              onClick={() => toggleHandler(2)}
            >
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
              </svg>

              <span className="ms-3 flex-1 whitespace-nowrap text-left rtl:text-right">
                Blogs
              </span>
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <ul
              className={`space-y-1 rounded bg-gray-100 py-2 ${toggle === 2 ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  href="/admin/all-blogs"
                  className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-300"
                >
                  <span className="whitespace-nowrap">All Blogs</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/add-blog"
                  className="group flex w-full items-center rounded-lg p-2 pl-11 text-gray-900 transition duration-75 hover:bg-gray-300"
                >
                  <span className="whitespace-nowrap">Add Blog</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="#"
              className="group flex items-center rounded-lg p-2 text-black hover:bg-gray-300"
            >
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
              </svg>
              <span className="ms-3 flex-1 whitespace-nowrap">Inbox</span>
              <span className="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-blue-100 p-3 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                3
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="group flex items-center rounded-lg p-2 text-black hover:bg-gray-300"
            >
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="ms-3 flex-1 whitespace-nowrap">Users</span>
            </a>
          </li>

          <li>
            <button
              className="group flex w-full items-center rounded-lg p-2 text-black hover:bg-gray-300"
              onClick={signOutHandler}
            >
              <svg
                className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span className="ms-3 whitespace-nowrap">Sign Out</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;

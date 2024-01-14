import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 flex h-[50px] w-full items-center justify-between bg-[#00AAA1]/80 px-2 text-white shadow-sm shadow-[#00AAA1] backdrop-blur transition-colors sm:px-0">
      <div className="flex w-full items-center justify-between sm:pe-2 sm:ps-4">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            className="inline-flex items-center rounded-lg  fill-green-800 p-1 text-sm ring-2 focus:outline-none focus:ring-black sm:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <div className="hidden sm:flex">
            <Link href="/admin/dashboard">
              <Image src="/logo1.png" width={200} height={50} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="">Admin</div>
      </div>
    </div>
  );
};

export default Header;

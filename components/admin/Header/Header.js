import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#00AAA1]/80 text-white shadow-sm shadow-[#00AAA1] backdrop-blur transition-colors w-full h-[50px] z-50 fixed top-0 px-2 sm:px-0">
      <div className="sm:ps-4 sm:pe-2 w-full flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <button
            type="button"
            className="inline-flex items-center text-sm  rounded-lg sm:hidden focus:outline-none focus:ring-black p-1 ring-2 fill-green-800"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fill-rule="evenodd"
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

import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <div className="w-full flex justify-center py-7 sm:py-10">
      <div class="flex">
        <Link
          href="/"
          class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-[#00AAA1] hover:text-white rounded-md"
        >
          <svg
            class="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </Link>
        <Link
          href="/"
          class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-[#00AAA1] hover:text-white rounded-md"
        >
          1
        </Link>
        <Link
          href="/"
          class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-[#00AAA1] hover:text-white rounded-md"
        >
          2
        </Link>
        <Link
          href="/"
          class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-[#00AAA1] hover:text-white rounded-md"
        >
          3
        </Link>
        <Link
          href="/"
          class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-[#00AAA1] hover:text-white rounded-md"
        >
          Next
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;

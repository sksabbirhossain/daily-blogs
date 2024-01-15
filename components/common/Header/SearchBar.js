"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const input = useRef(null);
  const router = useRouter();
  const searchSubmit = (e) => {
    e.preventDefault();
    input.current.blur();
    router.push(`/search?q=${value}`);
  };

  return (
    <form onSubmit={searchSubmit}>
      <div className="flex items-center rounded-md border border-[#00AAA1]">
        <input
          type="text"
          placeholder="what are you looking for?"
          className="w-full rounded-l-md bg-transparent p-1 text-[#222] focus:outline-none lg:w-[450px] dark:text-gray-100"
          required
          ref={input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary rounded-r-md p-1 text-[#222] duration-150 ease-in-out hover:text-[#00AAA1] dark:text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

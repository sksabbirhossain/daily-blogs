"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center w-full h-screen -mt-[50px]">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#00AAA1]">505</h1>
        <p className="text-sm font-semibold text-[#555] capitalize pb-3">
          Intranal server Error!
        </p>
        <button className="bg-[#00AAA1] rounded px-4 py-1 text-white">
          <Link href="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
}

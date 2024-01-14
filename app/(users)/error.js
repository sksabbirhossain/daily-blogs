"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="-mt-[50px] flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[#00AAA1]">505</h1>
        <p className="pb-3 text-sm font-semibold capitalize text-[#555]">
          Intranal server Error!
        </p>
        <button className="rounded bg-[#00AAA1] px-4 py-1 text-white">
          <Link href="/">Go Home</Link>
        </button>
      </div>
    </div>
  );
}

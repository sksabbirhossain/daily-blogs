"use client";

import defaultPic from "@/public/default.jpg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const CommentForm = ({ slug }) => {
  const { data: session } = useSession();
  return (
    <>
      {session && session?.user?.accessToken && session?.user?.email ? (
        <div className="flex w-full gap-3">
          <Image
            src={session?.user?.picture ? session?.user?.picture : defaultPic}
            width={100}
            height={100}
            alt="user image"
            className="mt-1 h-10 w-10 rounded-full ring-2 ring-[#00AAA1] "
          />
          <form action="" className="w-full space-y-1">
            <textarea
              type="text"
              name="comment"
              placeholder="Write Your Comment Here..."
              className="w-full rounded border border-[#00AAA1] bg-gray-100 p-1 focus:border-2 focus:outline-none dark:bg-slate-800"
              rows="2"
            ></textarea>
            <button className="rounded bg-[#00AAA1] px-4 py-1 text-base font-semibold">
              Comment
            </button>
          </form>
        </div>
      ) : (
        <div>
          <p className="mb-2 text-base font-medium capitalize">
            If you want to comment here you must login first!
          </p>
          <Link href={`/login?callbackUrl=/blogs/${slug}`}>
            <span className="rounded bg-[#00AAA1] px-4 py-1 text-base font-normal">
              Login Here
            </span>
          </Link>
        </div>
      )}
    </>
  );
};

export default CommentForm;

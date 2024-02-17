"use client";

import { addComment } from "@/actions/comments/commentActions";
import defaultPic from "@/public/default.jpg";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const CommentForm = ({ slug, blogId }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  //add comment handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        comment,
        blogInfo: blogId,
      };
      const result = await addComment(data);
      if (result._id) {
        setLoading(false);
        setComment("");
        router.refresh();
        toast.success("Comment Added Successfull!");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Please Try Again!");
    }
  };

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
          <form onSubmit={handleSubmit} className="w-full space-y-1">
            <textarea
              type="text"
              name="comment"
              placeholder="Write Your Comment Here..."
              className="w-full rounded border border-[#00AAA1] bg-gray-100 p-1 focus:border-2 focus:outline-none dark:bg-slate-800"
              rows="2"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              disabled={comment === "" || loading}
              className={`rounded bg-[#00AAA1] px-4 py-1 text-base font-semibold ${
                loading ? "disabled:cursor-wait" : "disabled:cursor-default"
              }`}
            >
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
            <span className="rounded bg-[#00AAA1] px-4 py-1 text-base font-normal text-white">
              Login Here
            </span>
          </Link>
        </div>
      )}
    </>
  );
};

export default CommentForm;

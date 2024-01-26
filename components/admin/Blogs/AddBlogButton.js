"use client";
import { useFormStatus } from "react-dom";

const AddBlogButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full rounded border border-[#00AAA1] bg-[#00AAA1] px-5 py-2 font-bold text-white duration-150 ease-linear hover:bg-sky-500 hover:text-white ${pending ? "cursor-wait" : ""}`}
    >
      {pending ? (
        <p className="flex items-center justify-center gap-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5 animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          Loading...
        </p>
      ) : (
        "Add"
      )}
    </button>
  );
};

export default AddBlogButton;

import React from "react";

const page = () => {
  return (
    <section className="mb-5 space-y-5">
      <div className="rounded bg-gray-100 px-3 py-2 text-lg font-medium capitalize shadow">
        upload image
      </div>
      <div className="max-h-[75vh] w-full rounded bg-gray-100">
        <form action="" className="h-full w-full">
          <div className="flex h-[60vh] w-full items-center justify-center">
            <label
              htmlFor="picture"
              className="flex h-full w-full flex-col items-center justify-center gap-y-5"
            >
              <p className="rounded-full p-3 ring-2 ring-[#0badb3]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </p>
              <p className="text-base font-normal capitalize text-gray-700">
                click here to upload
              </p>
            </label>
            <input type="file" id="picture" name="picture" className="hidden" />
          </div>
          <div className="flex justify-center pb-5">
            <button
              type="submit"
              className="rounded bg-[#22a0a0] px-5 py-2 capitalize text-white"
            >
              upload
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default page;

import Image from "next/image";
import React from "react";

const RecentPostCard = () => {
  return (
    <div className="sm:flex gap-6">
      <div className="pb-3 sm:pb-0">
        <Image
          src={"/blog.jpg"}
          alt="blog title"
          width={250}
          height={140}
          className="rounded-md w-full h-full object-cover max-h-[240px]"
        />
      </div>
      <div className="">
        <p className="text-xs text-[#00AAA1] font-semibold">Travel</p>
        <h1 className="text-lg font-medium text-[#222]  w-full max-w-[450px]">
          Design is the Mix of emotions
        </h1>
        <p className="flex flex-wrap gap-1 space-x-3 items-center text-xs py-2 text-[#777]">
          <span className="flex items-center">
            <span className="w-5 h-5">
              <Image
                src="/blog.jpg"
                width={30}
                height={30}
                className="rounded-full w-full h-full"
                alt="user"
              />
            </span>
            <span className="ml-1">Jenny Kiaa</span>
          </span>
          <span className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </span>
            02 december 2022
          </span>
          <span className="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            3 min. to read
          </span>
        </p>
        <p className="text-sm text-[#555] w-full max-w-[450px]">
          Did you come here for something in particular or just general
          Riker-bashing? And blowing into
        </p>
      </div>
    </div>
  );
};

export default RecentPostCard;

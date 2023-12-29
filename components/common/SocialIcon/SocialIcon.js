import Link from "next/link";
import React from "react";

const SocialIcon = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <div className=" w-[35px] h-[35px]">
        <Link href="/">
          <span className="flex w-full h-full justify-center items-center hover:bg-[#00AAA1] hover:text-[#fff] border border-[#00AAA1] rounded-md">
            <svg viewBox="0 0 500 1000" fill="currentColor" className="h-6 w-6">
              <path d="M500 206H358c-9.333 0-17.667 5-25 15-7.333 10-11 22.333-11 37v102h178v148H322v442H152V508H0V360h152v-86c0-62.667 19.667-115.667 59-159s88.333-65 147-65h142v156" />
            </svg>
          </span>
        </Link>
      </div>
      <div className=" w-[35px] h-[35px]">
        <Link href="/">
          <span className="flex w-full h-full justify-center items-center hover:bg-[#00AAA1] hover:text-[#fff] border border-[#00AAA1] rounded-md">
            <svg viewBox="0 0 448 512" fill="currentColor" className="h-6 w-6">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </span>
        </Link>
      </div>
      <div className=" w-[35px] h-[35px]">
        <Link href="/">
          <span className="flex w-full h-full justify-center items-center hover:bg-[#00AAA1] hover:text-[#fff] border border-[#00AAA1] rounded-md">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M7.170999999999999 5.009 A2.188 2.188 0 0 1 4.983 7.197000000000001 A2.188 2.188 0 0 1 2.7949999999999995 5.009 A2.188 2.188 0 0 1 7.170999999999999 5.009 z" />
              <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
            </svg>
          </span>
        </Link>
      </div>
      <div className=" w-[35px] h-[35px]">
        <Link href="/">
          <span className="flex w-full h-full justify-center items-center hover:bg-[#00AAA1] hover:text-[#fff] border border-[#00AAA1] rounded-md">
            <svg fill="currentColor" viewBox="0 0 16 16" className="h-6 w-6">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialIcon;

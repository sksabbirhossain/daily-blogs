"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const ShereIcons = () => {
  const [copyMessage, setCopyMessage] = useState(false);
  const pathName = usePathname();
  const fullUrl = `${"http://localhost:3000"}${pathName}`;

  //copy clipboard
  const copyClipBoard = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopyMessage(true);
      })
      .catch((err) => alert(err.message))
      .finally(() => {
        setTimeout(() => {
          setCopyMessage(false);
        }, 2000);
      });
  };

  return (
    <div className="flex flex-wrap gap-3">
      {/* copy clip board */}
      <div className="relative">
        <div className="absolute -top-6 right-7 w-full gap-1 whitespace-nowrap text-xs capitalize">
          <p className="inline-flex items-center gap-1 duration-150 ease-linear">
            {copyMessage && (
              <>
                <span> link copied</span>
                <span className="flex h-3 w-3 items-center justify-center rounded-full bg-[#00AAA1]">
                  &#10003;
                </span>
              </>
            )}
          </p>
        </div>
        <div className=" h-[25px] w-[25px]">
          <button
            className="flex h-full w-full items-center justify-center rounded-md border border-[#00AAA1] hover:bg-[#00AAA1] hover:text-[#fff] dark:border-gray-700 dark:bg-slate-800 dark:text-gray-200"
            onClick={() => copyClipBoard(fullUrl)}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* shere on facebook */}
      <FacebookShareButton url={fullUrl}>
        <div className=" h-[25px] w-[25px]">
          <p className="flex h-full w-full items-center justify-center rounded-md border border-[#00AAA1] hover:bg-[#00AAA1] hover:text-[#fff] dark:border-gray-700 dark:bg-slate-800 dark:text-gray-200">
            <span>
              <svg
                viewBox="0 0 500 1000"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M500 206H358c-9.333 0-17.667 5-25 15-7.333 10-11 22.333-11 37v102h178v148H322v442H152V508H0V360h152v-86c0-62.667 19.667-115.667 59-159s88.333-65 147-65h142v156" />
              </svg>
            </span>
          </p>
        </div>
      </FacebookShareButton>

      <WhatsappShareButton url={fullUrl}>
        <div className=" h-[25px] w-[25px]">
          <p className="flex h-full w-full items-center justify-center rounded-md border border-[#00AAA1] hover:bg-[#00AAA1] hover:text-[#fff] dark:border-gray-700 dark:bg-slate-800 dark:text-gray-200">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
            </span>
          </p>
        </div>
      </WhatsappShareButton>

      <LinkedinShareButton url={fullUrl}>
        <div className=" h-[25px] w-[25px]">
          <p className="flex h-full w-full items-center justify-center rounded-md border border-[#00AAA1] hover:bg-[#00AAA1] hover:text-[#fff] dark:border-gray-700 dark:bg-slate-800 dark:text-gray-200">
            <span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M7.170999999999999 5.009 A2.188 2.188 0 0 1 4.983 7.197000000000001 A2.188 2.188 0 0 1 2.7949999999999995 5.009 A2.188 2.188 0 0 1 7.170999999999999 5.009 z" />
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
              </svg>
            </span>
          </p>
        </div>
      </LinkedinShareButton>

      <TwitterShareButton url={fullUrl}>
        <div className=" h-[25px] w-[25px]">
          <p className="flex h-full w-full items-center justify-center rounded-md border border-[#00AAA1] hover:bg-[#00AAA1] hover:text-[#fff] dark:border-gray-700 dark:bg-slate-800 dark:text-gray-200">
            <span>
              <svg fill="currentColor" viewBox="0 0 16 16" className="h-4 w-4">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0016 3.542a6.658 6.658 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.087.793A3.286 3.286 0 007.875 6.03a9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.382A3.323 3.323 0 01.64 6.575v.045a3.288 3.288 0 002.632 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.057 3.283 3.283 0 003.067 2.277A6.588 6.588 0 01.78 13.58a6.32 6.32 0 01-.78-.045A9.344 9.344 0 005.026 15z" />
              </svg>
            </span>
          </p>
        </div>
      </TwitterShareButton>
    </div>
  );
};

export default ShereIcons;

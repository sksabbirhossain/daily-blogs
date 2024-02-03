"use client";

import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisable, setIsVisable] = useState(false);

  //visable button handle function
  const listenToScrollTop = () => {
    const heightToVisable = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToVisable) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrollTop);
    return () => window.removeEventListener("scroll", listenToScrollTop);
  }, []);

  //handle clink to top
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="group absolute bottom-16 right-14 z-50">
      {isVisable && (
        <button
          className="fixed flex h-10 w-10 items-center justify-center rounded-full bg-[#1ba5a5] text-white ring-2 ring-[#27c596]"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="h-5 w-5 group-hover:animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollTop;

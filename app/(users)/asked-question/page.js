import Link from "next/link";

export const metadata = {
  title: "FAQ - Daily Blogs",
};

const Faq = () => {
  return (
    <section className="container mx-auto py-5 sm:py-10">
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[700px] space-y-5 sm:space-y-10">
          <div className="px2 space-y-2 text-center sm:px-0">
            <h1 className="text-2xl font-semibold capitalize text-[#222] dark:text-gray-200">
              <span className="text-[#00AAA1]">Frequently</span> asked question
            </h1>
            <p className="text-sm font-normal text-[#555] dark:text-gray-400">
              Did you come here for something in particular or just general
              Riker-bashing?
            </p>
          </div>
          {/* faqs */}
          <div className="space-y-3 px-2 sm:px-0">
            {/* 1 */}
            <div className="rounded-md bg-[#F2F8F7] dark:bg-slate-800">
              <div className="flex items-center justify-between rounded-ss-md rounded-tr-md bg-[#DFF1F0] px-2 py-2 dark:bg-slate-700 ">
                <h2 className="text-sm font-bold capitalize text-[#222] sm:text-lg sm:font-medium dark:text-gray-200">
                  is there have any option for write blog?
                </h2>
                <span className="cursor-pointer pe-3 font-bold text-[#00AAA1]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className=" sm:tex-xs px-2 py-2 text-[12px] font-normal text-[#666] dark:text-gray-400">
                Yes, You can write your own blogs in daily blogs. this Feature
                is comming soon.
              </p>
            </div>
            {/* 2 */}
            {/*
          
            <div className="bg-[#F2F8F7] rounded-md">
              <div className="bg-[#DFF1F0] rounded-ss-md rounded-tr-md flex items-center justify-between px-2 py-2">
                <h2 className="text-[#222] text-sm sm:text-lg capitalize font-bold sm:font-medium">
                  can i change my plan later?
                </h2>
                <span className="pe-3 font-bold text-[#00AAA1] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="hidden text-[#666] text-[12px] sm:tex-xs font-normal py-2 px-2">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about
              </p>
            </div>
          
            <div className="bg-[#F2F8F7] rounded-md">
              <div className="bg-[#DFF1F0] rounded-ss-md rounded-tr-md flex items-center justify-between px-2 py-2">
                <h2 className="text-[#222] text-sm sm:text-lg capitalize font-bold sm:font-medium">
                  Did you come here for something in particular?
                </h2>
                <span className="pe-3 font-bold text-[#00AAA1] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="hidden text-[#666] text-[12px] sm:tex-xs font-normal py-2 px-2">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about
              </p>
            </div>
            
            <div className="bg-[#F2F8F7] rounded-md">
              <div className="bg-[#DFF1F0] rounded-ss-md rounded-tr-md flex items-center justify-between px-2 py-2">
                <h2 className="text-[#222] text-sm sm:text-lg capitalize font-bold sm:font-medium">
                  is there have any option for write blog?
                </h2>
                <span className="pe-3 font-bold text-[#00AAA1] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="hidden text-[#666] text-[12px] sm:tex-xs font-normal py-2 px-2">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about
              </p>
            </div>
           
            <div className="bg-[#F2F8F7] rounded-md">
              <div className="bg-[#DFF1F0] rounded-ss-md rounded-tr-md flex items-center justify-between px-2 py-2">
                <h2 className="text-[#222] text-sm sm:text-lg capitalize font-bold sm:font-medium">
                  something in particular or just general Riker-bashing?
                </h2>
                <span className="pe-3 font-bold text-[#00AAA1] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </div>
              <p className="hidden text-[#666] text-[12px] sm:tex-xs font-normal py-2 px-2">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about
              </p>
            </div> 
         */}
          </div>
          {/* another question */}
          <div className="space-y-3 text-center">
            <h2 className="text-lg font-medium text-[#222] sm:text-xl dark:text-gray-300">
              Cant find an answer to your question?
            </h2>
            <button className="rounded-md  border border-[#00AAA1] px-3 py-1 text-sm text-[#222] duration-150 ease-linear hover:bg-[#00AAA1] hover:text-white sm:px-4 sm:py-2 dark:text-gray-300">
              <Link
                href={"/contact-us"}
                className="flex items-center justify-center gap-2"
              >
                Contact us{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

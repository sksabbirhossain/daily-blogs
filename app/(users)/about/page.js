import React from "react";

const About = () => {
  return (
    <>
      <div className="bg-[#F2F8F7] py-10 mb-10 w-full flex flex-col justify-center items-center  px-2 md:px-0">
        <div className="space-y-5 text-center w-full max-w-[665px]">
          <h1 className="text-3xl font-semibold">
            Daily Blogs is a place where you can find your perfect blogs.
          </h1>

          <div className="space-y-3 text-sm font-normal text-gray-800">
            <p>
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for change. Completely streamline functionalized models
              and out-of-the-box functionalities. Authoritatively target
              proactive vortals vis-a-vis exceptional results. Compellingly
              brand emerging sources and compelling materials. Globally iterate
              parallel content
            </p>
            <h3 className="text-lg font-medium">
              The best ideas can change who we are.
            </h3>
            <p>
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without 24/365
              catalysts for
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-full max-w-[1076px] bg-[#F2F8F7] rounded-md py-10 mb-10 flex flex-col justify-center items-center space-y-3">
          <h1 className="text-3xl font-semibold capitalize">
            want to write on Daily blogs?
          </h1>
          <p className="text-sm font-medium capitalize">
            there have some simple steps, by following these steps you can be a
            regular author in notebook.
          </p>
          <button className="text-[#00AAA1] border border-[#00AAA1] hover:bg-[#00AAA1] hover:text-white duration-150 ease-linear rounded py-2 px-4 text-sm flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            <span>Write on notebook</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default About;

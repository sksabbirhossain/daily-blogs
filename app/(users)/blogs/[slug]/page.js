import BlogCard from "@/components/common/Blogs/BlogCard";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import ShereIcons from "@/components/users/Blog/ShereIcons";
import Image from "next/image";
import React from "react";

const Blog = ({ params: { slug } }) => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid gap-5 md:gap-7 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 px-2 sm:px-0">
        <div className="md:col-span-2">
          <div className="space-y-5 sm:space-y-10">
            {/* heading */}
            <div className="space-y-2">
              <p className="text-xs text-[#00AAA1] font-semibold">Travel</p>
              <h1 className="text-[#222] font-semibold text-2xl capitalize">
                I Created a Developer Rap Video - Heres What I Learned
              </h1>
              <p className="flex flex-wrap gap-1 space-x-3 items-center text-xs text-[#777]">
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
              </p>
            </div>
            {/* image */}
            <div>
              <Image
                src="/blog.jpg"
                width={1000}
                height={1000}
                alt="title"
                className="w-full h-full max-h-[430px] object-cover rounded-md"
              />
            </div>
            {/* descriptions */}
            <div className="">
              <p className="text-[#666] text-sm font-normal">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into maximum warp speed, you appeared
                for an instant to be in two places at once. We have a saboteur
                aboard. We know you’re dealing in stolen ore. But I wanna talk
                about the assassination attempt on Lieutenant Worf. Could
                someone survive inside a transporter buffer for 75 years? Fate.
                It protects fools, little children, and ships.
              </p>
            </div>
            {/* shere icons */}
            <div className="w-full flex items-center justify-center">
              <div className="flex items-center gap-3">
                <div className="h-[1px] bg-[#D1E7E5] w-[60px] sm:w-[100px] lg:w-[200px]" />
                <ShereIcons />
                <div className="h-[1px] bg-[#D1E7E5] w-[60px] sm:w-[100px] lg:w-[200px]" />
              </div>
            </div>
            {/* google adds */}
            <div className="w-full h-44 bg-[#00AAA1] rounded-md">ADS</div>
            {/* related posts */}
            <div className="space-y-5">
              <h2 className="text-[#222] text-xl font-semibold">
                <span className="bg-[#00AAA1] px-2 rounded-sm text-[#fff]">
                  See related
                </span>{" "}
                Posts
              </h2>
              {/* related posts card */}
              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                <BlogCard />
                <BlogCard />
              </div>
            </div>
            {/* google adds */}
            <div className="w-full h-44 bg-[#00AAA1] rounded-md">ADS</div>
          </div>
        </div>
        <div className="md:col-span-1 pt-5 sm:pt-0">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Blog;
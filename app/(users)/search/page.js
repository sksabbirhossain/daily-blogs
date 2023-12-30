import BlogCard from "@/components/common/Blogs/BlogCard";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import ShereIcons from "@/components/users/Blog/ShereIcons";
import RecentPostCard from "@/components/users/Home/RecentlyPosted/RecentPostCard";
import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <section className="container mx-auto py-10">
      <div className="grid gap-5 md:gap-16 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 px-2 sm:px-0">
        <div className="md:col-span-2">
          <div className="space-y-5 sm:space-y-10">
            {/* heading */}
            <div className="border-b border-[#00AAA1] pb-1">
              <h4 className="text-[#555] text-base capitalize">
                search result for{" "}
                <span className="text-[#00AAA1] font-semibold">travel</span>
              </h4>
            </div>
            {/* post card */}
            <div className="space-y-5">
              <RecentPostCard />
              <RecentPostCard />
              <RecentPostCard />
              <RecentPostCard />
              <RecentPostCard />
              <RecentPostCard />
              <RecentPostCard />
              <RecentPostCard />
            </div>
          </div>
        </div>
        <div className="md:col-span-1 pt-5 sm:pt-0">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Search;

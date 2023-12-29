import Sidebar from "@/components/common/Sidebar/Sidebar";
import React from "react";
import RecentPostCard from "./RecentPostCard";

const RecentlyPostedSection = () => {
  return (
    <section className="container mx-auto">
      <h2 className="text-xl font-medium">
        <span className="bg-primary px-1 text-white">Recently</span> Posted
      </h2>
      <div className="grid md:gap-7 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 py-7">
        <div className="md:col-span-2">
          <div className="space-y-6">
            <RecentPostCard />
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
        <div className="md:col-span-1">
          <div className="">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyPostedSection;

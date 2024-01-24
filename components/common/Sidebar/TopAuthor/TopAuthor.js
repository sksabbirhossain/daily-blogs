import React from "react";
import AuthorCard from "./AuthorCard";

const TopAuthor = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold capitalize text-[#222] dark:text-gray-100">
        <span className="pr-2 uppercase text-[#00AAA1]">TOP</span>
        Authors
      </h1>
      <div className="space-y-5">
        <AuthorCard />
      </div>
    </div>
  );
};

export default TopAuthor;

import React from "react";
import AuthorCard from "./AuthorCard";

const TopAuthor = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-[#222] dark:text-gray-100">
        <span className="pr-2 uppercase text-[#00AAA1]">top</span>
        Authors
      </h2>
      <div className="space-y-5">
        <AuthorCard />
      </div>
    </div>
  );
};

export default TopAuthor;

import React from "react";
import AuthorCard from "./AuthorCard";

const TopAuthor = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl text-[#222] font-semibold">
        <span className="text-[#00AAA1] pr-2 uppercase">top</span>
        Authors
      </h2>
      <div className="space-y-5">
        <AuthorCard />
      </div>
    </div>
  );
};

export default TopAuthor;

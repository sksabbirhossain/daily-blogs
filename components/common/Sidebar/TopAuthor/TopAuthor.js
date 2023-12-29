import React from "react";
import AuthorCard from "./AuthorCard";

const TopAuthor = () => {
  return (
    <div className="space-y-5">
      <h3 className="capitalize font-medium text-[21px]">top authors</h3>
      <div className="space-y-5">
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
        <AuthorCard />
      </div>
    </div>
  );
};

export default TopAuthor;

import React from "react";
import Adds from "./Adds/Adds";
import Categories from "./Categories/Categories";
import SearchTags from "./SearchTags/SearchTags";
import TodayUpdate from "./TodayUpdate/TodayUpdate";
import TopAuthor from "./TopAuthor/TopAuthor";

const Sidebar = () => {
  return (
    <div className="space-y-10">
      <TopAuthor />
      <Adds />
      <Categories />
      <TodayUpdate />
      <SearchTags />
    </div>
  );
};

export default Sidebar;

import React from "react";

const SearchTags = () => {
  return (
    <div className="space-y-5">
      <h3 className="capitalize font-medium text-[21px]">search with tags</h3>
      <div className="flex flex-wrap gap-3">
        <button className="text-black px-3 py-1 rounded-md border hover:bg-[#00AAA1] hover:text-white text-xs">
          Travel
        </button>{" "}
        <button className="text-black px-3 py-1 rounded-md border hover:bg-[#00AAA1] hover:text-white text-xs">
          lifestyle
        </button>{" "}
        <button className="text-black px-3 py-1 rounded-md border hover:bg-[#00AAA1] hover:text-white text-xs">
          fashion
        </button>{" "}
        <button className="text-black px-3 py-1 rounded-md border hover:bg-[#00AAA1] hover:text-white text-xs">
          technology
        </button>
        <button className="text-black px-3 py-1 rounded-md border hover:bg-[#00AAA1] hover:text-white text-xs">
          business
        </button>
        <button className="text-black px-3 py-1 rounded-md border hover:bg-[#00AAA1] hover:text-white text-xs">
          design
        </button>
        <button className="text-black px-3 py-1 rounded-md border hover:bg-[#00AAA1] hover:text-white text-xs">
          health
        </button>
        <button className="text-black px-3 py-1 rounded-md border hover:bg-[#00AAA1] hover:text-white text-xs">
          Food
        </button>
        <button className="text-black px-3 py-1 rounded-md border hover:bg-[#00AAA1] hover:text-white text-xs">
          Arts
        </button>
      </div>
    </div>
  );
};

export default SearchTags;

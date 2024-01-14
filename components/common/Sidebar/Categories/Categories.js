import React from "react";

const Categories = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold text-[#222]">
        <span className="pr-2 capitalize text-[#00AAA1]">Categories</span>
      </h2>
      <div className="space-y-5">
        <ul className="space-y-5">
          <li className="flex items-center justify-between border-b border-dashed pb-1 text-sm">
            <p>lifestyle</p> <p>09</p>
          </li>
          <li className="flex items-center justify-between border-b border-dashed pb-1 text-sm">
            <p>travel</p> <p>05</p>
          </li>
          <li className="flex items-center justify-between border-b border-dashed pb-1 text-sm">
            <p>food</p> <p>09</p>
          </li>
          <li className="flex items-center justify-between border-b border-dashed pb-1 text-sm">
            <p>healthcare</p> <p>10</p>
          </li>
          <li className="flex items-center justify-between border-b border-dashed pb-1 text-sm">
            <p>technology</p> <p>19</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;

import React from "react";

const Categories = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl text-[#222] font-semibold">
        <span className="text-[#00AAA1] pr-2 capitalize">Categories</span>
      </h2>
      <div className="space-y-5">
        <ul className="space-y-5">
          <li className="text-sm flex items-center justify-between border-b pb-1 border-dashed">
            <p>lifestyle</p> <p>09</p>
          </li>
          <li className="text-sm flex items-center justify-between border-b pb-1 border-dashed">
            <p>travel</p> <p>05</p>
          </li>
          <li className="text-sm flex items-center justify-between border-b pb-1 border-dashed">
            <p>food</p> <p>09</p>
          </li>
          <li className="text-sm flex items-center justify-between border-b pb-1 border-dashed">
            <p>healthcare</p> <p>10</p>
          </li>
          <li className="text-sm flex items-center justify-between border-b pb-1 border-dashed">
            <p>technology</p> <p>19</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;

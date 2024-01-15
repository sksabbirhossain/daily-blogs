import React from "react";

const Categories = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">
        <span className="pr-2 capitalize text-[#00AAA1]">Categories</span>
      </h2>
      <div className="space-y-5">
        <ul className="space-y-5">
          <li className="flex items-center justify-between border-b border-dashed pb-1 text-sm text-[#222] dark:border-gray-600 dark:text-gray-200">
            <p>lifestyle</p> <p>09</p>
          </li>
          <li className="flex items-center justify-between border-b border-dashed pb-1 text-sm text-[#222] dark:border-gray-600 dark:text-gray-200">
            <p>travel</p> <p>05</p>
          </li>
          <li className="flex items-center justify-between border-b border-dashed pb-1 text-sm text-[#222] dark:border-gray-600 dark:text-gray-200">
            <p>food</p> <p>09</p>
          </li>
          <li className="flex items-center justify-between border-b border-dashed pb-1 text-sm text-[#222] dark:border-gray-600 dark:text-gray-200">
            <p>healthcare</p> <p>10</p>
          </li>
          <li className="flex items-center justify-between border-b border-dashed pb-1 text-sm text-[#222] dark:border-gray-600 dark:text-gray-200">
            <p>technology</p> <p>19</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;

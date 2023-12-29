import React from "react";

const Categories = () => {
  return (
    <div className="space-y-5">
      <h3 className="capitalize font-medium text-[21px]">Categories </h3>
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

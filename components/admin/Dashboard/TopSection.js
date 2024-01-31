import { allBlogs } from "@/actions/blog/blogActions";
import { allCategory } from "@/actions/category/categoryActions";
import { getAllUser } from "@/actions/users/userActions";
import React from "react";

const TopSection = async () => {
  const { totalUsers, users } = await getAllUser();
  const { totalBlogs } = await allBlogs();
  const categories = await allCategory();

  const todayDate = new Date().toISOString().split("T")[0];

  const todayJoin = users.filter(
    (user) => user.createdAt.split("T")[0] === todayDate,
  );

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded bg-green-600 py-10 text-center text-gray-200">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold">{totalUsers}</h1>
          <p className="text-base font-medium uppercase">total Users</p>
        </div>
      </div>
      <div className="rounded bg-[#00AAA1] py-10 text-center text-gray-200">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold">{totalBlogs}</h1>
          <p className="text-base font-medium uppercase">total blogs</p>
        </div>
      </div>
      <div className="rounded bg-yellow-600 py-10 text-center text-gray-200">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold">{categories?.length}</h1>
          <p className="text-base font-medium uppercase">total category</p>
        </div>
      </div>
      <div className="rounded bg-red-600 py-10 text-center text-gray-200">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold">{todayJoin?.length}</h1>
          <p className="text-base font-medium uppercase">join today</p>
        </div>
      </div>
    </div>
  );
};

export default TopSection;

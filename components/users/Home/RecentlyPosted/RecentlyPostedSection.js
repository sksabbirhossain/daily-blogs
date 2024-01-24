import { allBlogs } from "@/actions/blog/blogActions";
import Pagination from "@/components/common/Pagination/Pagination";
import RecentPostCard from "./RecentPostCard";

const RecentlyPostedSection = async ({ searchParams }) => {
  const { page } = searchParams;
  //get all blogs
  const { blogs, totalPages, currentPage } = await allBlogs(parseInt(page));
  return (
    <>
      <h2 className="pb-6 text-xl font-semibold capitalize text-[#222] dark:text-gray-100">
        <span className="pr-2 uppercase text-[#00AAA1]">Recently</span>
        Posted
      </h2>
      <div className="space-y-6">
        {blogs?.map((blog) => (
          <RecentPostCard key={blog._id} blog={blog} />
        ))}
      </div>
      {/* Pagination */}
      <Pagination totalPage={totalPages} currentPage={currentPage} />
    </>
  );
};

export default RecentlyPostedSection;

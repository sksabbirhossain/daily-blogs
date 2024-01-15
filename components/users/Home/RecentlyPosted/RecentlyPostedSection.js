import { allBlogs } from "@/actions/blog/blogActions";
import Pagination from "@/components/common/Pagination/Pagination";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import RecentPostCard from "./RecentPostCard";

const RecentlyPostedSection = async ({ searchParams }) => {
  const { page } = searchParams;
  //get all blogs
  const { blogs, totalPages, currentPage } = await allBlogs(parseInt(page));
  return (
    <section className="container mx-auto">
      <div className="md:gird-cols-2     grid grid-cols-1 py-7 md:gap-7 lg:grid-cols-3">
        <div className="md:col-span-2">
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
        </div>

        {/* right sidebar */}
        <div className="pt-5 sm:pt-0 md:col-span-1">
          <div className="">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyPostedSection;

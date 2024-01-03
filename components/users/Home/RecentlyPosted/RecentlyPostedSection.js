import { allBlogs } from "@/actions/blog/blogActions";
import Pagination from "@/components/common/Pagination/Pagination";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import RecentPostCard from "./RecentPostCard";

const RecentlyPostedSection = async () => {
  //get all blogs
  const blogs = await allBlogs();
  return (
    <section className="container mx-auto">
      <div className="grid md:gap-7 grid-cols-1 md:gird-cols-2 lg:grid-cols-3 py-7">
        <div className="md:col-span-2">
          <h2 className="text-xl text-[#222] capitalize font-semibold pb-6">
            <span className="text-[#00AAA1] pr-2 uppercase">Recently</span>
            Posted
          </h2>
          <div className="space-y-6">
            {blogs?.map((blog) => (
              <RecentPostCard key={blog._id} blog={blog} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination />
        </div>

        {/* right sidebar */}
        <div className="md:col-span-1 pt-5 sm:pt-0">
          <div className="">
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyPostedSection;

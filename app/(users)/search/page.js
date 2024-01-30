import { searchBlogs } from "@/actions/blog/blogActions";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import RecentPostCard from "@/components/users/Home/RecentlyPosted/RecentPostCard";
import SearchPagination from "@/components/users/search/SearchPagination";

export async function generateMetadata({ searchParams }) {
  const { q } = searchParams;
  const searchQuery = decodeURIComponent(q);
  return {
    title: `${searchQuery} - Search | Fastribo Blogs`,
  };
}

const Search = async ({ searchParams }) => {
  const { q, page } = searchParams;

  if (!q) {
    throw new Error("searchQuery can't be empty!");
  }

  const searchQuery = decodeURIComponent(q);

  const { blogs, totalPages, currentPage } = await searchBlogs(
    parseInt(page),
    searchQuery,
  );

  return (
    <section className="container mx-auto py-10">
      <div className="md:gird-cols-2 grid grid-cols-1 gap-5 px-2 sm:px-0 md:gap-16 lg:grid-cols-3">
        <div className="md:col-span-2">
          <div className="space-y-5 sm:space-y-10">
            {/* heading */}
            <div className="border-b border-[#00AAA1] pb-1">
              <h4 className="text-base capitalize text-[#555] dark:text-gray-300">
                search result for{" "}
                <span className="font-semibold text-[#00AAA1]">
                  {searchQuery}
                </span>
              </h4>
            </div>
            {/* post card */}
            <div className="space-y-5">
              {blogs?.map((blog) => (
                <RecentPostCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* pagination */}
            <div>
              <SearchPagination
                totalPage={totalPages}
                currentPage={currentPage}
                searchQuery={q}
              />
            </div>
          </div>
        </div>
        <div className="pt-5 sm:pt-0 md:col-span-1">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Search;
